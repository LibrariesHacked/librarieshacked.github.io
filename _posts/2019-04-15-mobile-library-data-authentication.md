---
title: "Mobile libraries: authentication"
excerpt: Managing authentication for mobile library data
categories:
  - Mobile libraries
categories:
  - Security
  - Authentication
published: true
---

It's full-speed ahead on the mobile libraries project. There are 6 code repositories, each with an issue tracker (to record tasks and issues), and project board to track progress.

| Title | Description |
| ----- | ----------- |
| [Schema](https://github.com/LibrariesHacked/mobilelibraries-schema/projects/1) | A standardised schema for mobile library open data |
| [Data](https://github.com/LibrariesHacked/mobilelibraries-data/projects/1) | Scripts to transform existing data into the schema |
| [Database](https://github.com/LibrariesHacked/mobilelibraries-database/projects/1) | Where all the data will be held and retrieved/updated |
| [API](https://github.com/LibrariesHacked/mobilelibraries-api/projects/1) | Application Programming Interface for the data, to allow us to build applications |
| [Admin](https://github.com/LibrariesHacked/mobilelibraries-admin/projects/1) | Website to update mobile library services data |
| [Website](https://github.com/LibrariesHacked/mobilelibraries-website) | Public website to provide maps and timetables of the data |

## Authentication

The system will need to support editing data (the admin website). It's unlikely any service would be happy to allow anyone to edit data on their mobile service. Especially if they use the system to provide public information. Edits should only be done by the relevant local authority (or potentially a commissioned service).

Everyone knows how to solve this. Give all the services/users a username and password so only they can edit their data. There are no significant technical challenges in doing this. But there are other issues.

As soon as you add users and passwords to any system, it makes the data held more sensitive. Add 2-factor authentication, using mobile phone number, and you're increasing the data held.

This system is for holding open data on mobile libraries. Ideally it should hold no personal or sensitive data.

Managing users is also a lot of hassle. As soon as somebody else wants to use the system an account needs to be set up for them. People leave organisations and should have their access removed, but in reality this often isn't done. How to keep track of them?

Councils are also trying to cut down on the number of logins staff need to remember. Single-Sign-On, allowing users to use a single login, is more frequently being integrated where possible. But this WOULD be a technical challenge. It would mean significant integration with each council wanting to do it. It's not currently worth including in the scope for this project. And would overcomplicate it.

Basically, we don't want or need 'traditional' authentication.

## Authentication but not authentication

One option is to rely on the email addresses used within library services. Most staff, perhaps not all, will have an email address assigned to them by the organisation. Normally a local authority. This will be in a standard format like their name and then the domain (e.g. dave@somerset.gov.uk).

Email is generally relied upon as a backup to password. When you forget your password you reset it by sending a password reset email to your email address. The assumption is that your email must be secure. This may not be the case, but with organisation email it is more likely to be secure than personal accounts.

We then have two principles we can build on:

- Most people managing a mobile library will have a known email domain (e.g. somerset.gov.uk)
- Being able to receive an email to that domain is a secure way of checking a person is a member of a service

## Proposed solution

This is the current proposed solution for managing authentication.

1. In the database, associate the mobile library organisation with an email domain. (e.g. Somerset Libraries have an email domain of somerset.gov.uk).
2. When a member of staff wishes to log in to the system, they enter their email address.
3. The system checks whether their email domain is assigned to an organisation. If not, it politely asks them to go away.
4. If it IS, the system generates a 'token' (using [JSON web tokens](https://jwt.io/)). This will create an encrypted series of characters that can act like a password.
5. The token will be sent to their email as part of a link to log in to the system. The system will be use the encrypted token both to give the user access to the system, as well as knowing what library service they are a member of.

The solution will mean that individual emails do not need to be stored in the database at all. The tokens also do not need to be stored in the database. It keeps the system completely free of any personal or sensitive data.
