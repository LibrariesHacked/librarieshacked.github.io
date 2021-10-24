---
title: Freedom of information and library stats
excerpt: "Or AITA: They won't give me public data"
categories:
  - Public libraries
  - Statistics
tags:
  - CIPFA
published: true
---

In September I raised a Freedom of Information (FOI) request to UK library services, with a couple of queries.

1. Do you complete annual library statistics to be sent to CIPFA, and have these been done for financial year 2020/2021?
2. If so, please provide the data that you compiled in machine-readable format.

Here's how annual public library statistics currently work.

1. Library services compile data into a spreadsheet each financial year, from various library sources
2. These spreadsheets are sent to CIPFA by the end of July
3. CIPFA work on the data, with reports for corporate subscribers in December.

<div class="mermaid">
    flowchart LR
        subgraph Library service
            direction LR
            lblms[(LMS)]
            lbf[(Finance)]
            lbo[(Other)]
            lb1(Spreadsheet)
        end
        subgraph CIPFA
            direction LR
            id2[Validation]
            subgraph id3 [Add data]
                direction LR
                ad1[(Population)]
            end
            id4[Aggregation]
        end
        subgraph cs [Subscribers]
            direction LR
            srp(Reports)
            data[(Data)]
        end
        lblms --> lb1
        lbf --> lb1
        lbo --> lb1
        lb1 <--> id2
        id2 -. Data Errors .-> lb1
        id2 --> id3
        id3 --> id4
        id4 --> cs
</div>

In this context, I believe the FOI request is reasonable. Public libraries compile ther own data - so let's have those individual returns. It won't be aggregated, it won't be quality assured, and it won't have added-value analysis. But, it's public data all the same. Fair enough?

It was more complicated than that! It's obviously an unorthodox request; not just asking for how many libraries they have or something, but it's a valid request.

The deadline was 13th October for those FOI requests to be fulfilled. Over half have been completed; many others are still either waiting for an initial response, or going through appeal processes.

But I've learnt a lot: about FOI, and the difficulties of library statistics.

### Commercial prejudice

There is an exemption in FOI that means you can refuse the request if it's likely to commercially prejudice a person or organisation.

Briefing notes for the exemption explain the kind of thing that would apply. For example, if I were requesting information about CIPFAs performance in an existing contract. Or if they were part of a competitive tender, and I requested their rates in order to undercut them. It protects information about a provider that may be commercially unfair to disclose. Even then it needs to be shown that it is likely that the prejudice will happen. It's also subject to a public interest test, with the assumption that disclosure is in the public interest.

Many library services argued that providing annual library stats to anyone other than CIPFA would harm CIPFA's commercial activities, as CIPFA sell added value services based on that data.

They gave an identically worded reason when applying this exemption:

> We believe that by releasing information requested by CIPFA would prejudice CIPFA’s commercial interests as the service provides added value data analysis to subscribers only. 
>
> **Lots of library services**

A key point here is 'added value data analysis'. CIPFA provide commercial services on top of public data, but that doesn't justify exclusive rights to the underlying data.

### Reasonably available

Another option for declining an FOI request is where the information is reasonably available elsewhere. Essentially, don't hassle public services when you can easily get the information yourself.

Many services argued that this applied, and again used identical wording:

>Information may be reasonably obtainable even if a requester needs to pay for it. Information which is held by the public authority, but which is also commercially available is covered by this exemption. The market price for information which is commercially available will generally be taken as “reasonable”. 
>
>This information will be published by CIPFA. Although there may be a charge, it is in line with industry rates.
>
>**Lots of library services**

There are lots of problems with this guidance.

It's already mentioned that CIPFA provide 'added value data analysis', released 5 months after library services send them data. For the individual data collected by libraries there are no market prices.

Information Commissioner's Office (ICO) guidance is strict in ensuring that this exemption is not used to block information access. It would be unfeasible for a member of the public to go to CIPFA for their complete 'added-value' analysis, as this is an expensive corporate product.

> It is unlikely to  be reasonable to require the applicant to purchase a copy of the report if the request is only for a small amount of the  information contained in it.
>
> **ICO guidance**

Guidance is also clear about what counts as information available elsewhere:

> Where a public authority claims that information is available to the applicant via an alternative access regime, in order for section 21 apply, that regime must not place restrictions on the use of the information.
>
> **ICO guidance on Information reasonable accessible**

Alternative access doesn't apply to CIPFA as the terms at [CIPFA Stats](https://www.cipfa.org/terms-and-conditions/cipfa-stats) are clear that information purchased from CIPFA has highly restrictive conditions of use.

One of the ongoing FOI requests has gone to review, with the accessibility of the CIPFA publication covered.

