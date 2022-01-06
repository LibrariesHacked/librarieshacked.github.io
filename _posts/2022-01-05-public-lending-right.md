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

2. Authors must register the ISBNs of their books, audiobooks, and ebooks to be eligible for annual payments.

3. Every two months the library services send data on the number of loans (checkouts and renewals), by ISBN.

4. For each region, the PLR team have a total annual loans figure, taken from annual CIPFA stats. They can then apply a multiplier to their sample to estimate a loans figure for each ISBN. For example, 1 million loans may have been sampled. CIPFA may report 2 million loans happened. Therefore PLR would double the numbers they have. Sample data is reported regularly, but CIPFA reports are released 9 months after the relevant financial year. Therefore the previous year's CIPFA totals are used.

5. A total of £6m of funding is distributed to registered authors and contributors, minus administration costs. A minimum payment amount is set to £1 and a maximum of £6,600. Within those thresholds a calculation is made for how much each loan of a registered ISBN receives. This gives a 'rate per loan'. See below for recent values (in pence).

| 2012 | 2013 | 2015 | 2016 | 2017 | 2018 | 2019 | 2020 | 2021 |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| 6.05 | 6.20 | 6.66 | 7.67 | 7.82 | 8.20 | 8.52 | 9.55 | 11.26 |

Overall, it's a lovely process, and good to see authors paid for the borrowing of their works. Authors tend to be on the side of libraries, but it must help to have some reimbursement. 

I have a minor quibble. I don't like combining checkout and renewal data. It treats renewing a book as equivalent to initially borrowing it. But choosing a book, and taking it out from a library, seems far more important than extending the loan period, sometimes automatically. Personally, I renew books either because I've not finished them (too many at once maybe), or because I can't get back to the library by the time it's due. Neither really amounts to another loan. Besides, whenever different data is combined, it removes a level of detail that would be interesting and useful.

### Rate per loan

The terminology around PLR can be misleading. A rate per loan suggests authors are entitled to a fixed amount each time their books are loaned. But the pot of money available for PLR payments is fixed, and the data sampling is a method of dividing that up based on loan proportions. The rate per loan is a fluctuating value that will depend on the total number of loans for the year, and how many authors/books are signed up for PLR. If more authors sign up then the rate would go down. If the count of loans goes down then the rate goes up.

