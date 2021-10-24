---
title: Freedom of information and library stats
excerpt: "Or AITA: They won't give me public data"
categories:
  - Public libraries
  - Statistics
tags:
  - CIPFA
  - Freedom of Information
published: true
---

In September I raised a Freedom of Information (FoI) request to UK library services, with a couple of queries.

1. Do you complete annual library statistics that you send to CIPFA, and have these been done for financial year 2020/2021?
2. If so, please provide the data in the original machine-readable format.

Here's how public library statistics currently work.

1. Library services compile data into a spreadsheet each financial year
2. These spreadsheets are sent to CIPFA by the end of July
3. CIPFA work on the data, providing reports for corporate subscribers in December.
4. The public can only ever access data by using Freedom of Information requests.

<div class="mermaid">
    flowchart LR
        foi(Freedom of Information)
        subgraph Library service
            direction LR
            lblms[(LMS)]
            lbf[(Finance)]
            lbw[(Website)]
            lbo[(Others)]
            lb1(Spreadsheet)
        end
        subgraph CIPFA
            direction LR
            id2[Validation]
            subgraph id3 [Data added]
                direction LR
                ad1[(e.g Population)]
            end
            id4[Aggregation]
        end
        subgraph cs [Commercial]
            direction LR
            srp(Reports)
            data[(Data)]
        end
        lblms --> lb1
        lbf --> lb1
        lbw --> lb1
        lbo --> lb1
        lb1 --> id2
        id2 -. Errors .-> lb1
        id2 --> id3
        id3 --> id4
        id4 --> cs
        lb1 --> foi
</div>

In this context, I believe the request is reasonable. Public libraries compile public data - so let's have those individual spreadsheets. It won't be aggregated, it won't be quality assured, and it won't have added-value analysis, such as population stats. But, it's public data all the same.

The deadline was 13th October for those FoI requests to be fulfilled. Over half have been completed; many others are still either waiting for an initial response, or going through appeal processes.

But I've learnt a lot: about FoI, and the difficulties of library statistics.

### Commercial prejudice

There is an exemption in FoI that means you may be able to refuse the request if it's likely to commercially prejudice a person or organisation.

Briefing notes for the exemption explain the kind of thing that would apply. For example, if I were requesting information about CIPFAs performance in an existing contract. Or if they were part of a competitive tender, and I requested their rates in order to undercut them. It protects information about a provider that may be commercially unfair to disclose. Even then it needs to be shown that it's likely that the prejudice will happen. It's also subject to a public interest test, with the assumption that disclosure is in the public interest.

Many library services argued that providing annual library stats to anyone other than CIPFA would harm CIPFA's commercial activities, as CIPFA sell added value services based on that data.

They gave an identically worded reason:

> We believe that by releasing information requested by CIPFA would prejudice CIPFA’s commercial interests as the service provides added value data analysis to subscribers only. 
>
> **Lots of library services**

CIPFA provide added value services on top of public data, but that doesn't justify exclusive rights to the underlying data.

### Reasonably available

Another option for declining an FoI request is where the information is reasonably available elsewhere. Essentially, don't hassle public services if you can easily get the information yourself.

Many services argued that this applied, and again used identical wording:

>Information may be reasonably obtainable even if a requester needs to pay for it. Information which is held by the public authority, but which is also commercially available is covered by this exemption. The market price for information which is commercially available will generally be taken as “reasonable”. 
>
>This information will be published by CIPFA. Although there may be a charge, it is in line with industry rates.
>
>**Lots of library services**

There are lots of problems with this guidance.

It's already mentioned that CIPFA provide 'added value data analysis', 5 months after library services provide the data. For the individual data collected by libraries there are no market prices.

ICO guidance is strict in ensuring that this exemption is not used to block access. It would be unfeasible for a member of the public to go to CIPFA for their complete 'added-value' analysis, as this is an expensive corporate product.

> It is unlikely to  be reasonable to require the applicant to purchase a copy of the report if the request is only for a small amount of the  information contained in it.
>
> **ICO guidance**

Guidance is also clear what counts as information available elsewhere:

> Where a public authority claims that information is available to the applicant via an alternative access regime, in order for section 21 apply, that regime must not place restrictions on the use of the information.
>
> **ICO guidance on Information reasonable accessible**

