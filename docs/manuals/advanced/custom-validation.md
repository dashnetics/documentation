---
sidebar_position: 02.55
id: custom-validation
title: Adding Custom Validation
sidebar_label: Adding Custom Validation to Inputs
---
[<i className="material-icons-h1 end">videocam</i>](/vids/Dashnetics-AddInput.mp4)


Custom Validators are used to control and restrict the data in certain fields.
They can be added or deleted via the input settings.

---

## Validation Types

|Type|	Description	|Data Types|	Fields|
| --- | --- | --- | --- |
|Greater Than|	The number or date entered needs to be greater than the provided value. In the case of dates, providing a value of 'today' allows you to use a date relative to today in the validation. See section below for details.|	numbers or dates.|	Select, Input, Date Entry, Mobile, Payment Amount Entry, Phone Number Entry, Text Area, {{field}}|
|Less Than|	The number or date entered needs to be less than the provided value. In the case of dates, providing a value of 'today' allows you to use a date relative to today in the validation. See section below for details.|	numbers or dates.|	Select, Input, Date Entry, Mobile, Payment Amount Entry, Phone Number Entry, Text Area, {{field}}|
|Equal To|	The entered value must equal the provided value. In the case of dates, providing a value of 'today' allows you to use a date relative to today in the validation. See section below for details.|	text, numbers, dates	|Select, Input, Date Entry, Mobile, Payment Amount Entry, Phone Number Entry, Text Area, {{field}}|
|Not Equal To|	The entered value must not equal the provided value	|text, numbers, dates|	Select, Input, Date Entry, Mobile, Payment Amount Entry, Phone Number Entry, Text Area, {{field}}|
|Minimum Length|	The length of the entered text must be greater than or equal to the provided value	|text	|Select, Input, Mobile, Payment Amount Entry, Phone Number Entry, Text Area|
|Maximum Length|	The length of the entered text must be less than or equal to the provided value|	text|	Select, Input, Mobile, Payment Amount Entry, Phone Number Entry, Text Area|
|Matches (Regex)|	The value entered must match the provided regex	|text, number	|Select, Input, Mobile, Payment Amount Entry, Phone Number Entry, Text Area|


## Using Current Date in Validators

Any date validator (Greater Than, Less Than, or Equal To) you can specify the date to be checked relative to the current date.

To do this enter the text 'today' followed by a + or a -, then the number of years, months, and days delimited by a pipe '|' that you want to add or subtract from todays date.

The date relative to the current date will be used for validation.


### Examples using todays date

|Date Validation| Formula|
|--- | --- |
|in relation to "today"|today(+-)years&#124;months&#124;days|
|Today|today|
|18 years ago|today-18|
|1 Year, 3 months in the Future|today+1&#124;3|
|7 Days in the Past|today-0&#124;0&#124;7|

:::tip <h3>For more information on adding the Validation into an Input see [Adding Inputs](/docs/manuals/beginner/add-input)  </h3>


:::

:::note <h3 className="white">   you can add multiple validations on the same input </h3>
<p className="white">

for instance with an input of "age" you may have a maximum AND minimum

eg - to limit [age] input between 6 and 120

| Select | Value | Text |
| --- | --- | --- | 
|Greater Than | 6 | Are you playing on Mum's Ipad again? |

and

| Select | Value | Text |
| --- | --- | --- | 
|Less Than|  120| Wow, you look great for your age!|

</p>
:::

:::note <h3 className="white">   Using todays date to validate </h3>
<p className="white">

In the above example, instead of an input of "age" you may have a "Date of Birth" field

eg - to limit [Date of Birth] to between 6 and 120

| Select | Value | Text |
| --- | --- | --- | 
|Less Than | today-6 | Are you playing on Mum's Ipad again? |

and

| Select | Value | Text |
| --- | --- | --- | 
|Greater Than|  today-120| Wow, you look great for your age!|

</p>
:::

![img](/img/add-input-validation.png)
---


