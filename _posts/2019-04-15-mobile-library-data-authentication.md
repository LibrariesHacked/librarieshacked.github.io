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
| [Data](https://github.com/LibrariesHacked/mobilelibraries-data/projects/1) | Scripts to transform existing data into the schema |
| [Database](https://github.com/LibrariesHacked/mobilelibraries-database/projects/1) | Where all the data will be held and retrieved/updated |
| [API](https://github.com/LibrariesHacked/mobilelibraries-api/projects/1) | Application Programming Interface for the data, to allow us to build applications |
| [Admin](https://github.com/LibrariesHacked/mobilelibraries-admin/projects/1) | Website to update mobile library services data |
| [Website](https://github.com/LibrariesHacked/mobilelibraries-website) | Public website to provide maps and timetables of the data |

## Authentication

This post is to record some thoughts on authentication of the system.

The system will need to support editing data (the admin website). It's unlikely any service would be happy to allow just anyone to edit data on their mobile service. Especially if they use the system to provide public information. Edits should only be done by the relevant library service.

Everyone will know how to solve this. Give all the services/users a username and password, and make them login so only they can edit their data. There are no significant technical challenges in doing this. But there are other issues.

As soon as you add users and passwords to any system, it makes the data held more sensitive. Add 2-factor authentication, using mobile phone number, and you're increasing personal data.

This system is for holding open data on mobile libraries. Ideally it should hold no personal or sensitive data.

Managing users is also a lot of maintenance. As soon as somebody else wants to use the system an account neds to be set up for them. People leave organisations and should have their access removed, but in reality this often isn't done.

Councils are also trying to cut down on the number of logins staff need to remember. Single-Sign-On, allowing users to use a single login, is more frequently being integrated where possible. But this IS a technical challenge. It would mean significant integration with each council wanting to do it. It's not currently worth putting in the scope of this project.

Basically, we don't want or need 'traditional' authentication.

## Authentication but no authentication?

One option is to rely on the email addresses used within library services. Most staff, perhaps not all, will have an email address assigned to them by the organisation. Normally a local authority. This will be in a standard format like their name and then the domain (e.g. somerset.gov.uk).

Email is generally relied upon as a backup to password. When you forget your password you reset it by sending a password reset to your email address. The assumption is that your email must be secure. This may not be the case, but with organisation email it is more likely to be secure than personal accounts.

We then have two principles we can build on:

- Most people managing a mobile library will have a known email domain (e.g. somerset.gov.uk)
- Being able to receive an email to that domain is a secure way of checking a person is a member of a service

## Proposed solution

The following may change, but is the current proposed solution for managing authentication.

1. In the database, associate the mobile library organisation with an email domain. (e.g. Somerset Libraries will have an email domain of somerset.gov.uk).
2. When a member of staff wishes to log in to the system, they enter their email address.
3. The system checks whether their email domain is assigned to an organisation. If not, it politely tells them to go away.
4. If it IS, the system generates a 'token' (using [JSON web tokens](https://jwt.io/)). This will create an encrypted series of characters that can act like a password. 
5. The token will be sent to their email as part of a link to log in to the system. The system will be able to decrypt the domain from those characters and identify the library service.
5. On following that link the user will have access to edit their data.

It is not anticipated that editing data will be a very common occurence, so the slightly extended login process seems acceptable, and will cover such cases as people leaving, or new staff joining.

The solution will mean that individual emails do not need to be stored in the database at all. The tokens will be able to be read by the system, but also do not need to be stored in the database. It keeps the system completely free of any personal or sensitive data.