---
title: Library data authentication
excerpt: Securing a system for maintaining open data
categories:
  - Data
tags:
  - Security
  - Authentication
published: true
---

There are a few Libraries Hacked projects that rely on up-to-date data to be useful.

[Library map](https://www.librarymap.co.uk/) gives details of public libraries across the UK, but is using data from a couple of years ago. The data is made out of date by library closures, but also routine changes such as opening hours.

The same for [Mobile libraries](https://www.mobilelibraries.org/), which displays information on mobile library timetables, and [Libraries at home](https://www.librariesathome.co.uk/), which provides various details about your local library service.

To present information publicly you need to either be using a reliable data source, or provide a means to update your own data. As no reliable data sources exist for libraries, the only current option is to provide a way to update the data.

## A system for libraries

Those projects are designed to work with data that conforms to the [Public library open data  schemas](https://schema.librarydata.uk/). This just means that data from each service needs to have the same fields, and those fields need to follow certain definitions.

The ideal situation would be that all library services create and maintain that data, either manually or through automation, and publish it openly. The task in providing a national view of that data is to pull together those data sources.

But in reality that's a big ask. There are a few things library services would need for there to be unified open data:

1. Tools to create data in the format that it should be in. Having a specification is necessary, but can still be difficult to implement
2. Somewhere to maintain and publish that data
2. Tools for using that data after publishing it, providing an incentive to open publishing.

A new(ish) Libraries Hacked project is **[Create | Library data](https://create.librarydata.uk/)**, a website designed to provide **tools designed to aid library services in creating and using library open data.**

## Authentication

One task for that site is authentication. How can we provide an easy way for library service staff to 'log in' and have access to maintain their own data?

* There could be individual usernames and passwords for anyone requiring access. With over 200 library services, it would be difficult to maintain, with people changing jobs and roles frequently.
* For less maintenance there could be a single, fixed user account per service. But then people need to share the password around, and what if no-one remembers it?
* There could be a UK library [Shibboleth software implementation](https://en.wikipedia.org/wiki/Shibboleth_(software)), providing single sign on across identity providers. For example, if staff are logged on to their library service computer, it will automatically log them in to the system. This would require expert set up with each IT service.
* We could limit access by IP address, for each staff network, and maintain those IP lists. It would mean a lot of management for those IP addresses, and potentially impossible for remote workers.

None of these are ideal, or low maintenance.

Instead there is a simple, but also limited, solution. A [CSV file on GitHub](https://github.com/LibrariesHacked/librarydata-db/blob/main/data/authentication.csv) has a list of email domains and local authority codes, in [Government Statistical Service](https://en.wikipedia.org/wiki/Government_Statistical_Service) code format. A few example rows are shown below.

| Domain                    | Authority Codes       | Admin |
| ------------------------- | --------------------- | ----- |
| bathnes.gov.uk            | {E06000022}           | FALSE |
| librariesunlimited.org.uk | {E10000008,E06000027} | FALSE |
| cilip.org.uk              | {}                    | TRUE  |

This grants access based upon the organisation part of an email address. This covers the following types of account:

1. **Local authority.** All local authorities have access to their library service data. In the first row above, Bath and North East Somerset (BathNES) staff have access to modify E06000022 data (the GSS code for that authority). 
2. **Commissioned services.** In the second row, Libraries Unlimited are granted access to E10000008 and E06000027 data. This is Devon and Torbay, the library services they run.
3. **National organisations.** Some other select organisations have 'Admin' access. This means that instead of being granted access to particular local services, they can modify any data. CILIP are shown above - other organisations included are the DCMS, Libraries Connected, British Library, and Arts Council.

There are obvious limitations. Access is purely by email domain, so anyone who has an email address for that organisation can modify data. But this isn't designed to be strict gatekeeping, or securing personal data. It's just making sure the editing of library service open data isn't completely available online - and providing library services with some security assurances around the data publishing.

## How does it work?

The login process is now implemented on the Create website, though there are not many tools yet to make use of those access rights. How does the process work?

1. A user enters their email address, such as info@librarieshacked.org
2. The email domain is validated. If not part of the approved list they are declined.
3. If part of the list, an email is sent to them granting them access to their library service (via an 'access token' link)
4. That link remains valid for 30 days
4. During those 30 days they can make edits to data either for their own library services, or for all services if they have an Admin account.

It is implemented in a way that is not specifically for the Create site - it can also be used for other websites. For example, on [Mobile Libraries](https://www.mobilelibraries.org) it'll be used to allow mobile library drivers to log in with a mobile device and become part of GPS tracking for their mobile library. 

If you think you have an email address that should work, feel free to try it out! It will not provide access to much at the moment, but is a big step in making that data maintainable.
