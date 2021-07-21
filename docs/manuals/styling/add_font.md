---
sidebar_position: 02.02
id: add_font
title: Add a Font
sidebar_label: Add a Font
---

Fonts can be applied to Pages by adding them as an HTML Text Area.

---
## To Add a Font-Family to your Page
[<i className="material-icons-h1 end">videocam</i>](/vids/Dashnetics-addfont.mp4)
* * *

Let's start by adding an Iframe to our page.


<details>

<summary>

<h3 style={{ display: 'inline'}}> 1.  Log into your Admin Module </h3>

</summary><p></p>

To access your admin site, simply type <h3 style={{ display: 'inline'}}>"admin."</h3> before your public url. 

eg: https://admin.demo.dashnetics.com.au


![img](/img/adminlogin-cfb3883e18efb80bf1eab39a6aba15ab.png)

</details>
<p></p>


<details>

<summary>

<h3 style={{ display: 'inline'}}> 2.  Select the <span class="buttontext"> <i className="material-icons">menu</i></span>  </h3>

</summary><p></p>

![img](/img/adminmenu-e1ef5a93a900bdfb54c72920a5ce4ea0.png)

</details>
<p></p>



<details>

<summary>

<h3 style={{ display: 'inline'}}> 3.  Select  <span class="buttontext"> Page Management </span> </h3>

</summary><p></p>

![img](/img/menu_page_management.png)

</details>
<p></p>



<details>

<summary>

<h3 style={{ display: 'inline'}}> 4.  Select <span class="buttontext"> Setup Pages </span> </h3>

</summary><p></p>


![img](/img/menu_setup_pages.png)

</details>
<p></p>



<details>

<summary>

<h3 style={{ display: 'inline'}}> 5.  Select Items Icon <span class="buttontext"> <i className="material-icons">list_alt</i></span> </h3>

</summary><p></p>

Each page will be listed, choose the "Items" Icon next to the page you want to change.

![img](/img/items.png)

</details>
<p></p>


<details>

<summary>

<h3 style={{ display: 'inline'}}> 6.  Select <span class="buttontext"> Add </span> </h3>

</summary><p></p>

To begin adding a new Item to the page

![img](/img/add_items.png)

</details>
<p></p>



<details>

<summary>

<h3 style={{ display: 'inline'}}> 7.  Enter a Name for your Styling </h3>

</summary><p></p>

- For example, *"CSS"* 

Names can contain spaces or any characters

![img](/img/add_item_name.png)

</details>
<p></p>



<details>

<summary>

<h3 style={{ display: 'inline'}}> 8.   In the <span class="droplisttext"> Type</span>  dropdown, choose "HTML Text Area"</h3> 

</summary><p></p>


![img](/img/select_html_text.png)

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

<h3 style={{ display: 'inline'}}> 10.  Within the HTML Text area, type or copy your font links</h3> 

```
@font-face {
  font-family: "Europa-Bold";
  font-style: normal;
  font-weight: normal;
  src: url("/img/d3bfee78e8ead45d9057a95bb6ff5de8.woff2");
  src: url("/img/d3bfee78e8ead45d9057a95bb6ff5de8.woff2") format("embedded-opentype"),url("/img/d3bfee78e8ead45d9057a95bb6ff5de8.woff2") format("woff2"),url("/img/d3bfee78e8ead45d9057a95bb6ff5de8.woff2") format("truetype")
}

```
you may then style any element with this font

```

<h1 style="font-family; Europa-Bold"> This is Europa-Bold Heading</h1>

```

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

<h3 style={{ display: 'inline'}}> 12.  Press <span class="buttontext"> Save </span> </h3>

</summary><p></p>

![img](/img/edit-form-item-save.png)

</details>
<p></p>

---




