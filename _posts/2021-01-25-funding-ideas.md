---
title: Funding ideas
excerpt: What would be useful to do with some money?
categories:
  - Projects
tags:
  - Funding
  - Arts Council
---


I've had a few conversations recently about funding for library digital/data projects. Either directly as an individual/organisation, or via a project in collaboration with a library services.

In a post on [Libraries Hacked plans for 2021](https://blog.librarydata.uk/libraries-hacked-plans) I mentioned that sponsorship was one of my goals. Not for a big project, but thinking about making some of the basic Libraries Hacked costs sustainable.

Wider project funding has always seemed a little out of reach. Most library-related funds (ACE, SLIC, Carnegie, etc) are restricted to library services, at most allowing other organisations to be involved as partners. As an aside, I think this is a mistake. Most Arts Council funds allow individuals and organisations to apply, but this is strictly not the case with library projects. That seems to limit the potential set of ideas.

But I have been considering ideas for possible projects. Firstly, why not just carry on doing low-cost prototype tools and apps (like [Libraries at Home](https://www.librariesathome.co.uk/))?

## Things need money to be good

Proper digital services cost money. It's impossible to genuinely sustain a prototype or alpha product that is used by the public or library services. To be widely used they need investment and professional expertise in a number of areas.

* **Support**. Does everything need 24/7 support? No - But problems should be resolved quickly. In the worst case scenario and everything goes down, is there anyone available to sort it out?
* **Hosting**. Generally I run things on cloud environments set at a 'Development' specification/pricing tier. That means they run, and people can use them, but they may be slow, or the amount of connections may be limited etc. They may go down if too many people access them at once. Some websites may be pretty stable (this blog for example) but it gets risky.
* **Accessibility**. It is hard to get websites right, and legally public sector ones need to be accessible to all. GOV UK [guidelines on Accessibility Auditing](https://www.gov.uk/service-manual/helping-people-to-use-your-service/making-your-service-accessible-an-introduction#:~:text=Budget%20for%20accessibility,%C2%A33%2C000%20and%20%C2%A37%2C000.) advise that it can cost between £3,000 and £7,000. There's no point attempting to create a new public digital service unless you can cover the accessibility costs, and you should want to!
* **Branding**. There's a good reason why the British Library have made branding a key part of their libraries Single Digital Presence work. And that's because it's important for people to know what your thing is about. For it to make sense and be something they recognise. 
* **User experience**. I'm not under any illusions that I'm good at user experience. It's not a good idea having the person who developed a thing also working on the best flow that makes it usable for the public. It needs fresh and critical expertise from people who know content and process design.

OK, there's loads more, but the point is these things cost money and need a mix of one-off and ongoing funding.

## Ideas

Enough about money, what about the ideas?

### Library data tools

What if we could change those tedious data tasks that people have to do? It may be an extreme example, but I worked at a Council that had a performance management system. Library staff had to manually key in library data (issues, visitors) once a month, for each library. Those boring bits of data would go into a boring system that would rarely be looked at. But every now and then fairly boring people would look at it. And sometimes that data would be extracted into Excel, and reports would be written using that data.

We need tools that can take the data as it's held in library systems. And then do instantly useful things with it. And then when we have that tool we need to share it among all the library services that use similar data (which is all of them). Then going further than that, we need to share it publicly and allow anyone to use it, and see the data.

We'll call it library data tools. A prototype I'm working on is to take postcodes of library members (held in all library management systems) and create interactive maps that allow library membership to be explored. The postcodes will be kept secure. The map will display population data in different areas, deprivation measures for each area, and other useful info like access to transport. The idea is relatively simple, take data that all services can easily extract, and provide a tool that displays it instantly in a useful way.

<figure>
  <img src="https://github.com/LibrariesHacked/librarieshacked.github.io/raw/master/images/2020-08-24-plymouth-members.png" alt="Plymouth library membership plotted on a map and shaded by concentration of members relative to population"/>
  <figcaption>Plotting the locations of Plymouth libraries members. This shades the map to highlight membership concentrations, relative to population. This particular example includes an area of Devon which has 19% membership of Plymouth libraries - useful for both services to know about.</figcaption>
</figure>

### Mobile library information

Many people know I'm obsessed with mobile libraries. It's an interest that makes the current state of mobile library information frustrating.

If your library service has a mobile library you will still likely find the timetable information buried away on a PDF file. Sometimes multiple PDFs, which tie together stops and route timetables. Since accessibility legislation, some services have actually removed this information, as it was not accessible, but not replaced it with anything.

Many mobile library users benefit from a personal service rather than a digital one. In most cases when a route is cancelled the service will phone all regulars to make sure they know, and renew their loans for them. But it's not sustainable to continue running a service with no online information about it. It will be important to maintain the personal service, and make it digitally capable.

Perhaps another relatively simple idea, but difficult to coordinate. Create a common format for storing mobile library stop data. And create a digital service that publishes this data as information in multiple formats - a search facility, online calendars, a map, even print formats. Plus additional facilities like subscribing for notifications when the service is off the road.

<figure>
  <img src="https://github.com/LibrariesHacked/librarieshacked.github.io/raw/master/images/2019-04-04-mobile-library-data-icalendar-stop.png" alt="Screenshot of a calendar application showing an entry for a mobile library stop"/>
  <figcaption>Mobile library stop timetables are data, and should be able to be shared in a variety of ways for the public to use.</figcaption>
</figure>
### Library open data

This one was largely covered in a post titled [a funding idea](https://blog.librarydata.uk/a-funding-idea/), and was a previous failed attempt to get funding.

The idea was that a library service could release open data, with a series of published datasets. But instead of just doing that in a way that is targeted at developers and analysts, it would be for the whole public. Information, insights, and visualisations about the data would be available online, and in physical formats in libraries (postcards, newspaper, booklets). The project would engage the wider public with open data, and specifically library data. It would help inform the public more about what goes on in libraries.

## The end

So, there's a few ideas. Are they good, bad, nonsense? 3 felt like more than enough to be writing about, although in reality there are loads of untapped library projects in the digital/data space. But although a lot of them seem simple, and are all technically achievable, they all need engagement, funding, and professional expertise.

It was genuinely good to see things like the [Arts Council providing £150k for library service digital products (ebooks)](https://twitter.com/libsconnected/status/1351937972510355457?s=20). But it's split between 150 services, giving them £1,000 each. After administration costs it's spreading it out so thinly that it doesn't seem like much could be done with it. It would be awesome to see the equivalent kind of money spent on creating digital services for libraries nationally.
