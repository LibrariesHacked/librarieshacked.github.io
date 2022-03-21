---
title: Library events
excerpt: Sharing calendar events with libraries and the public
categories:
  - Application
tags:
  - Calendar
published: true
---

Libraries Hacked projects don't always include a lot of system design. That's not always the focus of prototypes: buy the domain name and get developing. But in this case the blog will start with a bit of design before creating anything.

Let's look at event listings for libraries. Firstly library-related events managed outside of libraries. And then events held within libraries.

## Events outside of libraries

There are a couple of public library organisations sharing event calendars related to libraries. These are things like World Book Day, or National Reading Group Day.

- [Universal library offers 2022](https://www.librariesconnected.org.uk/resource/universal-library-offers-calendar-2022). A calendar of events curated by Libraries Connected. Each event is linked to the Universal Offers that public libraries provide. In total there are about 50 calendar dates and month long events.
- [SLIC - School Libraries Key Dates](https://scottishlibraries.org/staff-development/school-library-calendar/). A calendar of events curated by the Scottish Libraries Council. These are primarily for school libraries, but crossover significantly with public library events. Around 60 events.

Even this relatively low volume of data is in need of digital transformation. How can someone interested in this information use it?

1. Print it out and have it on a desk/wall. Hardly environmentally friendly, or in keeping with remote and flexible working arrangements.
2. Open up the file to look at every now and again. Fiddly. And too low-tech. You shouldn't have to open up a PDF file at regular intervals to be informed of what's going on.

There are some immediate things that can be done with this information.

1. Load the data into a database
2. Allow the data to be maintained by the original owners (e.g. Libraries Connected). Important events and occasions could change throughout the year.
3. Make it avaialable on the web in HTML. PDF is a print format. This information should be viewable in web browsers across multiple devices.
4. Allow people to integrate it into their own calendars. Some people use a google calendar, some Outlook, some Apple, etc. They should be able to add these events to their own calendar without re-keying them.
5. Add options for alerts and reminders. Interested in all events or a particular event? Ask for an alert over your preferred channel (email, SMS, mobile push, etc).

That's a rough design for having a shared event calendar for national events. Relatively easy and also low maintenance. But what about ALL library events?

## Events in libraries

If you're starting to save event information in a database, why not start adding local events to the database? And then have a calendar of events that can be tailored to an individual's location?

This starts to tackle some of the problems we have with library events.

1. They are not always marketed well online, because libraries don't necessarily do online marketing very well.
2. If marketed at all it is often to only the existing membership base.
3. No way of bringing them to the attention of 'general' library users. For example, people from a neighbouring library authority.

These are some of the arguments for a combined Library Events Calendar. If you could sign up to receive alerts for events in your area, you could be informed of events happening across library services.

What needs to be done to expand to all library events:

- Allow library services to edit and add their own events
- Integrate with existing event platforms such as Eventbrite to list events already managed elsewhere
- Ensure local events are recorded with a location and library. This ensures people don't see events that are not relevant to them
- Also allow online events. This would mean anyone could 'attend' some library events, regardless of their location.

There are a couple of starting points for this. The [create.librarydata.uk](https://create.librarydata.uk/) site allows for login and data maintenance, so can be used as a starting point for managing data. A [data schema](https://schema.librarydata.uk/) could be developed to define what makes up an calendar event, that works fo both local library events and national ones. It's also not worth reinventing the wheel - there will be plenty of existing data structures for events such [Event - on schema.org](https://schema.org/Event).

Any thoughts on this? Combined event listings is a missing element of digital library services, and anything that can be done to highlight events would be useful.
