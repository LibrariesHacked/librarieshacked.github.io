---
title: "Plymouth: library travel"
categories: 
    - Plymouth
published: false
---

One of the long-running Libraries Hacked #librarydata projects is a library finder using Plymouth Libraries open data on library locations, facilities, and opening hours. Like most of projects, it is never ending and never finished.

Plymouth Libraries have embraced open data, releasing [data about their libraries](https://www.plymouth.gov.uk/libraries/aboutlibraryservice/librarydata) on their website, as well as the Council holding a library themed [DataPlay event](http://www.dataplymouth.co.uk/articles/data-play-9-itinerary) inviting the public to get involved with library data.

One of the datasets released is [Libraries in Plymouth](https://www.plymouth.gov.uk/sites/default/files/Plymouth%20library%20locations%2C%20opening%20hours%20and%20services_0.csv), a listing of the 12 libraries, with their address and opening hours.

| Field | Description | Example |
| ----- | ----------- | ------- |
| LibraryName
| AddressLine1
| AddressLine2
| AddressLine3
| Postcode
| Latitude | The Y coordinate 
| Longitude | The X coordinate 
| MondayOpen | The closing time on Mondays | |
| MondayClose
| TuesdayOpen,TuesdayClose,WednesdayOpen,WednesdayClose,ThursdayOpen,ThursdayClose,FridayOpen,FridayClose,
SaturdayOpen,
SaturdayClose,
Sunday
,Computers,WiFi,Printers,Photocopiers,Scanners,MeetingRooms,LocalAndFamilyHistory,NavalHistory,MicrofilmScanners,RoofTerrace,Books,DVDs,Audiobooks,RequestService,Cafe,Website
Central Library,167 - 171 Armada Way ,,Plymouth ,PL1 1HZ,50.373002,-4.1429763,08:30,18:00,08:30,18:00,08:30,18:00,08:30,20:00,08:30,18:00,09:00,17:00,closed,Yes,Yes,Yes,Yes,Yes,Yes,Yes,No,Yes,Yes,Yes,Yes,Yes,Yes,No,https://www.plymouth.gov.uk/libraries/findlibraryandopeninghours/centrallibrary

Boring names and locations of libraries? What's the use of that? Hopefully lots, but maybe more on that in a bit.

First I wanted to embellish the data a little. The Plymouth website has libraries listed on it, which also includes some details about what is offered at each library. All the usual things that people know and love about libraries, like Naval history collections, and Microfilm Scanners. So I wrote a script (using Python) to 'scrape' the website. Which is like stealing content, except it's often forgiveable if it's fairly obviously public information.