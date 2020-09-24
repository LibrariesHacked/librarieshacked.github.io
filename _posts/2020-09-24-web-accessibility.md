---
title: Library web accessibility
excerpt: Time to comply with legislation
categories:
  - Websites
tags:
  - Accessibility
  - Public sector websites
published: false
---

## Public library web accessibility

An earlier post in this blog, [public library websites](https://blog.librarydata.uk/public-library-websites/), looked at common problems with library websites.

One of these was accessibility, and how important it was for libraries to make better web content that everyone could access.

### What is web accessibility?

Equality legislation mandates making adjustments to ensure services can be used by all citizens. But the Public Sector Bodies Accessibility Regulations 2018 go further for web accessibility. They specify that public sector websites should be accessible to a particular standard: AA from the [WCAG 2.1 standard](https://www.gov.uk/service-manual/helping-people-to-use-your-service/understanding-wcag). They must also publish an Accessibility Statement, which should say how this standard has been achieved, and plans to address any problems.

Although two years old, there has been a period of grace to comply with this legislation, which came to an end on 23rd September 2020. More comprehensive guidelines are available at [accessibility requirements for public sector websites and apps](https://www.gov.uk/guidance/accessibility-requirements-for-public-sector-websites-and-apps)

A common example of inaccessible web content is hyperlinks with the text 'click here'. This is something people do because they've seen it a lot. But it makes little sense when you consider that to 'click' is not always relevant unless using a mouse. And the word 'here' is only valid when looking at the position on the web page. It makes assumptions about how the user is interacting with the page that aren't necessarily true.

Imagine you are reading the text of the page to a user and you then give them options for going to other pages, based upon the links on the page. If the page had ten 'click here' links you may end up saying "well, you can go to 'click here', or 'click here', or 'click here'..".

It's the equivalent of a fork in the road where a signpost has 'this way' written for each direction, instead of place names. Completely useless, and a sure way of ensuring people get lost and annoyed.

But it's an easy mistake to make, and there are other common examples.

#### Have appropriate contrast between foreground text and background

You may have a lovely high quality monitor that makes your website look great. But not everyone has the same hardware, or the same eyesight. Having a high contrast between text and background helps to make text clear.

<figure>
  <img src="https://github.com/LibrariesHacked/librarieshacked.github.io/raw/master/images/2020-09-24-accessibility-contrast.png" alt="A sample image showing poor contrast with text of dark grey on a medium grey background."/>
  <figcaption>It can often be tempting to have low contrast for subtle design purposes, but the contrast here is far too low.</figcaption>
</figure>

#### Don't rely on people being able to recognise an image

Many people rely on screen readers to navigate and use websites. In that situation, images are of no use, as they cannot be 'read'.

A common mistake on library websites is to link to external resources by logo. Sometimes a series of logos with no text. To library staff, these are treasured and expensive e-resources. To the public it's a meaningless series of links that they're unlikely to follow.

<figure>
  <img src="https://github.com/LibrariesHacked/librarieshacked.github.io/raw/master/images/2020-09-24-accessibility-logos.png" alt="A screenshot showing a lilst of logos from a library services website, linking to their various eresource providers."/>
  <figcaption>This series of links may look familiar to libraries but will mean nothing to those not viewing the images, and are unlikely to mean much to anyone not fmailiar with them.</figcaption>
</figure>

<figure>
  <img src="https://github.com/LibrariesHacked/librarieshacked.github.io/raw/master/images/2020-09-24-accessibility-ancestry.png" alt="A screenshot of instructions given to access the Ancestry service online at one library service. An Ancentry logo is followed by text saying ''"/>
  <figcaption>There are many issues with this way of providing access to Ancestry online. The mix of click 'here' link, alongside making recognising the Ancestry logo. And just complex instructions.</figcaption>
</figure>

#### Don't use colour as the only way of conveying meaning

Colourful websites aregreat. But recognising colours shouldn't be necessary in interpreting information. That means trying to find different methods in graphs and diagrams to convey meaning. For mobile library timetables, this means stopping the common pattern of having a calendar with dates coloured to indicate when a mobile library may be visiting.

<figure>
  <img src="https://github.com/LibrariesHacked/librarieshacked.github.io/raw/master/images/2020-09-24-accessibility-colour.png" alt="A sample image showing a single calendar month with the day numbers coloured different to indicate which route the mobile library is taking that day."/>
  <figcaption>Mobile library timetables often use colour so to match a library route to when the library is visiting.</figcaption>
</figure>

Accessible design makes the web better for everyone. Content that is clear, well laid out, that uses plain language, descriptive links, good spacing around buttons, etc. All these things are welcome, and make a site nice and easy to use. And that increases usage of libraries.

It's easy for the best websites to make mistakes. I'm not an accessibility expert, and there is ultimately no substitute than having good accessibility testing from users. But trying to follow accessibility guidelines, attempting good content, and publishing an accessibility statement shows that as an organisation you care about trying to make things better, and will correct mistakes.

### How are libraries doing?

Feedback from the previous post about library webpages was that it essentially wasn't the library service's fault. "Libraries often don't have access to edit web content, sometimes there are strict controls from their parent council" was the basic argument.

And that's understanstandable. How can you make something better if you're not allowed near it? But this didn't ring true. Local government has some good digital practice. If you join the [Local Gov Digital Slack group](https://localgov.digital) you will see a healthy and thriving community of web content people discussing accessibility issues.

I was also noticing that it was the library websites most in-line with their parent councils that were most likely to have good web content. It was content such as that on library catalogue sites, away from Council interference, that was particularly bad. Basically, the greater the library involvement, the worse things were.

To try to eliminate Council interference I looked again at library websites, but only where the website wasn't part of the Council site. The test was simple, how many of these has an accessibility statement that would comply with the 2018 legislation?

Of 34 sites, the number with compliant accessibility statements was two. Just over 5% legally compliant.

That's individual services, but what about the national leadership organisations?

Both the Libraries Connected website and the Scottish Library are charities but are publicly funded and therefore come under the legislation. Neither of them had Accessibility Statements, and both of them had clear accessibility issues on their websites.

There is at least one exception to this poor performance. Leeds libraries are clearly putting a lot of effort into this, and are doing their best to work with suppliers to provide accessible websites.

### Who cares?

Do public libraries care about any of this? Given current standards, no (with exceptions).

But that's not malicious disregard for citizens. If those users were accessing libraries physically they would undoubtedly experience a top class service with accessible options: good buildings, large print books, guidance on using the Internet, and more.

The problem is a lack of digital literacy. Web accessibility is seen as a 'tech' thing. Either the responsibility of IT, website providers, the Council web team, the LMS provider. Anyone but the library service.

There are other symptoms as well as poor accessibility. Library online presences are characterised by adaptations of print experiences. All libary reports from library organisations are still released as PDF files. They're not truly published online, they are print formats made available to download and print.

[Gerry McGovern](https://gerrymcgovern.com), a particularly good (a personal recommendation! author on web content, summarised the use of PDFs in a recent tweet.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">One of the best ways to measure digital information illiteracy is to measure the quantity of PDFs an org creates. A PDF is a sure sign that an org has not adapted to digital but is rather forcing digital to adapt to its print culture and practices.</p>&mdash; Gerry McGovern (@gerrymcgovern) <a href="https://twitter.com/gerrymcgovern/status/1284824726200778755?ref_src=twsrc%5Etfw">July 19, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

Libraries in lockdown have been forced online. But that has meant pushing print practices online, where they are inappropriate. Many services used poster templates to put their online events into image format, and then posted these on social media. In many cases the image was the only format the events were available to view. This is in a world that has online calendars and digital formats for sharing events that can be automatically added to calendars.

#### What is the answer?

Well, I don't know. The inconvenient truth for libraries is that previously this may have just been a bit rubbish. But now it's illegal.

Will that trigger a change? Probably not directly. But if enough enforcement action is taken then it's possible. The legislation is ultimately enforceable by the [Equality and Human Rights Commission](https://www.equalityhumanrights.com/en). The public now have a clear right to a standard of accessible public websites, and this can be demanded through the EHRC.