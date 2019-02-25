---
category: data 
tags: opendata stats public mobiles
title: Mobile libraries data project
excerpt: Promoting the use of mobile library data to solve problems.
published: true
meta: data
header:
  overlay_image: /images/2019-02-23-mobile-library-data-project.png
  overlay_filter: 0.2
---

It is easy to complain about the lack of data on UK public library locations, but there have been various attempts to improve this. The Collections Trust in 2012, the Libraries Taskforce in 2016, and ongoing wider projects such as Open Street Map and Wikidata.

Lack of mobile library data goes beyond this. With static libraries, at least the public can go to their authority website and see a list of libraries. Normally in accessible web formats, with additional features such as finding your nearest.

With mobile libraries you **may** find a link to some PDF timetables. Often called North, South and Central (no mention of East or West), and you need to choose which applies to you. They will be unreadable in attempting to convey a stop location, a route, and a calendar of dates.

One such timetable lists stops with different combinations of text/background colours, and then provides a calendar lookup using the same colouring. So long as you remember **your** stop is light blue background with white text, rather than dark blue background with black text, and you have no difficulty with those differences, then you're fine.

Sometimes there is no PDF. Just a web page recommending you call your nearest library to find out when the mobile library visits.

It's hard to blame library staff for this. Mobile library data is complex, and presenting it is difficult. But each authority attempts to do this in isolation. After looking through every mobile library web page and timetable, there are few alike, despite trying to achieve the exact same thing.

In the last two years, twelve UK local authorities have stopped providing mobile libraries. The decline is more rapid and desperate than that of static libraries, and it affects people who are least able to get to alternative local services. But with hardly any data on mobile libraries, it is difficult to keep track of this. [This data file](https://github.com/LibrariesHacked/mobiles-librarydata/blob/master/data/authorities.csv) is updated with a list of local authorities, and the number of mobiles each has. But updating that basic data is a manual process of searching through each local authority website.

### What can be done?

Firstly, what are the problems?

* There is no standard for presenting mobile library timetables. This leads to decline in use, accessibility issues, and lack of investment in mobile services.
* Mobile libraries would particularly benefit from existing open geographic intelligence on population and deprivation stats, and route analysis software. But with no data on our mobiles, there is no way of taking advantage of this.
* With no national data there can be no combined national analysis, and no data-informed method for providing national support or guidance.
* There is no innovation. Any advances in how mobile libraries are delivered requires data about existing services that doesn't exist.

Looking at these issues, possible project steps could be:

1. Construct a standard format for mobile library data, after researching existing data and requirements.
2. Create a data portal to collect and aggregate this data, across mobile library services
3. Allow maintenance of data on the data portal e.g. by local authorities
4. Design a print format for presenting this data (e.g. using rail/bus timetables as reference) 
5. Create a website to list this data and provide:
  * Mobile-friendly web information to find your nearest stop and next visit date.
  * An automated printable timetable that is accessible, familiar, and easy to understand
  * Maps for viewing stop locations
  * The option to embed these features on individual local authority websites
  * Raw data, published against a standard schema
5. Explore future benefits
  * Analysis of stop locations with relation to current population need
  * Analysis of routes and efficiencies, particularly across authority boundaries
  * Display of live data such as GPS in mobile libraries to present this in the website
  * Exploration of dynamic timetables such as 'request stops' that could be requested through the website.
  * More modern web integrations such as mobile notifications and downloading stop timetables to phone calendars.

This is quite an ambitious project, but each step presents benefits. Having a standard data schema would be useful. Publishing data from multiple authorities would allow that data to be analysed by interested individuals. The construction of a website could be done in gradual steps, with user feedback.

### Start with a proof of concept - and help!

With something like this it's worth starting small. I've been constructing a data schema for mobile libraries, and attempting to put this into practice across all Scottish mobile library services, of which there are 20. That's a manageable amount to create something really quite interesting that others could then get involved with.

To make this worthwhile it needs resources though. Constructing the data isn't too difficult, and creating a single snapshot of that data, in a data portal, presented in a single web page is possible. But that's a proof of concept only. In time it needs:

* User experience and accessibility experts to provide professional designs, especially for print formats
* Engagement with library services to provide data, and take responsibility for maintaining data
* Library services to actually use the portal for promoting their services
* User feedback and workshops to improve the web portal
* Library services willing to take risks and experiment, such as installing a GPS tracker on the mobile library

Any mobile library services interested in this?
