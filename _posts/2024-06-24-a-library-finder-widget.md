---
title: A library finder widget
excerpt: Providing multiple single digital presences for public library services
categories:
  - Websites
tags:
  - Web design
  - Library locations
  - Library websites
published: true
---

Back in 2020, a Library Data blog post on [Digital Transformation](/2020/12/31/digital-transformation/) proposed that rather than a single digital presence for public libraries, digital transformation would enable multiple digital presences, through shared services and data.

> What if the Reading Agency want to put a search for UK libraries on their website? Great, that sounds like a good place for it. Delivery of those websites and apps should be out of the hands of library services.
>
> **Digital Transformation, Library Data Blog, 2020**

The British Library's manifestation of the single digital presence, the [LibraryOn website](https://libraryon.org.uk/), provides a library finder and library map, as a entry point into a user finding their local library and then delving into the services and magic within.

But importantly, they have also [delivered an API](https://www.linkedin.com/posts/activity-7191083735675543552-QOHn) (Application Programming Interface) that allows other websites and services to make use of the same underlying data. In other words, enabling multiple single digital presences.

Full kudos to the British Library team, and Jonno Witts, the technical lead, for delivering this. It should be a standard for any digital service to have reusable services and data. In fact it is a standard, it's long been in government service design documents (also adopted by local government) to build APIs, and to use [API and data standards](https://www.gov.uk/guidance/gds-api-technical-and-data-standards). But what is written in standards isn't often followed, particularly in the library technology sector.

Anyway, so far so congratulatory. But what can we do with this API?

### Embedding a library finder

As an initial effort, how about that idea of embedding a library finder into any website that may want it? That could be third party sites: The Reading Agency, The Bookseller, or even the BBC. Or it could be national library bodies: Libraries Connected, the Library Campaign, CILIP, or the Arts Council. Or it could be library services themselves. Most will have a library finder or some kind of listing on their main website, but not necessarily on their catalogue website. A library finder would fill that gap of providing a quick way for users to find their local library.

The more digital services that use the data and API, the more exposure libraries will get. And the more that the data is used, the more likely it is to be maintained and improved. We need good data to provide good digital services that are widely used, but there is no incentive to maintain the data if the digital services aren't being used. The whole sector needs to be involved in this, and push for quality data.

A quick and easy way of embedding services on websites is through a widget. A widget is a small piece of code that can be added to a website, and it will display some content or functionality. For example, a Twitter feed or a weather forecast.

A new Libraries Hacked widget will allow any website to embed a library finder. The widget will be a small search box allowing the user to search by place or postcode, and a listing of the libraries found. The widget will be customisable, so that it can be styled to fit in with the website it is embedded in.

As a small example, here is a simple version of the widget, embedded in this blog post. As it's developed it will get better! But the idea is for something small and lightweight that can be added to any website.

<script type="module" crossorigin src="https://widget.librarymap.co.uk/libraryfinder-widget.js"></script>
<div id="libraryfinder-widget" data-width="300px" data-height="500px" data-primary="#632279" data-secondary="#f8ab89"></div>

The only code needed on a website to embed the widget is the following:

```html
<script
  type="module"
  crossorigin
  src="https://widget.librarymap.co.uk/libraryfinder-widget.js"
></script>
<div
  id="libraryfinder-widget"
  data-width="300px"
  data-height="500px"
  data-primary="#632279"
  data-secondary="#f8ab89"
></div>
```

Is this something that services would like to use? Get in touch if so, and we'll get it on your site.

Full embed instructions coming soon with a demo website.
