---
title: Cleaning the basic libraries dataset
excerpt: Enhancing data on library locations
categories:
  - Data
tags:
  - Data
published: true
---

A public library dataset that has been getting recent attention is the [basic dataset for libraries](https://www.artscouncil.org.uk/supporting-arts-museums-and-libraries/supporting-libraries) published by the Arts Council. This is _'intended to capture permanent instances of libraries, local history libraries, and archives from 1 April 2010 to 31 December 2023'_.

- The BBC published a report on [public libraries in crisis](https://www.bbc.co.uk/news/articles/cn9lexplel5o), highlighting the number of closures and saying that closures were far more likely to happen in deprived areas.
- The Office for National Statistics published [number of libraries in local areas, England and Wales](https://www.ons.gov.uk/peoplepopulationandcommunity/wellbeing/datasets/numberoflibrariesinlocalareasenglandandwales) - this used the data alongside other sources to analyse access to library services in different areas.
- The data is also used in updating the library finder at [LibraryOn](https://libraryon.com/), the British Library's single digital presence project.

> More than 180 council-run libraries have either closed or been handed over to volunteer groups in the UK since 2016, BBC analysis has found.
>
> More deprived communities were four times more likely to have lost a publicly-funded library in that time, while 2,000 jobs have also been lost.
>
> **Public libraries in 'crisis' as councils cut services - BBC News**

It really is the most basic of data - the locations of our libraries - but getting it right has been a challenge for over a decade. How do we collect this data and keep it up to date? An annual survey (like the Arts Council dataset) is useful but time consuming, always out of date, and doesn't serve real-time tools like [LibraryOn](https://www.libraryon.org). Constantly updating the data is more efficient and less effort, but more of a challenge to coordinate and maintain.

However, it's a credit to the quality of the data, and the Arts Council, that it is being used. It has always been difficult to prove the need for quality open data without examples. The fact that a dataset is published and seeing clear usage in important reports is a good message for the sector.

## Cleaning and enhancing the data

There were some issues with the data. That's not to throw any shade on the Arts Council - their job is to coordinate over 150 library services, and they still also need to do a lot of work to get the data tidied up before publishing.

A good example of data that often needs cleaning is postcodes. These are often manually typed, so there were many changes to these, and likely more required.

I've done that, plus the following list of changes to the data to make it more useful for processing and linking to other datasets. Some of this is opinionated, but in trying to keep the spirit of the original data.

- Trimmed extra whitespace at either end of all data entries
- Corrected mismatches between the 'Reporting Service' and 'Upper Tier Local Authority'. On a few occasions these are legitimately different, but generally not.
- Suffolk reported that the Prison Library HMP Bure was in Norwich upper tier local authority. The upper tier authority should be Norfolk, but it's correct that Suffolk libraries operate the prison library, and are the reporting service.
- Standardised 10 of the names used in the 'Reporting service' column to easier match them to unique identifiers
- Standardised 10 of the names used in the 'Upper tier local authority' column to easier match these to unique identifiers.
- Cleared non-postcode text from the postcode column e.g. 'No registered public address'
- Ensured the closed field has an entry for libraries that have otherwise been set to closed
- Updated postcode entries to be uppercase
- Updated invalid postcodes from closed libraries
- Updated invalid postcodes from open libraries
- Updated valid but incorrect postcodes
- Removed the leading zeros from unique property reference numbers.
- Removed UPRNs that are not numbers
- Removed UPRNs that are over 5 miles away from the postcode location (and likely wrong)
- Standardised the Type column to go from 10 to 5 distinct variations
- Removed entries that were too unclear e.g. old book drops where the current status is unknown
- Ensured statutory fields are Yes or No
- Ensured closed year is set for entries that have closed in the operation field
- Ensured operation fields are one of 'LA', 'LAU', 'C', 'CR', 'ICL' or not set
- Ensured that if the closed year was completed it was a 4-digit year
- Cleared some entries from the operating organisation column (e.g. 'N/A')
- Standardised the 'No' entry for the new build question
- Standardised the 'No' entry for the co-located question
- Ensured that the indicator under each co-located column is only ever set to 'X'
- Standardised the opening times fields to only the 19 possible entries as documented in the ACE guidance
- Ensured the hours and staffed hours fields are numeric only
- Standardised the 'No' entry for the automated system question

### Adding coordinates

There are no location coordinates in the original data. This is a good thing for data collection - there's no need to collect what can be added later.

There are two open data sources that can help here:

- [ONS Postcode Directory](https://geoportal.statistics.gov.uk/datasets/265778cd85754b7e97f404a1c63aea04/about) - Coordinates and other various lookups for around 2.7 million postcodes (both current and historic)
- [OS Open UPRN](https://www.ordnancesurvey.co.uk/products/os-open-uprn) - Coordinates for approximately 40 million addressable locations (unique property reference numbers) in Great Britain

Using these, I have added 4 columns. First trying to obtain coordinates from the UPRN, which will give the exact location of the library building. However, as many UPRNs aren't in the data, the next step is to use the postcode. This will be less accurate, being only the centre of the postcode. However, in the cases of libraries, they will often be small postcodes, or even have their own dedicated postcode.

| Column name | Description                             |
| ----------- | --------------------------------------- |
| Easting     | The easting coordinate of the library   |
| Northing    | The northing coordinate of the library  |
| Longitude   | The longitude coordinate of the library |
| Latitude    | The latitude coordinate of the library  |

This additional data changes attribution requirements. The licence can remain the [Open Government Licence](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/), but requires a few additional statements:

- Contains OS data © Crown copyright and database right 2024
- Contains Royal Mail data © Royal Mail copyright and database right 2024
- Source: Office for National Statistics licensed under the Open Government Licence v.3.0
- Source: Arts Council England

### Additional location data

Having a properly defined location for things gives lots of additional information: the population of the area, how rural/urban it is, deprivation levels, etc. There is too much to include in one dataset but a few key ones would be useful. I've added the following:

| Column                                 | Description                                                                                                                                    |
| -------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| Reporting authority code               | A unique identifier for the reporting library service (an upper tier local authority). This uses the Government Statistical Service (GSS) code |
| Rural/urban classification code        | A set of codes, from 2011, to classify areas by how urban/rural they are.                                                                      |
| Rural/urban classification description | A description for the rural/urban classification e.g. Urban Major Conurbation                                                                  |
| Index of Multiple Deprivation rank     | The rank of the area in the Index of Multiple Deprivation. 1 is the most deprived, 32,844 is the least deprived.                               |
| Index of Multiple Deprivation decile   | The decile of the Index of Multiple Deprivation. 1 will be among the most deprived, 10 among the least deprived.                               |

These are taken from the [ONS Postcode Directory](https://geoportal.statistics.gov.uk/datasets/265778cd85754b7e97f404a1c63aea04/about) by matching with the library postcode. Because they are postcodes and inexact locations, they are 'best-fit' lookups. Using the UPRN coordinates would be more accurate but I couldn't really be bothered. Plus we don't have half the UPRNs anyway.

Enjoy! There will likely be mistakes and then further updates to this data but all being well it could be streamlined into a more automated annual process.

Download [the basic libraries dataset - enhanced](/files/basic-dataset-for-libraries-2023-enhanced.csv) (CSV, 1.5MB)