> The price of the CIPFA publication may suggest that the information is not available to the general public but to a particular restricted audience.
>
> **FOI legal review conducted on behalf of Merton Council**

That seems correct.

### Copyright

Another aspect of library statistics is copyright. Not so much the underlying data itself, but the design of the dataset.

Annual statistics have built up over years from public library requirements. Although the spreadsheet is sent out by CIPFA, a working group comprised of public employees has determined these. To what extent can CIPFA claim the copyright over the dataset design?

If library services started doing their own thing with annual statistics, would they need to significantly diverge from previous data collected? It seems like CIPFA believe so. I wouldn't agree, those measures have been public-sector led, plus many coincide with international performance standards such as [ISO 11620 — Library performance indicators](https://www.iso.org/standard/56755.html). But that's a future debate.

A significant number of library services declined to provide data on the basis of copyright:

* The particular makeup/design of the dataset (as described above)
* The spreadsheet formatting

With the second reason, CIPFA create the spreadsheet for services to fill in, and it has normal things a pre-built spreadsheet would have e.g. cell titles. Is it a breach of copyright to disclose that spreadsheet? It's probably worth considering the spreadsheet file format. It's in XLSX format which has copyright to Microsoft. I'm not sure how much intellectual property can be claimed over using a proprietary spreadsheet format in the way it was intended: to transfer machine-readable data.

For those services objecting due to copyright, there was another identically worded response.

> We further believe that by releasing information curated to a CIPFA specification not only would prejudice CIPFA’s commercial interests but also breach copyright legislation and an infringement under the Copyright, Designs and Patents Act 1988. 
>
> **Lots of library services**

Regardless of this copyright is handled a little differently in Freedom of Information. 

> Copyright does not prevent information being disclosed under the Freedom of Information Act
>
> **ICO guidance at [Intellectual property rights and disclosures under FOI](https://ico.org.uk/media/for-organisations/documents/1150/intellectual_property_rights_and_disclosures_under_the_foia.pdf)** 

Any intellectual property would remain but not prevent disclosure, and even then copyright would still allow for criticism, review or news reporting.

Quite a few fabulous library services were concerned about the spreadsheet format issue, so created their own version of the data. I love them lots. It was probably a time-consuming exercise, but it won't have been a waste. Some even then made sure that data was reusable under an Open Government Licence. That's exactly what we need; but with some additional co-ordination to get the data into a standard format.

### No returns and late homework

Some services have said that they normally complete data but didn't for 2020/2021. Fair enough, it was a difficult year and they had other things to concentrate on. So far over 15 have indicated this, although as I didn't explicitly ask, it could be quite a few more.

Not completing is fine, but it does raise the issue that the data collection is an arduous exercise. Can bits of it be automated? There are some aspects that definitely should be taken out, such as the list of libraries, which could be maintained separately, as well as loans data which should be automated from systems.

Another 10 or so have said they plan to do it but haven't yet. As the deadline was July, I'm not sure they'll get round to it!. With those, plus the ones deciding not to continue with the stats, it could be that we see a drop of up to a quarter of services this year.

### What can be done?

Everyone knows this is a poor situation. The majority of leadership organisations are on board but none have direct responsibility for data. Many services don't complete data because they can't afford to receive the aggregated reports. Plus the data is so marketed around the concept of benchmarking and performance management that many have little interest in it anyway.

Services need to be able to provide their data in the knowledge that it can be widely used and shared for useful insight, and that they'll also gain access to other services' data.

It needs to be urgently changed, ideally in time for 2021/2022 data returns. How about a shift to this process?

1. A public sector working group for public library data will be set up to decide on what data to collect. 
2. An online form is distributed to library services at the end of this financial year. This will include the same annual questions as currently exist - but also with relevant additions from the working group. All parties will promote this to be completed by library services across the UK.

3. Responses to this form will automatically be made available as open data - library services will be able to submit updates/corrections which will be reflected in a log of changes to the data.

4. Workshops for staff and the public will be held to analyse and discuss the data and see what insight can be gained from it.
5. Any third parties can use the data to continue their commercial offerings e.g. CIPFA 

Many libraries have shown wiling to adjust their normal process. But we need a combined and sector-led approach.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">we will miss <a href="https://twitter.com/CIPFA?ref_src=twsrc%5Etfw">@cipfa</a> day when it&#39;s gone. &quot;there was this day in the year when data collected by public libraries was released. it was 6 months late, and no-one was actually allowed to see it. but we always got a quote from a man from waterstones telling us how inefficient we were&quot;</p>&mdash; Libraries Hacked (@librarieshacked) <a href="https://twitter.com/librarieshacked/status/1203012116468375552?ref_src=twsrc%5Etfw">December 6, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

*[CIPFA]: The Chartered Institute of Public Finance and Accountancy