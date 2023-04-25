---
title: Creating a library finder
excerpt: The problems and considerations in creating a cross-authority library search
categories:
  - Websites
tags:
  - Data
  - Web development
  - Mapping
published: true
---

A current Libraries Hacked prototype is [Library Map](https://www.librarymap.co.uk/), a search tool for public libraries in the UK.

<figure class="align-center">
  <img src="https://raw.githubusercontent.com/LibrariesHacked/librarieshacked.github.io/master/images/2023-04-25-library-map.png" alt="A screenshot of the map page on LibraryMap showing a rural location in GLoucestershire, and surrounding libraries"/>
  <figcaption>A rural location in Gloucestershire, and surrounding libraries in nearby towns.</figcaption>
</figure>

It's been getting more attention than usual. This is due to the work being done by [LibraryOn](https://libraryon.org/), who have linked to it in their beta site. Hopefully, by providing an interactive element for users early on, they will gain feedback as to what people expect from that kind of service - and whether or not it's something they should provide.

That attention has led to useful feedback for Library Map, and triggered my own thoughts about what works and what doesn't.

## We need this

People don't know their local library has a website. They don't know that mobile libraries exist. They dont know they can go on their Council website to see where (some of) their local libraries are, and if they did they would likely struggle to find the information. Those libraries may be on the library catalogue site instead, linked to from the Council website under a title like 'renew your loans'.

This is only known by people in the library sector, and those already engaged with it. To use library services online you need to know that it's a bit of a mess, and that you're going to have a tough time. That's not a great situation, so we need tools and sites that bring that information together.

## It needs to be cross-authority

We currently treat finding your library the same as finding your bin day. And loads of people do that right? Bin day lookups are the best and most popular web pages there are.

But you don't need cross-authority bin day lookups, because only your local Council pick up your bins. The same isn't true of libraries. Many people will have different library services relevant to them.

The library I use at the moment is Bath Central Library. It's about 5 miles away, and there's a direct bus from just outside my house. But I live in Wiltshire. Because I'm a local government wonk, I know to go to [bathnes.gov.uk](https://bathnes.gov.uk) to find out about libraries up the road, and [wiltshire.gov.uk](https://www.wiltshire.gov.uk/) to find out about libraries down the road. But this isn't obvious stuff that people should know, it's silly stuff that people don't know.

Imagine if you had to search all the different local councils around you to see which one would empty your bin. There'd be riots. But we accept it in the library sector.

## It needs mobile library stops

One of my bugbears is that on the rare occasion mobile library data is listed alongside static libraries, the library van is listed (e.g. 'North Mobile'). Vans are irrelevant to the public, who need information about stops. Mobile libraries are temporal entities that appear and disapear, and it doesn't matter if there are eight vans or a hundred. What matters is that a library will appear underneath the willow tree between 11:00am and 12:00pm, every fifth Thursday of the month.

Mobile library stop information can be impossible to find and interpret, even if you're lucky enough to be on the right website. It needs to be in a standard data format and integrated into library listings.

## Distance is deceptive

Library Map originally allowed users to put in a postcode and it showed a list of relevant libraries in that area, ordered by name. Simple? Maybe - but not what users expect. People expect to see the library closest to their location.

In my own testing I've found distance to be deceptive, and it will cause situations I think are worse than sorting alphabetically. A straight-line distance isn't realistic enough to give a high level of detail, so it can only really be to the nearest mile. But in inner-London that can mean a whole set of libraries are all about a mile away. The distance then becomes useless, and ordering by it only confuses listings.

In rural locations there are other problems. I tried my childhood home in Gloucestershire, and five libraries were returned. However, the closest two were the most irrelevant, as they were small branch libraries in the Gloucester City suburbs. They weren't places I'd know or be able to get to. The three relevant libraries were big town/city ones: Gloucester, Tewkesbury, and Newent. These are all accessible by transport, and recognisable by name. Surely name is the most relevant field to focus on?

<figure class="align-center">
  <img src="https://raw.githubusercontent.com/LibrariesHacked/librarieshacked.github.io/master/images/2023-04-25-library-listings.png" alt="A screenshot of the library listings page on LibraryMap showing results for a location in rural Gloucestershire. The listed libraries are Churchdown, Longlevels, Newent, Tewkesbury, and Gloucester"/>
  <figcaption>The listings page of Library Map showing Gloucestershire libraries - the first two are the nearest but least relevant.</figcaption>
</figure>

Anyway, user expectations are key, and the finder now sorts by distance. But, all of this is fairly academic. Surely display the information on a map and people can see for themselves where the libraries are, and how accessible they are. Which leads on to the next question...

## Why is Library map not a map?

I'm a geospatial software developer, so making digital maps is what I do. My first intention was to make Library Map a map. And questions about sorting by distance go away. Also, maps are great.

However, prototype projects still need a slight grounding in reality, and unfortunately maps are not accessible, because they are visual rather than being text-based. Maps are exempt from accessibility legislation, but you still need to provide an alternative way of exploring the information. I'd also say a map shouldn't be the default.

Even beyond the obvious visual barrier, mapping software relies on people being familiar with the map tools - zoom in, zoom out, pan, scroll etc. It's an additional level of expertise to navigate around them that shouldn't be assumed.

So yes, Library Map is not really a map. It's mapping libraries in the sense of collecting library locations.

## Surveying libraries is not enough

One of the data sources used is the Arts Council [Basic dataset for libraries](https://www.artscouncil.org.uk/supporting-arts-museums-and-libraries/supporting-libraries). This dataset is validated by library services in England every December, and released as early as possible in the following year.

> The Libraries Basic Dataset is intended to capture permanent instances of libraries, local history libraries, and archives from 1 April 2010 to 31 December 2021. It is also intended to capture the number of mobile libraries.
>
> **Arts Council England**

As it's now April 2023, it's about 16 months out of date, but the next iteration will be released soon.

The Arts Council dataset does what it says it does. It represents the state of play for libraries at a certain point in time. Best described as a series of 'snapshots', it is always correct, but never up to date.

The problem is, if you're developing a site to show the current state of libraries, a survey doesn't work. You can't say 'this is correct as of December 2021'. People are looking for their local library right now.

Library locations should be maintained as a 'register' that is always up to date. There are two main ways of doing that:

1. Let all library services maintain their own data and publish it in a standard format. I personally think this is the best, but is by far the most difficult to implement and coordinate.
2. Provide an interface for library services to update their data when they need to. This is OK as well, but it takes data publishing out of the hands of library services, and makes it a relatively boring task on someone else's system. Data publishing is important for services to do themselves and get involved in.

## Bad data is good

Lol, what? Good data is good, bad data is bad.

Library Map has functionality to display opening hours and a web link to each library, but the data was becoming out of date. The Arts Council dataset actually no longer even includes these things, and regardless, they change regularly.

So, I made a decision to turn off web links and opening hours.

It's better, probably, that people don't go and see wrong information. Maybe. But I still wonder whether that was the right decision. There are two ways to react to invalid data about your libraries:

- That's terrible, you're teling people wrong things!
- Ah, that's out of date, how can we get that corrected?

If you keep on removing data as it becomes out of date you end up with no data. Big sites like Google know this, in products like Google Maps. They don't want a poor user experience, but they'll definitely display data that they know is likely to be wrong, rather than remove it.

People raising data quality issues is good. It highlights the need for permanent data maintenance.

## Data needs applications

A final thought - it's been really interesting to get feedback and thoughts from library services and other individuals.

It was always inevitable that as soon as data was made visible, within a practical application, libraries would take more interest in it.

I advocate for 'data-first': publish all your data, and far more use will be made of it. But that's a tough ask. In reality we need to build things first (even with bad data), and then get libraries improving the data.
