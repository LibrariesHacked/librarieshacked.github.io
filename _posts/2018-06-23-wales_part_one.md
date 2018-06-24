---
title: "Wales libraries open data part one"
date: "2018-06-23 17:00:00 +0100"
---

It was great to be involved in a [@CILIPinWales](https://twitter.com/CILIPinWales) project, led by [Kathryn Parry](https://twitter.com/kathrynparry1), to produce a list of the libraries in Wales, display these on a map, and put these into Wikidata. More details on [this CILIP page](https://www.cilip.org.uk/members/group_content_view.asp?group=200145&id=733577).

The work involved Kathryn painstakingly going through lists of libraries in Wales, involving various groups to help out in checking these. And then [Jason Evans](https://twitter.com/WIKI_NLW), Wikimedian in residence at the National Library of Wales, pushing them into WikiData (along with creating loads of great visualisations).

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">We recently worked with <a href="https://twitter.com/CILIPinWales?ref_src=twsrc%5Etfw">@CILIPinWales</a> to create open data for every library in Wales using <a href="https://twitter.com/wikidata?ref_src=twsrc%5Etfw">@wikidata</a>! <a href="https://t.co/Q5a8t3J5Pk">https://t.co/Q5a8t3J5Pk</a> <a href="https://t.co/zGTOgFgxEE">pic.twitter.com/zGTOgFgxEE</a></p>&mdash; Jason Evans (@WIKI_NLW) <a href="https://twitter.com/WIKI_NLW/status/994592370426511361?ref_src=twsrc%5Etfw">May 10, 2018</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

Maintaining data on the locations of libraries has been attempted before. In 2012 the Collections Trust published contact details and locations for 4039 public libraries in the UK. There was a process for UK libraries to update this data, and it powered the [Find a Library](http://www.bookmarkyourlibrary.org.uk/find-a-library) page on the SCLs Bookmark Your Library site. Unfortunately these stopped being maintained, and the underlying culture grid aggregation platform (which held far more data than just about libraries) was also [discontinued in 2015](https://www.museumscomputergroup.org.uk/culture-grid/).

In 2016 the Libraries Taskforce requested a list of libraries from [all 151 English public library authories](https://www.gov.uk/government/publications/public-libraries-in-england-basic-dataset). 
That included basics like name and address, but also libraries that had closed since 2010, how the libraries were run, and how many hours they were open. Although useful, it didn't take long for it to become out of date.

More than just being useful, an up to date list of libraries is the very minimum data we should hold as open data. If that can be done, and library services can engage with it, it could lead to more interesting datasets.

### Assessing areas by distance to a public library

One use of locations of libraries is to assess (or 'rank') areas of Wales by distance to a public library. There are 91,123 postcodes in Wales, and [open data is available from Ordnance Survey](https://www.ordnancesurvey.co.uk/business-and-government/products/code-point-open.html) that can be used to calculate the straight line distance from a postcode to the nearest library.

Although people may be interested in how far they area from a library, it will likely just highlight areas that are particularly rural (e.g. 5 miles from a library). These aren't necessarily 'library-poor', they're likely to be areas where you wouldn't expect to see a static library. The Office for National Statistics [provide rural/urban classifications of areas](https://www.ons.gov.uk/methodology/geography/geographicalproducts/ruralurbanclassifications/2011ruralurbanclassification) so we can assign these to postcodes and ensure we only rank postcodes on distance to a library against postcode from the same classification.

[The Wales Library Postcode Assessor](https://walespostcodes.librarydata.uk) will check out your postcode (it must be in Wales), and give it a grade of A*-F (A* being very good and close to a library, F being very far). Alternatively, a complete spreadsheet of all postcodes in Wales with the grading is [available to download on GitHub]().

### Wales public library standards

The [Wales public library standards](https://gov.wales/topics/culture-tourism-sport/museums-archives-libraries/libraries/public-library-standards/?lang=en) give precise targets for locations of libraries. From 2014-2017 is was:

>> Where the population density is 20 or more persons per hectare, at least 95% should live within two miles of a static service point. For those authorities with a population density between 1.1 and 19.9 persons per hectare, at least 75% should live within 2.5 miles (or 10 minutes travelling time on public transport) of a static service point or within a quarter of a mile from a mobile library stop. For those authorities with a population density of 1.0 persons per hectare or fewer, at  least 70% should live within 3 miles (or 15 minutes travelling time on public transport) of a static service point, or within quarter of a mile of a mobile library stop. All authorities have fully met the target in each year of the framework.

In the latest set of standards it is described as households rather than population, although they'll give similar results.

Open Data on library locations allows us to independently analyse the data for these standards. It's quite a mixed set of assessments: in some cases the population within 2.5 miles, in others 3 miles. It would be good to understand the reasoning behind it all. But for each authority we can calculate: 

- The population density (population divided by number of hectares)
- The percentage population within 2 miles of a library
- The percentage population within 2.5 miles of a library
- The percentage population within 3 miles of a library

Results of the static library analysis [are on Github](https://github.com/LibrariesHacked/wales-librarydata/blob/master/data/libraries/standards.csv). Cardiff is the only authority with a population density greater than 20 persons per hectare so is the only one required to have 95% of people within 2 miles of a library. This is managed, with 99%. At the other end of the scale there are a few with low population density: Ceredigion, Gynedd, Powys. Ceredigion seems to struggle to make the standard with 68% within 3 miles of a library. Though that's pretty close to the 70%, and doesn't take into account the mobile library stops to provide additional coverage.

We don't yet have open data on mobile library stops. There [were 13 authorities in Wales](https://github.com/LibrariesHacked/mobiles-librarydata/blob/master/data/authorities.csv) with at least 1 mobile library, so it would be great as a future task to maintain this data somewhere like WikiData, and perhaps build a [mobile library lookup tool](http://somersetmobiles.librarieshacked.org/).
| 
Part 2: Wales Libraries, deprivation, and real travel statistics (coming soon)