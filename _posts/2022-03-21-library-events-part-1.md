---
title: Library events part 1
excerpt: Sharing calendar events with libraries and the public
categories:
  - Application
tags:
  - Calendar
published: true
---

Libraries Hacked projects don't always include a lot of system design. Simply buy the domain name and get creating is the point. But in this case the blog will start with a bit of design thinking.

Let's look at event listings for libraries. Starting off with events related to libraries, but managed outside of libraries. And then events held within libraries.

## Events outside of libraries

There are public library organisations sharing event calendars related to libraries.

- [Universal library offers 2022](https://www.librariesconnected.org.uk/resource/universal-library-offers-calendar-2022). A calendar of events curated by Libraries Connected. Each event is linked to the Universal Offers that public libraries provide. In total there are about 50 relevant calendar dates and month long events.
- [SLIC - School Libraries Key Dated](https://scottishlibraries.org/staff-development/school-library-calendar/). A calendar of events curated by the Scottish Libraries. These are primarily for library of school libraries, but in reality crossover significantly with public library events. Around 60 events.

Even this relatively low volume data is in need of digital transformation. What can someone interested in this information actually do with it?

1. Print it out and have it on a desk/wall. Yes, certainly. But hardly either environmentally friendly, or in keeping with these times of remote or flexible working arrangements.
2. Open up the file to look at every now and again. Fiddly. And too low-tech. You shouldn't have to open up a calendar file at regualar intervals to be informed of what's going on.

There are some immediate things that can be done with this information.

1. Load the data into a database from existing sources.
2. Make the data maintainable by those sources (e.g. Libraries Connected). Important events and occasions could change throughout the year.
3. Make it avaialable on the web in HTML. This goes without saying - PDF is a print format. This information should be viewable online across multiple devices.
4. Allow people to integrate it into their own calendars. Some people use a google calendar, some Outlook, some Apple, etc. It doesn't matter - they should be able to add these events to their own calendar without re-keying them.
5. Add options for alerts. Interested in all events or a particular event? Ask for an alert over your preferred channel (email, SMS, mobile push, etc).

That's a rough design for having a shared event calendar for those national events. Relatively easy and also low maintenance. But what about ALL library events?

## Events in libraries

If you're starting to save event information in a database, why not start adding local events to the database? And then have a calendar of events, with all the benefits above, that can be tailored to an individual user's location?

This starts to tackle some of the problems we have with library events.

1. They are not always marketed well online, because libraries don't necessarily do online marketing very well.
2. If marketed at all it is often only to an existing user base.
3. No way of bringing them to the attention of 'general' library users. For example, people from a neighbouring library authority, not registered with the library.

These are pretty much some of the arguments for a National Library Events Calendar. If you could sign up to receive alerts for events in your area, you could be informed of events happening across library services.

WHat needs to be done to expand to all library events:

- Allow library service to edit and add their own events
- Integrate with existing event platforms such as Eventbrite to list events already using modern platforms
- Ensure an event is recorded with a location and library. This ensures people don't see events that are not relevant to them
- Also allow online events. This would mean anyone could 'attend' some library events, regardless of their location.

There are a couple of starting points for this. The [create.librarydata.uk](https://create.librarydata.uk/) site allows for login and data maintenance, so can be used as a starting point for managing data. A new [data schema](https://schema.librarydata.uk/) needs to be developed to define what makes up an calendar event, whether it is a local library event or a national event.

Any thoughts on this? Combined event listings is a missing element of library services, and anything that can be done to highlight events would be useful.
