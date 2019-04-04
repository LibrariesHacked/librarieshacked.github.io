---
category: data 
tags: opendata stats public mobiles
title: Mobile library data iCalendars
excerpt: Generating iCalendar format for mobile library stops
published: true
meta: data
---

This is a brief introduction to the iCalendar format, and how it could be ued in the [mobile library data project](/mobile-library-data-project).

## iCalendar

What is iCalendar? Officially it's Internet Calendaring and Scheduling Core Object Specification. It's possible many won't have heard of it, but it's likely they'll have used it in some form. Ever received an invite to a meeting by email? Or signed up to an Eventbrite event and been asked whether you want to add it to your calendar by clicking on a link? 

These things use a standardised format for calendar appointments. Whether you are on a desktop, laptop, or phone, or using Windows, iOS, or Android, it is likely that your device will have a way of interpreting that calendar appointment, and adding it to your preferred calendar software.

More details are available by [looking up iCalendar on Wikipedia](https://en.wikipedia.org/wiki/ICalendar) and by reading through [the full specification](https://icalendar.org/RFC-Specifications/iCalendar-RFC-5545/).

## Mobile library stop timetables

Mobile library timetables are *generally* (not always) published using PDF files. There's nothing wrong with this. People can save a PDF, they can print it out and pin it to a noticeboard, or whatever they wish.

But the iCalendar specification has been around since 1998, and is a good way of transferring data about events that integrates with devices lots of people carry and use through the day.

## The format

So what does an iCalendar event really look like? To a user it could be a link, or an invite within an email. But behind that there is data. Wikipedia have the following as an example of a Bastille Day party.

```
BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//hacksw/handcal//NONSGML v1.0//EN
BEGIN:VEVENT
UID:uid1@example.com
DTSTAMP:19970714T170000Z
ORGANIZER;CN=John Doe:MAILTO:john.doe@example.com
DTSTART:19970714T170000Z
DTEND:19970715T035959Z
SUMMARY:Bastille Day Party
GEO:48.85299;2.36885
END:VEVENT
END:VCALENDAR
```

Although it can look a bit daunting, there's not too much in this particular example. The first and second line (BEGIN:VCALENDAR, VERSION:2.0) identify the version of the standard. The PRODID identifies the organisation and product that has been used to create the iCalendar (perhaps we would use 'PRODID:-//Libraries Hacked//NONSGML Mobile Libraries//EN'). And then it gets onto the event it's describing (BEGIN:VEVENT). Within that it specifies the start and end, a summary, geo-coordinates, and some details of the organiser.

## A mobile library stop version

Let's see if we can create a version for a mobile library stop, using [Aberdeenshire mobile library data](https://github.com/LibrariesHacked/mobiles-librarydata/blob/master/data/aberdeenshire.csv), and taking an example stop. We'll take the 'Opposite Old Library, Green' stop at Udny Green. This is part of the Central Mobile, on the Central Weeks 1 & 3 Tuesday route, on Tuesdays, every two weeks from 14:05 to 14:20. Starting on 22nd January 2019.

```
BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Libraries Hacked//NONSGML Mobile Library Data//EN
BEGIN:VEVENT
UID:oppositeoldlibrary@librarydata.uk
DTSTAMP:20190403T183700Z
DTSTART:20190416T140500Z
DTEND:20190416T142000Z
RRULE:FREQ=WEEKLY;INTERVAL=2;BYDAY=TU
SUMMARY:Mobile Library Central
DESCRIPTION:Mobile library Central visits 
 Opposite Old Library Green every two weeks
LOCATION:Opposite Old Library, Green, Udny Green
GEO:57.3278041;-2.2012194
URL:https://www.livelifeaberdeenshire.org.uk
 /media/2808/mobile-north-timetable-160119.pdf
END:VEVENT
END:VCALENDAR
```

There is also a [validator for iCalendar](https://icalendar.org/validator.html) which is useful for ensuring it adhers to the standard.

## Testing

So that's pretty much all the data we have for that stop in the calendar event. How to test it? The calendar event can be saved into a text file and hosted online with a file extension of *.ics*. It's then a case of seeing what happens when clicking on it on a mobile, desktop, or whatever.

The ['Opposite Old Library' Stop iCalendar file is available here](/files/opposite_old_library.ics). After clicking that link and opening on an Android phone it gets automatically added to the phone calendar, with the location, description, etc.

Being on my phone now I'm sure Google will poke it's nose in and tell me when I have to leave to get there on time (which will be quite early considering it's in Aberdeenshire).

On a Windows laptop it also works, adding the data into the calendar and setting the correct repeating event.



