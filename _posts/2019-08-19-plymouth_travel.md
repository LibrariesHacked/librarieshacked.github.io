---
title: Plymouth library finder
categories: 
    - Plymouth
    - Library locations
published: false
---

One of the long-running Libraries Hacked projects is a library finder. This uses data from Plymouth  Libraries on library locations to explore how these could be presented online. You can play with it and see [it in action here](https://plymouth.librarydata.uk).

Plymouth Libraries have embraced open data, releasing [various datasets about their service](https://www.plymouth.gov.uk/libraries/aboutlibraryservice/librarydata). The Council also held a library themed [DataPlay event](http://www.dataplymouth.co.uk/articles/data-play-9-itinerary), inviting the public to get involved with library data.

The library locations dataset is called [Libraries in Plymouth](https://www.plymouth.gov.uk/sites/default/files/Plymouth%20library%20locations%2C%20opening%20hours%20and%20services_0.csv), and includes all libraries, with their co-ordinates.

Boring names and locations of libraries? People can just look on Google! Well, hopefully there are lots of uses for location data, but before getting in to that it was worth looking at what other information was available about the libraries.


### Opening hours

Plymouth list opening hours for each library. These can be useful in a few ways:

- The obvious practical one of telling people when the library is and isn't open
- Comparing usage data by accounting for number of hours open.
- Factoring in 

The library finder doesn't do anything too clever with opening hours. It shows libraries that are open at the current time, and when the others are opening.  




### Facilities

If you're searching for a library you may have a particular task in mind. You want to use a computer, a printer, investigate local history, etc.You can probably expect to find books in any library, but for some of the other things you may need to check ahead.

Plymouth publish a list of services and facilities on the website page for each of their libraries, such as [Central Library](https://www.plymouth.gov.uk/libraries/findlibraryandopeninghours/centrallibrary). Being in a nice standard format is was possible to convert this to data by scraping the website, and it's now

### Events

Libraries have events going on. Plymouth events are listed on their website. The number of events account for a large proportion of the website.

[This script]() runs throughout each day, updating a data file held online of all the library events. The events are then published into a separate URL, which published

This data is also used in the library finder to provide filters like the facilities. Someone can search for the nearest library offering code clubs for example. And the finder will display when the next event is being held.



### Buildings

Normally when you plot locations on the map it will use some kind of icon. Maybe a book to represent a library, or just a standard map marker. But what about showing the actual building? Libraries are physical structures and it would be nice to have some kind of representation of that when viewing them on a map.

Geo publish open data on the heights of buildings in certain cities in the UK. This is calculated using environment agency LIDAR data. This is 

So each library is represented by a simple icon (using the library name as an initial). But when zooming in closer

### Travel time and population

Having things on maps allows for displaying additional geographic information. In the case of libraries, it's useful to see how accessible the library is by different means of travel.

The map has the functionality to plot isochrones around each library. An isochrone 


The goal of this was to create something that is useful both to the library service and to the public. It's a hard task to create tools that can be used both for service delivery and planning, and public information. But if possible it's an efficient use of open data. If it can be useful to everyone it will be more likely to be invested in.

### The future

It would be nice now to get this data for all libraries in the UK. More detailed heights and building footprint data could be obtained from Ordnance Survey. Having travel distance and populations would be a 

<!--stackedit_data:
eyJoaXN0b3J5IjpbLTYyNDcxOTg1LC0zNTQ0NjkxOTUsNDU0Nj
E3MjkyXX0=
-->