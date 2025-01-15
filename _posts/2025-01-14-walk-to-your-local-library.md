---
title: Walk to your local library
excerpt: Thoughts about walking to and from your local library and accessibility
categories:
  - Data
tags:
  - Data
published: true
---

As mentioned in a [previous post on this blog about the Arts Council libraries data](https://blog.librarydata.uk/basic-libraries-cleaning/), the Office for National Statistics recently released analysis of [walking times to local libraries](https://www.ons.gov.uk/peoplepopulationandcommunity/wellbeing/datasets/traveltimetolibrariesinlocalareasenglandandwales).

For England and Wales, headline 'walking to the library' figures are:

- 42.5% of people are within 15 minutes walk
- 77.7% of people within 30 minutes walk
- 92.8% of people within an hour walk

This focus on walking is positive. The [15-minute city](https://en.wikipedia.org/wiki/15-minute_city) concept seems to be controversial, but it's not wrong to plan areas with the aim of making essential services accessible without driving.

Anyway, here's a riddle. I've checked the journey planner on Google Maps: the walking time between my house and my local library is 14 minutes. And the walking time between my house and my local library is also 20 minutes. Eh? Is that difference from taking the scenic route? No, though pleasant walks are important. We should also consider safe routes, as there will plenty of walking routes where people don't feel safe for various reasons.

In this case it's the same route. But the difference is going to the library or coming back from it. Going there is downhill, and coming back is uphill (longer). So, am I within 15 minutes walk of my local library?

I'd argue not. You generally have to travel back from anywhere you visit, and it's no good telling people it's just a 15 minute walk if they can't get back in that time. You expect to come back from a library laden with books, so it's likely to take even longer to lug them up the hill.

We appreciate that a 15 minute walk isn't accessible for everyone anyway, but an uphill climb makes it more of a barrier than calculated assessments indicate. Many people just won't do that journey (it really is pretty steep).

We should look back at the ONS data to see what they did. The cover notes on their spreadsheet say they worked in collaboration with Ordnance Survey, who have a routing network for walking, and other travel modes. In this case it doesn't look like elevation is taken into consideration. The shortest route is calculated, then a distance and walking speed of 4.8km per hour is used to calculate time (this follows 'Department for Transport Journey Time Statistics'). The libraries are defined as destinations in the analysis, so it's assessing the walking route TO the library. Presumably it would provide similar results for going back home, unless the routes were constrained by being 'one-way', which is less likely when walking.

I should say, it's a good and useful analysis. It's easy to pick holes in these things, to the point where perfect becomes the enemy of good. It's indicative of the accessibility of libraries.

But this is also a data blog, so there should be some new analysis. I wanted to see if there were a way of analysing this potential discrepancy between walking to or from the library.

[Open Route Service](https://openrouteservice.org/) is an open source platform that provides routing services, based upon OpenStreetMap data. It provides a service for generating isochrones around a point. An isochrone is a line on a map that connects points that are all reachable within the same amount of time. So, we could use this to generate 15 minute isochrones around each library. Open Route Service also allows the user to set whether the point is the destination or the starting point.

<figure>
  <img src="https://github.com/LibrariesHacked/librarieshacked.github.io/raw/main/images/2025-01-15-walk-to-your-local-library.png" alt="A set of 5 minute walking interval isochrones around Bradford-on-Avon library"/>
  <figcaption>A set of 5 minute walking interval isochrones around Bradford-on-Avon library</figcaption>
</figure>

I assumed being able to set the library as starting point or destination would mean we could see differences that accounted for walking uphill. Unfortunately it doesn't do this, the calculations don't take elevation (or slope) into account, so the isochrones end up being much the same.

Sad! But I did end up generating isochrones for all statutory libraries in England, at 5 minute walking intervals. These are all [available on GitHub](https://github.com/LibrariesHacked/library-isochrones/tree/main/data/isochrones/basic-dataset-2023). GitHub has a nice viewer for 'GeoJSON' files, so you can explore the isochrones on a map.

## Insight

I also extracted some high level data about the population in each of the intervals around each library. It's a bit rough, but it's a start, and it should come in useful in future. The data is available as [a CSV file in the same repository](https://github.com/LibrariesHacked/library-isochrones/blob/main/data/isochrones/basic-dataset-2023/basic-dataset-for-libraries-2023-analysis.csv). A couple of small headlines:

- The library with the smallest population within 15 minutes walk is Kielder Library in Northumberland. Don't close it though - it looks lovely, despite being in the middle of nowhere.
- The library with the largest population within 15 minutes walk is an 'Idea Store' in Whitechapel, London. Of course, that London would have lots of people in it. Also don't close that one, but maybe rename it back to a library.
