---
title: "Mobile libraries: data schema"
excerpt: Designing a data schema to hold mobile library stops and timetables
categories:
  - Mobile libraries
---

A [previous post](/mobile-library-data-project) discussed data on mobile libraries, and improving how this data is used internally, and in providing public information. An encouraging number of library services have been in touch to get involved.

The first step is to analyse existing data, and organise this into a standard. That means deciding what fields would be needed, and additional detail such as whether each field should be a number, or a date, etc. And any constraints on the field, such as being mandatory, or having a minimum length. This sort of standard is generally called a *schema*.

It's worth looking around for existing examples and reference points.

- The [BusTrip schema](https://schema.org/BusTrip) on schema.org incorporates [BusStop](https://schema.org/BusStop), and column values such as [arrivalTime](https://schema.org/arrivalTime). Many of these ideas apply to mobile libraries.
- There has been a proposal of how [mobile libraries](https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dmobile_library) could be stored in OpenStreetMap (OSM). The opening hours schema from OSM is proposed as a way of storing the times for each stop.
- There is a [Wikidata](https://www.wikidata.org/wiki/Q720920) item statement for 'bookmobile'. This also references the proposed OSM tag, so that data could be linked between the two.
- IFLA [publish mobile library guidelines](https://www.ifla.org/files/assets/hq/publications/professional-report/123.pdf). These detail physical characteristics of mobiles such as engine and chassis, and the stock that should be on them. But nothing on how the data on mobile library routes should be compiled or presented online.

Mobile library data is of mixed quality, but there are plenty of existing [mobile library timetables](https://github.com/LibrariesHacked/mobiles-librarydata/blob/master/data/authorities.csv) to research and look through. These won't be in data formats, but they will indicate the data that library services use to make their timetables.

## Creating a schema

How can we define and document a schema? [Table Schema](https://frictionlessdata.io/specs/table-schema/) is a standard for specifying data using [JSON formatted](https://en.wikipedia.org/wiki/JSON) files.

This may seem overly technical, but there are practical benefits for having a schema in a computer-readable format. [CSV Lint](https://csvlint.io/) is a service to check CSV (comma-separated values) files to ensure they are valid. CSVs are text files that hold table data, with a line at the top for the headings, and then following rows for values. All separated using commas. A basic example is shown below.

```
MobileService,Community,Stop
Gloucestershire,Hasfield,Farm
Gloucestershire,Hucclecote,The post box
Wiltshire,Corsham,The pub
Wiltshire,Bradford-on-Avon,Bridge
```

CSV lint will perform checks like ensuring consistent commas in each row, that each header name is unique, and other common errors. 

Additionally, given a Table Schema file, CSV lint will check the CSV conforms to the schema. Not just that the format is correct, but checking of the data definition and constraints. The schema then becomes a powerful tool for checking data is correct.

## Mobile library schema

A first version of a schema for mobile library stops is available below. This will be used in proof-of-concept tools such as PDF calendar generators, online maps, stop finders, etc. As changes become necessary, new versions of the schema will be released.

* [Mobile library stop data schema v0.1](https://github.com/LibrariesHacked/mobiles-librarydata/blob/master/schema/mobile-library-stops.v0.1.json)

A human readable description of the fields is below.

| Field | Description | Example |
| ----- | ----------- | ------- |
| Organisation | The organisation running the mobile | Wiltshire |
| Mobile | Name for the mobile library | South Mobile Library |
| Route | Name for the route | South Thursday Week 1 |
| Community | The community served by the stop | Alderbury |
| Stop name | The individual stop name | Eyres Drive |
| Address | Address for the stop | Eyres Drive, Alderbury |
| Postcode | Nearest postcode for the stop | SP5 3TD |
| Geopoint X | Longitude for stop location | -1.723543 |
| Geopoint Y | Latitude for stop location | 51.03884 |
| Day | Day the mobile library visits this stop | Thursday |
| Arrival time | Time the mobile library arrives | 10:00 |
| Departure time | Time the mobile library departs | 10:20 |
| Frequency | Schedule for repeated visits to this stop | FREQ=WEEKLY;INTERVAL=4 |
| Start date | Date the timetable starts | 2019-04-04 |
| End date | Date the timetable ends | 2019-09-19 |
| Timetable | Link to a PDF or web page | [Link](https://services.wiltshire.gov.uk/MobileLibrary/Library/Stop/209) |

Some notes about the schema:

* Stop name, community, address, postcode, and x/y coordinates all relate to the stop location. Mobile library stops often do not have addresses or postcodes, but many services publish them. Often this is the place the mobile library stop is closest to. So these fields should be optional. The mandatory ones are stop name and coordinates.
* The most complex field is frequency. In the example above, *FREQ=WEEKLY;INTERVAL=4* means the mobile library visits every 4 weeks. *FREQ=WEEKLY;INTERVAL=2* would be every 2 weeks; for weekly a simple *FREQ=WEEKLY* is enough. This uses the iCalendar [Recurrence rule specification](https://icalendar.org/iCalendar-RFC-5545/3-8-5-3-recurrence-rule.html). The majority of mobile stops will be variations on weekly intervals, but some are more complex such as Worcestershire's *3rd Monday in the month*. That's fine though, that can be specified as *FREQ=MONTHLY;BYDAY=3MO*.
* The data is 'flat'. There is no structure between concepts. The concepts could be said to be Library Service, Mobile Library, Route, and Stop. These should really be in a hierarchy. For example, a Library Service has many Mobile Libraries, which have many Routes, and each route has multiple stops. Holding the data in a flat structure leads to quite a bit of duplication, but is simpler to store.
* There are few identifiers in the data. For example, rather than just having organisation name, the schema should really link to a recognised identifier for the organisation. This would make the data  'linkable'. However it is designed to be as minimal as possible, added complexity can come later if necessary.

## Testing

An early test with [CSV Lint](https://csvlint.io/) has proved succesful. Passing [Aberdeenshire mobile library data](https://github.com/LibrariesHacked/mobiles-librarydata/blob/master/data/aberdeenshire.csv) and [the schema file](https://github.com/LibrariesHacked/mobiles-librarydata/blob/master/schema/mobile-library-stops.v0.1.json) comes back with no errors (in reality there were some to start off with!). So that's good.

## Future developments

A follow up post will begin to describe how this data can be used in practical applications.

Getting this project right will rely on it serving both library users and library services. The process for submitting data shouldn't be hard or confusing for libraries. It should reduce time spent in creating timetables and web information. For users it needs to meet real needs such as well-formatted timetables, data in accessible formats, and additional features like notification systems and calendar integration.

It's easy to get carried away. This morning, before getting up, I was imagining how an admin system could work that automatically validated mobile stop data. Not just the schema validation described in this post. But *really* validated it. For example, the system could calculate the route a mobile library would take between stops, and check the departure and arrival timings are realistic. Perhaps give a warning if it seemed like they needed to be shifted slightly. Even more advanced, it could suggest efficiencies in terms of moving stops between routes.

None of this is intended to remove the human factor behind this - in many cases expertise will have gone in to mobile timetables to decide what times are appropriate in which places (e.g. schools). But technology can be a tool that aids this.