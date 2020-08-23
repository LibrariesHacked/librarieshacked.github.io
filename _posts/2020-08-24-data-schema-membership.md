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

Since last year a working group organised by the DCMS have been creating and testing definitions for a core public library data schema. There is more detail on that in [Library open data: an update. 3 August 2020](https://dcmslibraries.blog.gov.uk/2020/08/03/library-open-data-an-update/) by Claire Back. The formal [library data schema pages](https://schema.librarydata.uk) are also available to view. The following are some of my personal thoughts on the membership schema.

7 datasets have been trialled among various library services. [Library membership](https://schema.librarydata.uk/membership) is clearly an essential dataset held by all public libraries. But it has it's problems and discussion points. To start with, how long do people remain members without any relevant usage activity? I have a personal collection of library cards, and to be honest would like to believe myself a member of all of them. But the library services won't see me as a member.

<figure>
  <img src="https://github.com/LibrariesHacked/librarieshacked.github.io/raw/master/images/2020-08-24-library-cards.jpg" alt="A picture of a set of library cards including a school library and 7 other library services."/>
  <figcaption>A set of library membership cards for library services I am a 'cardholder' of. But not necessarily a member.</figcaption>
</figure>

What aspects of library usage require membership? People that only wish to go in to read the paper probably aren't. Or maybe they are, in some cases. I've heard in some services that newspapers are checked out in the same way as books are. Do they also ask for membership, and if so how many extra members does that get them? All these things are decisions for individual library services, though they will change how comparable or 'uniform' the data can be.

### Quirks in membership data

Membership data collected for [annual CIPFA reports](https://www.cipfa.org/services/comparative-profiles/public-libraries/cipfastats-library-profiles-english-authorities-2019) is 'borrowers' rather than members, and has a very specific definition:

> An active borrower is defined as someone who has borrowed at least one item from the library during the year. This figure should come from the library management system and relate to borrowing and not membership figures.

CIPFA can be as specific as they like, but that doesn't mean the data will be. Some systems don't work that way. A system may treat active members as those who have logged into a PC, paid a fine, or used an e-resource. I remember querying with a library supplier what other services did to meet the strict CIPFA definition, which wasn't possible in their reporting system. "They don't" was the concise answer.

One of the biggest lessons from these library data discussions was that if we specified data beyong what was even possible then library services would either definitely not do it, or just do it in various differing ways. Therefore the schema and definitions needed to be broad, and give guidance on where there could be problems. Having a very strict definition also makes the data deceptive to the end-user. It causes an illusion that it is all to a certain definition, when it's not. It's better to have the real data and communicate the problems with it.

Particularly since GDPR, services are maintaining their membership databases to remove members they don't consider active. My view is always the more data, the better. Asking services to publish a summary of ALL public members in their membership database is going to be the most useful data. Using metadata to collect data about how each service works would then be a good way of understanding differences.

### Geography

Hw is membership data currently analysed? CIPFA specifically combine it with the population of the local authority, and report the count of members per 1,000 population. For example, in 2019 North East Lincolnshire reported 7,381 active borrowers. This was reported by CIPFA as 46 borrowers per 1,000 population (4.6)%. Merton libraries were reported as 






It's possible that these reports are both strictly to the definition of active borrowers, but I doubt it (not least because one service happens to be using a system that I know hasn't been done to that defintion...)

But, even if they were correct counts, is it valid to do this analysis based on the population of the local authority? Do 36% of thse who live in Merton borrow books, and 5% in North East Lincolnshire?

In the data schema, we have added an extra dimension to the data, and it's based on the home location of the library member. 

When trialling the data oen example to look at was Plymouth membership data. In that, it looked like 10% were from other local authorities. The obvious ones you'd expect: Cornwall, Hampshire, Devon. But also Bristol, Wiltshire, and Surrey. OK, well 10% from outside the auhthority, that's not much. Well, how about other services? In places like Bath and Bristol this is closer to 15%. In other areas it may be significant;y more. We don't know until more authorities start looking.

None of this denies the trends of CIPFA data, we pretty much all know those. But it certainly denies the operational usability of the data as being something for the service to delve into deeply, or look at for insight.


## Extra analysis

Reporting 






