---
sidebar_position: 2.02
id: add-input
title: Add Inputs
description: Add Input Fields
---
# Adding Inputs
[<i className="material-icons-h1 end">videocam</i>](/vids/Dashnetics-addinputs.mp4)

> Prerequisites: [a Page](first-page)

We have already created the heading for our page.

Let's add 2 input fields to capture a first name and a last name.


<details>

<summary>

<h3 style={{ display: 'inline'}}> 1.  Log into your Admin Module </h3>

</summary><p></p>

To access your admin site, simply type **"admin."** before your public url. 

eg: https://admin.demo.dashnetics.com.au


![img](/img/adminlogin-cfb3883e18efb80bf1eab39a6aba15ab.png)

</details>
<p></p>


<details>

<summary>

<h3 style={{ display: 'inline'}}> 2.  Select <span className="buttontext"> <i className="material-icons">menu</i></span>  </h3>

</summary><p></p>

![img](/img/adminmenu-e1ef5a93a900bdfb54c72920a5ce4ea0.png)

</details>
<p></p>



<details>

<summary>

<h3 style={{ display: 'inline'}}> 3.  Select  <span className="buttontext"> Page Management </span> </h3>

</summary><p></p>

![img](/img/menu_page_management.png)

</details>
<p></p>



<details>

<summary>

<h3 style={{ display: 'inline'}}> 4.  Select <span className="buttontext"> Setup Pages </span> </h3>

</summary><p></p>


![img](/img/menu_setup_pages.png)

</details>
<p></p>



<details>

<summary>

<h3 style={{ display: 'inline'}}> 5.  Select Items Icon <span className="buttontext"> <i className="material-icons">list_alt</i></span> </h3>

</summary><p></p>

Each page will be listed, choose the "Items" Icon next to the page you want to change.

![img](/img/items.png)

</details>
<p></p>


<details>

<summary>

<h3 style={{ display: 'inline'}}> 6.  Select <span className="buttontext"> Add </span> </h3>

</summary><p></p>

To begin adding a new Item to the page

![img](/img/add_items.png)

</details>
<p></p>



<details>

<summary>

<h3 style={{ display: 'inline'}}> 7.  Enter a Name for your Input </h3>

</summary><p></p>

- For example, *"First Name"* 

Names can contain spaces or any characters

![img](/img/add_item_name.png)

</details>
<p></p>



<details>

<summary>

<h3 style={{ display: 'inline'}}> 8.   In the <span className="droplisttext"> Type</span>  dropdown, choose "Input"</h3> 

</summary><p></p>


![img](/img/edit-form-item-type-input.png)

</details>
<p></p>



<details>

<summary>

<h3 style={{ display: 'inline'}}> 
9.  Width can remain as "0"</h3> 

</summary><p></p>
Width "0" means the item will display at the DEFAULT width.

This can be changed later if necessary

![img](/img/edit-form-item-width.png)

</details>
<p></p>



<details>

<summary>

<h3 style={{ display: 'inline'}}> 
10.  Type your text in the Placeholder / Label field </h3> 

</summary><p></p>

This is what your page users will see, so make it relevant and easy to understand.

An input labelled "Street Name" is easier to follow than one names "ADD-St" 



![img](/img/edit-form-item-input-text.png)


</details>
<p></p>


<details>

<summary>

<h3 style={{ display: 'inline'}}> 11. Tick or leave <i className="material-icons grey">check_box</i> 'Required'  <span style={{color:'grey'}}><i className="material-icons">info</i></span></h3> 

</summary><p></p>

 Ticking this will make this input mandatory in order to submit the form.

:::note <h2 className="white"> If you make the input "Required" or "Mandatory" </h2>
<p className="white">

- They will not be able to submit if they have not filled in a value.

- It should therefore be something everybody has immediate access to, like their name or phone number

- The field will show an * to inform the user it is mandatory

- The input will turn <span className="red largertext"> red </span> if not filled in to show the user has missed a mandatory item

</p>
:::


![img](/img/edit-form-item-required.png)

</details>
<p></p>

<details>

<summary>

<h3 style={{ display: 'inline'}}> 12. Tick or leave <i className="material-icons grey">check_box</i> 'Divider After'  <span style={{color:'green'}}><i className="material-icons">lightbulb</i></span></h3> 

</summary><p></p>


:::tip  If you want 2 items on the same line 

for instance with first name and surname, don't tick 'Divide After' for first name, Tick it for surname

:::


 Ticking this will ensure the next item we add will appear below this one.

![img](/img/edit-form-item-divide-after.png)

</details>
<p></p>

<details>

<summary>

<h3 style={{ display: 'inline'}}> 13. Select <span className="buttontext"> Validation if Required</span> </h3> 

</summary><p></p>


:::tip For more information on Validation see [Data Validation](/docs/manuals/advanced/data-validation)  



:::

:::note  You can add multiple validations on the same input 


for instance with an input of "age" you may have a maximum AND minimum

eg - to limit [age] input between 6 and 120

| Select | Value | Text |
| --- | --- | --- | 
|Greater Than | 6 | Are you playing on Mum's Ipad again? |

and

| Select | Value | Text |
| --- | --- | --- | 
|Less Than|  120| Wow, you look great for your age!|


:::

:::note  Using todays date to validate 


In the above example, instead of an input of "age" you may have a "Date of Birth" field

eg - to limit [Date of Birth] to between 6 and 120

| Select | Value | Text |
| --- | --- | --- | 
|Less Than | today-6 | Are you playing on Mum's Ipad again? |

and

| Select | Value | Text |
| --- | --- | --- | 
|Greater Than|  today-120| Wow, you look great for your age!|


:::

![img](/img/add-input-validation.png)

</details>


<p></p>


<details>

<summary>

<h3 style={{ display: 'inline'}}> 14.  Press <span className="buttontext"> Save </span> </h3>

</summary><p></p>

![img](/img/edit-form-item-input-save.png)

</details>

---

Our page should now look something like this.

![img](/img/add-input.png)

