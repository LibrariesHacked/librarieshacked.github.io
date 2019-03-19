---
category: security
title: Encryption, library catalogues, and security testing
meta: how seriously are UK public libraries taking web security, and how can it be tested?
---

You want to talk in confidence with someone while in public. To do this you need to:

- be sure they're the right person.
- agree a code to make sure that others, who may be standing near or between you, can't understand what is being said.

Perhaps they would show you some ID. You may even shake hands, and in a secret handshake, agree a code to talk in.

Information Technology often uses real-world terminology to describe technical processes. The above situation is played out whenever you visit a website using encrypted communication, preceded with the <abbr title="HyperText Transfer Protocol Secure">HTTPS</abbr> (**https://**) protocol. This encryption is often described as <abbr title="Secure Sockets Layer">SSL</abbr> encryption. The following are descriptions of some technical terms that relate to this process.

- **SSL certificate**. SSL Certificates are small data files that digitally bind a cryptographic key to an organization's details. [^1]
- **Handshake**. During this handshake, the client and server agree on various parameters used to establish the connection's security: The client sends the server the client's SSL version number, cipher settings, session-specific data, and other information that the server needs to communicate with the client using SSL. [^2]
- **Man in the middle**. In cryptography and computer security, a man-in-the-middle attack is an attack where the attacker secretly relays and possibly alters the communication between two parties who believe they are directly communicating with each other. [^3]

Using encryption has long been regarded as essential for login and sensitive web transactions like payment, but is more frequently being used for all online communications.

It's important to assess the requirement for encryption not just in the context of risk to the data involved on that site and service. Many hacks against individuals have been a result of credentials leaked from insecure accounts, then used to gain access to more secure services. Facebook CEO Mark Zuckerberg had his Twitter and Pinterest accounts hacked as a result of leaked LinkedIn credentials[^4]. Twitter CEO Jack Dorney and Google CEO Sundar Pichai have had similar experiences. If a service requires login there is a strong likelihood that many of the user credentials will also be securing data elsewhere. Protecting them is essential.

## UK libraries

In a library context, credentials that need protecting are often a user ID and PIN/Password for the online catalogue. An individual's library account may hold information such as email address, home address, date of birth, and equalities information on an individual. And their extensive borrowing history, if retained by the library management system. How well do UK library services secure that information?

Web browsers give users information about the security of the web page they are visiting. A securely encrypted page is normally represented with a padlock symbol, and sometimes a green colour somewhere in the address bar. Chrome also now actively marks sites as **'Not secure'**, where they allow user input and do not have encryption.

Encryption is not just a yes/no. Sites could be grouped into the following categories.

| Type | Description |
| ---- | ----------- |
| Only HTTP | Sites that offer no encryption at all. |
| HTTP and HTTPS (Mixed Content) | Sites where there is a mix of HTTPS/HTTP content on a page. For example, the page may include an image with an HTTP URL. The browser will not trust the site or display it as secure. |
| HTTPS (Allows HTTP) | Sites that offer encrypted login but it isn't enforced. A link could be shared that mistakenly used an HTTP address. Sites should enforce the use of encryption if it is available. |
| HTTPS (vulnerable) | Sites that offer encryption but there could be issues with the implementation, or the certificate. Browsers may refuse to display the page at all, or display a warning. |
| HTTPS (good) | Sites that have a high quality implementation of encryption. |

Current UK public web catalogues are shown below, with an indicator as to whether HTTPS is available, and any issues if so. This does not give details of any security vulnerabilities, and it's advised services do their own checking. If any further guidance is needed in doing this please get in contact.

The majority of these can be tested simply by visiting the site, but for further methodology see **what to do** suggestions below.

<div class="container"><table class="table" id="tblcatalogues"></table></div>

## What to do?

Are you part of a local authority? Firstly try to ensure your IT department include the web catalogue in any annual **penetration tests** as part of their <abbr title="Public Services Network">PSN</abbr> accreditation. Not only will the tests be carried out by external, accredited professionals, but negative results will be dealt with urgently. For those library services that are outsourced from the local authority, this is not a reason to not have strict IT security standards. The same tests should be completed on an annual basis.

Some basic testing of web security doesn't need experienced penetration testers (sometimes known as *ethical hackers*). The following steps can be undertaken:

1. Is the site using an HTTPS web address?  This should be visible in your web browser address bar.  Check login and membership pages in particular. All browsers should indicate encryption next to the address, such as a green bar or padlock. See **How to Know if a Website is Secure**[^5] for more info. If not using HTTPS, contact the supplier and IT to get this implemented.
2. If already using HTTPS, can the login be accessed by HTTP instead? Try changing the address to HTTP. It should redirect back to HTTPS.
3. If you're the site owner, check the site against an online SSL checker such as SSL Labs[^6].  This will give detailed and complex results, but also a simple grade of quality. You should ideally be getting an A grade, anything lower then report to your supplier and IT to investigate.


## Test Updates

This post will be updated to reflect changes. All of the library services with failing standards were contacted to ask what they were doing to address the securty concerns. Some responded by enabling encryption promptly, some did nothing, and others have waited for future system changes.

| ----- | ----- |
| July 2016 | Original tests completed |
| 1st September 2016 | Replaced older catalogue listings for Welsh library authorities moving over to combined LMS |
| 6th September 2016 | Warrington [moved to Koha LMS](https://livewirewarrington.co.uk/news/library/1025-livewire-introduce-new-library-management-system) in August 2016 |
| 1st November 2016 | Sutton moved to Axiell Arena with HTTPS security.  Tameside move to Spydus (HTTPS but with mixed content) |
| 15th November 2016 | Darlington apply SSL certificate to their Arena site. |
| 31st December 2016 | Cumbria have implemented encryption although there is mixed HTTP/HTTPS content. North Lincolnshire, and Lincolnshire have also upgraded to include encryption. |
| 15th July 2017 | All of Capita hosted sites have been fixed to make them enforce HTTPS. Chased Capita a couple of times regarding this. |
| 1st September 2017 | Hillingdon, East Ayrshire, Hounslow, Knowsley, Northumberland, Reading, Vale of Glamorgan, and West Lothian have implemented HTTPS, either on existing or new systems. |


## References

[^1]: GlobalSign: [SSL Information Center](https://www.globalsign.com/en/ssl-information-center/what-is-an-ssl-certificate/)
[^2]: Wikipedia: [Transport Level Security](https://en.wikipedia.org/wiki/Transport_Layer_Security)
[^3]: Wikipedia: [Man in the middle attack](https://en.wikipedia.org/wiki/Man-in-the-middle_attack)
[^4]: The Guardian: [Mark Zuckerberg hacked on Twitter and Pinterest](https://www.theguardian.com/technology/2016/jun/06/mark-zuckerberg-hacked-on-twitter-and-pinterest)
[^5]: DigiCert: [How to Know if a Website is Secure](https://blog.digicert.com/buy-site-know-website-secure/)
[^6]: SSL Labs: [SSL Test](https://www.ssllabs.com/ssltest/)