---
title: Book search auto-complete
excerpt: Helping users to search for items by looking up API data
categories:
    - Tutorial
tags:
    - ISBNs
    - Search
    - Web
    - Autocomplete
published: true
---

Open <abbr title="Application Programming Interfaces">APIs</abbr> (Application Programming Interfaces) provide opportunities to create a variety of applications, reusing systems and data to create new tools. But sometimes these can also just provide small user-experience functions. This tutorial will cover using an API to develop auto-complete functionality on a website.

#### Why use auto-complete?

A book search is a good example where auto-complete can be useful. When using the catalogue search on library sites the steps may be:

1. Enter the search term either for an author, or a title. If author it must be in the form **surname, first name**.  Hit search.
2. Scroll through list of search results (**page 3 of 180...**). If too many results, you can go back the original screen and modify your search. If no results the results page will be empty.

That doesn't give users a speedy experience. Using auto-complete allows you to show data as the user types. As more is typed, the results are refined by the increased detail. Once the user sees the option they want, they can select it. The underlying data could come from many sources. Sometimes, like when using Google, it's common searches that other people have performed. Other times, it's actually looking at the underlying database, and showing if there are any matches.

This kind of dynamic search information can prompt the user for what they're looking for (if they have half a title in their mind). It can also be used to provide them details of their search results before they've even pressed search. There is often no point in showing a page of zero results, unless an easy option to adjust the search is provided. Could the user be informed before they have run the search that no results will be returned?

