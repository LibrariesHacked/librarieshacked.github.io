---
category: data 
tags: opendata stats public mobiles schemas
title: Mobile libraries data schema
excerpt: Designing a data table to hold mobile library stops and timetables
published: false
meta: data
---

A [previous post](/mobile-library-data-project) described a project to collect data on mobile libraries in the UK. An encouraging number of library services have been in touch to get involved.

The first step is to get samples of existing data, and organise those into a standard. That means deciding the data fields required, and additional detail such as whether the field should be a number, or a date, and whether it should be optional. This is generally called a **schema**.

It's worth looking around for any existing standards. Although nothing obviously comparable, there is plenty to reference:

- The [BusTrip schema](https://schema.org/BusTrip) on schema.org incorporates concepts of a [BusStop](https://schema.org/BusStop), and includes column values such as [arrivalTime](https://schema.org/arrivalTime). Many of these ideas apply to mobile libraries.
- There has been a proposal of how [mobile libraries](https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dmobile_library) could be stored in OpenStreetMap. The opening hours schema from OpenStreetMap is proposed as a way of storing the timetable for each stop.
- There is a Wikidata (https://www.wikidata.org/wiki/Q720920) item statement for 'bookmobile'. This also references the OSM tag.
- In 2010 IFLA [published mobile library guidelines](https://www.ifla.org/files/assets/hq/publications/professional-report/123.pdf). These detail the physical characteristics of mobile vehicles such as engine and chassis, and the stock that should be on mobile libraries. But it does not seem to include anything on how the data on mobile library routes and stops should be compiled or presented online.

Existing mobile library data is a mixed bag, but there are plenty of existing [mobile library timetables](https://github.com/LibrariesHacked/mobiles-librarydata/blob/master/data/authorities.csv) to research and look through. These won't be in data formats, but they will indicate the data required to produce similar results.

### Creating a schema

How to define and document a schema? [Table Schema](https://frictionlessdata.io/specs/table-schema/) is a standard for specifying the schema of a table of data. It uses [JSON formatted](https://en.wikipedia.org/wiki/JSON) files for doing this.

There are practical benefits for having a schema specified in a computer readable format. [CSV Lint](https://csvlint.io/) is a service that will check CSV (comma separated value) files to ensure they are valid. CSVs are text files that hold table data, with a line at the top for the headings, and then following lines for values. All separated using commas. A basic example is shown below.

```
MobileLibrary,Stop
Gloucestershire,Ashleworth
Gloucestershire,Hartpury
Wiltshire,Corsham
Wiltshire,Bradford-on-Avon
```

CSV lint will perform checks like ensuring consistent numbers of commas in each row, that each header name is unique, and avoiding all sorts of [common errors](https://csvlint.io/about). 

Additionally, given a **Table Schema** file, CSVLint will also check that the CSV file matches the schema. Not just that the basic format is correct, but detailed checking of the data definition and constraints. The schema then becomes a powerful tool for automatically checking library services mobile stop data.

### Mobile library schema

A first version of a schema for mobile library stops [is now available](). This will be used in proof of concept tools such as PDF calendar generators, online maps, stop finders, etc. 

A human readable description of the fields is below.

| Field | Description | Example |
| ----- | ----------- | ------- |
| Organisation | The organisation operating the mobile library | Wiltshire |
| Mobile | A name for the mobile library | South |
| Route | A name for the route | South Thursday Week 1 |
| Community | The community served by the stop | Alderbury |
| Stop | The individual stop name | Eyres Drive |
| Address | An address for the stop | Eyres Drive, Alderbury |
| Postcode | Nearest postcode for the stop | SP5 3TD |
| GeoX | Longitude or east grid reference for stop location | -1.723543 |
| GeoY | Latitude or north grid reference for stop location | 51.03884 |
| Day | The day the mobile library visits this stop | Thursday |
| Start date | The date this stop timetable started | 04/04/2019 |
| End date | The date this stop timetable ends | 19/09/2019 |
| Frequency | The schedule for repeat visits to this stop |  |
| Start time | The time the mobile library arrives at the stop | 10:00 |
| End time | The time the mobile library leaves the stop | 10:20 |
| Timetable | A link to a PDF or web page for the stop, route, or mobile | http://services.wiltshire.gov.uk/MobileLibrary/Library/Round/35 |

Some notes about this schema:

* There are a few options for location of the stop. It includes address, postcode, and coordinates. In reality, mobile library stops do not have addresses as they are not addressable locations. And they do not have postcodes. However, from existing data, many library services publish an address or postcode, normally that of the place the mobile library stop is closest to.
* It is not really necessary to have 'Day' as a field.
* The data is 'flat'. There is no structure for relationships between concepts. The concepts are Library Service, Mobile Library, Route, and Stop. These should really be in a hierarchy. For example, a Library Service has many Mobile Libraries, which have many Routes, and each route has multiple stops. Holding the data in a structure that lists each stop leads to quite a bit of duplication, but is simpler to store as a single table of data.
* There are few identifiers in the data. For example, if you look through schemas For example, Bath and North East Somerset is a library service with a mobile library. In some datasets. Not having these yet in the schema is not because they are not useful, it is in order to originally work with a minimum viable set of fields, and add comlexity later if necessary.

### Future developments

A follow up post will go into detail more about each item in the data schema, as each data field has plenty of explanation to go around it. Getting this project right will mean . Over the next couple of months that should mean:

- 
