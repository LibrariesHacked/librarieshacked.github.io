---
title: Plymouth library finder
categories: 
    - Plymouth
    - Library locations
published: false
---

One of the long-running Libraries Hacked projects is an example library finder. This uses Plymouth library locations data ,to explore how these can be presented online. You can play with it and see [it in action here](https://plymouth.librarydata.uk).

Plymouth Libraries release [various datasets about their service](https://www.plymouth.gov.uk/libraries/aboutlibraryservice/librarydata) as open data. The Council also held a library themed [DataPlay event](http://www.dataplymouth.co.uk/articles/data-play-9-itinerary), inviting the public to get involved with library data.

The library locations dataset is called [Libraries in Plymouth](https://www.plymouth.gov.uk/sites/default/files/Plymouth%20library%20locations%2C%20opening%20hours%20and%20services_0.csv), and includes all libraries, with their co-ordinates.

Boring names and locations of libraries? People can just look on Google! Well, hopefully there are lots more uses of location data, but before getting in to that it was worth looking at what other information was available about the libraries.

### Opening hours

Plymouth list opening hours for each library. These can be useful in a couple of ways:

- The obvious one of telling people when the library is open
- Analysing the catchment area population of the library, taking into account the time people are likely to be in the area (e.g. after work)

Opening Hours are a good example of data that has often been published in ways that aren't useful. Number of hours open per week, for example, does not allow anyone any chance to do much with it.

The library finder doesn't do anything too clever with opening hours. It shows libraries that are open at the current time, how long before they are going to close, and when the others are opening. 

### Facilities

If you're searching for a library, you may have a particular task in mind. You want to use a computer, a printer, research local history, etc. You should expect to find books in any library, but for other things you may need to check ahead.

Plymouth publish a list of services and facilities on the web page for each of their libraries, such as [Central Library](https://www.plymouth.gov.uk/libraries/findlibraryandopeninghours/centrallibrary). Being in a nice standard format, it was possible to convert this to data by scraping the website.

The facilities data is used in filters when searching for a library. The user can select (for example) that they are looking for somewhere with a meeting room. Only libraries with that facility will then be displayed.

<figure> <img src="https://github.com/LibrariesHacked/librarieshacked.github.io/raw/master/images/2019-08-19-plymouth-libraries-facilities.png" alt="A screenshot of a menu provided options of different facilities such as Cafe, or Scanners"/> <figcaption>Filtering Plymouth Libraries by facility type</figcaption> </figure>

### Events

Libraries have events in them. Plymouth ones are listed on their website, and account for almost a third of all pages on the Council website.

Without an easy way of using this data directly, an online script runs throughout each day, searching the website for library events and updating a data file held online. This data is then published into a separate URL, using a standard

Like facilities data, this is used in the library finder to provide filters. Someone can search for the nearest library offering code clubs for example.






### Buildings

Normally when locations are plotted on a web map some kind of icon will be used. Maybe a book to represent a library, or just a standard map marker. But what about showing the actual building? Libraries are physical structures and it would be nice to have some kind of representation of that when viewing them on a map.

Geo publish open data on the heights of buildings in certain cities in the UK. This is calculated using environment agency LIDAR data. This is 

So each library is represented by a simple icon (using the library name as an initial). But when zooming in closer the buildings are displayed on the map. These 

<figure> <img src="https://github.com/LibrariesHacked/librarieshacked.github.io/raw/master/images/2019-08-19-plymouth-libraries-building.png" alt="A screenshot of a map, displayed at an angle showing the building in 3D as a cube"/> <figcaption>The map showing Devonport library building</figcaption> </figure>

### Travel time and population

Having things on maps allows for displaying additional geographic information. In the case of libraries, it's useful to see how possible it is to travel to the library by different means.

The map has the functionality to plot isochrones around each library. An isochrone 


The goal of this was to create something that is useful both to the library service and to the public. It's a hard task to create tools that can be used both for service delivery and planning, and public information. But if possible it's an efficient use of open data. If it can be useful to everyone it will be more likely to be invested in.

### The future

It would be nice now to get this data for all libraries in the UK. More detailed heights and building footprint data could be obtained from Ordnance Survey. Having travel distance and populations would be a 

<!--stackedit_data:
eyJoaXN0b3J5IjpbMzM5MjE1MzQ1LC02MTc5NjI4MDEsLTE1MT
Y4MDc3NzEsMTUzOTcyMjM1MCw4ODI4NTk3NywtNzQ4MzUxMzIy
LC0xMDcwMjUwNzMyLDE0Njc0MjIyNzYsLTE2NzAzMzI3MjIsLT
M1NDQ2OTE5NSw0NTQ2MTcyOTJdfQ==
-->