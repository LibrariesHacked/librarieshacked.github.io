---
category: data 
tags: opendata stats public mobiles schemas
title: Mobile library data schema
excerpt: Designing a data schema to hold mobile library stops and timetables
published: true
meta: data
---

A [previous post](/mobile-library-data-project) discussed data on mobile libraries, and improving how this data is used internally, and in providing public information. An encouraging number of library services have been in touch to get involved.

The first step is to analyse existing data, and organise this into a standard. That means deciding what fields would be needed, and additional detail such as whether each field should be a number, or a date, etc. And any constraints on the field, such as being mandatory, or having a minimum length. This sort of standard is generally called a *schema*.

It's worth looking around for existing examples. Although there doesn't seem to be anything already created, there are things to reference:

- The [BusTrip schema](https://schema.org/BusTrip) on schema.org incorporates concepts of a [BusStop](https://schema.org/BusStop), and includes column values such as [arrivalTime](https://schema.org/arrivalTime). Many of these ideas apply to mobile libraries.
- There has been a proposal of how [mobile libraries](https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dmobile_library) could be stored in OpenStreetMap (OSM). The opening hours schema from OSM is proposed as a way of storing the times for each stop.
- There is a [Wikidata](https://www.wikidata.org/wiki/Q720920) item statement for 'bookmobile'. This also references the proposed OSM tag, so that data could be linked between the two.
- In 2010 IFLA [published mobile library guidelines](https://www.ifla.org/files/assets/hq/publications/professional-report/123.pdf). These detail the physical characteristics of mobile vehicles such as engine and chassis, and the stock that should be on mobile libraries. But it does not include anything on how the data on mobile library routes and stops should be compiled or presented online.

Existing mobile library data is of mixed quality, but there are plenty of existing [mobile library timetables](https://github.com/LibrariesHacked/mobiles-librarydata/blob/master/data/authorities.csv) to research and look through. These won't be in data formats, but they will indicate the data that library services use to make their timetables.

## Creating a schema

How can we define and document a schema? [Table Schema](https://frictionlessdata.io/specs/table-schema/) is a standard for specifying a table of data using [JSON formatted](https://en.wikipedia.org/wiki/JSON) files.

Although this may seem overly technical, there are practical benefits for having a schema in a computer-readable format. [CSV Lint](https://csvlint.io/) is a service that will check CSV (comma-separated values) files to ensure they are valid. CSVs are text files that hold table data, with a line at the top for the headings, and then following rows for values. All separated using commas. A basic example is shown below.

```
MobileLibrary,Stop
Gloucestershire,Hasfield
Gloucestershire,Hucclecote
Wiltshire,Corsham
Wiltshire,Bradford-on-Avon
```

CSV lint will perform checks like ensuring consistent numbers of commas in each row, that each header name is unique, and avoiding all sorts of common errors. 

Additionally, given a Table Schema file, CSVLint will check that the CSV conforms to the schema. Not just that the basic format is correct, but detailed checking of the data definition and constraints. The schema can then become a powerful tool for automatically checking data is correct.

## Mobile library schema

A first version of a schema (v0.1) for mobile library stops [is now available](https://github.com/LibrariesHacked/mobiles-librarydata/blob/master/schema/mobile-library-stops.v0.1.json). This will be used in proof-of-concept tools such as PDF calendar generators, online maps, stop finders, etc. As changes become necessary, new versions of the schema will be released.

A human readable description of the fields is below.

| Field | Description | Example |
| ----- | ----------- | ------- |
| Organisation | The organisation responsible for the mobile library | Wiltshire |
| Mobile | A name for the mobile library | South Mobile Library |
| Route | A name for the route | South Mobile Library Thursday Week 1 |
| Community | The community served by the stop | Alderbury |
| Stop name | The individual stop name | Eyres Drive |
| Address | An address for the stop | Eyres Drive, Alderbury |
| Postcode | Nearest postcode for the stop | SP5 3TD |
| Geopoint X | Longitude for stop location | -1.723543 |
| Geopoint Y | Latitude for stop location | 51.03884 |
| Day | The day of the week the mobile library visits this stop | Thursday |
| Arrival time | The time the mobile library arrives at the stop | 10:00 |
| Departure time | The time the mobile library leaves the stop | 10:20 |
| Frequency | The schedule for repeated visits to this stop | FREQ=WEEKLY;INTERVAL=4 |
| Start date | The date the timetable for this stop started | 2019-04-04 |
| End date | The date the timetable for this stop ends | 2019-09-19 |
| Timetable | A link to a PDF or web page for the stop, route, or mobile | [Link](https://services.wiltshire.gov.uk/MobileLibrary/Library/Stop/209) |

Some notes about the schema:

* Stop name, community, address, postcode, and x/y coordinates are all relating to the stop location. Mobile library stops often do not have addresses or postcodes, but many library services publish them. Often of the place the mobile library stop is closest to. So these fields should be optional. The mandatory ones are a stop name and the coordinates.
* The most complex field is probably frequency. In the example above, FREQ=WEEKLY;INTERVAL=4 means the mobile library visits every 4 weeks. FREQ=WEEKLY;INTERVAL=2 would be every 2 weeks, and for weekly a simple FREQ=WEEKLY would be enough. This uses the [Recurrence rule specification](https://icalendar.org/iCalendar-RFC-5545/3-8-5-3-recurrence-rule.html), which is part of creating iCalendar appointments. The majority of mobile stops will be variations on weekly intervals, but some are more complex such as Worcestershire's *3rd Monday in the month*. That's fine though, that can be specified as FREQ=MONTHLY;BYDAY=1MO.
* The data is 'flat'. There is no structure for relationships between concepts. The concepts are Library Service, Mobile Library, Route, and Stop. These should really be in a hierarchy. For example, a Library Service has many Mobile Libraries, which have many Routes, and each route has multiple stops. Holding the data in a structure that lists each stop leads to quite a bit of duplication, but is simpler to store as a single table of data.
* There are few identifiers in the data. For example, rather than just having organisation name, the schema should really link to a recognised identifier for the organisation. This would make the data  'linkable'. However this early schema is designed to be as minimal as possible, added complexity (and value) can come later if necessary.

## Testing

An early test with [CSV Lint](https://csvlint.io/) has proved succesful. Passing [Aberdeenshire mobile library data](https://github.com/LibrariesHacked/mobiles-librarydata/blob/master/data/aberdeenshire.csv) and [the schema file](https://github.com/LibrariesHacked/mobiles-librarydata/blob/master/schema/mobile-library-stops.v0.1.json) comes back with no errors (in reality there were some to start off with!). So that's good.

## Future developments

A follow up post will begin to describe how this data can start being used in practical applications.

Getting this project right will rely on ensuring it serves both library users and library services. The process for submitting and maintaining data shouldn't be hard or confusing for libraries. It should reduce time spent in creating timetables and web information. For users it needs to meet real needs such as well-formatted timetables, data in accessible formats, and the additional features like notification systems and calendar integration.

It's easy to get carried away. This morning, before getting up, I was imagining how an admin system could work that automatically validated mobile stop data. Not just schema validation as described in this post. But *really* validated it. For example, the system could calculate the route that the mobile library would take between stops, and check that the current departure and arrival timings are realistic. Perhaps give a warning if it seemed like they needed to be shifted slightly. Even more advanced, it could potentially suggest efficiencies in terms of moving stops between routes.

None of this is intended to remove the human factor behind this - in many cases expertise will have gone in to mobile timetables to decide what times are appropriate in which places (e.g. schools). But technology can be a tool that aids this.