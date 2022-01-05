---
title: Public lending right
excerpt: How public lending right data works in the UK
categories:
  - Public lending right
tags:
  - Library data
  - Statistics
published: true
---

The best dataset on public library usage in the UK is Public Lending Right (PLR).

> PLR is the right for authors to receive payment for the loans of their books by public libraries
>
> **British Library** 

There is comprehensive information about PLR [on the British Library website](https://www.bl.uk/plr). Here's a summary of how it works:

1. A sample of library services report borrowing data. This includes representation from each of the nine regions in England, plus Northern Ireland, Scotland and Wales. The services change at regular intervals. An [archive of this selection is available](https://www.bl.uk/plr/uk-sample-library-archive).

2. Authors must register their books (each ISBN) to be eligible for annual payments.

3. Every two months the library services send data on the number of loans (checkouts and renewals), broken down by ISBN.

4. For each region, the PLR team have an annual total loans figure, taken from CIPFA stats. They know the PLR sample loans, so can then apply a multiplier to estimate a loans figure for each ISBN. For example, 1 million loans may have been sampled. CIPFA may report that 2 million loans happened. Therefore PLR would double the numbers they have. Sample data is reported regularly, but CIPFA reports are released 9 months after the relevant financial year. Therefore the previous year's CIPFA totals are used.

5. A total of £6m, provided by the government, is distributed to registered authors, minus administration costs. A minimum payment amount is set to £1 and a maximum of £6,600 per author. Within those thresholds a calculation is made for how much each loan of a registered ISBN receives. This gives a 'rate per loan'. See below for recent values.

| 2012 | 2013 | 2014 | 2015 | 2016 | 2017 | 2018 | 2019 | 2020 | 2021 |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| 6.05p | 6.20p | 6.20p | 6.66p | 7.67p | 7.82p | 8.20p | 8.52p | 9.55p | 11.26p |

Overall, it's a lovely process, and good to see authors paid for the borrowing of their works. Authors already tend to be on the side of libraries, but it must help to have a small reimbursement. 

I have a minor quibble. I don't like combining checkout and renewal data. It treats renewing a book as equivalent to initially borrowing it. But choosing a book, and taking it out from a library, seems far more important than extending the loan period (sometimes automatically). Personally, I renew books either because I've not finished them (too many at once maybe), or because I can't get back to the library by the time it's due. Neither really amounts to another loan. Besides, whenever any kind of data is combined, it removes a level of detail that would be interesting and useful.

### Rate per loan

The terminology around PLR can be misleading. A 'rate per loan' suggests authors are entitled to a fixed amount for each time their books are loaned. But the 'pot' of money available for PLR payments is fixed, and the sample data is a method of dividing that up between registered authors. The rate per loan is a fluctuating value that will depend on the total number of loans for the year, and how many authors/books are signed up for PLR. If more authors sign up then the rate would go down. If the count of loans goes down then the rate goes up.

It is an interesting situation that this rate is set within PLR legislation. This leads to the government having to consult to pass a change to legislation almost every year to change it. See [the 2018 DCMS announcement](https://www.gov.uk/government/consultations/public-lending-right-plr-rate-per-loan-consultation-for-payments-in-relation-to-the-201718-public-lending-right-scheme-year), proposing to change the rate per loan amount from 8.20 pence to 8.52 pence.

### Volunteer libraries

There have been concerns that volunteer libraries, who don't submit loan data, means authors are deprived of their payment for those loans.

This isn't really the way it works, due to the fixed nature of the fund. But it's possible that volunteer libraries not being included could disadvantage certain authors popular in volunteer libraries, but that's hard to judge. It is more likely that reduced PLR samples in certain regions could disproportionately affect authors popular in those regions. Perhaps even in certain cities and towns.

Not representing local borrowing is already a problem with PLR. The sampling looks substantial, but to take [the example of 2017-2018](https://www.bl.uk/britishlibrary/~/media/bl/global/services/plr/pdfs/samples/2017-2018.pdf), the only South West authorities were Bournemouth and Poole. Both right next to each other, and both tucked away quite far down (awesome places). Local authors popular in Bristol and Bath, or in Cornwall, could feel a little aggrieved.


### Previous year totals used

As mentioned, the 'total' loan figures, taken from CIPFA stats, are for the previous financial year. As a rough estimate this would normally be fine. Although loans numbers have steadily been decreasing, they're similar enough between neighbouring years. It would probably even be possible to estimate the decline.

But disruption is often caused by unforeseen circumstances that break brittle processes. What would happen if public library loans numbers dramatically dropped, but PLR only had the previous years total to work the sample up from? Well, for 2020/2021 that happened. The PLR sample will have been considerably smaller than usual, but the CIPFA totals relatively normal. Next year the opposite will be the case. The British Library have explained some of this in [the possible impact on PLR due to lockdown](https://www.bl.uk/britishlibrary/~/media/88440fd32e8d4697bb382446a7993efd.ashx).

> in next year’s calculation we will use CIPFA data from 1 April 2020 to 31 March  2021, which is likely to be significantly reduced due to the extended periods when public libraries  were closed. We expect the PLR sample data for this period will have returned to normal and we will  have collected a full year’s worth of loans information
>
> **British Library** 

It's not clear what will be done next year in this situation. In theory, the 'total' loans from CIPFA could be fewer than the sampled data. Would the PLR team then provide estimated loans for ISBNs that are actually lower figures than from the sample data? That would be very odd!

There's only one really satisfactory solution, and that is to change the sample to collect data from everyone, and not rely on a third party dataset. Library systems have PLR reporting built into them, why not extend the sample to include all authorities?

### What else could the data be used for?

The primary function of the data is to pay authors for the lending of their works, and it does that well. But it feels like an amazing dataset, currently underused.

Advocating for open data doesn't need to involve trying to suggest ways in which the data could be used. That's always a surprise that comes about through making it available to a wide audience. But a few things spring to mind.

- It is the best single dataset for analysing library usage over time. CIPFA has issue figures over many years, but it's difficult to get anything out of a single annual number, other than declining use. And declining issues doesn't tell the whole story, when we know that library usage changes. The PLR data is detailed enough to include reporting period, so every two months rather than annual.
- With ISBN as a level of detail we can see more about reading habits over time. This could involve associated data (e.g. genre) that we can get from the ISBN. Do people read Mills & Boon mainly during the summer? Do they read Agatha Christie mysteries over the winter? I don't know, but PLR data does.
- It's interesting to see the longevity of certain books and authors. It was striking to look through the data from the 90s and see Catherine Cookson books being the majority of the whole top 20, and then [dramatically dropping out in 2008](https://www.theguardian.com/books/2010/feb/11/catherine-cookson-library-charts). We have a similar dominance with some authors today, but how long will they stay at the top?
- It would be good to see library catalogues (and other book searches) display this data. When a user looks at the detail of a book in the catalogue, it could show the PLR history of the item.

### Is it open?

OK, show us the data! Well, there doesn't seem to be any available, as such.

The PLR team have long provided excellent [annual media reports](https://www.bl.uk/plr/uk-media-centre) about PLR data. Things like the top 100 authors and books each year, in different regions.

They have also in the past been willing to give access to the LEWIS system (Loans Enquiry Web Information Service). Years ago, even as a non-library person, the PLR team kindly granted me access. And all public library staff can apply. This is an online tool to query the loans data from 1995 to 2015. This looks and feels very like [OLGA](https://www.plr.uk.com/olga/login.aspx), the system used by authors to see their PLR statements, and was presumably developed by the same team.

1995 to 2015? What about since 2016? Well, I don't know. PLR responsibility transferred from an independent team based in Stockton-on-Tees to a British Library office in Boston Spa. [One of the newsletters](https://www.bl.uk/britishlibrary/~/media/bl/global/services/plr/pdfs/newsletters/2018newsletter.pdf) described a number of changes.

>  Our aim is to make efficiency savings by relocating PLR operations to sit alongside other corporate functions and to implement a new IT application taking advantage of new technology which, as well as adding new functionality, will support modernisation. 

That sounds very good, although may be bad news for LEWIS being updated. Data must still be collected, and excitingly in July 2018 was updated to include ebook loans. But perhaps the changing of teams and IT systems will mean this will not make it into the current online query tool.

### What could it look like?

It was interesting to imagine what a PLR dataset could look like as a flat spreadsheet. Maybe something like this (with more rows):

| Period | Service | ISBN | Author | Title | Item type | Copies | Loans |
| ---------------- | ------- | ---- | ------ | ----- | ------ | ------ | ------ |
| 01/05/2016 - 30/06/2016 | Manchester | 9781849905213 | Terrance Dicks | Players | Book | 1 | 1 |

To explain this, between May and June 2016, there was 1 issue in Manchester, from 1 copy of that particular ISBN. All library management systems can report such data, so ideally this would be extended to all services, and reported as open data at a more regular interval (e.g. nightly or weekly).

### Will it become open?

This is down to the British Library, but I don't think there's any sinister reason that it isn't, other than that the demand hasn't been there. So if we want it we need to ask for it! The British Library have a good [Library Labs project](https://www.bl.uk/projects/british-library-labs), which encourages open reuse of various of their collections. And they have also been generally [very good about open data](http://www.bl.uk/bibliographic/datafree.html). So maybe it's just a matter of time.



[PLR]: Public Lending Right
