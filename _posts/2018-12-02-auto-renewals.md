---
category: renewals
tags: fines renewals scripting
title: Scheduling auto renewals
meta: Schedule loan checks using google scripting services
published: false
---

Library fines can be annoying. Have a few books out and it doesn't take long to owe more than it may have cost to buy at least one of the items. Well, that's just how libraries work?

Perhaps. But there is a growing tendency for two things:

1. Removing overdue fines. This has been particularly big in the US but Northern Ireland and Trafford are notable recent adopters of this policy. 

2. Automatic renewals. Similar to the above, this just ensures that if you are able to renew an item then the system will renew it for you to avoid it going overdue.

In these days of pre-overdue notices and online renewals it's easy to say there's no excuse to bring a library book back late. And in some ways there isn't, other than being forgetful and busy, or both. Neither of which the library should really be policing.

But there's also little excuse for library systems not to do things like auto-renewal. These days I can control most of my regular tasks through automation, most of which is provided to me through easy devices and apps. [If this then that]() provides all sorts of interactions between different online services, such as ''. Anyone should be able to configure something like 'if my library book is about to go overdue then renew it'.

Now, you can do this, but it needs some background knowledge of systems, and 

My local authority is Wiltshire Council. They use Axiell for their library management system. The online catal

The [Google Apps Script](https://developers.google.com/apps-script/) language is primarily JavaScript with a number of additional functions to simplify common scripting tasks, and integrate with other Google services.

For example, if you have a Google Analytics account it supports [a set of methods](https://developers.google.com/apps-script/advanced/analytics) to allow you to easily query your Analytics data.

Analytics already provided API (Application Programming Interface) access, but this makes accessing data from Google services a lot easier, and removes authentication as a task.  If you write an apps script and host it on your Google account then it can be given automatic access to your Analytics data.  Similarly, it will provide easy read/write access to documents and spreadsheets that are in the same account.  So you could query your Analytics account and update a Google Sheet with the data (if you wanted to).

When working on scripts, it also offers a decent development tool, allowing you to debug the scripts you write (though debugging is noticeably slow).

Scripts are able to send out emails, at a limit of 100 per day, and can be set to run as part of a schedule. That also makes it useful as a notifications and alerts system, where otherwise automation scripts would need to be hosted on a server.

As an example, the below script could be set to run as an automated task every day to check a library account, and send you an email if a loan is due for return within a certain time frame (e.g. within 5 days), and also to renew it if it is just about to go overdue.  It uses the following Google script additions:

- **MailApp.sendEmail**.  To send out the alert email if loans are due.
- **UrlFetchApp.fetch**.  To fetch data from a URL.  In this case a web service that retrieves loan data.
- **XmlService.parse**.  To parse XML returned from the web service into an accessible object.

The script is only compatible with Axiell Arena web services. It effectively does the same thing as if you were using the library app and renewing a loan manually. The following UK public library authorities are supported.

| Service | URL | Library ID |
| ------- | --- | ---------- |
| Hounslow | https://www.hounslowlibraries.org/arena.pa.palma/loans | 219001 |
| Wiltshire | https://libraries.wiltshire.gov.uk/arena.pa.palma/loans | 400001 |

Instructions to set up your own version are as follows:

1. In your [Google drive account](https://drive.google.com/drive/my-drive) select **New > More > Google Apps Script**
2. In the script body paste all of the below script, overwriting anything that may be there already.
3. You will need to replace the placeholder details: your member ID, your pin, and your email address.
4. Change the Library ID, and Library URL to be the ones for your library service.
5. You then have the options on when to react to loan due dates.  The number of days remaining on a loan at which it will automatically renew it, and the number of days remaining at which you'll simply receive an email reminder.
6. You can then set schedules for it to run using .  Probably the most sensible would be sometime in the evening each day.

<pre class="prettyprint linenums"><code>function CheckLoans() {
    // Customise these variable to match your details, library service, and preferences.
    var memberId = 'your member id';
    var PIN = 'your pin';
    var emailAddress = 'your email address';
    var libraryId = '400001';
    var libraryUrl = 'https://libraries.wiltshire.gov.uk/arena.pa.palma/loans';
    var daysToRenew = 1;
    var daysToSendEmail = 5;

    // setting up some data for the script
    // includes XML to post to the web service
    var d = new Date();
    var renewals = '';
    var today = new Date();
    var checkLoanPayload = '&lt;soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:loan="http://loans.palma.services.arena.axiell.com/" xmlns:loan1="http://axiell.com/arena/services/palma/patron/loansRequest" xmlns:util="http://axiell.com/arena/services/palma/util"&gt;&lt;soapenv:Header/&gt;&lt;soapenv:Body&gt;&lt;loan:GetLoans&gt;&lt;loan1:loansRequest&gt;&lt;util:arenaMember&gt;' + libraryId + '&lt;/util:arenaMember&gt;&lt;util:user&gt;' + memberId + '&lt;/util:user&gt;&lt;util:password&gt;' + PIN + '&lt;/util:password&gt;&lt;util:language&gt;en&lt;/util:language&gt;&lt;/loan1:loansRequest&gt;&lt;/loan:GetLoans&gt;&lt;/soapenv:Body&gt;&lt;/soapenv:Envelope&gt;';
    var renewPayload = '&lt;soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:loan="http://loans.palma.services.arena.axiell.com/" xmlns:ren="http://axiell.com/arena/services/palma/patron/renewLoansRequest" xmlns:util="http://axiell.com/arena/services/palma/util" xmlns:loan1="http://axiell.com/arena/services/palma/util/loan"&gt;&lt;soapenv:Header/&gt;&lt;soapenv:Body&gt;&lt;loan:RenewLoans&gt;&lt;ren:renewLoansRequest&gt;&lt;util:arenaMember&gt;' + libraryId + '&lt;/util:arenaMember&gt;&lt;util:user&gt;' + memberId + '&lt;/util:user&gt;&lt;util:password&gt;' + PIN + '&lt;/util:password&gt;&lt;util:language&gt;en&lt;/util:language&gt;&lt;ren:loans&gt;[[renewals]]&lt;/ren:loans&gt;&lt;/ren:renewLoansRequest&gt;&lt;/loan:RenewLoans&gt;&lt;/soapenv:Body&gt;&lt;/soapenv:Envelope&gt;';
    var loansOptions = { 'method': 'POST', 'content-type': 'application/xml; charset=utf-8', 'payload': checkLoanPayload };
    var renewOptions = { 'method': 'POST', 'content-type': 'application/xml; charset=utf-8', 'payload': renewPayload };

    // Start: Get Loans data
    var getLoans = UrlFetchApp.fetch(libraryUrl, loansOptions);
    var responseText = getLoans.getContentText();

    // Extract a list of loans from the XML returned
    var docRoot = XmlService.parse(responseText).getRootElement();
    var ns = docRoot.getNamespace();
    var loansRequest = docRoot.getChildren('Body', ns)[0].getChildren()[0].getChildren()[0];
    ns = loansRequest.getNamespace();
    var loans = loansRequest.getChild('loans', ns);
    var loanItems = loans.getChildren();

    var emailText = 'Hello,\n';
    var sendEmail = false;
    var renew = false;

    // Loop through each loan and construct the email body (if necessary)
    for (var x in loanItems) {
        var loan = loanItems[x];
        ns = loan.getNamespace();
        var renewalDate = loan.getChild('loanDueDate', ns).getText().replace('+', 'T') + ':00.000Z';
        renewalDate = new Date(renewalDate);

        var reservedDate = new Date(loan.getChild('loanDate', ns).getText());
        var branch = loan.getChild('branch', ns).getText();

        var catalogueRecord = loan.getChildren()[1];
        ns = catalogueRecord.getNamespace();

        var title = catalogueRecord.getChild('title', ns).getText();
        var id = catalogueRecord.getChild('id', ns).getText();
        var author = catalogueRecord.getChild('author', ns).getText();
        var oneDay = 1000 * 60 * 60 * 24;
        var dateDifference = Math.ceil((renewalDate.getTime() - today.getTime()) / (oneDay));

        if (dateDifference &lt;= daysToSendEmail) {
            sendEmail = true;
            if (dateDifference &lt;= daysToRenew) {
                // it's so late we need to renew, but say this in the email.
                renew = true;
                emailText += 'The following item has been renewed: ' + title + ', ' + author + ' .  This was checked out on: ' + reservedDate + '.  Please remember to finish and return soon.\n';
                renewals += '&lt;loan1:id&gt;' + id + '&lt;/loan1:id&gt;'
            }
            else {
                // less than five days to go, will send an email each day.
                emailText += 'Your loan of ' + title + ', ' + author + ' , checked out on ' + reservedDate + ', is due back on: ' + renewalDate + '.\n';
            }
        }
    }

    // renew whatever items are due to renew
    if (renew) {
        renewPayload = renewPayload.replace('[[renewals]]', renewals);
        UrlFetchApp.fetch(libraryUrl, renewOptions);
    }

    // send out the email
    if (sendEmail) {
        MailApp.sendEmail(emailAddress, 'Library Notification Report', emailText);
    }
}</code></pre>