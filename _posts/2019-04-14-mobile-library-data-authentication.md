---
title: "Mobile libraries: authentication"
excerpt: Managing authentication for updating data
categories:
  - Mobile libraries
published: false
---

It's been full-speed ahead on the mobile libraries project. There are 6 code repositories, each with an issue tracker and project board to track progress. All of them are aspects of the final system, but need to be developed independently.

| Title | Description | 
| ----- | ------------ |
| Database | Where all the data will be held and retrieved/updated |
| API | Application programming interface to allow developers access to the data |
| Schema | A standard schema for mobile library open data |
| Data | Scripting data tasks such as importing existing data |
| Admin | Website to maintain the data to be used by library services |
| Website | Public website to provide maps and timetables | 

A twitter account will also be posting regular updates about the project, and links to online demos. Follow [@mobilelibs](https://twitter.com/mobilelibs), or the [#mobilelibrarydata](https://twitter.com/hashtag/mobilelibrarydata?src=hash) hashtag to keep up to date.

## Authentication

This post is to record some thoughts on authentication of the system.

Part of the idea of this project was to create a system by which mobile library services could manage their own data (stops and routes). That data will all be published as open data, and anyone will be able to see and use it. However, there still needs to be some kind of *control*. The system will need to support editing the data, and it is unlikely any service would be too happy to allow just anyone to edit it. It should only be done by the relevant library service.

Everyone will be pretty familiar with how to solve this. Give all the services a username and password (or many) and lock the system down so only they can edit their data. There's no significant technical challenge in doing this.

## A pain

What are the problems with this?

### Sensitive data

There is a catch 22 situation to securing data. As soon as you add username and password to any system, it makes the data held in that system more sensitive. Add 2-factor authentication, using mobile phone number, and you're increasing the personal data you hold.

This system is for holding open data on mobile libraries. Ideally it will hold no personal or sensitive data, which includes passwords (even with encryption).

### Not another username and password! 

Councils in particular are trying to cut down on the number of logins users need to individual systems. Single Sign On, allowing users to use a single login, often the credentials they use to log onto their PC. But this IS a technical challenge. It would mean significant intergration which each council 


### Summary

Basically, we don't want or need 'traditional authentication. Something else.


## Authentication but no authentication?

SO we need a way of locking down edits to the data, but not by using usernames and passwords.

One option could be to rely on the email addresses used within library services. Most people (perhaps not all) employed within a library service will have 

1. In the database, associate the organisation of Somerset mobile libraries with the email address domain of somerset.gov.uk
2. An individual 

This would possibly raise issues:

- WHat about people who don't have email addrtesses?


