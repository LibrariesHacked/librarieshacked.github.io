---
title: Create a library news map
excerpt: Turning RSS WordPress posts into tabular data
categories:
    - Tutorial
tags:
    - Public Libraries News
    - YQL
    - JavaScript
    - Mapping
    - Web
published: true
---

[Public Libraries News](http://www.publiclibrariesnews.com/) is the leading source for libraries news in the UK, providing regular posts in a WordPress site, which also feeds out to email subscribers and RSS readers. One particularly impressive aspect is that each news post has a uniform layout with a regular HTML structure - an editorial, changes, ideas, national, international, and local news. Being structured in this way effectively makes it queryable like a database, with the ability to split up the posts into separate datasets.

#### Step 1. Query the RSS feed

To get hold of the data, [yahoo query language (YQL)](https://developer.yahoo.com/yql/) can be used to access the RSS feed, which is a nice way of only returning fields we are interested in, and returning them in JSON (JavaScript Object Notation) format, making it easier to work with later on.

YQL queries can be tested [in the YQL console](https://developer.yahoo.com/yql/console/). The query for getting the last 10 posts from PLN is:

```SQL
select content:encoded from rss where url='http://www.publiclibrariesnews.com/feed'
```

That returns a JSON list of the content for 10 posts, example shown below (with list and HTML contents shortened).

```JSON
{
    "query": {
        "count": 10
    },
    "results": {
        "item": [
            {
                "encoded":"&lt;p&gt;&lt;strong&gt;Editorial&lt;/strong&gt;&lt;/p&gt;..."
            },
            {
                "encoded":"&lt;p&gt;&lt;strong&gt;Editorial&lt;/strong&gt;&lt;/p&gt;..."
            }
        ]
    }
}
```

#### Step 2. Process the JSON data

Having the data available to fetch in JSON means it shouldn't take long with JavaScript/jQuery to retrieve the data and use each content item:

```JavaScript
var query = "select content:encoded from rss where url='http://www.publiclibrariesnews.com/feed'";
var url = "https://query.yahooapis.com/v1/public/yql?q=" + encodeURI(query) + "&format=json&callback=?";
$.getJSON(url, function(data) {
    $.each(data.query.results.entry, function () {
        // do something with each post
    });
}
```

That 'do something with each post' placeholder above is where it gets complex, because each post is HTML text.  From that text it'd be useful to get things like each individual local news item, each idea, etc.

Each news story is generally an item within an HTML unordered list.  So, to get local news stories, it's a case of limiting to the 'UK local news by authority' section, and fetching each *&lt;li&gt;* HTML element. Items take the form *'Gloucester - something happened in Gloucester'*, so splitting by *'-'* can also separate the location from the news text.

```JavaScript
// get each local news by authority list item (li).
var stories = $("strong:contains('local news')", htmlToSearch).parent().next().find('li');
$.each(stories, function() {
    var text = this.text;
    var html = this.innerHTML;
    var location = text.split('–')[0];
    var storyText = text.split('–')[1];
});
```

#### Step 3. DataTables

Text processing largely done, [DataTables](https://www.datatables.net/) is a free JavaScript/jQuery plugin providing feature-rich interactive web tables with very little effort. It can automatically provide paging and searching functionality in a table, which is especially useful when viewing large amounts of data. The [getting started guide is here](https://www.datatables.net/manual/installation).

#### Step 4. Set up a map

Tables are fine, but in this case locations are involved, so mapping is possible. Leaflet maps will provide a free mapping engine, and open street map provides the base maps (the tiles on the screen), and also the location lookups from name (e.g. barnet) to geo-coordinates (latitude/longitude). Basic setup for leaflet maps can be found in their [quick start guide](http://leafletjs.com/examples/quick-start.html). An example of taking a text location, geocoding it, and adding a marker is:

```JavaScript
var geocodeUrl = 'http://nominatim.openstreetmap.org/search?q=' + location + ',uk&format=json&json_callback=?';
$.getJSON(geocodeUrl, function (data) {
    longitude = data[0].lon;
    latitude = data[0].lat;
    // add a marker in the given location
    L.marker([lat, lon]).addTo(map).bindPopup('some popup text');
});
```
