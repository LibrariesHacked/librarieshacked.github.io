---
title: Public library membership data
excerpt: The membership dataset of the public libraries data schema
categories:
  - Library data schema
tags:
  - Library data
  - Open data
  - Membership
---

Since last year, a working group organised by the DCMS have been creating and testing a public library data schema. There is more detail on that in [library open data: an update](https://dcmslibraries.blog.gov.uk/2020/08/03/library-open-data-an-update/) by Claire Back. The [library data schema pages](https://schema.librarydata.uk) are also available to explore, but here's some personal thoughts on the membership schema.

Membership is essential data held by all public libraries. But it has plenty of problems and discussion points. To start with, how long do people remain members without using their library? I have a load of library cards, and like to think of myself as a member of all of them. But those libraries will have deleted me years ago.

<figure>
  <img src="https://github.com/LibrariesHacked/librarieshacked.github.io/raw/master/images/2020-08-24-library-cards.jpg" alt="A picture of a set of library cards including a school library and 7 other library services."/>
  <figcaption>I'm a 'cardholder' of quite a few library services. But not necessarily a member.</figcaption>
</figure>

Do I even need to be a member to use these libraries? People that only go in to read papers probably aren't. Or those working on laptops. But maybe they are? I've heard of some services insisting on checking out newspapers in the same way as books. And requiring membership to log onto WiFi. These are decisions for individual library services, though they'll affect how easy it is to compare data.

## Quirks in the data

The [annual CIPFA reports](https://www.cipfa.org/services/comparative-profiles/public-libraries/cipfastats-library-profiles-english-authorities-2019) focus on 'borrowers' rather than members, with a very specific definition:

> "An active borrower is defined as someone who has borrowed at least one item from the library during the year. This figure should come from the library management system and relate to borrowing and not membership figures."

CIPFA can be as specific as they like, library data won't be. Some systems don't work like that. A system may store an activity date against each member and update it when that person does something: borrows a book, logs in online, uses an e-resource, books a PC, etc. This data will be the basis of reporting active membership. I remember asking a library supplier what other library services did to meet the strict 'borrower'  definition, as it wasn't possible in their reporting. "They don't" was the concise answer, and it remains true. Library systems staff will know these problems, but few other people will. It makes for some lovely geeky library data conversations though.

A lesson from the data discussions was that if we specified data beyond what was possible we'd end up with hidden workarounds. The schema needed to be flexible, and give guidance on handling differences. Having an overly-strict definition is also deceptive to the end-user, pretending the data is something it's not. It's better to publish real data and communicate the problems it contains.

Services already maintain their membership databases to remove members they don't consider active (people like me, despite all our library cards). My view always tends to be: the more data, the better. If services can publish an anonymous summary of members in their membership database, that will be the simplest and most comprehensive outcome.

Collecting metadata about different policies can then be a good way of understanding differences.

## Geography

CIPFA combine borrower counts with the population of the local authority, and report the number of borrowers per 1,000 population. For example, in 2019 North East Lincolnshire declared 7,381 active borrowers. This was reported as 46 borrowers per 1,000 population (5%). Merton libraries had a very different report, with 347 members per 1,000 population (35%). That's a huge difference. One service have 7 times as many borrowers, relatively speaking, as the other.

It's possible that both are strictly to the CIPFA definition of active borrowers, but I doubt it. Partly because one service happens to be using a system that doesn't work that way.

But, even if they're accurate, is it valid to report relative to the population of the local authority? Only if you're only counting borrowers who live in the service. But there will be plenty of people using libraries between authorities, particularly in small urban areas. CIPFA, to be fair, primarily compare services against those with a similar local authority profile. But we have no data on where members live, or how significant that may be to comparisons.

In the membership schema we have an extra dimension to the data called 'Area code'. This is to break down membership counts by Lower Super Output Area (LSOA). These are small areas devised for statistics, and provide consistency in terms of number of people (between 1,000 and 3,000), and households (betweeen 400 and 1,200). They easily allow for analysis of members from outside of the authority, but also provide greater levels of detail.

While trialling the data schema we saw Plymouth membership data. It looked like about 10% of members lived in other local authorities. Some of these obvious: Cornwall, Hampshire, Devon. But also Bristol, Wiltshire, and Surrey. 10% may not seem much. But in Bath and Bristol this became closer to 15%. In other areas it may then be significantly more. We don't know until we start getting more data.

Reporting the geographic location of members then genuinely allows for accurate use of population data relative to membership.

<figure>
  <img src="https://github.com/LibrariesHacked/librarieshacked.github.io/raw/master/images/2020-08-24-plymouth-members.png" alt="Plymouth library membership plotted on a map and shaded by concentration of members relative to population"/>
  <figcaption>Plotting the locations of members of Plymouth libraries. This shades the map to highlight membership concentrations, relative to population, in and around Plymouth. This particular example displays an area of Devon which has 19% membership of Plymouth libraries.</figcaption>
</figure>

## Extra analysis

This all works best when multiple services release data. Having geographic data on membership allows for services to see areas where they have few (or many) members, within or outside of their borders. But what about people who live within their authority, but use libraries outside of it? Without other libraries releasing data, they have no view of them. It would be easy to assume there are areas that don't use libraries, when reality they just find it easier to go to the neighbouring service!

An additional point about these geographic areas is they are designed for combining with other datasets, which also provide data at that level. They are census-level geographies, so all the data from the Census will be openly available. But also additional information such as the deprivation of the area in different measures: health, education, crime, etc. These are all essential datasets for library services to use when analysing their service's reach into the community.