It is an interesting situation that this rate is set within legislation. This leads to the government having to consult to pass a change to legislation almost every year to change it. See [the 2018 DCMS announcement](https://www.gov.uk/government/consultations/public-lending-right-plr-rate-per-loan-consultation-for-payments-in-relation-to-the-201718-public-lending-right-scheme-year), proposing to change the rate per loan amount from 8.20 pence to 8.52 pence.

### Volunteer libraries

There have been concerns that having volunteer libraries, who don't submit loans data, means authors are deprived of their payment for those loans.

That isn't really the way it works, due to the fixed nature of the fund. It's possible that not including volunteer libraries could disadvantage authors who are popular in volunteer libraries, but that's hard to judge. It is more likely that reduced PLR samples in certain regions could disproportionately affect authors popular in those regions. Perhaps even in certain cities and towns.

Not representing local borrowing is already a problem with PLR. The sampling looks substantial, but to take [the example of 2017-2018](https://www.bl.uk/britishlibrary/~/media/bl/global/services/plr/pdfs/samples/2017-2018.pdf), the only South West authorities were Bournemouth and Poole. Both right next to each other, and both tucked away quite far down (awesome places). Locally popular authors in Bristol and Bath, or Cornwall, could feel a little aggrieved.


### Using previous year totals

The 'total' loan figures, taken from CIPFA stats, are for the previous financial year. For rough estimation that would normally be fine. Although loans numbers have been steadily decreasing, they're similar enough between neighbouring years.

But disruption is often caused by unforeseen circumstances breaking processes that aren't resilient. What would happen if public library loans numbers dramatically dropped, and the previous year total not that relevant to the current year? Well, for 2020/2021 that happened. The PLR sample will have been considerably smaller than usual, but the CIPFA total from the previous year relatively normal. Next year, the opposite will be the case. The British Library have explained some of this in [the possible impact on PLR due to lockdown](https://www.bl.uk/britishlibrary/~/media/88440fd32e8d4697bb382446a7993efd.ashx).

> in next year’s calculation we will use CIPFA data from 1 April 2020 to 31 March  2021, which is likely to be significantly reduced due to the extended periods when public libraries were closed. We expect the PLR sample data for this period will have returned to normal and we will have collected a full year’s worth of loans information
>
> **British Library** 

It's not clear what will be done in this situation. In theory, the total loans reported by CIPFA for 2020/2021 could be lower than the sample for 2021/2022. If the sample has 1 million loans and CIPFA say 0.5 million loans happened are the sample figures then halved? That would bear no relation to reality.

The only satisfactory solution is to collect data from all services, and not rely on a third party dataset. Library systems have PLR reporting built into them, why not extend the sample to include all of them? Although the lockdown has highlighted flaws in the system, there's now a very good reason for fixing those.

### What else could the data be used for?

The primary function of the data is to pay authors for the lending of their works, and it does that well. But it feels like an amazing dataset that could offer far more.

Advocating for open data doesn't need to involve suggesting all the ways in which data could be used. That will be discovered once data is made available to a wider audience. But a few things spring to mind.

- It is the best single dataset for analysing library usage over time. CIPFA have issue figures over many years, but it's difficult to get anything out of a single annual figure, other than declining use. And declining issues doesn't tell the whole story, when we know that library usage changes seasonally (e.g. the Summer Reading Challenge). The PLR data records every two months, and could be made more detailed.
- With ISBN as a level of detail we can see more about reading habits over time. Do people read Agatha Christie mysteries over the winter? I don't know, but PLR data does. This could also involve associated data (e.g. genre) that we can get from the ISBN. 
- It's interesting to see the longevity of certain books and authors. It was striking to look through the data from the 90s and see Catherine Cookson books being the majority of the whole top 20, and then [dramatically dropping out in 2008](https://www.theguardian.com/books/2010/feb/11/catherine-cookson-library-charts). We have a similar dominance with some authors today, but how long will they stay at the top?
- It would be good to see library catalogues (and other book searches) display this data. When a user looks at the detail of a book in the catalogue, it could show the PLR history of the item.

### Is it open?

Enough, show us the data! Well, there isn't any currently available.

The PLR team have long provided excellent [annual media reports](https://www.bl.uk/plr/uk-media-centre) about PLR data. Things like the top 100 authors and books each year, in different regions.

In the past they were willing to give access to the LEWIS system (Loans Enquiry Web Information Service), also available to all public library staff. Years ago, they kindly granted me access. This was an online tool to query the loans data from 1995 to 2015. They've also been good in responding to freedom of information requests.

1995 to 2015? What about since 2016? Well, I don't know, the data in the online query tool stopped being updated. PLR responsibility transferred from an independent team based in Stockton-on-Tees to a British Library office in Boston Spa. [One of the newsletters](https://www.bl.uk/britishlibrary/~/media/bl/global/services/plr/pdfs/newsletters/2018newsletter.pdf) described a number of IT changes.

>  Our aim is to make efficiency savings by relocating PLR operations to sit alongside other corporate functions and to implement a new IT application taking advantage of new technology which, as well as adding new functionality, will support modernisation. 

That sounds good, although doesn't indicate whether anything will be provided for recent data. How can the data be made available to libraries and the public?

### What could it look like?

It was interesting to imagine what a PLR dataset could look like as a flat spreadsheet.

| Start | End | Service | ISBN | Author | Title | Item type | Copies | Loans |
| ---------------- | ------- | ---- | ------ | ----- | ------ | ------ | ------ | ------ |
| 2016-05-01 | 2016-06-30 | Manchester | 9781849905213 | Terrance Dicks | Players | Book | 1 | 1 |

To explain this, in May and June 2016, there was 1 issue in Manchester Libraries, from 1 copy of that particular ISBN. All library management systems can report such data, so ideally this would be extended to all services, and exported as open data at a more regular interval (e.g. nightly or weekly).

### Will it become open?

This is down to the British Library, but I don't think there's any sinister reason that it isn't, other than that the demand hasn't been there. So if we want it we need to ask for it! The British Library have a good [Library Labs project](https://www.bl.uk/projects/british-library-labs), which encourages open reuse of their collections. And they have also been generally [good about open data](http://www.bl.uk/bibliographic/datafree.html). So maybe it's just a matter of time.



[CIPFA]: Chartered Institute of Public Finance and Accountancy
[PLR]: Public Lending Right
