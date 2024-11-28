---
title: Cleaning the basic libraries dataset
excerpt: Enhancing data on library locations
categories:
  - Data
tags:
  - Data
published: false
---

A public library dataset that has been getting some recent attention is the [Basic dataset for libraries]() published by the Arts Council.

- 
- Is used, at least in checking for updated data, in the [LibraryOn library finder]

It really is the most basic of basic data - the locations of our libraries - but it has been a challenge. In around 2012 

This dataset started in 2014. The newly formed DCMS Libraries Taskforce found they were visiting libraries around the country and documentating their travels ([and a photo collection](). As there wasn't much data to begin with this seemed like the beginning of a dataset of libraries

Fast forward to 2016 and I spent afternoon in a meeting room at the DCMS discussing the fields that would formally be collected in a spreadsheet .




- Trimmed extra whitespace at either end of all data entries
- Corrected mismatches between the 'Reporting Service' and 'Upper Tier Local Authority'. On a few occasions these are legitimately different, but generally not.
- Suffolk reported that the Prison Library HMP Bure was in Norwich upper tier local authority. The upper tier authority should be Norfolk, but it is correct that Suffolk libraries operate the prison library, and are the reporting service.
- Standardised 10 of the names used in the 'Reporting service' column to easier match them to unique identifiers
- Standardised 10 of the names used in the 'Upper tier local authority' column to easier match these to unique identifiers.
- Cleared non-postcode text from the postcode column e.g. 'No registered public address'
- Ensured the closed field has an entry for libraries that have otherwise been set to closed
- Updated postcode entries to be uppercase
- Updated invalid postcodes from closed libraries
- Updated invalid postcodes from open libraries
- Updated valid but incorrect postcodes
- Removed the leading zeros from unique property reference numbers. UPRNs are often stored like this, but it is not necessary.
- Removed UPRNs that are not numbers
- Removed UPRNs that are over 5 miles away from the postcode location (and very likely wrong)
- Standardised the Type column to go from 10 to 5 distinct variations
- Removed entries that were too unclear e.g. old book drops that have have been valid but not anymore
- Ensured statutory fields are Yes or No
- Ensured closed year is set for entries that have closed in the operation field
- Ensured operation fields are one of 'LA', 'LAU', 'C', 'CR', 'ICL' or not set
- Ensured that if the closed year was completed it was a 4-digit year
- Cleared unnecessary text from the operating organisation column (e.g. 'N/A')
- Standardised the 'No' entry for the new build question
- Standardised the 'No' entry for the co-located question
- Ensured that the indicator under each co-located column is only ever set to 'X'
- Standardised the opening times fields to only the 19 possible entries as documented in the ACE guidance
- Ensured the hours and staffed hours fields are numeric only
- Standardised the 'No' entry for the automated system question


## Coordinates

There are no coordinates in the data. This is a good thing for data collection - coordinates can be added later through the address fields, postcodes, and unique property reference numbers.

There are two open data sources that can help here:

- [ONS Postcode Directory]() - this includes coordinates and other various lookups for around 2.7 million postcodes (both current and historic)
- Open UPRN - The coordinates for 

Using these, I have added 4 columns. The coordinates are first taken from the UPRN, which will give the exact location in the centre of the library building. However, as many UPRNs arent in the data, this falls back on using the postcode. This will be less accurate, being the centre of the postcode. However, in the cases of libraries, they will be very often fairly small postcodes, if not sometimes even having their own dedicated postcode.

| Column name | Description |
| ----------- | ----------- |
| Easting     |             |
| Northing    |             |
| Longitude   |             |
| Latitude    |             |

This additiona data does change the data attribution statement. The licence can remain the [Open Government Licence](), but requires the two attribution statements:

- Contains
- 




## Geographic Intelligence

Having a properly defined location for things gives us so much additional information: the population of the area, how rural/urban it is, deprivation levels, etc. There is too much to include in one dataset but a few key ones would be useful. I've added the following:


| Column | Description |
| ------ | ----------- |
| Reporting authority code | A unique identifier for the reporting library service (an upper tier local authority). This uses the Government Statistical Service (GSS) code |
| Rural/urban classification code | A set of codes, from 2011, to classify areas by how urban/rural they are.|
| Rural/urban classification description | A description for the rural/urban classification e.g. Urban Major Conurbation |


Note - these are directly taken from the [ONS Postcode Directory](https://geoportal.statistics.gov.uk/datasets/265778cd85754b7e97f404a1c63aea04) by simple postcode lookup. Because they are postcodes and inexact locations, these are 'best-fit' lookups. Using the UPRN coordinates would be more accurate but I couldn't really be bothered. Plus we don't have half the UPRNs anyway.

Enjoy!