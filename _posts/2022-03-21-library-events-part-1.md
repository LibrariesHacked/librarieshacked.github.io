---
title: Library events and calendars
excerpt: Sharing calendar dates with libraries and the public
categories:
  - Application
tags:
  - Calendar
published: true
---

Libraries Hacked projects don't always start with a lot of problem analysis. That's not always the point of prototypes, which often shortcut such steps onto rapid development (hopefully with some ethical and useful purpose). But in this case let's have a think about a problem first.

What are the problems with online event listings for libraries?

## Calendar dates outside of libraries

There are a couple of public library organisations sharing calendar dates for occasions in the year related to libraries. These are things that are managed outside of libraries but that are probably useful to get involved in, like World Book Day, or National Reading Group Day. They could be actual events with a physical location, or they could just key dates/months.

- [Universal library offers 2022](https://www.librariesconnected.org.uk/resource/universal-library-offers-calendar-2022). A PDF calendar of dates curated by Libraries Connected. Each event is linked to the Universal Offers that public libraries provide. In total there are about 50 entries.
- [SLIC - School Libraries Key Dates](https://scottishlibraries.org/staff-development/school-library-calendar/). A calendar of around 60 events and dates curated by the Scottish Libraries Council. These are primarily for school libraries, but crossover with public library events.

Even this relatively low volume of data is in need of digital transformation. How can someone interested in this information currently use it?

1. Print it out and have it on a desk/wall. Hardly environmentally friendly, or in keeping with remote and flexible working arrangements.
2. Open up the file to look at every now and again. Fiddly. And too low-tech. You shouldn't have to open up a PDF file at regular intervals to be informed of what's going on.

There are some immediate things that could be done with this information.

1. Transform into data and store in a database
2. Allow the data to be maintained by the original owners (e.g. Libraries Connected).
3. Make it available on the web in HTML format. This information should be viewable in web browsers across multiple devices.
4. Allow people to integrate it into their own calendars. Some people use a google calendar, some Outlook, some Apple, etc. They should be able to add a selection (or all) of these dates quickly to their own calendar software.
5. Provide options for alerts and reminders. Are you interested in a particular event? Receive an alert over your preferred channel (email, SMS, mobile push, etc).

That's a rough design for a shared event calendar for national dates. Relatively easy and low maintenance. But what about ALL library events?

## Events held in libraries

If you're storing calendar information in a database, why not also include local library events? You could then have a comprehensive calendar of events that can be tailored to an individual's location.

This starts to tackle some existing problems with library events.

1. They are not always promoted, because public libraries don't have the skills for online marketing.
2. If marketed at all, it is often to only the existing membership or social media base.
3. There aren't good ways of bringing them to the attention of non-members. For example, people from a neighbouring library authority.

These are good reasons for a combined library events calendar. If you could sign up to receive alerts for events in your area, you could be informed of events from across all library services.

What needs to be done to expand to all library events:

- Allow library services to add and edit their own events
- Integrate with existing event platforms such as Eventbrite, to include events managed elsewhere
- Ensure local events are recorded with a location and library. This means people can choose to not see events that they are nare not geographically relevant to them
- Also allow online events. This would mean anyone could 'attend' some library events, regardless of their location.

There are some starting points for this. The [create.librarydata.uk](https://create.librarydata.uk/) site allows for login and data maintenance, so could be used for managing data. A [data schema](https://schema.librarydata.uk/) could be developed to define what makes up an calendar event, for both local library events and national ones. It's also not worth reinventing the wheel - there will be plenty of existing data structures for events such [Event - on schema.org](https://schema.org/Event).

Any thoughts on this? Combined event listings is a missing element of digital library services, and anything that can be done to promote events would be useful.
