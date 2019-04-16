---
title: "Mobile libraries: authentication"
excerpt: Managing authentication for mobile library data
categories:
  - Mobile libraries
---

It's full-speed ahead on the mobile libraries project. There are 6 code repositories, each with an issue tracker (to record tasks and issues), and project board to track progress.

| Title | Description |
| ----- | ----------- |
| [Schema](https://github.com/LibrariesHacked/mobilelibraries-schema/projects/1) | A standardised schema for mobile library open data |
| [Data](https://github.com/LibrariesHacked/mobilelibraries-data/projects/1) | Scripts to transform existing data into our schema |
| [Database](https://github.com/LibrariesHacked/mobilelibraries-database/projects/1) | Where all the data will be held and retrieved/updated |
| [API](https://github.com/LibrariesHacked/mobilelibraries-api/projects/1) | Application Programming Interface to the database, to allow us to build applications |
| [Admin](https://github.com/LibrariesHacked/mobilelibraries-admin/projects/1) | Website to update mobile library services data |
| [Website](https://github.com/LibrariesHacked/mobilelibraries-website) | Public website to provide maps and timetables |

## Authentication

This post is to record some thoughts on authentication of the system.

The system will need to support editing data (the admin website), and it's unlikely any service would be happy to allow anyone to edit it. Especially if they use the system to provide public information. Edits should only be done by the relevant library service.

Everyone will be familiar with how to solve this. Give all the services a username and password, per user, and make them login so only they can edit their data. There's no significant technical challenge in doing this. But there are other issues.

As soon as you add username and password to any system, it makes the data held more sensitive. Add 2-factor authentication, using mobile phone number, and you're potentially increasing personal data.

This system is for holding open data on mobile libraries. Ideally it will hold no personal or sensitive data.

Users are also a lot of maintenance. As soon as somebody else wants to use the system an account neds to be set up for them. People leave organisations and should have their access removed, but in reality this often isn't done in third party systems.

Councils are also trying to cut down on the number of logins staff need to remember. Single Sign On, allowing users to use a single login, is more frequently being integrated where possible. But this really is a technical challenge. It would mean significant integration with each council wanting to do it. It's not currently worth putting in the scope of this project.

Basically, we don't want or need 'traditional' authentication. We need something else.

## Authentication but no authentication?

One option could be to rely on the email addresses used within library services. Most staff, perhaps not all, will have an email address assigned to them by the organisation running the library. Normally a local authority. This will be in a standard format like dave@, and then the domain (somerset.gov.uk).

Email is generally relied upon as a backup to password. When you forget your password you reset it by sending a password reset request to your email address. The assumption is that your email must be secure. This is probably not the case, but with organisation email it is likely more secure than personal accounts.

We then have two principles we can build on:

- Most people managing a mobile library will have a known email address domain (e.g. somerset.gov.uk)
- Being able to receive an email to that domain is a secure enough way of checking a person is a member of a service

## Proposed solution

The following may change, but is the current proposed solution for managing editing data.

1. In the database, associate the mobile library service with an email address domain. (e.g. Somerset Libraries will have an email address domain of somerset.gov.uk).
2. When a member of staff wishes to log in to the system, they enter their email address.
3. The system checks whether their email domain is assigned to an organisation. If not, it politely tells them to go away.
4. If it is, the system generates a 'token' (using [JSON web tokens](https://jwt.io/)). This will create an encrypted series of characters that can act like a password. The system will be able to decrypt the user email address from those characters and identify the library service.
5. The user can use the token to log into the system, or follow a link in the email. The website can be set up so that it will cache the token in the browser, so they do not need to re-enter it unless using a different PC/browser.

The above solution will mean that individual emails will not need to be stored in the database at all. The tokens will be able to be read by the system, but also do not need to be stored in the database. The web tokens can be set to expire after a set interval, so the user could be made to re-verify their email every so often. 
