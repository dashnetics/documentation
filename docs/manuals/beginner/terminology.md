---
sidebar_position: 0.02
id: terminology
title: Terminology
sidebar_label: Terminology
---


# Definitions, Terminology and Characters

---
<h1 className="color"> Definitions </h1> 

## URI
Stands for Uniform Resource Identifier, when setting up Pages it has the same function as a URL (Uniform Resource Locator), it is the link to your webpage 
eg. a Page on site "demo" with URI "Home" will be accessed by https://demo.dashnetics.com.au/Home


<details id='URI'>

<summary>
<h2 style={{color:'red'}}><i className="material-icons">warning</i> Some characters should not be used. Click here to see more ...</h2>



</summary>

<p></p>
Stands for Uniform Resource Identifier, when setting up Pages it has the same function as a URL (Uniform Resource Locator), it is the link to your webpage 
eg. a Page with URI test will be accessed by https://demo.dashnetics.com.au/test 
<p></p>

:::danger  WARNING!  

When creating a URL - DO NOT INCLUDE any of the following;
:::

- ASCII control characters (e.g. backspace, vertical tab, horizontal tab, line feed etc), 
- unsafe characters like 
- Dollar ("$")  
- Ampersand ("&")  
- Plus ("+")  
- Comma ("")  
- Forward slash/Virgule ("/") 
- Colon (":") 
- Semi-colon (";") 
- Equals ("=") 
- Question mark ("?") 
- 'At' symbol ("@")  and 
- any character outside the ASCII charset 
are not allowed to be placed directly within URLs. 

*Or any of the below characters that have special meaning within URLs*
- space
- Quotation Marks 
- Backslash ("\")  
- 'Less Than' symbol ("<")  
- 'Greater Than' symbol (">")  
- 'Pound' Character ("#") 
- Percent Character ("%") 
- Left Curly Brace ("{")  
- Right Curly Brace ("}")  
- Vertical Bar/Pipe ("|")  
- Caret ("^")  
- Tilde ("~")  
- Left Square Bracket ("[")
- Right Square Bracket ("]")
- Grave Accent ("`")

![img](/img/URL_special_characters.png)



</details> 

## WYSIWYG
WYSIWYG stands for "what you see is what you get". 
With a WYSIWYG editor, how your design and content appears on the editing platform is exactly what it will look like in the final version.

## loop over
To ***loop*** means to ***repeat***, or ***iterate*** 
So loop OVER "X" means we ***repeat***, or ***iterate*** for each value of "X" found (that match our criteria), therefore looping over sale_items means we will show every sale item that matches the criteria.


## Fields 
Fields are referred to by name.

---
<h1 className="color"> Terminology </h1>  


## Custom Fields

| Field | Used In | Purpose | 
| ----- | ------- | ------- |
| link     | Action Emails, Connect Emails  |  Link sent in the email to do the action |
| status | Action Emails | Status of the actioned form (button used to start the action) |
| sequence-number, sequenceNumber | Emails, Action Emails | Sequence number of the saved form |
| approver-name, approverName | Action Emails | Name of the approver |
| approver-email, approverEmail | Action Emails | Email of the approver |
| connect-name, connectName | Connect Emails | Name of the connect account |
| message | Payment error HTML | Error message returned from payment gateway |

## Sale Custom Fields

Various fields used in.....

| Field | Used In | Purpose | 
| ----- | ------- | ------- |
| saleItem.name | Sale Category - Grid, Sale Options - Purchase, Sale Options - Details, Cart Display | Name of the sale item | 
| saleItem.description     | Sale Category - Grid, Sale Options - Purchase, Sale Options - Details   |  Description of the sale item |
| saleItem.info | Sale Category - Grid, Sale Options - Purchase, Sale Options - Details | Info of the sale item |
| saleItem.index | Cart Display | |
| saleOption.name | Sale Options - Purchase, Sale Options - Details, Cart Display | Name of the option (actual thing that users purchase) |
| saleOption.description | Sale Options - Purchase, Sale Options - Details, Cart Display | Description of the option |
| saleOption.info | Sale Options - Purchase, Sale Options - Details, Cart Display | Info for the sale option |
| saleOption.quantity | Sale Options - Purchase, Sale Options - Details, Cart Display | Number of options purchased |
| saleOption.cost | Sale Options - Purchase, Sale Options - Details, Cart Display | Cost of the option |
| saleUnit.discount | Cart Display, Purchase Email | Dollar Discount |
| saleUnit.percentDiscount | Cart Display  | Percentage Discount Applied to this unit |
| saleUnit.qtyDiscount | Cart Display | Quantity ordered to get this discount |
| saleUnit.typeDiscount | Cart Display | Text of Discount Type |
| saleUnit.fixedDiscount | Cart Display | Fixed discount applied |
| saleUnit.cost | Cart Display, Purchase Email|Cost of the sale unit once discounts have been applied |
| saleUnit.index | Cart Display | Sequence number of the sale unit |
| saleUnitDetails | Cart Display | Details entered into a Sale Options - Details control for the option. Needs to have a dot with the name of the field on the form. (eg, if you had a field called 'name' on the sale option details form, you would access it with {{saleUnitDetails.name}}. In the purchase email, you access it with just the name of the field, see below |
| saleUnitDetails | Purchase Email | Details entered into a Sale Options - Details control for the option. Same fields as above but used in purchase Email, but accessed with just the name of the field |
| saleAmount | HTML Text, Email | Total amount of the Sale |
| saleFee | HTML Text, Email | Total fee charged |
| saleDiscount | HTML Text, Email | Total amount of discount |

## Purchase Email

Note that the action to create the purchase email needs to be on the parent form, not a subform.

## Sale Units

In Purchase emails, Sale Units can be looped over using 
```
{{saleUnit}}


{{/saleUnit}}
```

Anything inside the two tags will be repeated for each sale unit.

## Sale Items

In Purchase emails, Sale Items can be looped over using 
```
{{saleItem}}

{{/saleItem}}
```

Anything inside the two tags will be repeated for each sale item.

## Accessing Custom Fields

Any custom fields on a sale item can be accessed inside the sale item loop using dot notation.


## Formatting

Formats can be applied to items in Brackets using the pipe '|'.

| Format | Description |
| ------ | ----------- | 
| currency | Two decimal with a $ prefix |
| percentage | Two decimal with a % postfix | 

## Fields on Action Forms

All fields, anywhere on the chain of action forms, are available in the form emails. ie If you have an approval form with a field named 'problem', you can refer to this from any action email.

---
<h1 className="color"> Characters </h1>

## [ ] Brackets

Bracket Notation is used in various places to use data from form entry in other places in the forms.

## {{  }} Double Curly Brackets
Values are referred to with double curly brackets. {{  ......   }} eg {{saleUnit.cost}}

## | Pipe characters 

Pipe characters are used to format the value, eg {{saleUnit.cost | currency}}

Formats can be applied to items in Brackets using the pipe '|' like below.

| Format | Description |
| ------ | ----------- | 
| currency | Two decimal with a $ prefix |
| percentage | Two decimal with a % postfix | 

## . Dots 
Dots are used to separate object names and field names for complex objects (such as companies etc)

The main places it's used in are:

1. Text fields
2. Initial Values
3. Emails

