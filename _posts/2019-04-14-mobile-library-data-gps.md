---
title: "Mobile libraries: GPS"
excerpt: Visualising mobile library real-time locations
categories:
  - Mobile libraries
---

Mobile library stops and routes can be visualised on maps. With stops this is fairly common, routes not so often, but it [can be done](/mobile-library-data-routes).

But what about mapping the actual library? When we map static libraries we're showing the library itself. With mobiles there's a complexity to mapping a moving object. But this project will explore providing a real-time view of mobile libraries.

There are options for doing this, all of which could be included in the system.

## Estimation

In timetables we have a list of stops, and the time period (e.g. 10:00-10:25). Before the next stop there is usually then a gap (say 5 or 10 minutes). In the majority of cases this is travel time.

If we've calculated the route between the two stops, we could plot the location of the library based upon the current time. If there is a 10 minute gap between stops, and 5 minutes have passed, then we may estimate the mobile library is half way there. We'd then draw the library half way along the route. Or we assume the library would like to arrive a little early and adjust our calculations a little.

It could be more sophisticated. One section of the route may be slower than another. So we could try to calculate where we think the mobile library is, based upon extra data about the route.

Either way, it's estimation. It's used fairly commonly, in bus tracking and other applications. I noticed it recently when a marathon tracking app allowed people to follow where runners were. The runners did not have GPS, the app took recorded data from certain milestones of the race, and estimated the runner positions elsewhere.

In some cases it will be wrong - there may be external factors like refuelling, work breaks, lunch, etc. But it is a reasonable fallback in the absence of real data.

## Fitted GPS

Many fleets of vehicles have built-in GPS devices which allows their location to be recorded at regular intervals. There is software to manage and view this data. When I worked at a certain Council, the parks maintenance team had GPS installed in all their vehicles. They also had other trackers that allowed them to view, for things like lawn mowers, whether the engine was on, blades running, and more.

Gritting trucks will often have GPS fitted, and the data is [sometimes publicly shared](https://www.bbc.co.uk/news/uk-england-essex-20211004), to show where the trucks are going and which roads have been gritted.

This isn't very expensive, but would take some time and design to find a way of sharing data from fitted GPS trackers into the mobile library system, and display it to the public. Ambitious Councils may want to do this, and be willing to share some data.

## GPS via mobile devices

The plan for this system is to have a website for the public to view mobile library timetables. That provides the opportunity for mobile library staff to be able to log in on a mobile device that has GPS capability, and for it to collect their location to provide this data. This could then be displayed to the public so that the location is accurately represented.

This would need to be optional, and there would need to be safeguards to ensure staff did not accidentally stay logged in when not actually on the library. It wouldn't be good for a driver to leave the vehicle and go home, but have their mobile device continually logging their location to a public website.

If sensibly cautious, there are ways of ensuring this doesn't happen.

1. GPS data should only be recorded if the mobile is currently out on a route (based on the timetable).
2. The GPS location should be in the expected vicinity, from the estimated position. If significantly different it's probably a mistake and shouldn't be recorded.
3. GPS data should be 'corrected' to move the location to the nearest point on the actual route. If a driver wanders off with their phone, it won't show them popping to a shop or anything like that.