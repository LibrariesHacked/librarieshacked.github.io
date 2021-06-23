---
title: Library catalogue API
excerpt: Providing a platform to search multiple library catalogues
categories:
  - Public libraries
tags:
  - National
  - API
published: true
---

What if we had a single website where you could search for library books across the UK?

Firstly, a good question would be what is the user need? I live in Wiltshire: why show me books held in Manchester libraries? Except for relatively specialist search requirements, few people have the need to search across the UK. Surely my local library catalogue is enough?

A single catalogue search came up on [a list of questions to Liz White by Public Libraries News](https://www.publiclibrariesnews.com/2021/06/some-more-on-the-sdp.html), about the single Digital Presence project.  

> **Q. Can, or will, library catalogues be searchable directly from the proposed SDP. So, if someone types in the author and book title, all the nearest library copies (print and ebook) are shown, with a link to how to search?** 

> A. Earlier user research has shown that people are most interested in what loan copies are held by the libraries closest to them and part of the next phase of development will be to determine what kind of search functionality is most beneficial at national and local level and then how to deliver this.
>
> **Public Libraries News**, 13th June 2021

There's a good consideration for user need in the question and the reply. The question mentions 'nearest library copies', and the answer reiterates that users want to see copies in libraries close to them.

This is not really functionality properly covered within existing library catalogues. If you search for an item it will tend to show the holdings for libraries in that service. But I've not seen how close to me each library is. The assumption is that users will know the libraries by name and understand where they are, but I don't know if this is always true. I find it frustrating that information on libraries such as location and opening hours tends to be separate (often on another website) from information on the catalogue. The user can see that there's a copy in a certain library - they then have to go off to the council website to find out information about that library.

In my ideal world, while logged on to a library catalogue, it would know my postcode and when I searched for an item it would order the results by proximity. It would show whether each library was currently open, or when it would next be open. If I selected the library I would be able to see all the relevant building information. If I was on a mobile phone I could get directions from my current location, etc.

A national website providing this, and also being able to search multiple catalogues then becomes more compelling. Although my nearest library is one in Wiltshire, my second nearest is in Bath and North East Somerset. If I could perform a search and see prioritised results with those two libraries then that would be great.

## Other uses

That's about a digital service we're already pretty familiar with. Searching for a library book.

But there are a range of benefits from a platform that could search multiple library catalogues. The Google Chrome [Library Extension](https://www.libraryextension.com/) can search multiple catalogues for a particular ISBN. You choose your library service and when you are  browsing online shopping sites (e.g. Amazon), the extension will detect the ISBN on the page and search your local library service for the book. Coverage in the UK is patchy though. A version built from a single maintained platform could be much better.

The site [Which book](https://www.whichbook.net/) provides interesting ways of discovering your next read, such as by searching based on mood and emotion. When viewing details of the book it then has a way of triggering a library catalogue search - but this has to be done by 'deep linking' to the local library catalogue. It can't directly tell you if there's a copy held.

An underlying API (application programming interface) would be useful as a digital service. Openly available to any third party that wanted to make use of it. That's better than trying to anticipate and deliver a specific search website; other people will build individual services as they require them.

## A prototype version

Years ago I began a project to create an API that would search any UK public library catalogue. With the results provided as well-formatted data. It works by:

1. Understanding each online catalogue 'type'. For example. Axiell's arena web catalogue. The code can complete a search on the library catalogue site.

2. It uses a [data file](https://github.com/LibrariesHacked/catalogues-api/blob/master/data/data.json) which has UK public library catalogues, what their web address is, and what type they are.

3. Given a library service name, and an ISBN, the tool can then search the relevant library catalogue for that book. For example, by accessing the URL: ```/availabilityByISBN/9780099478423?service=Wiltshire``` I'm requesting details of the item 9780099478423 in Wiltshire libraries. The data returned is:

```json
[{"service":"Wiltshire","code":"E06000054","availability":[{"library":"Royal Wootton Bassett","available":0,"unavailable":1}],"start":"2021-06-23T06:52:53.140Z","end":"2021-06-23T06:52:59.203Z","url":"https://libraries.wiltshire.gov.uk/web/arena/search?p_p_id=searchResult_WAR_arenaportlets&p_p_lifecycle=1&p_p_state=normal&p_p_mode=view&p_r_p_687834046_facet_queries=&p_r_p_687834046_search_type=solr&p_r_p_687834046_search_query=organisationId_index:AUK000040|1+AND+number_index:9780099478423"}]
```

Thhe key part of that data is ```{"library":"Royal Wootton Bassett","available":0,"unavailable":1}``` which tells me there's 1 unavailable copy in Royal Wootton Bassett. Change the library service name in the request and it would search a different catalogue.

It can only search by ISBN. This is a problem for many reasons - people want to search by title and author. A particular title could also have loads of different ISBNs.

It's also hard to maintain. Libraries don't change systems too often. But when you're dealing with 200 or so systems then it seems like they do.

But regardless, it is currently working and ready for more publishing and promotion. I'm going to provide documentation so that people can either use the published API with their own services, or they can duplicate it using [the code which is open-source](https://github.com/LibrariesHacked/catalogues-api).

Look out for it next month.
