---
title: Libraries on the high street
excerpt: Analysing libraries that are located in and around high streets
categories:
  - Library locations
tags:
  - GIS
  - High streets
---

# Libraries on the High Street

High Streets are considered important. In December 2020 there was an announcement of [£830 million funding boost for high streets](https://www.gov.uk/government/news/830-million-funding-boost-for-high-streets), to cover 72 regeneration projects.

> High streets are more than simply shopping areas. They are important hubs for communities and play a big role in entertainment, housing and our health – as highlighted by Public Health England’s [Healthy High Streets research](https://www.gov.uk/government/publications/healthy-high-streets-good-place-making-in-an-urban-setting). They are important for the UK’s economy and for our well-being. 
>
> **Ordnance Survey**

What is a high street? Many streets have the name ‘High Street’, but the Oxford dictionary describes it as "the main street of a town, where most shops, banks, etc. are".

## Defining high streets

In 2019 Ordnance Survey (OS) created a definition of a high street and by identifying concentrations of retail buildings they were able to [map Britain’s High Streets](https://www.ordnancesurvey.co.uk/business-government/sectors/public-sector/high-streets).

The Office for National Statistics (ONS) use these to develop intelligence about Britain's High Streets. See [High streets in Great Britain](https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/populationestimates/articles/highstreetsingreatbritain/march2020) for details, such as the building use on those streets, and employment and population patterns. This kind of analysis will be essential in understanding how high streets are changing, and the effect of regeneration projects. It's a good example of how a basic dataset can lead to further uses and insights.

There are 6,136 individual high streets in England. Yet more than one street in a single shopping area counts. For example, Gloucester has four streets leading from the centre. All 4 count as high streets in the data. It would also be useful to consider multiple high streets that form a single retail destination.

<figure>
  <img src="https://raw.githubusercontent.com/LibrariesHacked/librarieshacked.github.io/master/images/2021-04-12-gloucester-high-streets.png" alt="Map of the centre of GLouceser with lines plotted along the high streets leading from the cross and a poitn lotted for Gloucester library"/>
  <figcaption>Gloucester, with multiple high streets leading out from the centre, and the library a short way from Eastgate high street. Contains OS data &copy; Crown copyright and database rights 2021.</figcaption>
</figure>

By grouping high streets that are within 150 metres of one another, there are 3,131 high street destinations in England. Different clustering options give different results, so the exact number isn't too important. The rest of this post also tries to avoid being deceptively precise.

## Libraries and high streets

Public libraries and high streets provide mutual benefits, with shared footfall amongst other opportunities. High street venues for culture and learning should be as welcome as shopping. It's refreshing to have a high street location where you can take a break from retail, and still have a great time. In 2020 the Arts Council published [Culture on our High Streets](https://www.artscouncil.org.uk/news-and-announcements/culture-our-high-streets), which looked into these benefits.

On behalf of public libraries, Libraries Connected are a part of the Sector Leaders Group which provides insight to the [High Streets Task Force](https://www.highstreetstaskforce.org.uk/). Documents such as [Libraries Deliver: Ambition for Public Libraries in England](https://www.highstreetstaskforce.org.uk/resources/details/?id=5f538224-45be-45a2-96fa-746337e0527a) are listed in high street resources. Libraries are clearly considered to be important to high streets, but there is little data about their relationship. It would be difficult to make an informed guess at basic questions, such as how many libraries are on a high street. Or the proportion of high streets that have a library.

Much more could be possible. Both libraries and high streets measure footfall, how do these compare? Do they show similar patterns throughout the day, across the week, and between seasons? For those libraries that have seen a decline in visits, is the same true of the associated high street? National patterns can be useful, but there will need to be further exploration at a local level, and sharing the resulting insight.

## Not all libraries are the same

Taking a step back, libraries are located in many different areas. Each library will serve a different mix of users who are local residents, shoppers, visitors, etc.

The Office for National Statistics publish [rural/urban classifications](https://www.ons.gov.uk/methodology/geography/geographicalproducts/ruralurbanclassifications/2011ruralurbanclassification) for areas in England. These classify locations into either rural or urban, and 10 sub-groups. These range from the most urban of 'Major Conurbation', to the mega rural 'Hamlets and Isolated Dwellings in a sparse setting'.

For libraries in England, 75% are in urban areas, with 25% in rural areas. But libraries have some presence in all the sub-groupings. In comparison, over 90% of high streets are in urban areas. It would be wrong to only consider libraries with reference to high streets and urban life; libraries serve all areas of the country. And that's not even including mobile library stops, and other services designed to serve rural populations.

I also looked at library locations alongside area deprivation indicators. [National measures of deprivation](https://www.gov.uk/government/statistics/english-indices-of-deprivation-2019) provide information such as income, education, and health. Areas are ranked and assigned a multiple deprivation index from 1 to 10. Those with an index of 1 are the most deprived in England, with 10 being the least. Libraries are evenly spread across all these deciles, with close to equal numbers in each. It's only an overview, but suggests a sector (correctly) focused on equitable service rather than retail strategy.

Data on public library locations isn't good, but there are ways of making it better. Historically, statistics have been collected on counts of libraries, but these don't help with location analysis. The sector-led [Open data schema project](https://schema.librarydata.uk/) defines a format for data to be be shared by library services. This includes a structure for the location and opening hours of libraries, linking into useful ways that data can be used. This builds upon previous data collection exercises and will be essential for future insight into libraries.

## Libraries on the high street

With OS high streets, and 'good enough' data on library locations it was possible to determine how many libraries are directly on a high street: about 25%.

However, we should also consider libraries that are relevant to a high street. The [Arts Council report](https://www.artscouncil.org.uk/news-and-announcements/culture-our-high-streets) included organisations that were within 5 minutes walk. That analysis has to be considered carefully; for example a walking distance doesn't account for different access requirements, and straight line distances are often deceptive. An astute commenter on Twitter pointed out they visit a library due to it's convenient location when walking from the high street to the train station - less about distance and more about being between locations.

But even taking these into account, with a 5 minute walking distance, around 65% of libraries were near to a high street.

For some extra context I compared this to locations of Waterstones book shops in England. They are far more tied to the high street: almost all stores were in urban areas, with 75% directly on high streets and close to 100% within a 5 minute walk. Well, it's hardly breaking news that a high street outlet is likely to be found on the high street, but it highlights the difference to libraries.

## Strategies

I wouldn't over-emphasise the strategic benefit for libraries to be located on high streets. Libraries are not retail, and it's likely that a strength is to remain in a variety of locations.

But for high streets, libraries still have a hugely significant presence. Other high street venues may be exclusively located on high streets, but there will be few with comparable numbers to libraries. I estimated that over half of high street destinations have an associated library. Strategies for high street regeneration will need to consider library activity as being a key to attracting visitors. It would also make sense for this to be reflected in the funding available to library services. On the part of libraries, usage data should be made openly available [with the aid of the library open data schemas](https://schema.librarydata.uk/).

For all libraries, an important task is to make appropriate use of data. For those on a high street, the high street data provides essential intelligence. Other datasets such as deprivation and rural/urban classifications can provide further insight.

All public sector organisations can access data on high streets using the [Public Sector Geospatial Agreement](https://www.ordnancesurvey.co.uk/business-government/public-sector-geospatial-agreement).

## Summary

1. There are around 3,500 high street destinations in England and 2,500-3,000 libraries.
2. Libraries in England are in all rural/urban classifications, with about 75% in urban areas.
3. Libraries in England are in areas of all deprivation measures.
4. About 25% of English public libraries are on high streets, with 65-70% close to high streets.
5. Over half of high street destinations in England have a library.

