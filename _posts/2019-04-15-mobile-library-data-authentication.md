---
title: "Mobile libraries: authentication"
excerpt: Managing authentication for mobile library data
categories:
  - Mobile libraries
---

It's full-speed ahead on the mobile libraries project. There are 6 code repositories, each with an issue tracker (to record tasks and issues) and project board to track progress. Each represents an aspect of the system, but they can be developed independently.

| Title | Description |
| ----- | ----------- |
| [Database](https://github.com/LibrariesHacked/mobilelibraries-database/projects/1) | Where all the data will be held and retrieved/updated |
| [API](https://github.com/LibrariesHacked/mobilelibraries-api/projects/1) | Application programming interface to the database, to allow developers (and ourselves) access to the data |
| [Schema](https://github.com/LibrariesHacked/mobilelibraries-schema/projects/1) | A standardised schema for mobile library open data |
| [Data](https://github.com/LibrariesHacked/mobilelibraries-data/projects/1) | Scripting data tasks such as transforming existing service data |
| [Admin](https://github.com/LibrariesHacked/mobilelibraries-admin/projects/1) | Website to maintain mobile library services data |
| [Website](https://github.com/LibrariesHacked/mobilelibraries-website) | Public website to provide maps and timetables |

## Authentication

This post is to record some thoughts on authentication of the system.

The system will need to support editing the data, and it's unlikely any service would be too happy to allow just anyone to edit it. Especially if they adopt the system as a method of providing information to citizens. Edits should only be done by the relevant library service.

Everyone will be pretty familiar with how to solve this. Give all the services a username and password, per user, and lock the system down so only they can edit their data. There's no significant technical challenge in doing this. But there are other issues.

As soon as you add username and password to any system, it makes the data held more sensitive. Add 2-factor authentication, using mobile phone number, and you're potentially further increasing personal data.

This system is for holding open data on mobile libraries. Ideally it will hold no personal or sensitive data, which includes passwords (even with encryption).

It's also a lot of maintenance. As soon as somebody else wants to use the system an account needs to be set up for them. People leave organisations and should no longer have access, but in reality third party systems often don't remove their accounts.

Councils are also trying to cut down on the number of logins staff need to remember. Single Sign On, allowing users to use a single login, is more frequently being integrated where possible. But this actually is a technical challenge. It would mean significant intergration with each council wanting to do it. It's not currently worth putting in the scope of this project.

Basically, we don't want or need 'traditional' authentication. We need something else.

## Authentication but no authentication?

One option could be to rely on the email addresses used within library services. Most staff, perhaps not all, will have an email address assigned to them by the organisation running the library. Normally a local authority. This will be in a standard format like joe.bloggs@somerset.gov.uk.

Email is generally relied upon as a backup to password. When you forget your password you reset it by sending a password reset request to your email address. The assumption is that your email must be secure. This is probably not the case, but with organisation email it is probably more secure than personal accounts.

We then have two principles we can build on:

- Most people managing a library service will have the same email address domain (e.g. somerset.gov.uk)
- Being able to receive an email is a secure enough way of checking a person is a member of a service

## Proposed solution

The following may change but is the current proposed solution for managing access to editing data.

1. In the database, associate the mobile library service with an email address domain. (e.g. Somerset Libraries will have an email address domain of somerset.gov.uk).
2. When a member of staff wishes to log in to the system, they enter their email address.
3. The system checks whether their email domain is assigned to an organisation. If not, it ignores them.
4. If so, the system generates a 'token' (using [JSON web tokens](https://jwt.io/)). This will secure their email address into an encrypted string.
6. The user can use the token to log into the system, or simple follow a link in the email. The website will be set up so that it will cache the token in the browser so they do not need to re-enter it unless using a different PC/browser.

The above solution will mean that no full emails will need to be stored in the system. The tokens that are distributed will be able to be read by the system, and do not need to be stored in the database. The web tokens can be set to expire afteer a set interval so the suer could be made to re-veriy every so often. 

It seems to achieve what is required. We will see.