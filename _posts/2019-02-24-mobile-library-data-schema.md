---
category: data 
tags: opendata stats public mobiles schemas
title: Mobile libraries data schema
excerpt: Designing a data table to hold mobile library stops and timetables
published: false
meta: data
---

A [previous post](/mobile-library-data-project) described a project to collect data on mobile libraries in the UK. An encouraging number of library services have been in touch to get involved.

The first step is to get a sample of existing data, and organise it into a standard. That means deciding the data fields required, and detail about those fields such as whether they should be numbers, or dates, and whether they are optional. This is generally called a **schema**.

As part of that, it's worth looking around for any existing standards. It doesn't look like there's anything complete and obvious, but there is plenty to reference:

- The [BusTrip schema](https://schema.org/BusTrip) on schema.org incorporates concepts of a [BusStop](https://schema.org/BusStop), and includes column values such as [arrivalTime](https://schema.org/arrivalTime). Many of these ideas apply to mobile libraries.
- There has been a proposal of how [mobile libraries](https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dmobile_library) could be stored in OpenStreetMap which appears to be a reference to the stop opening hours. The opening hours schema from OpenStreetMap is proposed as a way of storing 
- There is a Wikidata (https://www.wikidata.org/wiki/Q720920) item statement for 'bookmobile'. This also references the OSM tag.
- IFLA [published mobile library guidelines](https://www.ifla.org/files/assets/hq/publications/professional-report/123.pdf). This details the physical characteristics of mobile vehicles such as engine and chassis, and the stock that should be on mobile libraries. But it does not seem to include anything on how the data on mobile library routes and stops should be compiled or presented online.
- Although existing mobile library data is a mixed bag, there are plenty of existing [mobile library timetables](https://github.com/LibrariesHacked/mobiles-librarydata/blob/master/data/authorities.csv) to research and look through. These won't be in data formats, but they will still indicate the data required to produce similar results.

### Creating a schema

How to define and document a schema? [Table Schema](https://frictionlessdata.io/specs/table-schema/) is a standard for specifying the schema of a table of data, it uses [JSON formatted](https://en.wikipedia.org/wiki/JSON) files for doing this.

There are practical benefits for this, other than just for having a recognisable way of specifying what should be in the data. For example, [CSV Lint](https://csvlint.io/) is a service that will check CSV (comma separated value) files to ensure they are valid. CSVs are text files that hold data in a table format, with a row at the top for headers, and then other rows for values. All separated using commas. An example is shown below.

```
MobileLibrary,Stop
Gloucestershire,Ashleworth
Gloucestershire,Hasfield
Wiltshire,Corsham
```

CSV lint will check for common mistakes/problems in CSV data. Things like having consistent commas in each row, that each header name is unique, and all sorts of [common errors](https://csvlint.io/about). Given a **Table Schema** CSVLint will also check that the CSV file matches the schema. The schema could be a powerful tool for automatically checking library services mobile stop data.

### Mobile library schema

A first version of a schema for [mobile library stops] is now available. This will be used in proof of concept tools such as PDF calendar generators, online maps, stop finders, etc. A more human readble description of the fields is below.

| Field | Constraints | Example | Notes | 
| Organisation URI | 
| Organisation Label | 
| 
| Coordinate Reference System | Mandatory | EPSG:4326 |  |
| GeoX | Longitude or east grid reference for centroid of application boundary
| GeoY |
| Start date | No
| End date | Yes
| Address | Optional |  |  |
| Postcode | Optional | | Like addresses, many library stops do not really have a postcode. The stops are located near to places. However, many library services publish a postcode in PDF timetables. |

| Postcode | No

* The data is 'flat'. This means there is no structure for relationships between concepts. The concepts are Library Service, Mobile Library, Route, and Stop. These should really be in a hierarchy (e.g. 1 Library Service has many Mobile Libraries, 1 Mobile Library has many Routes, etc.). Holding the data in a flat structure leads to quite a bit of duplication, but is simpler to store as a single table of data.
* There are few identifiers in the data. For example, Bath and North East Somerset is a library service with a mobile library. In some datasets. Not having these yet in the schema is not because they are not useful, it is in order to originally work with a minimum viable set of fields, and add comlexity later if necessary.

### Data schema details

There is quite a lot to explain in each one of those columns, and some are quite technical. With all things lke this there is a fine line between trying to keep it simple, and easy for 

There are three fields siply for coordinates for example. A coordinate reference system, and X coordinate, and a Y coordinate. Many people will be familiar with a set of coordinates for a location e.g. . But a complexity here is that locak government organisations will normally publish and hold coordinates in the British National Grid reference system. 

Frequency was another difficult one. Frequency is something we can understand quite easily as humans, but there can be many different ways of expressing it. My book group meets on the first Monday of the month. I go to work every day (Monday to Friday). Mobile library timetables

### An example

My goal is to get ALL Scottish mobile library services data into this structure in the next few months. Then the process can shift into providing a means to update that data, and ways in which to present and visualise it.

It has been encouraging that

