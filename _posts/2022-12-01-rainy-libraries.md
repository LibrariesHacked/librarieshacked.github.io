---
title: Rainy libraries
excerpt: Using climate data to analyse the rainiest libraries in England
categories:
  - Data
tags:
  - Climate
published: true
---

Rain, rain, rain. Through the roofs and the windows. Dripping down the lights.

How does rainfall affect library usage? I don't know - it could be good, bad, or more complicated. When I was a member of the systems team at LibrariesWest, I tried a quick look at lending counts on the days of an extreme storm, but the results were inconclusive. See [Visit the library on a rainy day](https://librarieswest.github.io/weather) for more info.

That was using very rough, and regional, data for rainfall. I've recently been exploring the [HadUK gridded climate observations for the UK](https://www.metoffice.gov.uk/research/climate/maps-and-data/data/haduk-grid/haduk-grid). These are amazingly detailed: 1km grid observation modelling across the UK for various climate readings, from 1836 to the present. Often at a daily basis. Lovely.

The data format is slightly complex. Called NetCDF, it's primarily used for storing scientific data, but it's not the kind of thing you open as a spreadsheet and have a look at. I won't dwell on that in this post, but a [GitHub repository called rainy-libraries](https://github.com/LibrariesHacked/rainy-libraries) contains the code used to work with it.

Fairly recently, the Arts Council released the 'basic libraries dataset' for England. This was to 'capture permanent instances of libraries, local history libraries, and archives from 1 April 2010 to 31 December 2021'. This was previously listed on the Arts Council website, but isn't anymore. A [historic landing page](https://webarchive.nationalarchives.gov.uk/ukgwa/20220922052304/https://www.artscouncil.org.uk/publication/basic-dataset-static-public-libraries) is still available at the National Archives.

So we have two datasets:

* historic climate data at 1km grid detail: let's use the precipitation (rainfall) annual totals for 2021.
* library locations in England, as of relatively recently.

For every library in England we can get the nearest 1km grid location, and retrieve a value for the total rainfall in 2021. We can then compare them and see which are the rainiest (and driest) libraries!

If you are a rainy library, do you get more visitors?

### Method

For the sake of doing this quickly, I'm going to be lazy with the data. The postcode of the library is enough to get the rough location. The coordinates for postcodes will be obtained using Ordnance Survey's [Code-point open dataset](https://www.ordnancesurvey.co.uk/business-government/products/code-point-open).

We download the [basic libraries dataset](https://webarchive.nationalarchives.gov.uk/ukgwa/20220922052304mp_/https://www.artscouncil.org.uk/sites/default/files/download-file/Libraries%20Basic%20Dataset%202021_0.xlsx). This is an Excel file, and we can filter by static libraries, marked as statutory, currently open, and save as a CSV. This gives a [static libraries CSV](https://github.com/LibrariesHacked/rainy-libraries/blob/main/libraries.csv) including service name, library name, and postcode.

The precipitation file is available through the [Centre for Environmental Data Analysis Archive](https://catalogue.ceda.ac.uk/uuid/4dc8450d889a491ebb20e724debe2dfb). Again, being lazy, I'll just take the annual precipitation values for 2021. If doing this more seriously, perhaps something like a 10-year average would be more appropriate.

The script for processing these files is available at [rainy-libraries](https://github.com/LibrariesHacked/rainy-libraries/blob/main/rainy-libraries.py). This does the following:

* merges the postcode file with the libraries file to obtain coordinates for each library
* looks up each coordinate against the rainfall file to retrieve the nearest rainfall value
* exports all the data to a [rainy_library_results.csv](https://github.com/LibrariesHacked/rainy-libraries/blob/main/rainy_library_results.csv) file, which lists libraries sorted by annual rainfall.


### Results

Enough babble, what are the rainiest libraries?

| Service | Library | Annual rainfall (mm) |
| ------- | ------- | -------------------- |
| Cumbria | Coniston Library Link | 2672 |
| Devon | Princetown | 2438 |
| Cumbria | Ambleside Library | 2021 |
| Cumbria | Windermere Library | 1883 |
| Cumbria | Dent Library Link | 1769 |

Almost all in Cumbria!

> The prevailing westerly winds cross the Atlantic Ocean picking up large amounts of moisture. The air hits the Lake District hills and is forced to rise where it cools and the moisture condenses to form rain. This is called relief or orographic rainfall.
>
> [Why does it rain so much in the Lake District?](https://www.lakedistrict.gov.uk/learning/weatherandclimate/factslakedistrictclimate#:~:text=Why%20does%20it%20rain%20so,called%20relief%20or%20orographic%20rainfall.)

The only non-Cumbria library is Princetown in Devon. This is on Dartmoor, and again has a hills landscape as the reason for the rain.

> Dartmoor's granite plateaux rise above the surrounding countryside. Therefore the climate here is different from the rest of Devon. The higher altitude and exposed nature of the landscape determines the more extreme climatic conditions
>
> [Dartmoor Climate and Weather Factsheet](https://www.dartmoor.gov.uk/__data/assets/pdf_file/0017/72116/lab-climate.pdf)

And which libraries are the driest?

| Service | Library | Annual rainfall (mm) |
| ------- | ------- | -------------------- |
| Suffolk | Aldeburgh | 521 |
| Nottinghamshire | East Leake | 524 |
| Suffolk | Ipswich | 533 |
| Essex | Harwich Library | 537 |
| Suffolk | Broomhill | 538 |

These are all East of England, and Suffolk has three of the driest libraries. I must go to Aldeburgh, it's by the sea apparently. But it would probably rain.
