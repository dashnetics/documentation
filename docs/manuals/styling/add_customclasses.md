---
sidebar_position: 06.04
id: add_customclasses
title: Add a Custom CSS Class
sidebar_label: Add a Custom CSS Class
---
[<i className="material-icons-h1 end">videocam</i>](/vids/Dashnetics-addcustomclasses.mp4)

Classes can be applied to an element by adding them into the element HTML Text Area.

Classes can also be defined in a Custom CSS Page and then called from the element, as long as the page is linked to the custom css page.

---
## To Add a Custom Class to your Site
* * *

> Prerequisites: [a Custom CSS Page](/docs/manuals/styling/add_customcsspage)


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

<h3 style={{ display: 'inline'}}> 2.  Select the <span className="buttontext"> <i className="material-icons">menu</i></span>  </h3>

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

<h3 style={{ display: 'inline'}}> 7.  Enter a Name for your Styling </h3>

For example, *"Fonts" or "Colors" or "Headings"*

</summary><p></p>

 
Names can contain spaces or any characters

![img](/img/add_item_name.png)

</details>
<p></p>



<details>

<summary>

<h3 style={{ display: 'inline'}}> 8.   In the <span className="droplisttext"> Type</span>  dropdown, choose "HTML Text Area"</h3> 

If you are copying an entire stylesheet from your existing page you will only need the one "styles" item.

If you are writing your styles in, it may be good practise to add seperate items for things like "Fonts" and "Colors" and "Headings" etc to make them easy to find and change later on


</summary><p></p>


![img](/img/select_html_text.png)

</details>
<p></p>



<details>

<summary>

<h3 style={{ display: 'inline'}}> 9.  Width can remain as "0"</h3> 

</summary><p></p>
Width "0" means the item will display at the DEFAULT width.

This can be changed later if necessary

![img](/img/edit-form-item-width.png)

</details>
<p></p>



<details>

<summary>

<h3 style={{ display: 'inline'}}> 10.  Within the HTML Text area, type or copy your styles inside 'style' tags </h3> 


The below example will add the font 'Europa-Bold' to our custom css page ready to use on elements

```
<style>
@font-face {
  font-family: "Europa-Bold";
  font-style: normal;
  font-weight: normal;
  src: url("/img/d3bfee78e8ead45d9057a95bb6ff5de8.woff2");
  src: url("/img/d3bfee78e8ead45d9057a95bb6ff5de8.woff2") format("embedded-opentype"),url("/img/d3bfee78e8ead45d9057a95bb6ff5de8.woff2") format("woff2"),url("/img/d3bfee78e8ead45d9057a95bb6ff5de8.woff2") format("truetype")
}
<style>

```
We can style any element with this font by calling it from the element


```

<h1 style="font-family; Europa-Bold"> This is Europa-Bold Heading</h1>

```

Set the style for **Classes** by referring to them **with a dot**  * - see  ".h1"  below*

Set the style for **Elements** by referring to them **without a dot** * - see  "h2"  below*


```
<style>
.h1 {
color:#0000ff
}
h2 {
color: #ff0000
}
<style>

```
In the above example we: 

color any elements with the className='h1' <span className="blue">blue (#0000ff)</span>, and

color any <h2\> tagged elements in <span className="red">red (#ff0000)</span>.

</summary><p></p>





</details>
<p></p>


<details>

<summary>

<h3 style={{ display: 'inline'}}> 11. Tick <i className="material-icons grey">check_box</i> 'Divider After' </h3>

</summary><p></p>

 This will ensure the next element we add will appear below the styling.

![img](/img/edit-form-item-divide-after.png)

</details>
<p></p>



<details>

<summary>

<h3 style={{ display: 'inline'}}> 12.  Press <span className="buttontext"> Save </span> </h3>

</summary><p></p>

![img](/img/edit-form-item-save.png)

</details>
<p></p>

---






