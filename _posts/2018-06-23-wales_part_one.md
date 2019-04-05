---
title: "Wales: library locations"
categories:
    - Wales
    - Wikidata
---

This is the first in a series of posts about libraries in Wales.

It was great to be involved in a [@CILIPinWales](https://twitter.com/CILIPinWales) project, led by [Kathryn Parry](https://twitter.com/kathrynparry1), to produce a list of the libraries in Wales, display these on a map, and store these in Wikidata as open data. More details on [this CILIP page](https://www.cilip.org.uk/members/group_content_view.asp?group=200145&id=733577).

The work involved Kathryn painstakingly working through lists of libraries in Wales, plus involving various groups to help out in verifying these. And then [Jason Evans](https://twitter.com/WIKI_NLW), Wikimedian in residence at the National Library of Wales, pushing them into WikiData. Along with creating loads of great visualisations:

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">We recently worked with <a href="https://twitter.com/CILIPinWales?ref_src=twsrc%5Etfw">@CILIPinWales</a> to create open data for every library in Wales using <a href="https://twitter.com/wikidata?ref_src=twsrc%5Etfw">@wikidata</a>! <a href="https://t.co/Q5a8t3J5Pk">https://t.co/Q5a8t3J5Pk</a> <a href="https://t.co/zGTOgFgxEE">pic.twitter.com/zGTOgFgxEE</a></p>&mdash; Jason Evans (@WIKI_NLW) <a href="https://twitter.com/WIKI_NLW/status/994592370426511361?ref_src=twsrc%5Etfw">May 10, 2018</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

Collecting data on the locations of libraries has been attempted before. In 2012 the Collections Trust published contact details and locations for 4039 public libraries in the UK. There was a process for UK libraries to update this data, and it powered the [Find a Library](http://www.bookmarkyourlibrary.org.uk/find-a-library) page on the Society of Chief Librarians website, 'Bookmark Your Library'. Unfortunately these stopped being maintained, and the underlying culture grid aggregation platform (which held far more data than just libraries) was also [discontinued in 2015](https://www.museumscomputergroup.org.uk/culture-grid/).

In 2016 the Libraries Taskforce compiled a list of libraries from [all 151 English public library authories](https://www.gov.uk/government/publications/public-libraries-in-england-basic-dataset). 
That included basic information like name and address, but also libraries that had closed since 2010, how the libraries were run, and how many hours they were open. Although useful, it didn't take long for it to become out of date.

More than just being useful, an up to date list of libraries is the very minimum the public should have access to as open data. If that can be done, and library services can engage with it, it could lead to more interesting library datasets.

### Assessing areas by distance to a public library

One use of having comprehensive locations of libraries is to consider areas in relation to their distance to a public library. There are 91,123 postcodes in Wales, and [postcode open data is available from Ordnance Survey](https://www.ordnancesurvey.co.uk/business-and-government/products/code-point-open.html) for calculating the straight line distance from a postcode to the nearest library (roughly - postcodes vary in size).

Although people may be interested in how different areas of the country compare, it would just highlight areas that are particularly rural as being 'bad'. But they're likely to be places you wouldn't expect to see a static library (maybe the middle of a forest). The Office for National Statistics [provide 10 rural/urban classifications of areas](https://www.ons.gov.uk/methodology/geography/geographicalproducts/ruralurbanclassifications/2011ruralurbanclassification) so we could ensure we only compare postcodes from the same classification.

As long as you live in Wales, the [The Wales Library Postcode Assessor](https://walespostcodes.librarydata.uk) will check out your postcode, and give it a grade of A-F (Grade A being very good and close to a library, F being very far). Alternatively, a complete spreadsheet of all postcodes in Wales with the grading is [available to download on GitHub](https://raw.githubusercontent.com/LibrariesHacked/walespostcodes-librarydata/master/data/wales_lottery.csv).

### Wales public library standards

[Wales public library standards](https://gov.wales/topics/culture-tourism-sport/museums-archives-libraries/libraries/public-library-standards/?lang=en) give precise guidance for locations of libraries. From 2014-2017 these were:

>Where the population density is 20 or more persons per hectare, at least 95% should live within two miles of a static service point. For those authorities with a population density between 1.1 and 19.9 persons per hectare, at least 75% should live within 2.5 miles (or 10 minutes travelling time on public transport) of a static service point or within a quarter of a mile from a mobile library stop. For those authorities with a population density of 1.0 persons per hectare or fewer, at  least 70% should live within 3 miles (or 15 minutes travelling time on public transport) of a static service point, or within quarter of a mile of a mobile library stop.

Open Data on library locations allows us to independently assess these standards. It's quite a complex target: in some cases the population within 2.5 miles, in others 3 miles. It would be good to understand the reasoning behind it all. For each authority we can calculate: 

- Population density (population / number of hectares)
- Percentage population within 2 miles of a library
- Percentage population within 2.5 miles of a library
- Percentage population within 3 miles of a library

Results of the static library analysis [are on Github](https://github.com/LibrariesHacked/wales-librarydata/blob/master/data/libraries/standards.csv).

Cardiff is the only authority with a population density greater than 20 persons per hectare, so is the only one required to have 95% of people within 2 miles of a library. This is achieved, with 99%. 

At the other end of the scale there are a few authorities with a population density of less than one person per hectare: Ceredigion, Gynedd, Powys. Ceredigion seems to struggle to make the standard with 68% within 3 miles of a library. However, that's pretty close to the 70%, and doesn't take into account the mobile libraries to provide additional coverage.

We don't yet have open data on mobile library stops. There [were 13 authorities in Wales](https://github.com/LibrariesHacked/mobiles-librarydata/blob/master/data/authorities.csv) with at least 1 mobile library, so it would be a great future task to maintain this data somewhere like WikiData, and perhaps build a [mobile library lookup tool](http://somersetmobiles.librarieshacked.org/).