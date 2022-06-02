---
title: Library password encryption
excerpt: Discovering my library password is held without encryption
categories:
  - Security
tags:
  - Encryption
  - Passwords
published: true
---

I had tickets for a gig last week (rearranged many times due to covid). The email they were in said they needed to be printed. This seemed unlikely, nothing needs to be printed any more, but I'm a stickler for written instructions. I also don't have a printer.

That's where the library comes in handy. I went down my local library to do it at lunchtime.

Having not used my library card much recently I'd forgotten my PIN. I asked at the desk if I could get onto a computer. Of course, and no worries about the PIN - they'd print me a reminder. This reminder came on a little slip with my forgotten PIN printed in the centre, in tiny text. I took it, and logged into a computer, ill at ease. (To be fair, staff were lovely, can't fault them).

Many people will recognise the big security red flag. Not the printing of the PIN onto paper, although it's worth not keeping passwords on paper. But that was fine - I could look after it, and destroy it.

The problem is that it's clearly possible for the Library Management System to retrieve my PIN.  No system should be able to do that - the PIN should be held securely after being one-way encrypted.

Encryption is a way to conceal information by altering it so that it appears to be random data. When choosing a PIN, my 4 digits (e.g. **1234**) are processed and turned into a long string of numbers and letters (e.g. **03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4**). One-way encryption is where it is not possible to do the reverse. There is no way of going from the encrypted data back to the original.

How is it helpful to store a meaningless series of numbers and letters, that can't be turned into my original PIN? When the system needs me to enter my PIN I can do so, it then encrypts that and cheks it against the encrypted data it stores, which should match. But there is no way of actually getting my PIN, other than from me.

If the user ever forgets their PIN, then there's no option other than resetting it. Check the person is who they say they are, and let them set it again. There are many more complexities to encryption, but that's enough for this post.

What are the dangers of the situation my local library provides? My innocent scenario of wanting to go to a gig could be quite different.

1. Someone drops their wallet in the town (overly enthusiastic jubilee celebrations). The wallet holds various cards, such as debit and credit cards, and a library card.
2. I find the wallet and pop into the nearest library and say I've forgotten my PIN. No worries they say, you have your card, so here's your PIN on a little bit of paper.
3. I get the PIN number and wander off to a cash machine, where the PIN happily works for the credit and debit cards. I get lots of money.

It's not hugely far fetched, or even particularly unlikely. Many people will use the same PIN for multiple services, even for banking. They assume PINs are held securely.

When considering password security it's important to remember that you're not only protecting your own service and the data held within that. The risks aren't only that someone see someone else's address, and what books they are currently been reading. The risk is that you compromise all the user's accounts, and they have all their money stolen.

How long has it been standard to encrypt passwords in systems? Hard to say exactly, but it was more common to see plain text passwords a couple of decades ago, but even then not in big systems. Libraries need to do better at this - library systems aren't things used by a tiny amount of people - we want the whole population to have library cards.

It's not the fault of front line staff - but it needs investment in digital teams to eliminate these bad practices and design secure systems.
