---
category: data 
tags: opendata stats public mobiles
title: Mobile library project routing feature
excerpt: Calculating mobile library routes
published: true
meta: data
---

There have been two previous posts on mobile library data.

* [An introduction to the project](/mobile-library-data-project)
* [Creating a mobile library data schema](/mobile-library-data-schema)

Having got to this point, we now have a data schema for mobile libraries, and some example datasets, one of which is [Aberdeenshire mobile libraries]() (of which there are 3 mobiles).

So far, so unexciting. For some people there may be nothing better than delving into data schemas, but for any others it's more likely the practical outcomes of having a schema will be more appealing.

## Mapping

One thing that could be done is plotting the mobile library stops on a map. This is nice, though [Aberdeenshire already do this](https://www.google.com/maps/d/viewer?mid=1lIDgiRMjRjTLUMUWldFASu552pfrSIb0) perfectly well. The points are colour-coded by route. Being embedded within Google maps, they have the full power of Google for users to search the map and locate their nearest stop.

![Mobile-library-stops]({{ site.url }}{{ site.baseurl }}/images/2019-04-01-mobile-library-data-routes-aberdeenshire-north-points.png)

At the very minimum, a complete collection of mobile library stop data for the UK would allow for a single mobile library stop map like this.

## Mobile library routes

But that's not enough, mobile libraries move about. There's more exciting information within a mobile library timetable. If we only show the stops then people may believe they are far away from the mobile, without seeing that it passes by very close to them.

The potential benefit of seeing the route a mobile library takes could be for considering additional stops, optimising stop order, etc. But initially it would be good as something just to visualise for existing routes.

It is easy to 'join the dots' of a route. As long as we have the stops and the order they are in, we could draw lines between them on the map. But that's not accurate, we'd probably end up drawing lines directly over rivers and things. 

We need to use a route service in order to plot the route a mobile will take. There's a certain amount of guesswork required to do this, anyone who's used a SatNav will know it's not perfect. But it will give us a good idea.

OpenRouteService is an online service that will calculate a route given a selection of stops. It was developed by [The Heidelberg Institute for Geoinformation Technology](http://www.heigit.org/), using OpenStreetMap data. Results from the service are released as [CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/), and attribution should be declared as *Service &copy; openrouteservice.org | Map data &copy; OpenStreetMap contributors*.

OpenRouteService have an API for their [Directions service](https://openrouteservice.org/services/) which should be able to give us a route between stops.

Without going into too much technical detail, a [Python script here](https://github.com/LibrariesHacked/mobiles-librarydata/blob/master/scripts/createroute.py) will take a CSV file of mobile library stops for Aberdeenshire (in our fancy new data schema format), and produce a set of routes. The route data will be produced in a format known as [GeoJSON](http://geojson.org/).

Now alongside the mobile stops we can show the route taken by the mobile.

![Mobile-library-stops]({{ site.url }}{{ site.baseurl }}/images/2019-04-01-mobile-library-data-routes-aberdeenshire-north-routes.png)