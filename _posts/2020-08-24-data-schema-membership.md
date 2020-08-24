---
title: Public libraries membership data
excerpt: The membership dataset of the public libraries data schema
categories:
  - Library data schema
tags:
  - Library data
  - Open data
  - Membership
published: false
---

Since last year a working group organised by the DCMS have been creating and testing a core public library data schema. There is more detail on that in [Library open data: an update. 3 August 2020](https://dcmslibraries.blog.gov.uk/2020/08/03/library-open-data-an-update/) by Claire Back. The [library data schema pages](https://schema.librarydata.uk) are also available to explore. The following are some personal thoughts on the membership schema.

7 datasets have been trialled among various library services. The [library membership](https://schema.librarydata.uk/membership) one is clearly an essential dataset held by all public libraries. But it has a lot of problems and discussion points. To start with, how long do people remain members without any usage activity? I have a personal collection of library cards, and would like to believe myself a member of all of them. But the library services will likely have deleted me by now.

<figure>
  <img src="https://github.com/LibrariesHacked/librarieshacked.github.io/raw/master/images/2020-08-24-library-cards.jpg" alt="A picture of a set of library cards including a school library and 7 other library services."/>
  <figcaption>A set of library membership cards for library services I am a 'cardholder' of. But not necessarily a member.</figcaption>
</figure>

What do I need membership for in a library? People that only wish to go in to read the paper probably aren't. Or those using the WiFi. Or maybe they are? I've heard in some services that newspapers are checked out in the same way as books are. Same with logging on to WiFi. These are decisions for individual library services, though they will change how comparable or 'uniform' the data is between services.

### Quirks in membership data

The [annual CIPFA reports](https://www.cipfa.org/services/comparative-profiles/public-libraries/cipfastats-library-profiles-english-authorities-2019) focus on 'borrowers' rather than members, with a very specific definition:

> An active borrower is defined as someone who has borrowed at least one item from the library during the year. This figure should come from the library management system and relate to borrowing and not membership figures.

CIPFA can be as specific as they like, it doesn't mean the data will be. Some systems don't work that way. A system may treat active members as those who have logged into a PC, paid a fine, or used an e-resource. I remember querying with a library supplier what services did to meet the strict CIPFA definition, which wasn't possible in their reporting system. "They don't" was the concise answer, and it remains true. But library staff will know of these problems, very few other people will.

One of the biggest lessons from the data discussions was that if we specified data beyond what was possible then we'd end up with various hidden workarounds. Therefore the schema and definitions needed to be broad, and give guidance on differences. Having a very strict definition also makes the data deceptive to the end-user, causing an illusion that the data is something it's not. It's better to publish real data and communicate the problems it contains.

Services already maintain their membership databases to remove members they don't consider active. My view always tends to be the more data, the better. Asking services to simply publish a summary of members in their membership database is going to be the most useful and simple. Collecting metadata about each services policies would then be a good way of understanding differences.

### Geography

How is membership data currently analysed? CIPFA combine borrowers with the population of the local authority, and report the count of borrowers per 1,000 population. For example, in 2019 North East Lincolnshire reported 7,381 active borrowers. This was 46 borrowers per 1,000 population (4.6)%. Merton libraries had a very different report, with 347 members per 1,000 population (35%).

It's possible that these reports are both strictly to the CIPFA definition of active borrowers, but I doubt it. Not least because one service happens to be using a system that doesn't work that way.

But, even if they were accurate, is it valid to do this analysis based on the population of the local authority? Only if you are only counting borrowers who live in the service. But, particularly in small urban areas, there will be a lot of crossover of people using libraries between authorities. CIPFA, to be fair, primarily compare services against those that have a similar profile. But we have no data on where members live, or how significant that may be.

In the data schema, we have added an extra dimension to the data called 'Area code'. This is to break down the membership counts by Lower super output area (LSOA). These are small comparable areas devised from number of people (between 1,000 and 3,000) and households (400 - 1,200). They would easily allow for analysis of members who are from outside of the authority, but can also provide greater levels of detail such as local authority ward.

During the data trials we saw Plymouth membership data. It looked like about 10% were from other local authorities. The obvious ones you'd expect: Cornwall, Hampshire, Devon. But also Bristol, Wiltshire, and Surrey. 10% may not seem much. But in Bath and Bristol this became closer to 15%. In other areas it may then be significantly more. We don't know until we start getting more data.



## Extra analysis

An additional point about those geographic areas is that they are designed for combining with other datasets, which also release data at that level. They are census-level geographies, so all the data from the Census will be available. But also additional information such as the deprivation of the area in different measures: health, education, crime, etc. These are all essential datasets for library services to use when analysing their service's reach into the community.