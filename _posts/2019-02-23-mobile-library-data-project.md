---
category: data 
tags: opendata stats public mobiles
title: Mobile libraries data project
excerpt: Promoting the use of mobile library data to solve problems.
published: true
meta: data
header:
  overlay_image: /images/2019-02-23-mobile-library-data-project.png
  overlay_filter: 0.5
---

It is easy to complain about lack of data on UK static public libraries, but there have been various attempts. The Collections Trust in 2012, the Libraries Taskforce in 2016, and ongoing wider projects such as Open Street Map and Wikidata.

Lack of mobile library data goes beyond this. At least with static libraries the public can go to their local authority website and see a list of libraries. Normally in accessible web formats, with additional features such as finding your nearest.

With mobile libraries you *may* get a link to a PDF. Often multiple PDFs - called North, South and Central (no mention of East or West), and you need to choose which one applies to you. The PDFs are often unreadable. They attempt to convey a stop location, a route, and a calendar of dates. One such timetable lists the stop locations with different combinations of text/background colours, and then provides a calendar lookup that uses the same colouring. So as long as you remember that your stop is light blue background with white text, rather than dark blue background with black text, and you have no difficulty with those differences, then you're fine.

Sometimes there is no PDF, simply a line on a web page recommending that you should call your nearest library to find out when the mobile library visits. It's as if the Internet never happened.

It is hard to blame library staff for this. Mobile library data is complex, and presenting it is difficult. But each authority is attempting to do this in isolation. After looking through **every** mobile library web page and timetable, there are very few that are alike, despite attempting to achieve the exact same thing.

In the last two years, twelve local authorities have stopped providing mobile library services. The decline in mobile library provision is more rapid and significant than that of static libraries, and it affects those least able to get to alternative local services. But with hardly any data on mobile libraries it is difficult to keep track of this. [This data file](https://github.com/LibrariesHacked/mobiles-librarydata/blob/master/data/authorities.csv) is updated with a list of local authorities, and the number of mobile libraries each has. But even updating that simple data is a manual process of searching through each local authority website.

### What can be done?

What are the problems that need some kind of solution?

* There is no standard for presenting mobile library timetables. This leads to decline in use, serious accessibility issues, and lack of investment in mobile services. Ideally there should be:
** A printable timetable that is accessible and easy to understand
** Mobile friendly web information to find your nearest stop and next visit date.
** Raw data, published against a standard schema
* Mobile libraries would most benefit from increasingly open geographic intelligence on population and deprivation stats, and routing analysis. But with no data on mobile libraries, there is no way of taking advantage of this.
* Mobile library data is complex and there is no standard way of holding it. Therefore there can be no national analysis and consequently no way of providing national support or guidance.

Looking at these issues, possible project steps could be:

1. Construct a standard format for holding and maintaining mobile library data, after researching existing data and requirements.
2. Create a data portal to collect and aggregate this data, across mobile library services
3. Allow maintenance of data on this data portal e.g. by local authorities
4. Design a print format standard for presenting this data (e.g. using rail/bus timetables as reference) 
5. Create a website to list this data and provide:
** Searching for your nearest stop
** Listing next arrival times for nearest stop.
** Download of printable timetables after selecting a stop or route
** Mobile friendly viewing
** Maps for viewing stop locations
** The option to embed these features on individual local authority websites
5. Explore future benefits
** Analysis of stop locations with relation to current population need
** Analysis of routes and efficiencies, particularly across authority boundaries
** Display of live data such as GPS in mobile libraries to present this in the website
** Exploration of dynamic timetables such as 'request stops' that could be requested through the website.
** More modern web integrations such as mobile notifications and downloading stop timetables to phone calendars.

This is quite an ambitious project, but each step presents benefits. Simply having a standard data schema would be useful. Being able to publish data from multiple authorities would allow that data to be analysed by interested individuals. The construction of a website could be done in gradual steps with user feedback.

## Start with a proof of concept - help!

With something like this it's worth starting small. I've been constructing a data schema for mobile libraries and attempting to put this into practice across Scottish mobile library services, of which there are 20. That's a manageable amount to create something really quite interesting that others could then get involved with.

This needs resources though. Getting the data isn't too difficult, and creating a single snapshot in time of that data and a single web portal is possible. But in time it would need:

- User experience and accessibility experts to provide professional designs
- Engagement with library services to provide data, and take responsibility for maintaining this
- User feedback and workshops 

Anyone interesting in this?