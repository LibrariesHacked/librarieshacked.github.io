---
title: "Mobile libraries: routing"
description: Calculating mobile library routes
categories:
  - Mobile libraries
tags:
  - Routing
  - Geography
published: true
---

There have been two previous posts on a mobile library data project.

* [An introduction to the project](/mobile-library-data-project)
* [Creating a mobile library data schema](/mobile-library-data-schema)

Having got to this point, we now have a data schema for mobile libraries, and some example datasets, one of which is [Aberdeenshire mobile libraries](https://github.com/LibrariesHacked/mobiles-librarydata/blob/master/data/aberdeenshire.csv) (who have 3 mobiles).

So far, so unexciting. For some, there is nothing better than delving into data schemas, but for others it's more likely the practical outcomes of having a schema will be more appealing. The next few posts will outline some of the features that can be developed from this data.

## Mapping

One thing that can be done is plotting the mobile library stops on a map. This is nice, though Aberdeenshire [already do this perfectly well](https://www.google.com/maps/d/viewer?mid=1lIDgiRMjRjTLUMUWldFASu552pfrSIb0) with a Google map. They have colour coded points to separate the routes, and being embedded within Google maps, users can search the map and locate their nearest stop. An alternative version is shown below.

![Mobile-library-stops]({{ site.url }}{{ site.baseurl }}/images/2019-04-01-mobile-library-data-routes-aberdeenshire-north-points.png)

It's worth noting that as a minimum, having a complete collection of mobile library stop data for the UK would allow for having one single and useful mobile library stop map.

## Mobile library routes

But that's not enough, there's more exciting information within a mobile library timetable. Mobile libraries move about. If we only show the stops, people may believe they are far away from the mobile, without seeing that it may pass by very close to them.

The potential benefit of seeing the route a mobile library takes could be for considering additional stops, optimising stop order, etc.

It is easy to 'join the dots' of a route. As long as we have the stops and the order they are in, we could draw direct lines between them on the map. But that's not accurate, we'd end up drawing lines over rivers and things. 

We need to use a route service to plot the route a mobile will take. There's a certain amount of estimation to this, anyone who's used a SatNav will know it's not perfect. But it will give us a good idea.

OpenRouteService is an online service that will calculate a route, given a selection of stops. It was developed by [The Heidelberg Institute for Geoinformation Technology](http://www.heigit.org/), using OpenStreetMap data. Results from the service are released as [CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/), and attribution should be declared as *Service &copy; openrouteservice.org, Map data &copy; OpenStreetMap contributors*.

OpenRouteService have an API for their [Directions service](https://openrouteservice.org/services/) which should be able to give us a route between stops.

Without going into too much technical detail, a [Python script here](https://github.com/LibrariesHacked/mobiles-librarydata/blob/master/scripts/createroute.py) will take a CSV file of mobile library stops for Aberdeenshire (using our fancy new data schema), and produce a set of routes. The route data will be produced in a format known as [GeoJSON](http://geojson.org/).

Now we can show the route taken by the mobile alongside the stops. More data is also available to use from this process, such as the distance travelled between each stop and an estimated travel time.

![Mobile-library-stops]({{ site.url }}{{ site.baseurl }}/images/2019-04-01-mobile-library-data-routes-aberdeenshire-north-routes.png)
