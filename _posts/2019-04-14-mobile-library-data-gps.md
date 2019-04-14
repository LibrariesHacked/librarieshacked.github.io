---
title: "Mobile libraries: GPS"
excerpt: Visualising mobile library real-time locations
categories:
  - Mobile libraries
---

Mobile library stops and routes can be visualised on maps. Stops are shown fairly commonly, routes not so often, but it [can be done](/mobile-library-data-routes).

But what about mapping the mobile library? When we map static libraries we are showing the library itself. Not doing this for mobiles is possibly down to the complexity of mapping a moving object. But part of this project has always been to explore ways of providing a real-time view of the locations of mobile libraries through the day.

There are potential ways of doing this, all of which could be options in a mobile library system.

# Estimation

In a route timetable we have a list of stops and the time the mobile is at each stop (e.g. 10:00-10:25). Before the next stop there is usually then a gap (say 5 or 10 minutes) before the next stop. In the majority of cases this is travel time.

If we have calculated the route the mobile library would take between the two stops, we could plot the location of the mobile library based upon the current time. If there is a 10 minute gap between stops, and 5 minutes have passed then we may estimate the mobile library is half way there, and draw the library half way along the route. Or we assume the library would like to arrive a little early for each stop and adjust calculations accordingly.

It could be more sophisticated. One section of the route may be much slower than another. So we could try to calculate where we think the mobile library is, based upon the different sections of the route and thhe time they take.

Either way, it's estimation, but a reasonable approach. It's used fairly commonly, in bus tracking and other applications. I noticed it recently when a marathon tracking app allowed people to follow where runners were at any point. The runners did not have GPS, the app took recorded data from certain milestones of the race, and estimated the runner positions for the rest.

In some cases it will be wrong - there may be external factors like refuelling, work breaks, lunch, etc. But as a technique it is a reasonable fallback in the absence of real data.

## Fitted GPS

Many fleets of vehicles have built in GPS devices which allows their location to be recorded at regular intervals. There is software to manage and view this data. When I was at a particular Council the parks maintenance team had GPS installed in all their vehicles. They also had other trackers that allowed them to view (for things like lawn mowers) whether the engine was on, blades running, and more.

In some cases this data is publicly shared. Gritting trucks will [often have GPS fitted](https://www.bbc.co.uk/news/uk-england-essex-20211004), and the data is publicly shared to show where the trucks are going and which roads have been done.

This isn't very expensive, but would take some design to find a way of sharing data from fitted GPS trackers into this mobile libraries system, and display it to the public. Ambitious Councils may want to use it and be willing to share some data.

## GPS via mobile device

The plan for this system is to have a responsive website for the public to view mobile library timetables. That provides the opportunity for the mobile library staff to be able to log in on a mobile device, and for it to automatically log their location to provide this GPS data. This could then be displayed on the public view so that the location is accurately represented.

This would need to be optional, and there would also need to be safeguards to ensure people did not accidentally stay logged in when not on the library. It wouldn't be good for a driver to leave the vehicle and go home, but have their mobile device continually logging their location to a public website.

If sensibly cautious, there are ways of ensuring this doesn't happen.

1. The system should ensure that any data is only recorded if that mobile library is currently out on a route (based on the timetable).
2. The system could also roughly check that the location it is being sent is in the vicinity that it expects (from the estimated position). If significantly different it's probably some kind of mistake and shouldn't be recorded.
3. The system could also 'correct' the data to always place the location to the nearest point on the actual route. If a driver wanders off with their phone it won't show them popping to a shop or anything like that.