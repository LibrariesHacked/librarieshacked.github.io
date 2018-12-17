---
category: data
tags: plr data lending
title: Public lending right
published: true
meta:
---

The best dataset about UK public library usage is Public Lending Right (PLR). 

> PLR is the right for authors to receive payment for the loans of their books by public libraries

There is comprehensive information [on the British Library PLR website](https://www.bl.uk/plr). The main process seems to be:

1. The PLR team select a sample of UK library authorities to report their borrowing data. An archive of the makeup of this sample is [available to download](https://www.bl.uk/plr/uk-sample-library-archive).

2. Authors must apply to PLR and register their books to be eligible for payments.

3. During the period they are in the sample, the library service sends the number of loans (including renewals), broken down by ISBN. This is at 2 monthly reporting periods.

4. From the figures received (the 'actual' numbers), a total number of loans for each book is estimated (the 'gross'), using CIPFA totals for that year.

5. Every year, a calculation is made for how much each loan should receive. A total of £6m is available (provided by the government), minus administration costs. A minimum payment amount is set to £1 and a maximum of £6,600 per author. A rate per loan is then set that fits those thresholds. In 2018 this rate per loan was 8.2 pence.

It's a lovely process, and it's good to see authors paid for the repeated use of their works in libraries. Authors tend to be on the side of libraries anyway, but it must help that they have some reimbursement. 

I have a few minor quibbles with it. I don't like merging loan and renewal data. Effectively renewing an item is considered to be equivalent to taking it out again. But this doesn't reflect how people use libraries. The act of choosing a particular book and taking it out from a library seems to be far more important than extending the loan period. Personally I renew an item either because I've not finished it yet, or because I can't get back to the library by the time it's due. Neither of which really warrant another count on the number of issues for the book. Plus merging any kind of data then removes a level of detail that would otherwise be interesting and useful. Just want more data!

The sample is also substantial, and expertly selected to represent each region. But as the library systems have PLR reporting built into them, why not extend the sample to include all library services all the time? This would depend on admin costs, though hopefully these are more streamlined than in 1982.

### What could it be used for?

The primary function of the data is to pay authors for the lending of their works, and it clearly does that very well. But it feels like a huge and amazing dataset that is currently underused.

Advocating for open data shouldn't involve trying to suggest all the ways in which it could be used. That's always a surprise for later. But at least a few things spring to mind.

- It is by far the best single dataset for analysing library usage over time. CIPFA has issue figures collected over many years, but it's difficult to get anything out of a single annual number, other than declining use. And even declining issues doesn't tell the whole story, when we know that what people use a library for can change. The PLR data is detailed enough to include the reporting period, so every two months rather than annual.
- By having ISBN as a level of detail we can see more detail about changing reading habits over time. This could involve any associated data (e.g. genre) that we can get from the ISBN.
- It's interesting to look at the longevity of certain books and authors. It was striking to look through some of the data from the 90s and see Catherine Cookson books being the majority of the top 20. We have a similar situation with some of the popular authors today, but how long will they stay at the top?
- It would be good to see library catalogues (and other book search sites) display this data. When a user looks at the detail of an item in the catalogue it could show the PLR history of the item. It would be simple enough to make an open API that returned the PLR history of an ISBN.

### Is it open?

OK, show us the data. Well, right now there doesn't seem to be any as such.

The PLR team have long provided excellent [annual media reports](https://www.bl.uk/plr/uk-media-centre) about PLR data. Things like the top 100 authors and books each year, in different regions.

They have also in the past been willing to give access to the LEWIS system (Loans Enquiry Web Information Service). Years ago the PLR team said I was welcome to login to LEWIS, and certainly all public library staff can apply for access. This is an online tool to query the loans data from 1995 to 2015. This also looks and feels very like [OLGA](https://www.plr.uk.com/olga/login.aspx), the system used by authors to manage their online account with PLR, and was presumably developed by the same team.

1995 to 2015? What about 2016 and 2017? Well, I don't know. In the last couple of years PLR responsibility has been transferring from an independent team based in Stockton-on-Tees to a British Library office in Boston Spa. The [latest newsletter](https://www.bl.uk/britishlibrary/~/media/bl/global/services/plr/pdfs/newsletters/2018newsletter.pdf) describes a number of changes including:

>  Our aim is to make efficiency savings by relocating PLR operations to sit alongside other corporate functions and to implement a new IT application taking advantage of new technology which, as well as adding new functionality, will support modernisation. 

That sounds very good, although may be bad news for LEWIS being updated. Data must still be being collected, and excitingly in July 2018 was updated to also include ebook loans. But perhaps the changing of teams and IT systems will mean that data will not make it into the current online query tool.

### What could it look like?

After exploring the data in a web format, it was interesting to imagine what a PLR dataset could look like as a simple spreadsheet. Maybe something like this (with more rows).

| Year | Reporting period | Service | ISBN | Author | Title | Actual | Gross | 
| ---- | ---------------- | ------- | ---- | ------ | ----- | ------ | ----- |
| 2014/2015 | 01/05/2015 - 30/06/2015 | Portsmouth | 9780747586500 | JK Rowling | Harry Potter and the Prisoner of Azkaban | 3 | 9.6 |

So, between May and June 2015, there were 3 issues in Portsmouth of that particular ISBN. Portsmouth are part of the South East region, along with East Sussex and Hampshire. It looks like all those service actuals are multiplied by 3.2 to get the gross figure. Presumably the multiplier varies on a regional basis, depending on the sample size within that region.

### Will it be open?

That's down to the British Library, but I don't think there's any sinister reason that it isn't, other than that the demand hasn't been there. So if we want it we need to ask for it! The British Library have a good [Library Labs project](https://www.bl.uk/projects/british-library-labs), which encourages open reuse of various of their collections. And they have also been generally [very good about open data](http://www.bl.uk/bibliographic/datafree.html). So maybe it's just a matter of time.
