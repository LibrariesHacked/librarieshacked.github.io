---
title: "Mobile libraries: Scottish mobile libraries information"
excerpt: Assessing existing mobile library information in Scotland
categories:
  - Mobile libraries
---

It is easy to make generalisations about mobile library information on public websites.

> Online mobile library timetables are appalling

This is generally true, but does need some evidence behind it.

Firstly, what makes good information on a website? For a mobile library you would expect to be able to find out where your nearest stop is, what day it arrives on, the particular dates, and what time. 

All websites have an obligation for accessibility, and making sure the information is able to be consumed by everyone. This is especially the case for public sector websites, where people do not always have a choice as to whether they use it not. Not using the website would mean not being able to make use of public services.

New legislation came into affect in September 2018 for all public sector websites to meet a minimum standard. More details are available at the Gov.uk guidance: [Make your public sector website or app accessible](https://www.gov.uk/guidance/accessibility-requirements-for-public-sector-websites-and-apps).

Given it's a legal requirement, this seems to be a reasonable measure to assess mobile library timetables.

There are around 90 library services in the UK that operate a mobile library. It is hard to assess all these in one go, so this post will limit to the 22 in Scotland. This is not a substitute for a proper accessibility assessment, or real user testing. It simply gives an indication of the common problems around mobile library information.

The process for the assessment was to look through each mobile library website and record:

1. Is the information published as HTML? Documents should primarily be available in HTML format as it provides better options for assistive technologies.
2. Are web maps used? This can aid in seeing where stops are, but online maps are often not very accessible. Because of this they are a type of content that can be exempt from being made accessible. That does not mean public services can use online maps and not care about accessibility. It means they should provide the map information in other ways.
3. Is the information published as a PDF? PDFs tend to be the most common format for mobile timetables, and aren't as good as HTML content. Measures can be taken to ensure PDFs are accessible, and they could be used in addition to web content (e.g. for an easily printable format).
4. Does the website use colour for meaning? You should not make use of colour to represent meaning when it is the only method for doing so. For example, colour-coding calendar dates to communicate which dates a mobile route is active on.
5. Is there any missing information? Sometimes basic information can be missing from online timetables. For example, where a stop is described as 'week 1' or 'week 2' but not dates are given to match to these week numbers.
6. Does the website have an Accessibility Statement? This is a requirement of the legislation. In reality the accessibility statement should be assessed for providing certain information, but this exercise just assesses whether any statement exists.
7. Any additional notes about the timetables.

A simple pass/fail was then given to the service based upon the following criteria

1. The information should be published as HTML
2. There should be no reliance on colour for
3. There must be no missing information
4. There must be an accessibility statement

The results are shown below and are avilable [in a spreadsheet file on GitHub](https://github.com/LibrariesHacked/mobilelibraries-data/blob/master/organisations_scotland.csv).

From the 22 library services, key findings were:

- Three library services 'passed'. [Edinburgh](http://www.culturepk.org.uk/libraries/services-in-the-community/mobile-library-service), [Perth and Kinross](http://www.culturepk.org.uk/libraries/services-in-the-community/mobile-library-service), and [Scottish Borders](https://www.scotborders.gov.uk/mobilelibrary). These are worth exploring, and will be very useful for creating a system to provide mobile library data.
- Only 12 service websites seemed to have any kind of accessibility statement. In many cases the ones that did were outdated and didn't cover the information that needs to be provided.
- Almost half (9) relied on clour coding to convey meaning.
- 15 still used PDFs to publish mobile timetable information.

<div class="container"><table class="cell-border" id="tblscottishmobiles"></table></div>