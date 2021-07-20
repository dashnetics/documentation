---
id: selling
title: Selling with Project CX
sidebar_label: Selling
---

Selling things with dashnetics is done by 

1. Setting up the items to sell, and then

2. Setting up forms to sell the items with.

## Step 1. Setup items to sell

Setting up items is done in the 'Online Store' section of dashnetics Admin

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

Displaying items is done with the form element Sale Category. Admins specify the Sale Category to display, and the dashnetics form to display the items in the sale category in.

The form displayed, or another form coming off of this form, need to have the form element Sales Options - Purchase on it to allow users to purchase items.

Certain Bracket Notation fields can be added to form items in this displayed form. Check the [bracket notation documentation](bracketnotation) for more details.

## b. Collection of Details

If required, users can collect information about each Sales Unit that is in the cart. This is done with the form item Sale Option - Details. You will specify the page to collect information about each Sales Unit.

Certain Bracket Notation fields can be added to form items in this displayed form. Check the [bracket notation documentation](bracketnotation) for more details.

## c. Display of the Cart

Displaying the cart is done with the form element Cart Display. You can enter HTML text to be used to display each sale unit in the cart.

Certain Bracket Notation fields can be added to form items in this displayed form. Check the [bracket notation documentation](bracketnotation) for more details.

## d Discount Code Entry

Adding the form element Discount Code Entry allows users to enter a code to obtain a discount. Volume discounts will be calculated automatically and only the largest discount will be used.

## e. Credit Card Details

Credit card details are added to the form with the form element Credit Card.





## Glossary

| Customer | Person using the dashnetics application to purchase something |
| - | -|
| Admin | Person Setting up dashnetics |
| Cart | Sale Units that the customer is ready to buy | 
| Sale Category | Collection of Items to sell |
| Sale Item | An item to sell (eg. Coaching Clinic), the item will have options and belong to one or more categories |
| Sale Option | General options that can be applied to many sale items (eg, Adult, Red Colour etc) |
| Sale Unit | The actual thing that end users purchase. Sale Units have an associated Sale Item, and Sale Option, and a price. |