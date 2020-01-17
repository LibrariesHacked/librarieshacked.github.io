---
title: LSOAs and postcodes
categories: 
    - Mapping
    - Deprivation
    - Membership
published: false
---

Over the past few months, public library staff have been collaborating on a [library open data schema](https://schema.librarydata.uk). This includes datasets about libraries that could be standardised and published as open data across all library services. One of the datasets is a report on library membership.

But there are complications in even thinking about library membership.

- Is this all members or just 'active' members. 
- What does active membership mean?
- What activities in libraries require membership?
- Should we be reducing the number of activities that require membership?

Even after considering that, what data about membership would be useful for the library service?

Just having counts of membership, active or otherwise, are not useful. They may go up or down, but that could reflect the changing services people use. It may be interesting to compare between library services, but any differences could be from different definitions of membership.

What IS genuinely useful is knowing where in your authority you have the most or least members. That could of course still reflect some of those issues mentioned above.



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
eyJoaXN0b3J5IjpbLTEwMDIxNTc3NzcsMTc1NTY3ODk4MSwtNz
Q2NTE1Mzg5LC00MTEwNTU3NjJdfQ==
-->