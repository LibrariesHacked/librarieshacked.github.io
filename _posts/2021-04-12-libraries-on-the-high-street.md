---
title: Libraries on the high street
excerpt: Analysing public library locations on and around high streets in England
categories:
  - Library locations
tags:
  - GIS
  - High streets
---

High Streets are important. In December there was an announcement of [£830 million funding boost for high streets](https://www.gov.uk/government/news/830-million-funding-boost-for-high-streets), covering 72 regeneration projects.

> High streets are more than simply shopping areas. They are important hubs for communities and play a big role in entertainment, housing and our health – as highlighted by Public Health England’s [Healthy High Streets research](https://www.gov.uk/government/publications/healthy-high-streets-good-place-making-in-an-urban-setting). They are important for the UK’s economy and for our well-being. 
>
> **Ordnance Survey**

What is a high street? Many streets have the name ‘High Street’, but the dictionary describes it as "the main street of a town, where most shops, banks, etc. are".

## Defining high streets

Based on concentrations of retail buildings alongside streets, Ordnance Survey (OS) were able to [map Britain’s High Streets](https://www.ordnancesurvey.co.uk/business-government/sectors/public-sector/high-streets).

The Office for National Statistics (ONS) use these to develop intelligence. See [High streets in Great Britain](https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/populationestimates/articles/highstreetsingreatbritain/march2020) for analysis, such as employment and population patterns. This helps understand how high streets are changing, and the effect of regeneration projects.

There are 6,136 individual high streets in England. Yet more than one street in a single shopping area counts. For example, Gloucester has four streets leading from the centre, and all 4 count as high streets. It would be useful to combine these to see single retail destinations.

<figure>
  <img src="https://raw.githubusercontent.com/LibrariesHacked/librarieshacked.github.io/master/images/2021-04-12-gloucester-high-streets.png" alt="Map of the centre of GLouceser with lines plotted along the high streets and a point plotted for Gloucester library"/>
  <figcaption>Gloucester, with multiple high streets leading from the centre, and the library a short distance from one of these streets. Contains OS data &copy; Crown copyright and database rights 2021.</figcaption>
</figure>

By grouping high streets that are within 150 metres of one another, there are 3,131 high street destinations in England. Different clustering options give different results, so there's no exact number. The rest of this post tries to avoid being deceptively precise.

## Libraries and high streets

Venues bringing culture and learning to the high street should be as welcome as shopping. Public libraries and high streets share footfall and have mutual benefits. It's refreshing to have a location where you can take a break from retail, and have a great time. In 2020 the Arts Council published [Culture on our High Streets](https://www.artscouncil.org.uk/news-and-announcements/culture-our-high-streets), which looked into these benefits.

On behalf of public libraries, Libraries Connected are a part of the Sector Leaders Group which provides insight to the [High Streets Task Force](https://www.highstreetstaskforce.org.uk/). Documents like [Libraries Deliver: Ambition for Public Libraries in England](https://www.highstreetstaskforce.org.uk/resources/details/?id=5f538224-45be-45a2-96fa-746337e0527a) are key high street resources. Libraries are considered important to high streets, but there's no information about their relationship. How many libraries are on a high street? What proportion of high streets have a library?

Much more could be possible. Libraries and high streets measure footfall, how do these compare? Do they show similar patterns throughout the day, across the week, and between seasons? For libraries seeing declining visits, is the same true of the associated high street? National patterns can be useful, but there will need to be detailed exploration at a local level, and sharing the resulting insight.

## Not all libraries are the same

Taking a step back, libraries are located in different types of areas. Each library will serve a different mix of users who are local residents, shoppers, visitors, etc.

The ONS publish [rural/urban classifications](https://www.ons.gov.uk/methodology/geography/geographicalproducts/ruralurbanclassifications/2011ruralurbanclassification) for areas in England. These classify locations into either rural or urban, and 10 sub-groups. These range from the most urban of 'Major Conurbation', to the mega rural 'Hamlets and Isolated Dwellings in a sparse setting'.

For libraries in England, 75% are in urban areas, with 25% in rural areas. But libraries are present in all the sub-groupings. In comparison, over 90% of high streets are in urban areas. It would be wrong to only consider libraries with reference to high streets and urban life; libraries serve all areas of the country. And that's not including mobile library stops, and other services designed to serve rural populations.

I also looked at library locations alongside deprivation. [National measures of deprivation](https://www.gov.uk/government/statistics/english-indices-of-deprivation-2019) provide information such as income, education, and health. Areas are assigned a multiple deprivation index from 1 to 10. Those with an index of 1 are the most deprived in England, with 10 being the least. Libraries are spread across all these deciles, with close to equal numbers in each. It's only an overview, but suggests a sector (correctly) focused on equitable service rather than retail strategy.

Data on library locations isn't good, but it could be made better. Historically, statistics have collected counts of libraries, but these don't provide location. The sector-led [open data schema project](https://schema.librarydata.uk/) defines shareable formats for library service data. This includes a structure for the location and opening hours of libraries. This builds upon previous data collection, and will be essential for future insight into libraries.

## Libraries on the high street

With OS high streets, and 'good enough' data on libraries I looked at how many libraries are directly on a high street: about 25%.

Libraries that are relevant to a high street should also be included. The [Arts Council report](https://www.artscouncil.org.uk/news-and-announcements/culture-our-high-streets) included organisations within 5 minutes walk. That analysis has to be considered carefully; for example a walking distance doesn't include different access requirements, and straight-line distances are often deceptive. An astute commenter on Twitter pointed out they visit a library due to it's convenient location when walking from the high street to the train station. In that situation the library becomes relevant to the high street by being on a particular route.

But using a 5 minute walking distance, around 65% of libraries were near to a high street.

For extra context I compared this to locations of Waterstones book shops. Almost all stores were in urban areas, with 75% directly on high streets and almost 100% within a 5 minute walk. Well, it's hardly breaking news that a high street outlet is found on the high street, but it highlights the difference.

## Strategy

Libraries are not retail, and it's good that they remain strong in a variety of locations.

But for high streets, libraries have a hugely significant presence. Other venues may be exclusively located on high streets, but few with comparable numbers to libraries. I estimated over half of high street destinations have an associated library. Strategies for high street regeneration will need to consider library activity essential for attracting visitors. It would also make sense for this to be reflected in regeneration funding. To enable this, libraries should make usage data openly available [with the aid of the library open data schemas](https://schema.librarydata.uk/).

## Summary

1. There are around 3,500 high street destinations in England and 2,500-3,000 libraries.
2. Libraries in England are in all rural/urban and deprivation classifications
4. About 25% of English public libraries are on high streets, with 65% close to high streets.
5. Over half of high street destinations in England have a library.
