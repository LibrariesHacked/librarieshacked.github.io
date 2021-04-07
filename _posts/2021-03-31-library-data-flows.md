---
title: Library data flows
excerpt: How library data flows from public libraries to third parties
categories:
  - Open data
tags:
  - CIPFA
  - LibScan
  - PLR
---

I'm keen on public library open data. Not just the public getting data about their own libraries, but the benefit it would provide for library services. Keeping data restricted has a negative effect on library operational capabilities.

There are some existing datasets that could be converted to open data. A historical process for library data has been:

1. A third party offers a service to libraries and requests library data
2. The library agrees and puts them in touch with library system supplier
3. The supplier and third party arrange a mechanism for extracting and transferring that data
4. The library receive their service
5. This repeats with multiple library services, giving that third party a significant dataset

For libraries this is low responsibility data management. Very easy, and understandable. I've been in that position where someone from 'the business' (a horrible phrase!) goes "I'll leave you techies to sort it out between yourselves if that's OK". They then scarper.

But it's bad. Managing data flows is a important practice to be involved in, especially so with public data.

Here are a few examples.

## Nielsen LibScan

Nielsen are [experts on books](https://nielsenbook.co.uk/). For book sales, their BookScan data "collects point-of-sale data from more than 25,000 stores worldwide". They work with lots of data and presumably do it well.

They also have something called LibScan which does a similar thing for public libraries. Some library services have scripts running that collect the ISBNs that have been loaned every couple of weeks. This data is transferred over to Nielsen servers using automated file transfer.

This started in 2009. A blog post from Capita Libraries at around that time, [Nielsen Libscan Service Rolling Out](https://blogs.capita-libraries.co.uk/decisions/2009/06/01/nielsen-libscan-service-rolling-out/), gives some more details of the process.

This is a good example of data that should never be exclusively in third-party hands. Nielsen make reports available to library services free of charge, but you would be hard-pressed to find regular users. In reality public libraries are acting as a data service for a commercial operation.

The data is sold by Nielsen in the form of ad-hoc or subscription based access. It's likely not a lucrative (if even profitable) thing for Nielsen. Just a poor setup for public data.

## CIPFA Library profiles

In comparison to something like the power of LibScan, CIPFA does nothing in detail. But it is broad data on library funding, services, and activity.

At the end of each financial year CIPFA send a spreadsheet to library services asking for annual data on various things. How many books were issued, how much money was spent, etc. A diminishing number of services spend time completing this spreadsheet. Nine months later aggregated data is sold back to libraries and CIPFA subscribers.

Again, it's questionable how much income CIPFA make. But it's something they keep tight control of. For public library services it is just habit and fear of change that keeps it going.

## Public lending right

Public lending right (PLR) is a little different from the others. The data is sent to the British Library, and remains within the public library sector. The PLR team are also very friendly and have in the past provided me with historic data to explore.

But it's still worth including as it follows a similar pattern. A rotating selection of library services contribute loans data. Like LibScan, this is a record of each book loan, collected every couple of months. It's an inefficiency that LibScan is doing exactly the same thing, just with an overlapping sample of services.

The British Library use the data to calculate how to distribute the PLR fund to authors. Some nice promotional lists also come out annually showing the top authors and books loaned in libraries.

A great blog post by Ayub Khan, [on reading habits over lockdown](https://www.thebookseller.com/blogs/lockdown-reading-lowdown-1250190), mentions PLR and how it will be able to give a national picture on library lending.

> I am a member of the Public Lending Right committee but the PLR’s lockdown data has not been released yet. It will be interesting to compare Warwickshire’s experience with national trends.
>
> **Ayub Khan, Head of Warwickshire Libraries**

But for data insight we should not be using official PLR releases. PLR reports are annual, with a delay, due to the process of collecting author info and calculating payments. The raw data coming out of library services is more appropriate, and only two months out of date.

As with the other two, this is simply public data. Although the team are awesome, and with no commercial interests for the data, it should still be open by default. It's also strange to use just a sample of library services, when it's largely an automated process. Some adjustments could also make it nightly extracts, rather than every two months.

## A better system

Is there are better way?

Yes, and one that does not hinder any organisation (Nielsen, CIPFA, PLR, others) in providing their services.

1. All library services set up standardised exports from library management systems. These will be individual datasets (e.g. loans), and not be defined by specific application requirements
2. This is published as open data by the library services 
3. The public, and any interested party, can pick up that data and use it under an open licence

It would put library services at the heart of controlling what data is shared from their systems. It would make that data available in an efficient way (no duplicate exports), and it would provide it to everyone.

It looks simple written down. And it's not a technical challenge, but is a significant change. The required coordination doesn't really exist in UK libraries, with no-one holding such responsibility. Libraries Connected are closest to influence service operations, but don't have the data literacy or remit. Similarly, the Arts Council are a funding organisation, and involved less in operational data. 

But there remain 'quick wins' to make existing processes open and useful. That may need to wait for a new leadership generation at least, but future leaders fixing those processes would create an immensely powerful opportunity for public libraries.
