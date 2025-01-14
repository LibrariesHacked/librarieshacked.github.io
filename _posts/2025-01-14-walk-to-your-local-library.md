---
title: Walk to your local library
excerpt: How long does it take to walk and get back from your local library
categories:
  - Data
tags:
  - Data
published: false
---

As mentioned in the previous post on this blog ([about the Arts Council basic libraries dataset](https://blog.librarydata.uk/basic-libraries-cleaning/)), the Office for National Statistics have released analysis of [travel times to local libraries](https://www.ons.gov.uk/peoplepopulationandcommunity/wellbeing/datasets/traveltimetolibrariesinlocalareasenglandandwales).

For England and Wales, headline figures are:

- 42.5% of people are within 15 minutes walk of their local library
- 77.7% of people within 30 minutes walk
- 92.8% of people within an hour walk

This focus on walking distance seems positive. The [15-minute city](https://en.wikipedia.org/wiki/15-minute_city) concept seems to be controversial, but it's not bad to plan areas with an aim of making essential services available within a 15 minute walk.

Anyway, here's a riddle. I've checked the journey planner on Google Maps: the walking time between my house and my local library is 14 minutes. And the walking time between my house and my local library is also 20 minutes. Eh? Is that the difference when taking a longer scenic route? No, though pleasant walks are important. We should also consider safe routes, as there will plenty of walking routes where people don't feel safe for various reasons.

In this case it's the same route. But the difference is between going to the library and coming back from it. Going there is downhill, and coming back is uphill. So, am I within 15 minutes walk of my local library?

I'd argue probably not. You generally have to travel back from a location you visit, and there's no good telling people they can walk somewhere in just 15 minutes if they can't get back in that time. You expect to come back from a library laden with books, so it's likely to take even longer to lug them up the hill.

We appreciate in general terms that a 15 minute walk isn't necessarily accessible for everyone, but that uphill climb makes it more of a barrier than many assessments would expect. Many people just won't do that journey (it really is quite steep).

We should look back at the ONS data and see what they did. The cover notes on their spreadsheet say they worked in collaboration with Ordnance Survey, who have a routing network for walking routes (and other travel modes). In this case it doesn't look like elevation is taken into consideration. Once the route is calculated, a distance and walking speed of 4.8km per hour is used to calculate time (this follows 'Department for Transport Journey Time Statistics'). The libraries are defined as destinations in the analysis, so it's a walking route to the library. Presumably though it would provide the same results if analysing going back home, unless the routes were in some way 'one-way' (less likley when walking).

It's also fine and a good analysis. It's easy to pick holes in all these things until perfect becomes the enemy of good.

This is also a data blog so there should be some new data analysis. I wanted to find a way of analysing this potentia discrepancy between walking to and from the library.

[Open Route Service](https://openrouteservice.org/) is a open source platform that provides routing services, based upon OpenStreetMap data. It provides a service for generating isochrones around a point. An isochrone is a line on a map that connects points that are all reachable within the same amount of time. So, we could use this to generate a 15 minute isochrone around each library. It also allows the option to set whether the point is the destination or the starting point.

<figure>
  <img src="https://github.com/LibrariesHacked/librarieshacked.github.io/raw/master/images/2025-01-15-walk-to-your-local-library.png" alt="A set of 5 minute interval isochrones around Bradford on Avon library"/>
  <figcaption>A set of 5 minute interval isochrones around Bradford on Avon library</figcaption>
</figure>

I assumed being able to set the library as either the starting point or the destination would mean the isochrones would show the difference between walking to and from the library. Unfortunately it doesn't do this, the walking distance doesn't take into account elevation, so the isochrones end up being much the same.

I did end up generating an isochrome for each statutory library in England. These are all [available on GitHub](). GitHub has a nice viewer for 'GeoJSON' files, so you can see the isochrones on a map.

## Insight

I also extracted some high level data about the population in those isochrones, at 5 minute intervals. This is a bit of a rough calculation, but it's a start. The data is available as [a CSV file in the same repository](). Some small highlights:

The library with the lowest population within 15 mins walk is

- The library with the highest poulation within 15minutes walk
