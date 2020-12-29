---
id: mailchimp
title: MailChimp Integration
sidebar_label: Mailchimp
---


## Settings

### API Key

Your MailChimp API key can be found at https://us1.admin.mailchimp.com/account/api/

### Server Prefix

This is the first part of the URL when you have logged into mailchimp.

If the URL is us17.admin.mailchimp.com then 'us17' is the server prefix.

### Default From

Default from name used when creating new lists.

### Default Email From

Default from email address used when creating new lists.

### Default Subject

Default subject used when creating new lists.

### Default Language

Default Language used when creating new lists.

### Use Mailchimp Audience/Lists

Flags to create an Audience/List for each list. If not flagged, Project CX will add the list as a tag in MailChimp.

## Sending Data to MailChimp

The 'Name' of the list in CX is the name of the Audience or Tag in MailChimp.

Clicking 'Save and Send to MailChimp' in the edit screen will save the list and send it directly to MailChimp.

Otherwise, lists are sent to MailChimp every 10 hours.

Switching off the 'Send to Mailchimp' flag on a list will stop it being sent.

### MailChimp Merge Fields

Fields from the contacts or companies can be sent to mailchimp as merge fields.

The names of the fields are case insensitive in Project-CX (including the ones listed below) but not in MailChimp (eg. if you add two fields 'Name' and 'name' as merge fields in Project-CX you will get two different fields in MailChimp with the value of the single field from Project-CX (called 'Name', 'name' or 'NAME' etc)

In addition to all custom fields, the following fields can be sent as Merge fields:

| Field Name | Description|
| - | - |
| CX_ID     | ID of the record    | 
| CX_NAME | Name of the company or contact |
| CX_IMPORTID | Import ID of the company or contact |
| CX_FIRSTNAME | First name of the contact (invalid for companies) |
| CX_LASTNAME | Last name of the contact (invalid for companies) |
| CX_EMAIL | Email of the contact (invalid for companies) |