---
category: renewals
tags: fines renewals scripting
title: Scheduling auto renewals
meta: Schedule loan checks using google scripting services
---

Library fines can be annoying. Forget to bring a few books out and it doesn't take long to owe more than the cost of one of the books. Well, so what? That's how libraries work.

Perhaps. But there is a growing trend for public library services to implement one of two policies:

1. **Removing overdue fines.** Particularly big in the US, but Ireland and [Trafford](https://www.librariesconnected.org.uk/news/new-chapter-library-borrowing) are notable recent adopters of this policy. Quite a few services in Scotland have also done this for many years.

2. **Automatic renewals.** This ensures that if you are able to renew an item, then the system will renew it for you to avoid it going overdue.

In these days of online renewal it's easy to say there's no excuse to go overdue. And there isn't, other than being forgetful and busy, or both. Neither of which a library should really be punishing.

But there's also little excuse for library systems to not do auto-renewal. Most of my life is controlled through perfectly timed automation. In the morning Google tells me when to get up, what I am supposed to be doing, and whether I will need an umbrella to do it. Every now and then it also hints how long it will take me to get to places I'm not supposed to be, like the pub. Amazon tells me what I need to buy, and things that I hadn't considered buying but it knows I will be tempted by. Moonpig sends birthday cards for me, and Netflix lets me know when TV shows that I might like become available. A measley pre-overdue email from my library, three days before a book is due back, seems like negligence towards my wellbeing.

OK, libraries don't want to mimic the intrusive automation and data collection that goes on with other things. But stopping people getting fines when they don't need to would be nice.

All this could be done by users themselves, but it requires a bit of investigation into how renewals work. The automation we're looking for here is something like:

**If:** My books are about to go overdue.
**Then:** Renew them.
**And:** Tell me about it.

There are 3 library system processes that are needed for this.

1. Login as a user (normally using an ID and password/PIN).
2. Check current loans
3. Renew loans (if necessary).

Many systems these days have an Application Programming Interface (API), made available using web services. This allows interaction with the system on the web, using machine-to-machine communication by passing data back and forth. When accessing web pages online we are usually using human-to-machine communication (clicking on web pages and typing in boxes). Having web services means we can just send the data required for the system to do what it needs to.

My local authority is Wiltshire Council. They use Axiell for their library management system, and Axiell have web services, used by the library's mobile app. So by writing a script it is possible to automate the process of checking loans and renewing them.

The [Google Apps Script](https://developers.google.com/apps-script/) language is primarily JavaScript with a number of additional functions to simplify common scripting tasks. It allows users to run scripts using their Google account. So is fairly accessible to people as long as they're comfortable using Google.

Google Apps Scripts are also able to send out emails, at a limit of 100 per day, and can be set to run as part of a schedule.

As an example, the below script runs against the Axiell web services as an automated task every day to check a library account. It sends an email if a loan is almost due (within 5 days), and then renews it if it is just about to go overdue (the next day). Hopefully this should mean no more library fines! (until Wiltshire scrap them anyway).

```
function CheckLoans() {

  // user acount details - put your user number, PIN, and email address
  var id = '';
  var pin = '';
  var email = '';
 
  // library details - in this case an ID and URL for Wiltshire but fill with your own
  var library_id = '400001';
  var library_url = 'https://libraries.wiltshire.gov.uk/arena.pa.palma/loans';
  
  // at less than 1 day to go, renew the item
  var renewal_days = 1;
  // at less than 5 days to go, send an email notification
  var email_days = 5;
  
  // setting up some data for the script
  var renewals = '';
  var today = new Date();
  var check_loan_payload = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:loan="http://loans.palma.services.arena.axiell.com/" xmlns:loan1="http://axiell.com/arena/services/palma/patron/loansRequest" xmlns:util="http://axiell.com/arena/services/palma/util"><soapenv:Header/><soapenv:Body><loan:GetLoans><loan1:loansRequest><util:arenaMember>' + library_id + '</util:arenaMember><util:user>' + library_id + '</util:user><util:password>' + pin + '</util:password><util:language>en</util:language></loan1:loansRequest></loan:GetLoans></soapenv:Body></soapenv:Envelope>';
  var renew_payload = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:loan="http://loans.palma.services.arena.axiell.com/" xmlns:ren="http://axiell.com/arena/services/palma/patron/renewLoansRequest" xmlns:util="http://axiell.com/arena/services/palma/util" xmlns:loan1="http://axiell.com/arena/services/palma/util/loan"><soapenv:Header/><soapenv:Body><loan:RenewLoans><ren:renewLoansRequest><util:arenaMember>' + library_id + '</util:arenaMember><util:user>' + library_id + '</util:user><util:password>' + pin + '</util:password><util:language>en</util:language><ren:loans>[[renewals]]</ren:loans></ren:renewLoansRequest></loan:RenewLoans></soapenv:Body></soapenv:Envelope>';
  var check_loan_options = { 'method':'POST', 'content-type': 'application/xml; charset=utf-8', 'payload': check_loan_payload };
  
  // start - get loans data
  var get_loans = UrlFetchApp.fetch(library_url, check_loan_options);
  var response = get_loans.getContentText();
  
  // do the XML parsing to get a list of loans
  var doc_root = XmlService.parse(response).getRootElement();
  var namespace = doc_root.getNamespace();
  var loans_request = doc_root.getChildren('Body', namespace)[0].getChildren()[0].getChildren()[0];
  namespace = loans_request.getNamespace();
  var loans = loans_request.getChild('loans', namespace);
  var loan_items = loans.getChildren();
  
  var send_email = false;
  var renew = false;
  var email_content = 'Hi Library User,\n';
  // loop through each loan and construct the email body (if necessary)
  for (var x in loan_items) {
    var loan = loan_items[x];
    namespace = loan.getNamespace();
    var renewal_date = loan.getChild('loanDueDate',namespace).getText().replace('+','T') + ':00.000Z';
    renewal_date = new Date(renewal_date);
    
    // When thee loan was issued
    var loan_date = new Date(loan.getChild('loanDate',namespace).getText());
    // Which branch it was issued in
    var branch = loan.getChild('branch', namespace).getText();
    // ID (for renewing).
    var id = loan.getChild('id', namespace).getText();
    
    var catalogue_record = loan.getChildren()[1];
    namespace = catalogue_record.getNamespace();
    
    // Also get author and title
    var title = catalogue_record.getChild('title', namespace).getText();
    var author = catalogue_record.getChild('author', namespace).getText();
    
    var one_day_milliseconds = 1000 * 60 * 60 * 24; // Number of milliseconds in a day
    var date_difference = Math.ceil((renewal_date.getTime() - today.getTime())/(one_day_milliseconds));
    
    if (date_difference <= email_days) {
      send_email = true;
      if (date_difference <= renewal_days) {
        // we need to renew, but also say this in the email.
        renew = true;
        email_content += 'Attempting to renew item ' + title + ', ' + author + ' loaned on ' + loan_date + '.  Please finish and return soon.\n';
        renewals += '<loan1:id>' + id + '</loan1:id>'
      }
      else {
        // less than five days to go, will send an email each day.
        email_content += 'Loan of ' + title + ', ' + author + ' loaned on ' + loan_date + ', is due back on ' + renewal_date + '. \n';
      }
    }
  }

  // Then renew the items that are due
  if (renew) {
    renew_payload = renew_payload.replace('[[renewals]]', renewals);
    var renew_options = { 'method':'POST', 'content-type': 'application/xml; charset=utf-8', 'payload': renew_payload };
    var renew_request = UrlFetchApp.fetch(library_url, renew_options);
    var renew_result = renew_request.getContentText();
    email_content += 'Success? ' + renewResult
  }

  // send out the email
  if (send_email) {
    MailApp.sendEmail(email, 'Library renewal notification', email_content);
  }
}
```
