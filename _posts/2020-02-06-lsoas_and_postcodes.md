---
title: LSOAs and postcodes
categories: 
  - Mapping
  - Deprivation
  - Membership
published: false
---

The [public library open data schema](https://schema.librarydata.uk/membership) includes a standardised dataset for library membership.

There are complications in thinking about library membership data.

- Should this include all members or just active members?
- What does active membership mean? If we store data only as long as necessary, should we have records for people not considered as active?
- What activities in libraries require membership?
- Should we be reducing the number of activities that require membership, such as WiFi usage?
- With different policies in this area, is it possible to compare membership between different library services?

Before trying to answer those questions, what data about membership is useful for a library service?

Counts of membership, considered active or otherwise, are not useful. They may go up or down, but that can reflect the changing activities people use the library for. It can seem interesting to compare counts between library services, but is it? Such differences could be from different definitions of membership, or just unavoidable geographic or socioeconomic factors within the relevant authorities.

Useful data needs to be able to inform actions and policies. You look at the data one day and do things differently the next, and repeat the process. Common standards for data provide the opportunity to share practice in using data, not compare services.

One responsibility that library services have is to provide library services for everyone. Membership counts will always only be a fraction of the population, and it's not possible to ensure everyone is a member. But are there areas of the population where the library service has less appeal than others?

An obvious way of monitoring membership beyond just overall counts is recording demographics such as age, religion, or disabilities. But aside from age, which is often compulsory to provide, this data tends to be patchy at best. And library services has a healthy aversion to collecting more information than they strictly need.

A better option is to use data sources that are more comprehensive. Census data, and other national statistics, which will provide detailed indicators about the population that live in different areas of an authority.

It is an unfortunate situation that geographic location is such an indicator of things such as health, income, education, but it is the case. It isn't an exact science but as libraries will generally hold data on the home location of their members, they can both see whether they have membership from all areas of the authority, and make educated guesses about the people more or less likely to use libraries.

#### Lower super output areas (LSOAs)



### Converting to postcode to LSOA




### The data schema

The data schema for membership is detailed on a [separate schema website](https://schema.librarydata.uk/membership). A sample record using the schema is shown below.




#### Being careful

There are good arguments that it is very difficult to genuinely anonymise data. Even aggregating data using statistical areas has it's dangers. But measures can be put in place

##### Don't report low numbers


##### Don't forget people not represented

What about those people who don't have an address. This [Manchester scheme](https://www.bbc.co.uk/news/uk-england-manchester-41775445) provides a means for 




##### Consider high numbers too


##### Don't add extra data

Having suppressed 

You also need to be careful about releasing any other data that could be cross-referenced with this data.

Let's say you also released


Despite these cautions it is possible to release sensible and useful library data. If anything, the opportunity to 

#### How to do it

OK, so the actual process of converting from postcodes to LSOAs isn't too complicated.

* The ONS publish every quarter a list 

But like with many data tasks, there are complexities

* The ONS conversion file is 


#### What we need

It would be idea to have a simple process for this:

1. Upload a file of postcodes to an online service
2. Download a converted file of LSOAs.

That would be lovely. In fact the ONS provide something of the sort.

There are a couple of issues with it:

1. It does not 
2. 



#### Process

1. Convert a list of postcodes to a list of postcode sectors.
2. Submit a request online to retrieve all the LSOAs and postcodes there are for those postcode sectors
3. Convert the original list of postcodes to a list of LSOAs
4. Count how many people are in each LSOA
5. Ouput spreadsheet

#### Fake data

To test this process we need some fake data.
<!--stackedit_data:
eyJoaXN0b3J5IjpbNjY1OTY2NTUyXX0=
-->