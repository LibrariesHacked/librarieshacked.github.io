---
category: data
tags: plr data lending
title: Public lending right
published: true
meta:
---

The best dataset on UK public library usage is Public Lending Right (PLR).

> PLR is the right for authors to receive payment for the loans of their books by public libraries

There is comprehensive information [on the British Library website](https://www.bl.uk/plr). The process is:

1. The PLR team select a sample of UK authorities to report borrowing data. The sample represents each of the nine government regions for England plus Northern Ireland, Scotland and Wales. The authorities change at fairly regular intervals. An archive of this selection is [available to download](https://www.bl.uk/plr/uk-sample-library-archive).

2. Authors must apply to PLR and register their books (and each ISBN) to be eligible for annual payments.

3. The library services send the number of loans (including renewals), for each ISBN. This is at 2-monthly reporting periods.

4. For each region, the PLR team have a total loans for each year, taken from CIPFA stats. They will know the total PLR reported loans (the 'actuals'), and can apply a multipler to estimate a loans figure for each ISBN (the 'gross'). For example, the sample may have reported a total of 1 million loans. CIPFA may say 2 million loans happened. Therefore PLR can double the number they have.

5. A total of £6m is distributed to authors, provided by the government, minus administration costs. A minimum payment amount is set to £1 and a maximum of £6,600 per author. Within those thresholds a calculation is made for how much each loan receives. A 'rate per loan' is then decided. See below for recent rate per loan values.

| 2012 | 2013 | 2014 | 2015 | 2016 | 2017 | 2018 | 2019 |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| 6.05p | 6.20p | 6.20p | 6.66p | 7.67p | 7.82p | 8.20p | 8.52p |

It's a lovely process, and good to see authors paid for the borrowing of their works. Authors tend to be on the side of libraries anyway, but it must help to have some reimbursement. 

I have a minor quibble. I don't like combining loan and renewal data. It treats renewing a book as the equivalent to taking it out again. But this doesn't reflect how people use libraries. The act of choosing a particular book, and taking it out from a library, seems far more important than just extending the loan period (sometimes automatically). Personally, I renew books either because I've not finished them (too many at once maybe), or because I can't get back to the library by the time it's due. Neither really warrants another count on the number of issues for the book. Besides, whenever any kind of data is combined, it removes a level of detail that would be interesting and useful. Renewals are fascinating, but not as a method of paying authors.

### Rate per loan

The terminology around PLR can be unintentionally misleading. A 'rate per loan' suggests that authors are entitled to a fixed amount for each time their books are loaned. But that's not quite correct. The 'pot' of money available for PLR payments is fixed, and the sample data is simply a way of dividing up that pot in a proportional way. The rate per loan is a highly changeable value that will depend on the total number of loans for the year, and how many authors/books are signed up for PLR. If more authors sign up to PLR then the rate goes down. If the count of loans goes up then the rate goes down.

It is an interesting sitation that this rate is within PLR legislation. This leads to the government having to pass a change to legislation almost every year to change it. See [the 2018 DCMS announcement](https://www.gov.uk/government/consultations/public-lending-right-plr-rate-per-loan-consultation-for-payments-in-relation-to-the-201718-public-lending-right-scheme-year), proposing to change the rate per loan amount from 8.20 pence to 8.52 pence.

### Volunteer libraries

There have been concerns that the increase in volunteer libraries, who don't submit loan data to either PLR or CIPFA, strips authors of their right to payment.

This isn't really the way it works. If anything, authors have never been paid more per loan of their works in libraries. But there are effects of volunteer libraries that could at least damage the confidence of the PLR sampling. It is hard to generalise about the type of books taken out of volunteer libraries that could lead to an unfair disadvantage to certain authors. But it could be that reduced CIPFA stats, and reduced PLR samples in certain regions could disproportionately affect authors popular in those regions. Perhaps even in certain cities and smaller areas. 

Not representing local borrowing is already a problem with PLR. The sampling looks substantial, but to take [the example of 2017-2018](https://www.bl.uk/britishlibrary/~/media/bl/global/services/plr/pdfs/samples/2017-2018.pdf), the only South West authorities were Bournemouth and Poole. Both right next to each other, and both tucked away quite far down (also awesome places). Authors popular in Bristol and Bath, or in Cornwall, could feel a little aggrieved.

Library systems have PLR reporting built into them, why not extend the sample to include all authorities all of the time? This could be a powerful step in addressing concerns about the current sample, and volunteer libraries. (Yes, there are other problems with volunteer libraries...)

### What else could the data be used for?

The primary function of the data is to pay authors for the lending of their works, and it does that well. But it feels like an amazing dataset, currently underused.

Advocating for open data shouldn't involve trying to suggest ways in which the data could be used. That's always a surprise for later. But a few things spring to mind.

- It is the best single dataset for analysing library usage over time. CIPFA has issue figures collected over many years, but it's difficult to get anything out of a single annual number, other than declining use. And declining issues doesn't tell the whole story, when we know that library usage changes. The PLR data is detailed enough to include reporting period, so every two months rather than annual.
- With ISBN as a level of detail we can see more about reading habits over time. This could involve associated data (e.g. genre) that we can get from the ISBN. Do people read Mills & Boon mainly during the summer? Do they read Agatha Christie mysteries over the winter? I don't know, but PLR data does.
- It's interesting to see the longevity of certain books and authors. It was striking to look through the data from the 90s and see Catherine Cookson books being the majority of the whole top 20, and then [dramatically dropping out in 2008](https://www.theguardian.com/books/2010/feb/11/catherine-cookson-library-charts). We have a similar dominance with some authors today, but how long will they stay at the top?
- It would be good to see library catalogues (and other book searches) display this data. When a user looks at the detail of a book in the catalogue, it could show the PLR history of the item. It would be simple enough to make an open API that returned the PLR history of an ISBN.

### Is it open?

OK, show us the data! Well, there doesn't seem to be any available, as such.

The PLR team have long provided excellent [annual media reports](https://www.bl.uk/plr/uk-media-centre) about PLR data. Things like the top 100 authors and books each year, in different regions.

They have also in the past been willing to give access to the LEWIS system (Loans Enquiry Web Information Service). Years ago, even as a non-library person, the PLR team kindly granted me access. And all public library staff can apply. This is an online tool to query the loans data from 1995 to 2015. This looks and feels very like [OLGA](https://www.plr.uk.com/olga/login.aspx), the system used by authors to see their PLR statements, and was presumably developed by the same team.

1995 to 2015? What about 2016/2017/2018? Well, I don't know. In the last few years PLR responsibility has been transferring from an independent team based in Stockton-on-Tees to a British Library office in Boston Spa. The [latest newsletter](https://www.bl.uk/britishlibrary/~/media/bl/global/services/plr/pdfs/newsletters/2018newsletter.pdf) describes a number of changes.

>  Our aim is to make efficiency savings by relocating PLR operations to sit alongside other corporate functions and to implement a new IT application taking advantage of new technology which, as well as adding new functionality, will support modernisation. 

That sounds very good, although may be bad news for LEWIS being updated. Data must still be collected, and excitingly in July 2018 was updated to include ebook loans. But perhaps the changing of teams and IT systems will mean this will not make it into the current online query tool.

### What could it look like?

After exploring the data in a web format, it was interesting to imagine what a PLR dataset could look like as a simple spreadsheet. Maybe something like this (with more rows).

| Year | Reporting period | Service | ISBN | Author | Title | Actual | Gross | 
| ---- | ---------------- | ------- | ---- | ------ | ----- | ------ | ----- |
| 2014/2015 | 01/05/2015 - 30/06/2015 | Portsmouth | 9780747586500 | JK Rowling | Harry Potter and the Prisoner of Azkaban | 3 | 9.6 |

To explain this, between May and June 2015, there were 3 issues in Portsmouth of that particular ISBN. Portsmouth are part of the South East sample region, at the time this was along with East Sussex and Hampshire. All those service actuals are multiplied by 3.2 to get the gross figure. Presumably the multiplier varies on a regional basis, depending on the sample size and CIPFA totals within that region.

### Will it be open?

This is down to the British Library, but I don't think there's any sinister reason that it isn't, other than that the demand hasn't been there. So if we want it we need to ask for it! The British Library have a good [Library Labs project](https://www.bl.uk/projects/british-library-labs), which encourages open reuse of various of their collections. And they have also been generally [very good about open data](http://www.bl.uk/bibliographic/datafree.html). So maybe it's just a matter of time.