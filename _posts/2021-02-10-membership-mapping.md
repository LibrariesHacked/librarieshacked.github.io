---
title: Library membership mapping
excerpt: Instructions for producing maps of library membership
categories:
  - Tutorials
tags:
  - GIS
  - Membership
---

These are instructions for two web tools, designed to aid in visualising membership data. The prerequisite is for library services to extract postcodes of library members. It is down to the service as to which postcodes to include: it could be all members, those who are borrowers, PC users, etc. Whatever it is you wish to explore.

1. Convert postcodes to a standard format with anonymised, census-based areas
2. Visualise the data on a map and provide additional context on population and deprivation

Please provide feedback on the usability of the tools, and additional features that you would like.

#### Security

These tools take the privacy of library users, and security of personal data seriously. Security considerations are described in these instructions, and while using the tools. If there are any queries or concerns please do stop and email [info@librarieshacked.org](mailto:info@librarieshacked.org).

## Stage 1: Create data in the correct format

An overview of this stage is available as a YouTube video. See [Library data tools: converting membership postcodes](https://youtu.be/u8CRSplPfRo).

The first stage involves getting data into the required format. Census-based geographic areas are useful for analysis: we can look at counts of library members relative to population, as well as area deprivation measures. This first tool converts postcodes to census areas. For postcodes in England and Wales it converts to LSOA (lower super output area), for Northern Ireland to Small Area, and for Scotland, Data Zones. The format is from the DCMS co-ordinated [library data schema project](https://schema.librarydata.uk/membership).

If services do not wish to use a web tool for this step, an alternative is to perform this step themselves, and do the conversion using the [Office for National Statistics Postcode directory](https://geoportal.statistics.gov.uk/datasets/ons-postcode-directory-november-2020) data. Then skip to stage 2. Please feel free to get in touch for guidance on performing this step manually.

### Create a CSV file of your postcodes

A CSV file (comma separated values) is a computer-readable format for storing table data. Most spreadsheet programs like Excel will be able to save to CSV (using ```File > Save As```).

This step depends on you being able to extract postcodes from where they are held - most likely your library management system. You will need to produce a file that contains a single column with a header as the first row, and a list of postcodes for the remaining rows in the column. No other data should exist in the column. If your data also includes additional columns it is recommended you remove these for this process.

Your file should include data such as the following (for however many postcodes there are). There is no need to count the postcodes, or aggregate them in any way.

| Postcode |
| ------------- |
| BA1 1RG |
| BA2 2PU |

### Load the data into the postcode tool

In a web browser navigate to [Convert postcode data to statistical area](https://create.librarydata.uk/postcode-to-lsoa)

Choose your file containing postcodes. As long as it is a valid CSV file it will be loaded into the tool. This is not **uploading** data. The data file remains only on your local PC, accessed by the web browser on your PC.

### Select which column contains postcodes

The tool will ask you which column contains postcodes. If you have data as described in Step 1 then this will be the only column, called 'Postcode'. However, if you have a file with many columns then select the one that holds postcodes.

You can ignore the optional drop down asking for a count column. This is used for data that already has counts of members per postcode, and needs to take that into account.

Select to convert the data and continue.

#### More security notes

You may be thinking 'surely now those postcodes are sent off somewhere?'. They aren't, but it's a sensible thought. The tool does send data online, to work out what the corresponding areas are, but not the full postcodes. Imagining the process as a discussion between the web browser (your PC) and the server (online), it would be like this:

> **Your PC:** Hello online service, I have a postcode I want more details about, what can you tell me about postcode sector "BA1 1"?
>
> **Online:** Well, postcode sector "BA1 1" has 353 postcodes in it, here they are, with the statistical area code for each one.
>
> **Your PC:** Thank you. That's more than I really need, but I can look through those and find the right postcode.

It's inefficient, but the tool is able to look up details of postcodes without sharing the full postcode online. Regardless of this, the data communication is securely encrypted, and no data is saved on the server. An alternative would be for the tool to download ALL postcode/area combinations. That would be possible but there are about 2.5 million postcodes, and it would be a lot of data. If services are keen on this though, it could be provided as an option.

### Generate the data

On completing the previous step, the tools whirrs for a period of time, then reports results. That includes a table of how many postcodes were valid, how many unrecognised, and how many out of date (terminated).

This is worthwhile for library services just to validate their current data. You may find you have around 95% accuracy on postcodes, or it could be much better or worse. 

The file required is the second one listed, titled 'Library membership'. Choose your service name, select a date you did the extract, and select to save the file.

Congratulations! You have data on library members that is in a standard format, appropriately anonymised, that can be used in the visualisation tool.

## Stage 2: Visualise data

An overview of this process is available as a YouTube video. See [Library data tools: displaying membership on a map](https://youtu.be/dLHFC7Lg9wc)

Now comes the exciting part! Another tool has been created to visualise this data. Again, this runs on your local PC and the data you load into it will not be shared online.

However, at this point the data you are using is already anonymised and using areas appropriate for statistics. You may wish to share the data widely and give more people access to explore it using this tool.

If you are interested in exploring this process, but not yet ready to use your own data, you could also use [Barnet membership data](https://open.barnet.gov.uk/dataset/23py1/library-membership). Download the latest copy of their data and you can get a good view of how the tool works.

### Load the data 

In a web browser navigate to [Membership map](https://create.librarydata.uk/membership-map)

Choose the file you have saved from Stage 1. It should be loaded into the tool, and all being well the map will zoom to the relevant library service.

### Explore

And that's really it! The map should provide a view of membership data, and an option to toggle to display areas of high deprivation. If you zoom in the map will display population percentages and the index of multiple deprivation for each area.

<figure>
  <img src="https://raw.githubusercontent.com/LibrariesHacked/librarieshacked.github.io/master/images/2021-02-05-instructions-5-display-map.png" alt="Screenshot of the mapping tool showing an area of Barnet library authority with membership shaded relative to population"/>
  <figcaption>Using the library membership mapping tool to explore Barnet libraries membership data</figcaption>
</figure>

Really though, feedback as to the usability is most important, so I shouldn't go into too much detail as to the features. So please try it out, and kindly report problems and suggestions. It is designed as an open tool for library services to use, and there should be a lot of opportunity for new features.