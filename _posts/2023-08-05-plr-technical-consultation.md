---
title: Public lending right technical change
excerpt: Response to a consultation for a technical change to public lending right
categories:
  - PLR
tags:
  - Data
  - Loans
published: true
---

On 28th June 2023 the DCMS published a [Consultation on technical amendments to the Public Lending Right Scheme](https://www.gov.uk/government/consultations/consultation-on-technical-amendments-to-the-public-lending-right-scheme-2023/consultation-on-technical-amendments-to-the-public-lending-right-scheme-2023). If you need an introduction PLR works, try the [Public Lending Right](https://blog.librarydata.uk/public-lending-right/) post on this blog.

The consultation runs until 6 August 2023. It proposes two changes.

> 1. Amend the Scheme so that it is less prescriptive regarding designation of sampling points, enabling the British Library to increase the sample size with the option to move to collecting comprehensive loans data from all library authorities in the UK.
> 2. Remove the requirement, in certain circumstances, for an application for registration of a posthumously eligible book to be made by the deceased author’s personal representatives. This means a person registering books for the first time after inheriting from a deceased author may not need to have a solicitor/executor involved in making the application, providing for a more efficient and less burdensome administration process.
>
> **Consultation on technical amendments to the Public Lending Right Scheme: 2023**

The second amendment seems good, but out of scope for a library data blog. The first is obviously relevant - it could lead to comprehensive UK library loans data.

There are many reasons to support it. The current sampling is unfair to authors popular in local areas, who may not be part of the sample for many years. The system also relies on 'grossing up' the sample by using total lending figures, which no longer exist.

Not just a significant fix for PLR - this is an opportunity to make the data multi-purpose, and openly available to all. It is also an opportunity to make a large saving across libraries, as well as encouraging greater innovation from that data.

What has PLR to do with libraries publishing open data? The public library sector has spent the last decade unsuccessfully discussing how it can publish data from all services, with loans being a key dataset. Better PLR data could remove the need for almost any other library loans data. There is no point in duplicating effort: if comprehensive loans data is produced for PLR, it should be available for all purposes.

This isnt really 'PLR data'. It would be a public dataset of library loans, published from all libraries, to an open repository. Available to anyone, including PLR, for whatever purpose they wish. But as PLR is a legislative requirement it is the only means to collect the data without only voluntary participation, and includes funds for administration.

Across 200 or so local authorities, there is a huge opportunity for greater efficiency. It would allow shared tools to be built from that data and save significant amounts of staff time spent regularly extracting that data from individual systems.

A [recent Freedom of Information request](https://www.whatdotheyknow.com/request/request_for_total_book_issues_by_2) was sent to multiple library services. This asked for the loans figures for each library branch, over a custom period. The staff time for each service could easily be a couple of hours.

[A more complex FOI request](https://www.whatdotheyknow.com/request/top_10_most_popular_library_book_127), sent to 151 library services in England, asked for data on the ten most popular books. Responses to this were mixed - Telford and Wrekin could not provide the data, and said they only had such information when they were part of the PLR sample. That seems extraordinary, but shows the potential impact of centralised data. FOI allows for a maximum of £450 in staff time. For just a single but complex request sent to all UK services, that could be almost £100,000.

Similarly, Libraries Connected have been running their own data collection programme, requesting loans data from libraries. Each response to this requires staff time. All libraries also have routine weekly and monthly data processes that would benefit from shared systems and data.

The data could also be used in commercial applications. Both Nielsen LibScan and CollectionHQ produce software to extract loans data from library management systems. They, and any other innovators, should be able to access data that is openly published by default.

It's not only benefits for the library sector. Authors, contributors and publishers would hugely benefit from better and more timely data about books being borrowed in libraries. To see, for example, how many of your books were loaned in libraries the previous day would be incredibly powerful. The impact of author events and promotion would be far clearer.

There is likely to be a view that extending loans reporting will create an extra burden on public libraries. That is only true if the change is poorly implemented. With extra automation, the efficency savings are clear. Providing library services with centrally managed and up-to-date reporting on library loans would easily achieve annual savings of far more than the cost of implementation.

There's only going to be one chance for this - it's worth getting it right.

### How would it work?

Automation and open publishing are the two essential aspects in making combined loans data across all services work efficiently. Here's a rough proposal.

<div class="mermaid">
  flowchart TD;
      LibA["Library service A
        LMS"];
      LibB["Library service B
      LMS"];
      Hold["Holding area
        nightly data validation"];
      ThirdParty["Sample third party"]
      Public["The public"]
      LibA-- "Loans" -->Hold;
      LibB-- "Loans" -->Hold;
      Hold-- "Successful validation" -->open;
      subgraph open["Open data repository"]
      OpenData["All loans data
        incl. Documentation"];
      end
      OpenData-->PLR;
      OpenData-->ThirdParty;
      OpenData-->Public;
</div>

1. Library management systems send loans data into a holding area every night. The data will include branch name, ISBNs, counts, and date
2. That data is automatically validated to ensure it only contains valid identifiers, is in the correct format, and counts are within minimum/maximum thresholds for each library branch.
3. If any problems are detected an alert is sent to the service and the PLR team. Extra detail in the data will aid in the validation process, as more information will be available to diagnose issues.
4. If no problems are detected the data is published into an open data repository
5. Data is then picked up for anyone wishing to use it
6. Open publishing of the data provides an extra level of validation - data users should be able to report issues back to be investigated and corrected.

The following are the formal responses submitted from Libraries Hacked to the DCMS for the consultation.

### To what extent do you agree or disagree with this proposed change to PLR sampling requirements?

I have been advocating for extending PLR sampling for many years. It is essential for this data to be widely available.

PLR is the best option for a statutory requirement for library data collection. If loans are collected as part of PLR then there would be no reason to collect this elsewhere (e.g. CIPFA submissions, or local data reporting). We need to ensure that public library processes are efficient and refer to a single source.

I therefore strongly welcome this technical change.

### Do you have any other proposals as to how accurate book lending data from UK public libraries could be obtained for the purpose of calculating the PLR payments due to authors and other contributors?

The process should be more automated, regular, detailed, and open.

Automated data transfers will ensure staff time is minimised.

Greater regularity (daily rather than 2-monthly) helps fix errors in a timely manner, rather than these becoming a bottleneck.

Extra detail, such as branch and loan date, will aid in investigating anomalies and errors.

Open data increases data visibility, and adds validation to provide a level of data accuracy that is impossible for a small team to achieve alone.

### Do you anticipate there would be any wider impacts as a result of the proposed change to the PLR book loans sampling? These could be positive or negative.

The public library sector has long been in need of comprehensive library loans data.

Not simply counts of loans, but the extra level of detail of which books are being loaned, where, and when.

The wider impact of a source of data that could provide this is huge. It would be the most significant public dataset providing insight into UK reading habits - for libraries, the public, and the wider education sector.

It is essential to make good use of this data, and to make it openly available.
