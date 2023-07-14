---
title: "Missing libraries: towns in England without a public library"
excerpt: An analysis using library locations and built-up areas to find the places without a public library
categories:
  - Library Stategy
tags:
  - GIS
  - Towns
published: true
---

Where are the places in England that don't have a public library? Well, there are loads of places without libraries, what does that mean? More clearly - where are the big towns without a library? Or, the towns that could really do with a library that don't have one?

In 2018 a request was forwarded to Libraries Hacked from the Libraries Taskforce, then part of DCMS. A researcher was trying to find somewhere that didn’t have a public library, where having one would have a significant positive impact on the community.

This was shortly after the [Public libraries in England: basic dataset](https://www.gov.uk/government/publications/public-libraries-in-england-basic-dataset) had been released, providing open data on library locations. That could be used to assess the current library network. It was also proposed that [literacy data published by the National Literacy Trust and Experian](https://www.experianplc.com/media/latest-news/2017/86-of-english-constituencies-have-entrenched-problems-with-literacy/) could provide data on areas in particular need of a library.

This has been on our project longlist for a long time, but other things got in the way. Also, the Experian/NLT data wasn't appetising. It was at Local Authority Ward level, and those are large and unwieldy administrative geographies, rather than population-based ones. It seemed likely that more detailed deprivation data, such as the [indices of multiple deprivation](https://www.gov.uk/government/statistics/english-indices-of-deprivation-2019) would be required, which are published at census-based geographies. They would need to be matched to geographies for recognisable places, alongside population to find the most significant. It seemed a task destined to sit on the back-burner.

However, The Library and Information Association (CILIP) recently announced an invitation to tender for a project called Future Libraries. It included this introduction:

> The aim is to develop an evidence-based map of how current and future demand for library services is changing and provide a robust basis on which to plan and advocate for future development
> 
> **CILIP [Future Libraries](https://www.cilip.org.uk/news/637671/Future-Libraries---invitation-to-tender.htm)** 

This seemed to be looking at similar analysis, but with a different focus. Demand is different from need - the project is about adapting to future population and infrastructure. We have a library network which is outdated in many respects. Where population centres have changed, as well as habits in relation to shopping and high streets, the library network has remained static (aside from closures).

It was time for a re-assessent of the data available, to answer that original query. We found the following recent open data sources:

- [Libraries in England basic dataset](https://www.artscouncil.org.uk/supporting-arts-museums-and-libraries/supporting-libraries). Now published by Arts Council England (ACE), the latest is for December 2022.
- [OS Open Built Up Areas](https://www.ordnancesurvey.co.uk/products/os-open-built-up-areas). A 2022 dataset from Ordnance Survey, representing Built Up Areas of Great Britain, designed to underpin statistical analysis.
- [English indices of deprivation 2019](https://www.gov.uk/government/statistics/english-indices-of-deprivation-2019). These are assessments of census-based areas to provide rankings of various deprivation measures.
- [Census 2021](https://www.nomisweb.co.uk/sources/census_2021_bulk). The ONS have released lots of data from the latest census, including population demographics at small census geographies.

### Initial overview

The ACE libraries in England dataset is fairly straightforward to use. After filtering it to extract statutory and staffed public libraries (as they are most directly comparable), there are **2564** of these in England.

The OS built-up areas dataset "*enables policy makers and analysts, both nationally and locally, to conduct analysis corresponding to actual urban extents, for example, at a town, city, and village level.*". In England there are **7091** of these. A slight flaw in this dataset (for our requirements) is that it includes areas that are very large e.g. Bristol. Bristol is large enough to need many libraries - it would be more preferable to have a dataset that split large cities into smaller areas. The data is probably most useful for towns that aren't part of a larger city.

Are all current libraries within built-up areas? Not quite - of the 2564 libraries, **6** were outside of these areas. Those were primarily rural libraries. For example, Dent Library Link in Westmorland and Furness is in a location with a population of just 780. There's nothing wrong with this - [Libraries on the High Street](https://blog.librarydata.uk/libraries-on-the-high-street/) research showed that public libraries appear in many different places, and shouldn't be assumed to be urban. However, such areas are out of scope for this research, as we're primarily looking at places of significant population.

<figure class="align-center">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Dent_Reading_Room.jpg/800px-Dent_Reading_Room.jpg" alt="Dent Reading Room with phone box in a rural street"/>
  <figcaption>Dent Library Link (within Dent Reading Room). John Slater / Dent Reading Room / CC BY-SA 2.0</figcaption>
</figure>

### Areas without a library

Population counts can be added to the built-up areas, using census data. The following are the 3 most populated built-up areas, without a library:

- Horndean, in Hampshire
- Chafford Hundred and West Thurrock, in Thurrock
- Whitefield, in Bury

Online research suggests these are feasible results. Horndean library [closed in 2020](https://www.hants.gov.uk/aboutthecouncil/haveyoursay/consultations/library-consultation), but the continuing necessity for a library seems clear. A new community library has formed, independent from statutory provision. The closed library is still listed on the [NHS services directory](https://www.nhs.uk/services/service-directory/rhymetime-horndean-library/N10454438) - displaying the Rhymetime schedule.

What about Chafford Hundred? A public library there [closed in 2011](https://www.yourthurrock.com/2011/05/09/chafford-hundred-library-to-close-to-public/). Rented by the local authority from the school, it suffered from being stuck between political disagreements, poor opening hours, and was ultimately closed by the school, not the local authority. A lesson perhaps of the pitfalls of co-locating services. Chafford Hundred itself is a relatively new settlement, developed in 1985 for an initial 15,000 population that has since grown. This may explain why it didn't have a dedicated public library to start with.

Similarly, Whitefield. The library and adult learning centre in Whitefield was closed in 2017. A [consultation report on the closure options](https://councildecisions.bury.gov.uk/documents/s12360/01-25-17%20LIBRARY%20-%20APPENDIX%203.pdf) highlighted that the area it served had a high proportion of young people, as well as a high level of deprivation, but that didn't help to save it.

<figure class="align-center">
  <img src="https://raw.githubusercontent.com/LibrariesHacked/librarieshacked.github.io/master/images/2023-07-13-whitefield-area.png" alt="A map displaying Whitefield near Bury where there is no library within the shaded area."/>
  <figcaption>Whitefield in Bury library services. A highly populated area with currently no statutory library service branches. Contains OS data &copy; Crown copyright and database rights 2023.</figcaption>
</figure>

### Using this data

Those consultations and closures are in the past. But all changes to the network can be assessed on a national basis, as well as a local one. Should there be a population threshold at which we believe places need a library? Shared tools and data would be useful in assessing library provision. Consultations can be challenged, and are subject to oversight from the DCMS, but even then, at what point can they step in? Without established guidance on what provision should be, it comes down primarily to ensuring the consultation has been conducted properly.

A problem with consultations is that they often use current usage as a proxy for demand. Current usage is too easily misleading - affected by opening hours, variations in measuring usage, current service offer from the library, as well as marketing. Population of an area has its flaws, but it indicates potential usage.

The House of Commons library produced a research report on the classification of towns and cities. It includes specific levels of population that serve to classify settlements:

> **Medium Towns**: settlements with a population between 25,000 and 59,999<br/> 
> **Small Towns**: settlements with a population between 7,500 and 24,999<br/>
> **Villages and small communities**: settlements with a population of less than 7,500
> 
> **House of Commons library**. [City & Town Classification of Constituencies & Local Authorities](https://commonslibrary.parliament.uk/research-briefings/cbp-8322/)

It would be possible, for example, to have library service standards that specified that small towns (and above) should have a library. But leave villages and small communities down to the discretion of the local authority. That would create clear policy on what we expect from library services.

In practice, what would this mean? There are currently **75** built-up areas with a population of over 7,500 that currently do not have a statutory library. It would not be a huge undertaking to meet that level of service.

## Areas in need of a library

It's worth being cautious around the idea of need. In library consultations it's hugely important. A local authority has an obligation to consider the population who most need their services. Who has greatest need of a library? People who can't otherwise get hold of reading material. People who need the company and health outcomes from social events. Those who don't have digital devices and need to use the PCs/tablets. Maybe those who just need to stay warm in the winter.

But for a long-term strategy, we all need libraries. Libraries will only succeed if they appeal to everyone. That doesn't mean that services shouldn't assess libraries in terms of the lifelines they provide. But it should be a part of any library strategy that they are available and appealing to all, and the goal should be to maximise usage across all demographics.

In assessing need it could be possible to come up with library specific indicators, such as using literacy data. But the commonly used [indices of deprivation](https://www.gov.uk/government/statistics/english-indices-of-deprivation-2019) provide perfectly good assessments across multiple deprivation indicators. These are income, employment, education, health, crime, barriers to housing and services, and living environment. Those are all problems in which it can confidently be said that a library service has something to offer to help out the community. Census areas are assigned a single decile (from 1-10) to give them a multiple index of deprivation, 1 is within the 10% most deprived areas, and 10 would be in the 10% least deprived.

These census areas tend to be smaller than towns, so a town would have a variety of different deprivation assessments. There are different ways of tackling this - one option is to assess each town by the minimum deprivation decile within it. It may be that only 10% of the area is at that level of deprivation, but it best represents the greatest need in the town.

Of the 75 towns, with a population over 7,500 there are **12** that serve communities with a multiple deprivation decile of 1. Such needs analysis could be used to identify priority areas.


### Summary

* It is possible to use open data on library locations alongside built-up urban extents, to identify areas that are not currently served by a statutory and staffed public library.
* Looking at small towns, with a population of between 7,500 and 24,999, we can estimate that there are 75 of these that could benefit from a library.
* Looking further at the deprivation in these towns, a shortlist of **12** contain areas of deprivation that are within the 10% most deprived areas across England and Wales.


### Further developments

The data alongside methodology and sources for the analysis will be released within the next week.

These insights should be available as interactive dashboards, rather than static reports. The OS Built-Up areas, alongside population and deprivation data will be built into the Libraries Hacked [map tool at LibraryMap](https://www.librarymap.co.uk/#/map). This will allow all users and service professionals to explore different areas and see aspects of missing library provision.
