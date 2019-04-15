---
title: "Mobile libraries: authentication"
excerpt: Managing authentication for mobile library data
categories:
  - Mobile libraries
published: false
---

It's been full-speed ahead on the mobile libraries project. There are 6 code repositories, each with an issue tracker and project board to track progress. All of them are aspects of the system, but are being developed independently.

| Title | Description |
| ----- | ----------- |
| [Database](https://github.com/LibrariesHacked/mobilelibraries-database/projects/1) | Where all the data will be held and retrieved/updated |
| [API](https://github.com/LibrariesHacked/mobilelibraries-api/projects/1) | Application programming interface to allow developers (and ourselves) access to the data |
| [Schema](https://github.com/LibrariesHacked/mobilelibraries-schema/projects/1) | A standardised schema for mobile library open data |
| [Data](https://github.com/LibrariesHacked/mobilelibraries-data/projects/1) | Scripting data tasks such as importing existing data |
| [Admin]() | Website to maintain mobile library services data |
| [Website](https://github.com/LibrariesHacked/mobilelibraries-website) | Public website to provide maps and timetables |

## Authentication

This post is to record some thoughts on authentication of the system.

Part of the idea of this project was to create a system by which mobile library services could manage their own data (stops and routes). That data will all be published as open data, and anyone will be able to see and use it. However, there still needs to be some kind of *control*. The system will need to support editing the data, and it is unlikely any service would be too happy to allow just anyone to edit it. It should only be done by the relevant library service.

Everyone will be pretty familiar with how to solve this. Give all the services a username and password (or many) and lock the system down so only they can edit their data. There's no significant technical challenge in doing this.

What are the problems with this?

## Sensitive data

There is a catch 22 situation to securing data. As soon as you add username and password to any system, it makes the data held in that system more sensitive. Add 2-factor authentication, using mobile phone number, and you're increasing the personal data you hold.

This system is for holding open data on mobile libraries. Ideally it will hold no personal or sensitive data, which includes passwords (even with encryption).

## Not another username and password! 

Councils in particular are trying to cut down on the number of logins users need to individual systems. Single Sign On, allowing users to use a single login, often the credentials they use to log onto their PC. But this IS a technical challenge. It would mean significant intergration which each council 

Basically, we don't want or need 'traditional' authentication. Something else.

## Authentication but no authentication?

We need a way of locking down access to changing the data, but not by using usernames and passwords.

One option could be to rely on the email addresses used within library services. Most people (perhaps not all) employed within a library service will have an email address assigned to them by the organisation running the library. Normally a local authority but not always. 

Email is generally relied upon as a backup to password. When you forget your password you reset it by sending a password reset request to your email address. The assumption is that your email must be secure. This is probably not the case, but with organisation email 

We then have two principles we can build on:

- Most people managing a library service will have the same email address domain
- Being able to receive an email is a method of authentication

## Proposed solution

The following then may likely change but is the current proposed solution for managing access to being able to modify data on mobile libraries.

1. In the database, associate the organisation of Somerset mobile libraries with the email address domain of somerset.gov.uk
2. An individual 
