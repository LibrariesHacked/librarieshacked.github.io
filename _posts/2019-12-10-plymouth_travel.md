---
title: Plymouth library finder
excerpt: Displaying library open data in a library finder
categories:
  - Geography
tags:
  - Plymouth
  - Library finder
published: true
---

A long-running Libraries Hacked project is a library finder. This uses Plymouth library locations to explore how these can be presented online. You can play with it and see [it in action here](https://plymouth.librarydata.uk).

Plymouth Libraries release [various datasets about their service](https://www.plymouth.gov.uk/libraries/aboutlibraryservice/librarydata) as open data. The Council also held a library themed [DataPlay event](http://www.dataplymouth.co.uk/articles/data-play-9-itinerary), inviting the public to get involved with library data.

The library locations dataset is called [Libraries in Plymouth](https://www.plymouth.gov.uk/sites/default/files/Plymouth%20library%20locations%2C%20opening%20hours%20and%20services_0.csv), and includes all libraries, with their co-ordinates.

Boring names and locations of libraries? People can just look on Google! Well, hopefully there are more uses of location data, but before getting in to that it was worth looking at what other information was available about the libraries.

### Opening hours

Plymouth list opening hours for each library. These can be useful in a couple of ways:

- The obvious one of telling people when the library is open
- Analysing the catchment area population of the library, taking into account the time people are likely to be in the area (e.g. after work)

Opening Hours are a good example of data that has often been published in ways that aren't useful. Number of hours open per week, for example, doesn't allow anyone to do much with it.

The library finder doesn't currently do anything too clever with opening hours. It shows libraries that are open at the current time, how long before they are going to close, and when the library is next opening.

<figure> <img src="https://github.com/LibrariesHacked/librarieshacked.github.io/raw/main/images/2018-12-11-plymouth-opening-hours.png" alt="A screenshot of Plymouth Central Library details showing the view of when it is going to open"/> <figcaption>Plymouth Central Library when it was opening in an hour</figcaption> </figure>

### Facilities

If you're searching for a library, you may have a particular task in mind. It could be to use a computer, a printer, research local history, etc. You should expect to find books in all libraries, but for other things you may need to check ahead.

Plymouth publish a list of services and facilities on a web page for each of their libraries, such as [Central Library](https://www.plymouth.gov.uk/libraries/findlibraryandopeninghours/centrallibrary). Being in a nice standard format, it was possible to extract this as data.

The data is then used in filters when searching for a library. For example, the user can choose to look for a library with a meeting room. Only libraries with that facility will then be displayed.

<figure> <img src="https://github.com/LibrariesHacked/librarieshacked.github.io/raw/main/images/2019-08-19-plymouth-libraries-facilities.png" alt="A screenshot of a menu provided options of different facilities such as Cafe, or Scanners"/> <figcaption>Filtering Plymouth Libraries by facility type such as Books for loan</figcaption> </figure>

### Events

Libraries have events in them. Plymouth ones are listed on their website, and account for almost a third of all pages on the Council website.

An online script runs each day, searching the website for library events and updating a data file held online. This data is then also used in the library finder. Like with choosing facilities, someone can search for the nearest library offering code clubs.

<figure> <img src="https://github.com/LibrariesHacked/librarieshacked.github.io/raw/main/images/2019-08-19-plymouth-libraries-events.png" alt="A screenshot of filtering a list of libraries by events offered and displaying when the next event is"/> <figcaption>Filtering Plymouth Libraries by those offering Adult Coding Groups</figcaption> </figure>

If someone has filtered the libraries by a particular event type, the library summary displays when that event is next happening, as it would seem to be what the user is most interested in. In other situations it would display when the next event, of any type, is scheduled.

### Buildings

When locations are plotted on a web map some kind of icon will normally be used. Maybe a book to represent a library, or just a standard map pin. But what about showing the actual building? Libraries are physical structures and it would be nice to have some kind of representation of that when viewing them online.

Emu Analytics [publish open data on the heights of buildings](https://buildingheights.emu-analytics.net/) in certain cities. This is calculated using environment agency LIDAR data. That data is essentially compiled from lasers fired from above ground to map the terrain underneath.

So each library is represented by a simple icon (using the library name as an initial). But when zooming in closer the buildings are displayed also on the map. The particular library building is then highlighted.

<figure> <img src="https://github.com/LibrariesHacked/librarieshacked.github.io/raw/main/images/2019-08-19-plymouth-libraries-building.png" alt="A screenshot of a map, displayed at an angle showing the building in 3D as a cube"/> <figcaption>The map showing Devonport library building</figcaption> </figure>

The data only really has a simple height, and footprint for each building. So it is not that great a representation of the building. In Devonport Library's case, the building should be roughly the same height as surrounding buildings but it is a chapel, so has a tower and spire. This has affected the height in the data. Some more information about the building is in this [blog on old churches](https://someolddevonchurches.wordpress.com/2016/09/30/st-aubyns-church-Devonport/). The final prayer for the blessing of the building's new life as Devonport Library is worth a read.

### Travel time and population

Maps also allow for displaying additional geographic information. In the case of libraries, it's useful to see how travel times to the libraries.

The map has the functionality to plot isochrones around each library. An isochrone is ["a line drawn on a map connecting points at which something occurs or arrives at the same time"](https://en.wikipedia.org/wiki/Isochrone_map). In this case we can have lines that represent 5 minute intervals around the library. This is available for different travel types: walking, cycling, and driving.

The goal was to create something both useful to the library service and to the public. Library services will be able to see gaps in their provision, and the public will be able to see how long it will take to get to the library.

<figure> <img src="https://github.com/LibrariesHacked/librarieshacked.github.io/raw/main/images/2019-08-19-plymouth-libraries-isochrones.png" alt="A screenshot of an isochrone around a library, showing walking distances at 5 minute intervals"/> <figcaption>Walking time isochrone plotted around Crownhill Library</figcaption> </figure>

The tool also shows how many people are estimated to be within the relevant distance of the library. In the example, there are an estimated 52,770 people within 30 minutes walk of Crownhill Library.

### The future

It would be nice to get this data for all libraries in the UK. More detailed heights and building footprint data could be obtained from Ordnance Survey. Combining this with travel distance and population would be useful, and allow for cross-authority analysis of library provision.

Having more detailed 3D building models would also be good to improve the view of the library buildings.
