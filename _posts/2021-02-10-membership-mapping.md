---
title: Library membership mapping
excerpt: Instructions for producing maps of library membership
categories:
  - Tutorials
tags:
  - GIS
  - Membership
---

These are instructions for two web tools, designed to quickly visualise membership data. The only prerequisite for library services is to be able to extract postcodes of library members. It is down to the library service as to which postcodes to include: it could be all members, those who are borrowers, PC users, who joined during lockdown, etc. Whatever it is you wish to explore.

1. Convert postcodes to a standard format which uses anonymised, statistical, census-based areas
2. Visualise the data on a map and provide additional context on population and deprivation

Please do provide feedback on the usability of the tools, and additional data or features that you would like to be included. The tools have been created to be of use, but could be made far more useful with feedback and feature requests.

#### Security

Firstly, there is nothing more important than the privacy of library users, and the security of personal data. These tools take this seriously. Security considerations are described in these instructions, and while using the tools. If there are any queries or concerns please do stop and email [info@librarieshacked.org](mailto:info@librarieshacked.org).

## Stage 1: Create data in the correct format

An overview of this stage is available as a YouTube video. See [Membership map stage 1: converting postcodes]()

The first stage involves getting data into the required format. Small census-based geographic areas are useful for analysis, and we can provide counts of library members relative to population, as well as include area deprivation measures. The first tool converts from postcodes to census areas to provide this data. For postcodes in England and Wales it converts to LSOA (lower super output area), for Northern Ireland to OA (output area), and for Scotland, Data Zone areas.

### Create a CSV file of your postcodes

A CSV file (standing for comma separated values) is a common computer-readable file format for storing table data. Most spreadsheet programs (like Excel) will be able to save data as CSV format (using ```File > Save As```).

This is a step that will depend on you being able to extract postcodes from whichever system they are held - most likely your library management system. The end requirement is to have a file that contains a single column with a header as the first row, and a list of postcodes for the remaining rows in the column. No other data should exist in the column. If your data also includes additional columns it is recommended that you use a copy with those removed for this process.

Your file should include data such as the following (for however many postcodes there are). There is no requirement to count the postcodes, or aggregate them in any way.

| Postcode |
| ------------- |
| BA1 1RG |
| BA2 2PU |

### Load the data into the postcode tool

In a web browser navigate to [Convert postcode data to statistical area](https://create.librarydata.uk/postcode-to-lsoa)

Choose the file you have stored from the previous step. As long as it is a valid CSV file it will be loaded into the tool.

This is not **uploading** data. The data file that you hold remains on your local PC, accessed only by the browser on your PC.

### Select which column contains postcodes

The tool will ask you which column to use for postcodes. If you have data as described in Step 1 then this will be the only column, called 'Postcodes'. However, if you have a file with many columns then select the one that holds postcodes.

You can ignore the optional drop down asking for a count column. This is used for data that already has counts of members per postcode, and needs to take that into account.

Select to convert the data and continue.

#### More security notes

At this point you may be thinking 'is this not sending those postcodes off somewhere?'. It isn't, but it's a sensible thought. The tool does send data online, to work out what the corresponding areas are, but not the full postcodes. Imagining the process as a discussion between the web browser (your PC) and the server (online), it would be like this:

> **Your PC:** Hello online service, I have a postcode I want the statistical area for, what can you tell me about postcode sector "BA1 1"?

> **Online:** Well, postcode sector "BA1 1" has 353 postcodes in it, here they are, with the statistical area code for each one.

> **Your PC:** Thank you. That's more information than I really need, but I didn't have to provide any full postcodes. I can look through those and find the right postcode.

As you can see, it's inefficient, but the tool is able to look up details of postcodes without sharing the full postcode online. Regardless of this, the data communication is s is encrypted, and no data is saved on the server. An alternative would be for the tool to download ALL postcode/area combinations. That would be possible but there are about 2.5 million postcodes, and it would be a lot of data. If services are keen on this though, it could be provided as an option.

Alternatively, services can perform this step themselves, and do the conversion using the [Office for National Statistics Postcode directory]([ONS Postcode Directory (November 2020) | Open Geography Portal (statistics.gov.uk)](https://geoportal.statistics.gov.uk/datasets/ons-postcode-directory-november-2020)) data. Then skip to stage 2. But this tool is much easier.

### Generate the data

On completing the previous step, the tools whirrs for a period of time, then reports results. That includes a table of how many postcodes were valid, how many unrecognised, and how many out of date (terminated).

This isn't a bad process to complete for library services just to validate their current data. You may find you have around 95% accuracy on postcodes, or it could be much better or far worse. 

The file required is the second one listed, titled 'Library membership'. Choose your service name, select a date you did the extract, and select to save the file.

Congratulations! You have data on library members that is in a standard format, appropriately anonymised, that can be used in the visualisation tool.

## Stage 2: Visualise data

An overview of this process is available as a YouTube video. See [Membership map stage 2: visualising data]()

Now comes the exciting part! Another tool has been created to visualise this data. Again, this runs on your local PC and the data you load into it will not be shared online.

However, at this point the data you are using is already anonymised and using geographic areas appropriate for statistics. You may wish to share the data widely and give more people access to explore it using this tool.

If you are interested in exploring this process, but not yet ready to use your own data, you could also use [Barnet membership data](https://open.barnet.gov.uk/dataset/23py1/library-membership). Download the latest copy of their data and you can then get a good view of how the tool works.

### Load the data 

In a web browser navigate to [Convert postcode data to statistical area](https://create.librarydata.uk/postcode-to-lsoa)

Choose the file you have saved from Stage 1. It should be loaded into the tool, and all being well the map will zoom to the relevant library service.

### Explore

And that's really it! The map should provide a view of membership data, and an option to toggle to display areas of high deprivation.

Really though, feedback as to the usability is most important and it should be made easy to pick up. So try it out, and kindly report problems and suggestions.