---
title: Library data flows
excerpt: How library data flows from libraries to third parties
categories:
  - Public libraries 
tags:
  - Open data
---

Anyone familiar with the Libraries Hacked project knows I'm fairly keen on public library open data. Not just the right for the public to have data about their libraries, but the untapped benefit that would provide for library services. Libraries can't do everything in terms of data analysis. In reality they don't have the time to do very much at all. Keeping data this restricted has long been restraining the operational capabilities of libraries.

There are some existing datasets that could be open data. The reasons for them not being open are not sinister, just poor past decisions.

The process goes:

1. A third party offers a professional service to libraries - to fulfil it they require library data
2. The library agrees to this service and puts the third party in touch with library system supplier
3. The system supplier and third party arrange the mechanism for transferring that data
4. The library receive their service
5. This is repeated with multiple library services, building up powerful datasets

For libraries this is a hands-off approach to data management. All very easy, and understandable. The library people arranging it probably aren't into data. I've been in that position where someone from 'the business' (a horrible phrase!) goes "I'll leave you techies to sort it out between yourselves if that's OK". They then scarper.

That in itself is bad - managing data flows is a important practice to be involved in, and public data especially so. It's not necessarily sensitive data, it's that an organisation should manage how they share it.

Here are a few examples.

## Nielsen LibScan

Nielsen are [experts on books](https://nielsenbook.co.uk/). In data analytics for book sales, their BookScan data "collects point-of-sale data from more than 25,000 stores worldwide". They work with lots of data and presumably do it well.

They also have something called LibScan which does a similar thing for public libraries, on a smaller scale. A set of public library services (between 50 and 100 or so I believe) have system extracts which collect the ISBNs that have been loaned every couple of weeks. This data is automatically transferred over to Nielsen servers using FTP.

This was setup in 2009. A blog post from Capita Libraries at around that time, [Nielsen Libscan Service Rolling Out](https://blogs.capita-libraries.co.uk/decisions/2009/06/01/nielsen-libscan-service-rolling-out/), gives some more details of the process.

This is a good example of data that should never be exclusively in third-party hands. Nielsen make reports available to library services, but you would be hard-pressed to find many regularly using these, if at all. In reality public libraries are acting as a data service for Nielsen's commercial operations.

The data is available to be sold by Nielsen in the form of ad-hoc or subscription based access. It's likely not a lucrative (if even profitable) thing for Nielsen. It's just a poor setup for public data.

## CIPFA Library profiles

CIPFA statistics are a classic example for public libraries, and one I've written about before.

In comparison to something like the power of LibScan, CIPFA does nothing in any detail. But it is the broadest data on library funding, services, and activity.

At the end of each financial year CIPFA send a spreadsheet to library services asking for annual data on various things. How many books were issued, how much money was spent, how many PC hours were booked, etc. A diminishing number of services spend a lot of time completing this spreadsheet and send it back to CIPFA. That data is then sold back to libraries and other CIPFA subscribers.

Again, it's questionable how much income CIPFA will be making from this data. It will be one of many datasets they collect from local authorities so can't be looked at in isolation. But it's certainly one they want to keep a tight control of. In the past they have written to all services suggesting ways in which freedom of information requests for library data can be denied to the public.

The data is all public data on public funds and usage of libraries. It's clear to almost everyone in the public library sector that it's an inappropriate process to be part of. It is just habit and fear of change that keeps it going.

## Public lending right

Public lending right (PLR) is a little different from these other two as the data is collected by the British Library, so remains within the public library sector. The PLR team are also very nice and have provided me with historic data in the past to explore and look into. It's a great dataset.

But it's still worth mentioning as it follows a similar pattern. The public lending right team have a rotating selection of library services that contribute loans data. Like Nielsen LibScan, this is a record of each individual loan that occurs in each service, collected each couple of months. It's one inefficiency that Nielsen LibScan is effectively doing exactly the same thing, just with a different sample of services, and sending the data elsewhere.

The PLR data is then used to calculate how to distribute a single pot of money to authors, based upon their loans. Some nice promotional lists also come out annually showing the top authors and books loaned in libraries.

A recent blog post by Ayub Khan, [on reading habits over lockdown](https://www.thebookseller.com/blogs/lockdown-reading-lowdown-1250190), mentions PLR and how it will be able to give a national picture on library lending.

> I am a member of the Public Lending Right committee but the PLR’s lockdown data has not been released yet. It will be interesting to compare Warwickshire’s experience with national trends.
>
> **Ayub Khan, Head of Warwickshire Libraries**

For data insight though, we should not be waiting on official PLR data releases. That data is only released annually, after a delay, because of the process of collecting author info and calculating payments. The raw data coming out of library services is at most just two months out of date.

As with the other two, this is simply public data. Although the team are lovely, and with no commercial interests for the data, it should still be open by default. It also seems strange that it is still using a sample of library services, when the majority of it is automated processes. Some adjustments could also make it nightly extracts, rather than every two months.

## A better system

Rather than just being critical of these things, is there are better way?

Yes, and one that does not hinder any of the organisations (Nielsen, CIPFA, PLR) in providing their services.

An alternative:

1. Library services set up standard exports from library management systems. These will not be defined by specific requirements, rather they will be about individual datasets (e.g. loans data)
2. This data is published as freely available open data by the library services 
3. The public, and any interested party, can pick up that data and use it under an open licence.
4. Those standard data extracts are maintained and developed by library services to fulfil various data requirements

It would be a process that put library services at the heart of what data is extracted and shared from their systems. It would make that data available in an efficient way (no duplicate exports), and it would provide it to everyone.

It looks simple written down, but this is a significant culture change in data thinking for public library services. And it would require a level of coordination that doesn't exist in UK libraries. No-one particularly holds this responsibility. Libraries Connected are closest in terms of having influence over service operations, but don't have the data literacy to organise it. Similarly, the Arts Council are a funding organisation, and are unlikely to involve themselves in it. It is about operational efficiency and improving library services, but not directly about library advocacy, which is primarily how those library organisations currently use data.

But there do remain some 'quick wins' there. The data has existing uses and potential for improvement in those examples. Building in open processes for that data would be an immensely powerful opportunity for libraries.