---
id: selling
title: Selling with Project CX
sidebar_label: Selling
---

Selling things with Project-CX is done by 

1. Setting up the items to sell, and then

2. Setting up forms to sell the items with.

## Step 1. Setup items to sell

Setting up items is done in the 'Online Store' section of Project-CX Admin

### a. Create one or more Sale Categories

Categories are used to group items that you would like to be listed together. 

### b. Create Sale Options

Options can be used for any items. They are used for sizes or types of participants (Adult, Child etc). Anything you want to charge a different amount for the same item should have a different option.

### c. Create Sale Items

Create items to sell and link them to categories.

### d. Create Sale Units (Prices)

Create Sale Units by linking a sale item with a sale option and giving it a price.

### e. Create Discounts

There are two types of discounts, volume or code. Each are either percentage or fixed price based. 

Volume discounts are setup on sale categories, and are calculated on the number of units purchased.

Code discounts are entered in the discount list.

## Step 2. Setup Form to Sell Items

Sales Forms need to have three or four sections and a button to submit the form. 

a. Display things to sell and allow users to purchase them

b. Collection of details for each Sale Unit (optional)

c. Display of the Cart

d. Credit Card Entry

## a. Display of items

Displaying items is done with a [[Form_Item_Types#Sale Category - Grid|Sale Category - Grid]] form item. Admins specify the Sale Category to display, and the Project-CX form to display the items in the sale category in.

The form displayed, or another form coming off of this form, need to have a [[Form_Item_Types#Sales Options - Purchase|Sales Options - Purchase]] form item on it to allow users to purchase items.

Certain Bracket Notation fields can be added to form items in this displayed form. [[Bracket_Notation#Sale Custom Fields|Bracket fields for Sales]]

## b. Collection of Details

If required, users can collect information about each Sales Unit that is in the cart. This is done with a [[Form_Item_Types#Sale Option - Details|Sales Option - Details]] form item. You will specify the page to collect information about each Sales Unit.

Certain Bracket Notation fields can be added to form items in this displayed form. [[Bracket_Notation#Sale Custom Fields|Bracket fields for Sales]]

## c. Display of the Cart

Displaying the cart is done with a [[Form_Item_Types#Cart Display|Cart Display]] form item. You can enter HTML text to be used to display each sale unit in the cart.

Certain Bracket Notation fields can be added to this HTML. [[Bracket_Notation#Sale Custom Fields|Bracket fields for Sales]]

## d Discount Code Entry

Adding a [[Form_Item_Types#Discount Code Entry|Discount Code Entry]] allows users to enter a code to obtain a discount. Volume discounts will be calculated automatically and only the largest discount will be used.

## e. Credit Card Details

Credit card details are added to the form with a [[Form_Item_Types#Credit Card|Credit Card]] form item.





## Glossary

| Customer | Person using the Project-CX application to purchase something |
| - | -|
| Admin | Person Setting up Project-CX |
| Cart | Sale Units that the customer is ready to buy | 
| Sale Category | Collection of Items to sell |
| Sale Item | An item to sell (eg. Coaching Clinic), the item will have options and belong to one or more categories |
| Sale Option | General options that can be applied to many sale items (eg, Adult, Red Colour etc) |
| Sale Unit | The actual thing that end users purchase. Sale Units have an associated Sale Item, and Sale Option, and a price. |