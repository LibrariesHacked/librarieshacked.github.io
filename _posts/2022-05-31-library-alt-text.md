---
title: A library alt text bot
excerpt: Creating a bot to promote library web accessibility
categories:
  - Accessibility
tags:
  - Twitter
  - Accessibility
published: true
---

What is alt text? Short for alternative text, it is the text added to images on webpages to act as an alternative description of the image.

It’s known as alt text because that is the HTML attribute used for storing the text.  

```html
<img src='bookcase.jpg'
alt='A boy lying on top of a bookcase with his face in the books'>
```

It's useful because many people are either blind or partially-sighted, and use screen reading software to read online content. Images cannot be easily read, so it's important to provide a text alternative.

People will interact with web images using different tools. Content editors need to appreciate that there are different ways of using the web, and not prefer one over any others. That's why there are web standards to creating accessible content. Detailed information on web accessibility is available in the [Web Content Accessibility Guidelines (WCAG) 2.1 (w3.org)](https://www.w3.org/TR/WCAG21/).

 The same applied for content on social media.

## Social media bots

I saw that someone called [Matt Eason](https://twitter.com/matteason/) had created a bot Twitter account called [UK Gov Alt Bot](https://twitter.com/matteason/status/1513803852394414087), to highlight whenever a government account (central gov and cabinet ministers) posted an image without alt text. It does this by quote tweeting them (a retweet with additional content), adding a helpful link on social media accessibility. Alongside this, there's a [UK Council Alt Bot](https://twitter.com/UKCouncilAltBot) for local government accounts, as well as [US Gov Alt Bot](https://twitter.com/USGovAltBot) for the US Federal Government. 

Despite the negative perception, and Elon Musk’s odd pronouncement that he would [defeat the bots or die trying](https://twitter.com/elonmusk/status/1517215066550116354), Twitter doesn't discourage bot accounts. Bots are a key part of Twitter.

> &ldquo;Bots actually come in all shapes and sizes, and chances are, you’re already following one that you like. Like a COVID-19 bot that alerts you to vaccine availability in your area, an earthquake bot that alerts you to tremors in your region, or an art bot that delivers a colorful dose of delight on your timeline.&rdquo;
>
> **Twitter Blog** [The secret world of good bots](https://blog.twitter.com/common-thread/en/topics/stories/2021/the-secret-world-of-good-bots)

## A library bot account

Alt text bots seemed like a great idea. The accounts tweet their own messages, rather than harassing other accounts by replying to tweets, or attempting to direct message people. But the highlighted tweet account will still get a notification, which will alert them to tweets that are missing alt text. Given that web accessibility is a legal requirement, that's not too intrusive.

It seemed worthwhile to do a library version. Libraries are public facing, and subject to the same accessibility legislation as other public sector organisations. Library web content should be for everyone, and there are few services that have a greater need for accessibility.

There is a significant amount of bad practice with images and social media. It's common to see library services tweet out posters, with key information in image format only, and publish these on social media without any corresponding text. In many cases this is the only place the information is published. To someone using a screen reader all they know is that their library has shared an image. It could be a funny photo of a cat, or it could be a notification that the library is closed that day.

So, I created the [library alt text bot](https://twitter.com/LibraryAltText).

## How does it work?

Like all Libraries Hacked projects, the [alt text bot code](https://github.com/LibrariesHacked/library-alt-text-bot) is published on GitHub and is openly licensed for reuse.

* A list of library Twitter accounts is available from the [UK Libraries](https://twitter.com/i/lists/973903152499036160) and [National Libraries](https://twitter.com/i/lists/865613046831616000) Twitter lists, maintained by [Library Cactus](https://twitter.com/SarahHLib).
* The bot runs every 30 minutes, using GitHub Actions.
* A [counter file](https://github.com/LibrariesHacked/library-alt-text-bot/blob/main/counter) keeps track of the most recent tweet ID that the bot has looked at. This ensures that the bot is always looking at tweets that it hasn't yet processed.
* When finding a tweet that includes an image without alt text, the bot will quote tweet that tweet with the following message. 

> This tweet contains 1 image with no alt text. Alt text is important for blind and partially sighted people who use screen readers. More info at:
>
> [https://gcs.civilservice.gov.uk/guidance/digital-communication/planning-creating-and-publishing-accessible-social-media-campaigns/#Accessibility-best-practice-for-community-managers-and-publishers](https://gcs.civilservice.gov.uk/guidance/digital-communication/planning-creating-and-publishing-accessible-social-media-campaigns/#Accessibility-best-practice-for-community-managers-and-publishers)

## Reaction

The responses have been mixed.

* Most accounts have simply ignored it, perhaps not monitoring social media, or not too interested in engaging.
* Many have decided to block the bot and continue to tweet content that isn't accessible. That's a strange hill to take a stand on, but they may feel it's their right to use social media as they choose. It's likely they don't think it's worth worrying about a relatively small minority who use screen readers.
* A small but significant number have deleted the original tweet and retweeted, plus mentioned that they will reiterate existing guidelines, or follow new guidelines in future.

There has been occasional push-back on the need for alt text at all. For example, some accounts will post a tweet where the image is purely for decoration, and does not add any significant information to the tweet text. Unfortunately though, Twitter content is inconsistent. For users, an image without alt text could be inconsequential, or it could be essential additional information. Adding alt text is a way of ensuring you provide a text alternative. If the image isn't important, don't post it.

## Impact

Is this doing any good? The account is getting a fair amount of engagement. It gets far fewer responses than it tweets, but it gets a few people replying, and mentioning that it has been helpful.

Twitter have an [analytics platform](https://analytics.twitter.com/). The analysis required to measure success is fairly simple: how many times is the bot tweeting? And is that decreasing?

The bot has been running about a month (started end of April 2022). There are 4 consecutive weeks of data from 2nd May to 29th May.

| Week                | Tweets |
| ------------------- | ------ |
| 2nd May - 8th May   | 2555   |
| 9th May - 15th May  | 2801   |
| 16th May - 22nd May | 2528   |
| 23rd May - 29th May | 2420   |

It's pretty inconclusive so far. The second week was a bumper week for tweets that didn't have alt text, but the others have all been roughly the same. It would be good to get those numbers down significantly.

The bot will be enhanced to analyse more about the tweets - for example, particularly highlighting tweets that include an image and no text at all.

Twitter have recently done lots of work on making the platform more accessible, and publish a guide for [how to add image descriptions](https://help.twitter.com/en/using-twitter/add-image-descriptions). Elon Musk does not bother himself with alt text.
