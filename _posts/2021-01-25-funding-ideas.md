---
title: Funding ideas
excerpt: What could be done with some money?
categories:
  - Projects
tags:
  - Funding
  - Arts Council
---

I've had a few conversations recently about funding for library data projects. Either directly as an individual/organisation, or through collaboration with a library service.

In a post on [Libraries Hacked plans for 2021](https://blog.librarydata.uk/libraries-hacked-plans) I mentioned that sponsorship was one of my goals. Not for a big project, but making some of the Libraries Hacked costs sustainable.

Wider funding has always seemed out of reach. Most library-related funds (ACE, Carnegie, SLIC, etc) are restricted to library services, at most allowing others to be partners. As an aside, I think this is bad. Most Arts Council funds allow individuals and organisations to apply, this is only not true for library projects. That seems to limit the potential set of ideas.

But I've been considering ideas for possible projects. Firstly, why not just carry on doing prototype tools and apps (like [Libraries at Home](https://www.librariesathome.co.uk/))?

## Things need money to be good

Digital services cost money. A prototype cannot be widely used by the public or library services. They need investment and professional expertise in a number of areas.

* **Support**. Does everything need 24/7 support? No - but problems should be resolved quickly. In the worst case scenario with everything broken, is there anyone available to sort it out?
* **Hosting**. Generally I run things with a 'Development' pricing tier. That means they run, and people can use them, but they may be slow, or the amount of connections may be limited. They may go down if too many people access them at once.
* **Accessibility**. It is hard to get websites right, and public sector ones need to be accessible to all. GOV UK [guidelines on Accessibility Auditing](https://www.gov.uk/service-manual/helping-people-to-use-your-service/making-your-service-accessible-an-introduction#:~:text=Budget%20for%20accessibility,%C2%A33%2C000%20and%20%C2%A37%2C000.) advise that it can cost between £3,000 and £7,000. There's no point attempting to create a new digital service unless you can cover the accessibility costs, and you should want to!
* **Branding**. There's a good reason why the British Library have made branding part of their libraries Single Digital Presence work. And that's because it's important for people to recognise what your thing is about. 
* **User experience**. I'm not under any illusions that I'm good at user experience. It's not always good to have the person who codes a thing also deciding the best flow that makes it usable for the public. It needs fresh and critical expertise from people who know process design.

OK, there's loads more, but the point is these things cost money.

## Ideas

Enough about money, what about ideas?

### 1. Library data tools

What if we could streamline tedious data tasks? It may be an extreme example, but I worked at a Council that had a performance management system. Library staff had to manually key in library data (issues, visitors) once a month, for each library. Those boring bits of data would go into a boring system that would rarely be looked at. Every now and then fairly bored people would look at it. And sometimes that data would be extracted into Excel, and boring reports written.

We need tools that can take the data as it's held in library systems. Then do instantly useful things with it. And when we have a tool it should be shared with library services that use similar data (all of them). Then we need to share it publicly and allow anyone to use it.

And we shall call it library data tools. A prototype I'm working on is to take postcodes of library members (held in all library management systems) and create interactive maps that allow library membership to be explored. The map will display the percentage of the population who are library members in each area, with additional area info such as deprivation measures. The idea is relatively simple, take data that all services can easily extract, and provide a tool that displays it in a useful way.

<figure>
  <img src="https://github.com/LibrariesHacked/librarieshacked.github.io/raw/master/images/2020-08-24-plymouth-members.png" alt="Plymouth library membership plotted on a map and shaded by concentration of members relative to population"/>
  <figcaption>Plotting the locations of Plymouth libraries members, constructed from postcode data. This shades the map to highlight membership concentrations. This particular example includes an area of Devon which has 19% membership of Plymouth libraries - useful for both services to know about!</figcaption>
</figure>

### 2. Mobile library information

Many people know I'm obsessed with mobile libraries. It makes the current state of mobile library information frustrating.

If your library service has a mobile you will still likely find the timetable information buried away in a PDF file. Since accessibility legislation some services have actually removed this information, as it was not accessible, but not replaced it.

Many mobile library users benefit from a personal service rather than a digital one. In most cases when a route is cancelled the service will phone all regulars to make sure they're informed, and renew their loans for them. But it's not sustainable to continue a service with no online information about it. It will be important to maintain the personal service, and make it digitally capable.

Perhaps another relatively simple idea, but difficult to coordinate. Create a common format for storing mobile library stop data. Then a digital service that publishes this data as information in multiple formats - a search facility, online calendars, a map, even print formats. Plus additional facilities like subscribing for notifications when the service is off the road.

<figure>
  <img src="https://github.com/LibrariesHacked/librarieshacked.github.io/raw/master/images/2019-04-04-mobile-library-data-icalendar-stop.png" alt="Screenshot of a calendar application showing an entry for a mobile library stop"/>
  <figcaption>Mobile library stop timetables are data, and should be able to be shared in a variety of ways for the public to use.</figcaption>
</figure>

### 3. Library open data

This idea was covered in a post titled [A funding idea](https://blog.librarydata.uk/a-funding-idea/), and was a previous attempt at funding.

The idea was that a library service could release open data, with a series of published datasets. But rather than being for developers and analysts, it would be for the wider public. Information, insights, and visualisations about the data would be available both online and in physical formats in libraries (postcards, newspapers, booklets). The project would engage the wider public with open data, and library data. It would help inform the public about what goes on in libraries.

## The end

So, a few ideas. Are they good, bad, nonsense? 3 felt like more than enough to be writing about, though in reality there are loads of untapped projects in the digital/data space. A lot of them seem simple, but they all need engagement and funding.

It was genuinely good to see things like the [Arts Council providing £150k for library service digital products (ebooks)](https://twitter.com/libsconnected/status/1351937972510355457?s=20). But it's split between 150 services, giving them £1,000 each. After administration costs it's spreading money so thinly that it almost seems pointless. It would be awesome to see the equivalent kind of money spent on creating national data projects for libraries and the public.
