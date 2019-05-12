---
title: "Mobile libraries: Scottish service websites"
excerpt: Assessing mobile library information in Scotland
categories:
  - Mobile libraries
---

It is easy to make generalisations about the quality of mobile library information.

> Online mobile library timetables are appalling

This is generally true, but needs evidence behind it.

Firstly, what makes good information? For a mobile library you would expect to be able to find out where your nearest stop is, what day it arrives, the particular dates, and what time. 

All websites have an obligation to be accessible, and make sure the information is able to be consumed by everyone. This is especially the case for public sector websites, where people do not always have a choice as to whether they use it not.

New legislation came into effect in September 2018 for all public sector websites to meet a minimum standard. More details are available at the Gov.uk guidance: [Make your public sector website or app accessible](https://www.gov.uk/guidance/accessibility-requirements-for-public-sector-websites-and-apps).

Given that it's a legal requirement, this seems to be a reasonable measure to assess library timetables.

There are around 90 UK library services operating mobile libraries. It is hard to assess all these in one go, so this post will check the 22 in Scotland. This is not a substitute for a proper accessibility assessment, or real user testing. It simply gives an indication of common problems.

The process for the assessment was to look through each mobile library website and answer these questions:

1. Is the information published as HTML? Documents should be available in HTML format as it provides better options for assistive technologies.
2. Are web maps used? These can be useful, but are difficult to make accessible. Because of this they are a type of content that can be exempt from being made accessible. That does not mean public services can use maps and not care about accessibility. It means they should acknowledge they use maps, and provide the information in other ways.
3. Is the information published as a PDF? PDFs tend to be the most common format for mobile timetables. Although not ideal, measures can be taken to ensure PDFs are accessible, and they could be used in addition to web content (e.g. for an easily printable format).
4. Does the website use colour for meaning? You should not use colour to represent meaning when it is the only method for doing so. For example, colour-coding calendar dates to show which dates a mobile route occurs on.
5. Is there missing information? Sometimes basic information can be missing from online timetables. For example, where a stop is described as 'week 1' or 'week 2' but no dates are given to match to these week numbers.
6. Does the website have an Accessibility Statement? This is a requirement of the legislation. The statement itself should be assessed for providing certain information, but this exercise just assesses whether a statement exists.
7. Any additional notes about the timetables.

A pass/fail was then given to the service based upon the following criteria

1. The information should be published as HTML 
2. There should be no reliance on colour for meaning
3. There must be no essential missing information
4. There must be an accessibility statement

The summary results are shown below, and full data is available [in a spreadsheet file on GitHub](https://github.com/LibrariesHacked/mobilelibraries-data/blob/master/organisations_scotland.csv).

For the 22 library services key findings were:

- Three library services 'passed'. [Edinburgh](http://www.culturepk.org.uk/libraries/services-in-the-community/mobile-library-service), [Perth and Kinross](http://www.culturepk.org.uk/libraries/services-in-the-community/mobile-library-service), and [Scottish Borders](https://www.scotborders.gov.uk/mobilelibrary). These are worth exploring, and will be very useful for creating a single system to view mobile library data.
- Only 12 service websites seemed to have an accessibility statement. In many cases the ones that did were outdated, and didn't cover the information required to be provided.
- Almost half (9) relied on colour to convey meaning.
- 15 still used PDFs to publish mobile timetable information.

<div class="container"><table class="cell-border" id="tblscottishmobiles"></table></div>