The [Google Books API](http://books.google.co.uk/) is one API to provide book searching. There are plenty of others, including [open library](http://openlibrary.org). For real-world use the Google Books API should normally be used with an API key, which is granted by Google and needs to be included in the URL when a search is made.

#### Step 1. Start with a basic page template

The example will be coded within a single web page; the following is a basic HTML5 page template to get started.

```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>auto-complete API tutorial</title>
    <meta name="description" content="auto-complete API tutorial">
    <meta name="author" content="libraries hacked">
</head>
<body>
</body>
</html>
```

#### Step 2. Add references to JavaScript and CSS files

For this tutorial we need jQuery and jQuery UI to provide the auto-complete functionality. These are JavaScript **libraries**, created to simplify common JavaScript tasks, making them quicker and easier to code. They are added to the page as shown below:

```html
<head>
    <meta charset="utf-8">
    <title>auto-complete API tutorial</title>
    <link rel="stylesheet" href="//code.jquery.com/ui/1.10.4/themes/smoothness/jquery-ui.css">
    <meta name="description" content="auto-complete API tutorial">
    <meta name="author" content="libraries hacked">
</head>
<body>
    <script src="//code.jquery.com/jquery-1.10.2.js"></script>
    <script src="//code.jquery.com/ui/1.10.4/jquery-ui.js"></script>
    <script src="script.js"></script>
</body>
```

The files referred to here are held at **code.jquery.com**. These could be hosted as part of the project, but there are advantages to using externally hosted versions:

- Users already having visited a site referencing those same JavaScript/CSS files won't need to download them again. Their browser will cache them, effectively speeding up your site and saving the user time and data usage.
- The files are hosted on web servers where performance is optimised, likely faster than your web server. They are often distributed on many servers.
- Less file space is used on your web server, and less cost to your bandwidth allowances.

You do need to ensure you have a web connection when running the page on your own computer. In this case the tutorial will need web access anyway, to communicate with the API.

In the HTML a new file is also referenced, **script.js**. This will contain the custom JavaScript code, to be written in part 4.

#### Step 3. Add the textbox HTML

The web page will just have a header and an input text box, and a space where details of the book will be added dynamically later.

```html
<body>
    <h1>auto-complete book search example</h1>
    <p>
        <label for="txtBookSearch">select a book</label>
        <input id="txtBookSearch" type="text">
    </p>
        <h2>book details</h2>
    <div id="divDescription"></div>
    <script src="//code.jquery.com/jquery-1.10.2.js"></script>
    <script src="//code.jquery.com/ui/1.10.4/jquery-ui.js"></script>
    <script src="js/scripts.js"></script>
</body>
```

### Step 4. Add the auto-complete JavaScript

The following code is added to the empty **script.js** file, providing a framework for the autocomplete functionality, which is part of JQuery UI.

```JavaScript
$(document).ready(function () {  //should only run once the document is ready
    $('#txbBookSearch').autocomplete({ // attach the autocomplete functionality to the textbox
        source: function (request, response) {
            // define the source of the data
        },
        select: function (event, ui) {
            // what to do when an item in the autocomplete list is selected
        },
        minLength: 2 // set the minimum length of text the user must enter
    });
});
```

Having jQuery on the page allows for the text box to be referenced by using it's ID (**$('#txbBookSearch')**).  jQueryUI gives the functionality to easily attach to the text box so that it will provide suggestions as text is entered (**.autocomplete(....)**).

The full auto-complete documentation is available on the [jQueryUI pages](http://jqueryui.com/autocomplete). In this basic template there is space to write the code that will run at two different **events**:

- When the input text is changed, in order to provide the suggestions (**source: function (request, response)...**);
- When an item is selected from the suggestions (**select: function (event, ui)...**);

There is also the option to specify the number of characters that have to be entered before it will start making suggestions (**minLength:...**). This example sets it to 2. That's a little low, so in reality you may want more.

#### Step 5. Provide search suggestions

When a user enters text of at least 2 characters, the code should search all books from the google API, and list the closest matches.

```JavaScript
$(document).ready(function () {  // only begin once page has loaded
    $('#txtBookSearch').autocomplete({ // attach auto-complete functionality to textbox
        // define source of the data
        source: function (request, response) {
            // url link to google books, including text entered by user (request.term)
            var booksUrl = 'https://www.googleapis.com/books/v1/volumes?printType=books&amp;q=' + encodeURIComponent(request.term);
            $.ajax({
                url: booksUrl,
                dataType: 'jsonp',
                success: function(data) {
                    response($.map(data.items, function (item) {
                        if (item.volumeInfo.authors && item.volumeInfo.title 
                        && item.volumeInfo.industryIdentifiers && item.volumeInfo.publishedDate) {
                            return {
                                // label value will be shown in the suggestions
                                label: item.volumeInfo.title + ', ' + item.volumeInfo.authors[0] + ', ' + item.volumeInfo.publishedDate,
                                // value is what gets put in the textbox once an item selected
                                value: item.volumeInfo.title,
                                // other individual values to use later
                                title: item.volumeInfo.title,
                                author: item.volumeInfo.authors[0],
                                isbn: item.volumeInfo.industryIdentifiers,
                                publishedDate: item.volumeInfo.publishedDate,
                                image: (item.volumeInfo.imageLinks == null ? '' : item.volumeInfo.imageLinks.thumbnail),
                                description: item.volumeInfo.description,
                            };
                        }
                    }));
                }
            });
        },
        select: function (event, ui) {
            // what to do when an item is selected
        },
        minLength: 2 // set minimum length of text the user must enter
    });
});
```

The code added to call the API uses [jQuery's AJAX method](http://api.jquery.com/jquery.ajax/), which allows developers to send a call to a url for data, and specify what will happen once that data is returned.

The code transforms the data returned into a set of values that contain various details about each book: title, author, published date etc. By default the value we define as being the *label* value is the one shown within the drop down suggestion list. That label can be constructed from the returned values, so we can show 'title, author, date published' in the suggestions.

### Step 6. Selecting the book

All that's left is to code what will happen when a book is selected. This will depend on the site using the service - it could list all details of the book, or take the user to a page about the book in order to provide further actions. To demonstrate an example usage, this will show some details about the book on the page and provide a link to the OCLC WorldCat page for that book.

##### Full code

```JavaScript
$(document).ready(function () { // only begin once page has loaded
    $('#txtBookSearch').autocomplete({ // attach auto-complete functionality to textbox
        // define source of the data
        source: function (request, response) {
            // url link to google books, including text entered by user (request.term)
            var booksUrl = 'https://www.googleapis.com/books/v1/volumes?printType=books&amp;q=' + encodeURIComponent(request.term);
            $.ajax({
                url: booksUrl,
                dataType: 'jsonp',
                success: function(data) {
                    response($.map(data.items, function (item) {
                        if (item.volumeInfo.authors && item.volumeInfo.title
                        && item.volumeInfo.industryIdentifiers && item.volumeInfo.publishedDate) {
                            return {
                                // label value will be shown in the suggestions
                                label: item.volumeInfo.title + ', ' + item.volumeInfo.authors[0] + ', ' + item.volumeInfo.publishedDate,
                                // value is what gets put in the textbox once an item selected
                                value: item.volumeInfo.title,
                                // other individual values to use later
                                title: item.volumeInfo.title,
                                author: item.volumeInfo.authors[0],
                                isbn: item.volumeInfo.industryIdentifiers,
                                publishedDate: item.volumeInfo.publishedDate,
                                image: (item.volumeInfo.imageLinks == null ? '' : item.volumeInfo.imageLinks.thumbnail),
                                description: item.volumeInfo.description
                            };
                        }
                    }));
                }
            });
        },
        select: function (event, ui) {
            // what to do when an item is selected
            // first clear anything that may already be in the description
            $('#divDescription').empty();
            // we get the currently selected item using ui.item
            // show a pic if we have one
            if (item.image != '') {
                $('#divDescription').append('<img src="' + ui.item.image + '" style="float: left; padding: 10px;">');
            }
            // and title, author, and year
            $('#divDescription').append('<p><b>Title:</b> ' + ui.item.title  + '</p>');
            $('#divDescription').append('<p><b>Author:</b> ' + ui.item.author  + '</p>');
            $('#divDescription').append('<p><b>First published year:</b> ' + ui.item.publishedDate  + '</p>';
            // and the usual description of the book
            $('#divDescription').append('<p><b>Description:</b> ' + ui.item.description  + '</p>');
            // and show the link to oclc (if we have an isbn number)
            if (ui.item.isbn && ui.item.isbn[0].identifier) {
                $('#divDescription').append('<p><b>ISBN:</b> '
                + ui.item.isbn[0].identifier + '</p>');
                $('#divDescription').append('<a href="http://www.worldcat.org/isbn/'
                + ui.item.isbn[0].identifier + '" target="_blank">View item on worldcat</a>');
            }
        },
        minLength: 2 // set minimum length of text the user must enter
    });
});
```