Alternative access doesn't apply to CIPFA as the terms at [CIPFA Stats](https://www.cipfa.org/terms-and-conditions/cipfa-stats) have highly restrictive conditions of use.

One of the ongoing FoI requests has gone to review, with the accessibility of the CIPFA publication covered.

> The price of the CIPFA publication may suggest that the information is not available to the general public but to a particular restricted audience.
>
> **FoI legal review conducted on behalf of Merton Council**

That seems correct.

### Copyright

A significant number of library services declined to provide data on the basis of copyright:

* The particular makeup/design of the dataset (as described above)
* The spreadsheet formatting

Performance measures have built up over years from public library requirements. The spreadsheet is sent out by CIPFA, but a working group comprised of public employees determines the questions. To what extent can CIPFA claim the copyright over the dataset design?

If library services started doing their own thing with annual statistics, would they need to significantly diverge from previous data collected? It seems like CIPFA believe so. I wouldn't agree, those measures have been public-sector led, plus many coincide with international performance standards such as [ISO 11620 — Library performance indicators](https://www.iso.org/standard/56755.html). But that's a future debate.

With the spreadsheet formatting, CIPFA create the spreadsheet for services, and it has normal things a pre-built spreadsheet would have, such as field titles. Is it a breach of copyright to disclose that spreadsheet? It's probably worth considering the spreadsheet file format. It's in XLSX format which has copyright to Microsoft. I'm not sure how much intellectual property can be claimed over using a proprietary spreadsheet format in the way it was intended: to transfer machine-readable data.

For some services objecting due to copyright, there was another identically worded response.

> We further believe that by releasing information curated to a CIPFA specification not only would prejudice CIPFA’s commercial interests but also breach copyright legislation and an infringement under the Copyright, Designs and Patents Act 1988. 
>
> **Lots of library services**

Regardless of all this, copyright is handled differently in Freedom of Information. 

> Copyright does not prevent information being disclosed under the Freedom of Information Act
>
> **ICO guidance at [Intellectual property rights and disclosures under FoI](https://ico.org.uk/media/for-organisations/documents/1150/intellectual_property_rights_and_disclosures_under_the_foia.pdf)** 

Any intellectual property would remain but not prevent disclosure, and fair use would still allow for criticism, review or news reporting.

Quite a few fabulous library services were concerned about the spreadsheet format issue, so created their own version of the data. I love them lots. It was probably a time-consuming exercise, but it won't have been a waste. Some even made sure that data was reusable under an Open Government Licence. That's exactly what we need; but with additional co-ordination to get the data into a standard format.

### No returns and late homework

In some cases, services would normally complete data but didn't for 2020/2021. Fair enough, it was a difficult year and they had other things to concentrate on. So far over 15 have indicated this, although as I didn't explicitly ask, it's likely more.

Not completing is fine, but it raises the issue that the data collection is an arduous exercise. There are some aspects that definitely should be taken out, such as the list of libraries, which could be maintained separately, as well as loans data which should be automated from systems.

Another 10 or so have said they plan to do it but haven't yet. As the deadline was July, I'm not sure they will! With those, plus the ones deciding not to continue with the stats, it could be that we see a drop of up to a quarter of services this year.

### What can be done?

Everyone knows this is broken. The majority of leadership organisations are on board, but none have direct responsibility for data. Many services don't complete data because they can't afford to receive the commercial reports. Plus the reports are marketed around benchmarking and performance management, and many have little interest in that.

Services need to be able to provide their data in the knowledge that it can be widely used and shared for insight, and that they'll also gain access to other libraries' data.

Urgent change is needed, ideally in time for 2021/2022 data. How about a shift to this process:

1. A library sector working group will be set up to decide on what data to collect.
2. An online form is distributed to library services at the end of this financial year. This will include the questions that currently exist - but also with relevant additions from the working group. All parties will promote this to library services across the UK.
3. Responses to this form will automatically become open data - library services will be able to submit updates/corrections which will be recorded in a log of changes to the data.
4. Staff and public workshops will give opportunities to analyse and discuss the data.
5. Any third parties can use the data to continue commercial offerings e.g. CIPFA 

Many libraries have shown wiling to adjust their normal process. But we now need a combined and sector-led approach.

*[CIPFA]: The Chartered Institute of Public Finance and Accountancy
*[FoI]: Freedom of Information
*[ICO]: Information Commissioner's Office
