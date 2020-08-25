---
title: Public library membership
excerpt: The membership dataset of the public libraries data schema
categories:
  - Library data schema
tags:
  - Library data
  - Open data
  - Membership
  - LSOAs
  - Geography
---

Last year a working group organised by the DCMS began creating a public library data schema. There is more detail on that in [library open data: an update](https://dcmslibraries.blog.gov.uk/2020/08/03/library-open-data-an-update/) by Claire Back. The [library data schema pages](https://schema.librarydata.uk) are also available to explore. But here's some personal thoughts on the membership dataset.

All public libraries hold data on members. And it has plenty of problems and discussion points. To start with, how long do people remain members without using their library? I have loads of library cards, and like to think of myself as a member of them. But those libraries will have deleted me years ago.

<figure>
  <img src="https://github.com/LibrariesHacked/librarieshacked.github.io/raw/master/images/2020-08-24-library-cards.jpg" alt="A set of library cards including a school library and 7 other library services"/>
  <figcaption>I'm a 'cardholder' of quite a few library services. But no longer a member.</figcaption>
</figure>

Do I even need to be a member to use these libraries? People that only go in to read papers aren't. Or those working on laptops. Or are they? I've heard some services insist on checking out newspapers in the same way as books. And require membership to log onto WiFi. These are decisions for library services, though they'll affect how easy it is to compare data.

## Quirks in the data

[Annual CIPFA reports](https://www.cipfa.org/services/comparative-profiles/public-libraries/cipfastats-library-profiles-english-authorities-2019) use 'borrowers' rather than members, with a very specific definition:

> "An active borrower is defined as someone who has borrowed at least one item from the library during the year. This figure should come from the library management system and relate to borrowing and not membership figures."

CIPFA can be as specific as they like, library data won't be. Some systems don't work like that. A system may store a date against each member and update it when that person 'does' something. This may be borrowing a book, logging into their account, using an e-resource, booking a PC, etc. This data will be the basis of reporting active membership. I remember asking a library supplier what library services did to meet the strict 'borrower' definition, as it wasn't possible in their reporting. "They don't" was the concise answer, and it remains true. Library systems staff will know these problems, but few other people will. It makes for some lovely geeky library data conversations though.

A lesson learned from the data discussions was that if we specified data beyond what was possible we'd end up with these hidden problems. The schema needed to be flexible, and give guidance on handling differences. Having an overly-strict definition is deceptive to the end-user, pretending the data is something it's not. It's better to publish real data and communicate the problems it contains.

Services maintain their membership databases to remove members they don't consider active (people like me, despite my library cards). My view always tends to be: the more data, the better. If services can publish a summary of members in their membership database, that will be a simple and comprehensive outcome.

Collecting metadata about different policies is then a good way of communicating the differences.

## Geography

CIPFA combine borrower counts and population of the local authority, and report the number of borrowers per 1,000 population. For example, in 2019 North East Lincolnshire declared 7,381 active borrowers. This is 46 borrowers per 1,000 population (5%). Merton libraries had a very different report, with 347 members per 1,000 population (35%). That's a huge difference. One service have 7 times as many borrowers, relatively speaking, as the other.

It's possible that both are to the CIPFA definition of active borrowers, but I doubt it. Partly because one service happens to be using a system that doesn't work that way.

But, even if they're accurate, is it valid to report relative to the population of the local authority? Only if you're only counting borrowers who live in the service. But there will be plenty of people using libraries between authorities, particularly in small urban areas. CIPFA, to be fair, primarily compare services against those with a similar local authority profile. But we have no data on where members live, or how significant that may be to comparisons.

In the membership schema we have an extra dimension to the data called 'Area code'. This is to break down membership counts by Lower Super Output Area (LSOA). These are small areas devised for statistics, and provide consistency in number of people (between 1,000 and 3,000), and households (betweeen 400 and 1,200). They allow for counting members from outside of the authority, but also provide additional detail.

While trialling the data schema we saw Plymouth membership data. About 10% of members lived in other local authorities. Some of these were obvious places: Cornwall and Devon mainly. But also Bristol, Wiltshire, and Surrey. 10% may not seem much, but in Bath and Bristol out of area membership became closer to 15%. In other areas it may be more. We don't know until we start getting more data.

<figure>
  <img src="https://github.com/LibrariesHacked/librarieshacked.github.io/raw/master/images/2020-08-24-plymouth-members.png" alt="Plymouth library membership plotted on a map and shaded by concentration of members relative to population"/>
  <figcaption>Plotting the locations of Plymouth libraries members. This shades the map to highlight membership concentrations, relative to population. This particular example includes an area of Devon which has 19% membership of Plymouth libraries.</figcaption>
</figure>

## Additional analysis

This all works best when more services release data. Geographic data on membership allows for services to see areas where they have low or high membership. But what about people who live within their authority, but use libraries outside of it? Without other libraries releasing data, they have no knowledge of them. It could be easy to assume certain areas don't use libraries, when in reality they just find it easier to go to the neighbouring service!

An extra point about these geographic areas is they're designed to combine with other datasets which provide data at that level. They are census-level geographies, so all the data from the Census will be available. There is also additional information such as the deprivation of the area in different measures: health, education, employment, income, etc. These are all worthwhile datasets for library services to use when analysing their membership.