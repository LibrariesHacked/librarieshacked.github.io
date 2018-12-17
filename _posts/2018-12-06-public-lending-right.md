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

2. Authors must apply to PLR register their books and be eligible for payments.

3. During the period they are in the sample, the library service sends the number of loans (including renewals), broken down by ISBN. This is at 2 monthly reporting periods.

4. From the figures received (the 'actual' numbers), a total number of loans for each book is estimated (the 'gross'), using CIPFA totals for that year.

5. Every year, a calculation is made for how much each loan should receive. A total of £6m is available (provided by the government), minus administration costs. A minimum payment amount is set to £1 and a maximum of £6,600 per author. A rate per loan is then set that fits those thresholds. In 2018 this rate per loan was 8.2 pence.

A lovely process, and it's good to see authors reimbursed for the repeated use of their works in libraries. Authors tend to be on the side of libraries anyway, but it must help that they have some reimbusement. 

I have a few minor quibbles with it. I don't like merging loan and renewal data. Effectively renewing an item is considered to be equivalent to taking it out again. But this doesn't reflect how people use libraries. The act of choosing a particular book and taking it out from a library seems to be far more important than extending the loan period. Personally I renew an item either because I've not finished it yet, or because I can't get back to the library by the time it's due. Neither of which really warrant another count on the number of issues for the book. Plus merging any kind of data removes a level of detail that would otherwise be interesting and useful.

The sample is also substantial, and expertly selected to represent each region. But as the library systems have PLR reporting built into them, why not extend the sample to include all library services all the time?

### What could it be used for?

The primary function of the data is to pay authors for the lending of their works. But is does feel like a huge and amazing dataset that is currently being underused.

The goal of making data open isn't to suggest all the ways in which it could be used. That's always a surprise for later. But, at least a few things spring to mind about how it can be used.

- It is by far the best single dataset for analysing library usage over time. CIPFA has annual issue figures collected over many years, but it's very difficult to get anything out of a single annual number other than declining use. And even declining issues doesn't tell the whole story, when we know that what people use a library for can change. It's also detailed enough to include the reporting period, so every two months rather than annual.
- By having ISBN as a level of detail we can see changing reading habits over time. From any associated data (e.g. genre) that we can get from ISBN.
- It's interesting to look at the 'longevity' of certain books and authors. It was striking to look through some of the data from the 90s and see Catherine Cookson books being the majority of the top 20 in those years. We have a similar situation with some of the popular authors today, but how long do they stay at the top?
- It would be good to see library catalogues (and other book search sites) display this data. When a user looks at the detail of an item in the catalogue it could show the PLR history of the item.

### Is it open?

OK, show us the data. Well, there doesn't seem to be any as such.

The PLR team have long provided [annual media reports](https://www.bl.uk/plr/uk-media-centre) about PLR data. Things like the top 100 authors and books each year, in different regions.

They have also in the past been willing to giving access to the LEWIS system (Loans Enquiry Web Information Service). Years ago the PLR team said I was welcome to login to LEWIS, and all library staff can certainly be given access. This is an online tool to query the loans data from 1995 to 2015. This also looks and feels very like [OLGA](https://www.plr.uk.com/olga/login.aspx), the system used by authors to manage their online account with PLR, and was presumably developed by the same team.

1995 to 2015? What about 2016 and 2017? Well, I don't know. In the last couple of years PLR responsibility has been transferring from an independent team based in Stockton-on-Tees to a British Library office in Boston Spa. The [latest newsletter](https://www.bl.uk/britishlibrary/~/media/bl/global/services/plr/pdfs/newsletters/2018newsletter.pdf) describes a number of changes including:

>  Our aim is to make efficiency savings by relocating PLR operations to sit alongside other corporate functions and to implement a new IT application taking advantage of new technology which, as well as adding new functionality, will support modernisation. 

That sounds very good, although also potentially sounds like bad news for LEWIS being updated. Data must still be being collected, and in July 2018 was updated to also include ebook loans, but perhaps the changing of teams and IT systems will mean that data will not make it into the current online query tool.

### What could it look like?

After exploring the data in a web format, it was interesting to imagine what a dataset would look like as a simple spreadsheet of data. It could be something like this.

| Year | Reporting period | Service | ISBN | Author | Title | Actual | Gross | 
| ---- | ---------------- | ------- | ---- | ------ | ----- | ------ | ----- |
| 2014/2015 | 01/05/2015 - 30/06/2015 | Portsmouth | 9780747586500 | JK Rowling | Harry Potter and the Prisoner of Azkaban | 3 | 9.6 |

So, between May and June 2015, there were 3 issues in Portsmouth of that particular ISBN. Portsmouth were part of the South East region, along with East Sussex and Hampshire. It looks like all those services 'actuals' are multiplied by 3.2 to get the gross figure. Presumably the multiplier is done on a regional basis depending on the sample size within that region.
