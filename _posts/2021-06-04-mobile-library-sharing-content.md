---
title: "Mobile libraries: content sharing"
excerpt: Creating ways of sharing content from the portal to individual sites
categories:
  - Mobile libraries
tags:
  - Web
  - API
published: true
---

The [mobile library project]() takes standardised UK data on mobile library stops, routes, and timetables, and aims to present that information in one place.

However, library services will want to present information on their own library websites. They generally do this currently, but the majority currently break [accessibility requirements for public sector bodies](https://www.gov.uk/guidance/accessibility-requirements-for-public-sector-websites-and-apps).

Displaying information outside of library websites is fine, but isn't the answer. How do we present mobile library information in a standard, accessible way, and also get it onto library websites?

## Provide embeddable widgets

The existing mobile library stop list provides a table of mobile library stops. This includes the name of the stop, the address, library service, and when it is next due.

<figure>
  <img src="https://raw.githubusercontent.com/LibrariesHacked/librarieshacked.github.io/master/images/2021-06-04-mobile-sharing-content.png" alt="A screenshot of a table of mobile library stops with columns of Community, Name, Library service, and Next due"/>
  <figcaption>Make this table into a version that can be embedded on third party websites.</figcaption>
</figure>

A simpler version of this, with a search facility, will be made available for any website to embed. It will also allow for any library service to only show their stops.

It would also be worth creating a widget to embed information about a particular stop. Such as the next few dates the mobile library is due at that location. This could be embedded on any websites relevant to that location. A smaller village website for example.

When functionality such as enabling emergency cancellations to mobile library routes is added, these widgets would also then provide an additional means of showing users when the mobile library isn't running.

## Provide APIs for use by digital teams

Plenty of Council websites would much rather create their own way of displaying mobile library information - many of which will be very good.

That's still supported in a scenario where the mobile library timetable data is held externally as open data. When writing the mobile library website I intentionally created it all using a set of web services that provide the data, which could be used by other websites and services. These are all openly available.

The full technical documentation is available at [Mobile Libraries API](https://api.mobilelibraries.org/). It provides a means to return data for organisations (library services), mobile libraries, routes, and stops. That can then be displayed on any website as required.

## Link to the PDF 

Despite PDFs not being appropriate as the only way of providing information online, there are still some scenarios where they are useful.

For example, PDFs are primarily a print format, and some users may want a printout that lists the upcoming mobile library visit dates for their stop (maybe for the next year).

These can be a created from data. The mobile library API also provides a way of accessing a PDF for each stop. The PDF can be made available by a simple link which services could then list.

It's also possible to generate a PDF that lists the full details of all stops for a library services. Although many services do this I'm not convinced it's that useful for users. It's harder to navigate and filter PDFs - in many cases it makes finding information about a stop more difficult.

## Feedback

Library services with mobile libraries - get in touch if you'd like a demo of any of these things! I already have a basic template for a stop PDF, but it would be great to co-create a good printable template for a mobile library stop. Also - if you currently only provide PDFs and not web content - what are the barriers? Would embeddable content be useful?



