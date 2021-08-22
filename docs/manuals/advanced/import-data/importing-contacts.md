--- 
sidebar position: 55 

---
# Importing Contacts 
[<i className="material-icons-h1 end">videocam</i>](/vids/Dashnetics-Import-Contacts.mp4)

> Prerequisites: Companies [Click Here for help importing companies](importing-companies)

Step 1 is to Export your data from your existing accounting package or program, 

If you haven't done that yet. [Click Here for help](exporting-data-from-your-accounting-package)

After you have exported your contact data from your external software. The next step is:

Prepare your data
-----------------

Once you have exported a .CSV or tab deliminated file:

1.  **Remove any duplicate or obsolete records**, and any blank columns or rows within the data.
### Columns
2.  Check that your data has the following **mandatory fields**, _each in its own column_:
    1.  **ID** _in column1 _
    
        - The first column of the file is the import identifier. 
    
        - This needs to be unique and is used to identify the contact.

        - Make sure ids you choose don't match an existing dashnetics id.
    
    2.  **First Name** _in column 2_

    3.  **Last Name** _in column 3_

    4.  **Email** _in column 4_

    5.  **Company ID No** _in column 5_
    
        - Make Sure this matches the Dashnetics CompanyID in "Companies" you imported or added earlier.

You can have as many columns/fields after the mandatory fields you need, so include any fields you may need in dashnetics

### Rows
1. The first row of the file is for headings, as it will be used to create the field titles.
2. A row with the first column of 'CATEGORY' is the category row.
    - this is usually the 2nd row, if any, but can be any row after the first, and 
    - it does not have to exist in the import file
    - the category row is used to group the company fields into categories
    - under each Field Title (first row) , enter the category name this field should belong to, if any

### Example

Take a look at the below example Template: _hover over the_ [**highlighted text**](a "like this") _to see the instructions_

|[Contact ID](a "Must be the 1st Column")	| [First Name](a "Must be the 2nd Column")	| [Last Name](a "Must be the 3rd Column")	| [Email](a "Must be the 4th Column")|	[Company ID](a "Must match an existing companyID in companies and be the 5th Column")| Title|	Street Address|	City|	Region|	PostalCode|	Country|	Phone|	www|
|-------	|--------|	---------|	----------|	----------|	----------|	---------|	--------|	---------|	-------|	-------|	---------|	---------|
|[CATEGORY](a "Must say CATEGORY as the first Column for the row to be read as Category Names")	|[Leave BLANK](a "First Name cannot have a Category")| [Leave BLANK](a "Last Name cannot have a Category")|[Leave BLANK](a "Email cannot have a Category")|[Leave BLANK](a "CompanyID cannot have a Category")|	[details](a "This will create a new Field Category called "details" and the "Title (1st row)" field will be under this category from now on")|	[address](a "This will create a new Field Category called 'address' and the 'Street Address (1st row)' field will be under this category from now on")|	[address](a "This will place the 'City (1st row)' field under the already existing 'address' category from now on")|	address|	address|	address|	|	|
|101|	Testy| Testerton| Testy@dashnetics.com.au|	Senior Tester|	1 Test Ln|	Testertown|	Testshire|	1234|	Australia|	61412345678 |	https://dashnetics.com.au |
|102|	Testina| Test|	Testina@dashnetics.com.au|	Junior Tester|	14 Test St|	Testerfield|	Testshire|	1234|	Australia|	61400000000 |	https://dashnetics.com.au |

You can also download the above example to use or send as a template [**HERE !**](/files/import_contacts_template.csv) 

    

### Things to consider prior to import ###

<details>

<summary>

<h3 style={{ display: 'inline'}}>Will you need extra fields? </h3>

</summary><p></p>

If you have data that didn't export from your current system, but you would like to add in Dashnetics, now is a great time to do so, before starting your import. 

For example, you may have , or would like to have, data like 'Contact Type' (Parent/Child) or an internal reference number. 

Please take a moment to consider adding this additional information


</details>
<p></p>


<details>

<summary>

<h3 style={{ display: 'inline'}}>Do you want to group Fields into Categories? </h3>

</summary><p></p>

You can either:

a) Import Field Categories by adding them as a row in your data.  **[See Above](### Example)**.
    
or

b) Create your own Field Categories in Dashnetics before or after importing your data.  **[Click Here to see how](/docs/manuals/advanced/add_field_category)**.
    


</details>
<p></p>



<details>

<summary>

<h3 style={{ display: 'inline'}}>Have you linked your "contacts" with your Companies via a CompanyID before import? </h3>

</summary><p></p>

You can have single or multiple contacts for a single client or supplier.

Contacts are linked to Companies (Customers, Families, Suppliers etc) by an ID (your First Column in the Company csv file)

It is a good idea to ensure you have this linked before import



</details>
<p></p>



If you have any questions or require assistance with preparing your data, please <a href="tel:+61294999544"> <i className="material-icons">call</i> Call your Dashnetics Customer Care Team</a>.

Upload your file
----------------

Follow the steps below to upload your file to Dashnetics.

<details>

<summary>

<h3 style={{ display: 'inline'}}> 1.  Select the <span className="buttontext"> <i className="material-icons">menu</i></span>  </h3>

</summary><p></p>

![img](/img/adminmenu-e1ef5a93a900bdfb54c72920a5ce4ea0.png)


</details>
<p></p>



<details>

<summary>

<h3 style={{ display: 'inline'}}> 2.  Select <span className="buttontext"> Contacts </span> </h3>

</summary><p></p>


![img](/img/menu_contacts.png)

</details>
<p></p>



<details>

<summary>

<h3 style={{ display: 'inline'}}> 3.  Select <span className="buttontext"> Import Contacts </span> </h3>

</summary><p></p>


![img](/img/menu_contacts_importcontacts.png)



</details>
<p></p>


<details>

<summary>

<h3 style={{ display: 'inline'}}> 4.  Select <span className="buttontext"> Upload </span> </h3>

</summary><p></p>


![img](/img/importcontacts_upload.png)



</details>
<p></p>



<details>

<summary>

<h3 style={{ display: 'inline'}}> 5.  Select <span className="buttontext"> Add Files </span> </h3>

</summary><p></p>


![img](/img/importcontacts_addfiles.png)



</details>
<p></p>



<details>

<summary>

<h3 style={{ display: 'inline'}}> 6.  Find your prepared csv or tab deliminated File </h3>

</summary><p></p>






</details>
<p></p>



<details>

<summary>

<h3 style={{ display: 'inline'}}> 5.  Select <span className="buttontext"> Upload </span> </h3>

</summary><p></p>


![img](/img/importcontacts_upload2.png)



</details>
<p></p>



<details>

<summary>

<h3 style={{ display: 'inline'}}> 5.  Select <span className="buttontext"> Finish </span> </h3>

</summary><p></p>


![img](/img/importcontacts_finish.png)



</details>
<p></p>

No Need to Map the columns! 

Dashnetics requires only the bare minimum number of fields as above, you have complete autonomy to import as many or as few additional fields as you require.

Dashnetics will create fields as per the first row of your import, so take a moment to ensure they suit, if you are importing for the second time, make sure you match your existing fields precisely.

Capitalization is important!

---------------

View import results
-------------------

Once your data has been imported.

Go to Companies to see the results

<details>

<summary>

<h3 style={{ display: 'inline'}}> 1.  Select the <span className="buttontext"> <i className="material-icons">menu</i></span>  </h3>

</summary><p></p>

![img](/img/adminmenu-e1ef5a93a900bdfb54c72920a5ce4ea0.png)

</details>
<p></p>



<details>

<summary>

<h3 style={{ display: 'inline'}}> 2.  Select <span className="buttontext"> Contacts </span> </h3>

</summary><p></p>


![img](/img/menu_contacts.png)

</details>
<p></p>



<details>

<summary>

<h3 style={{ display: 'inline'}}> 3.  Select <span className="buttontext"> Contacts </span> </h3>

</summary><p></p>


![img](/img/menu_contacts_contacts.png)



</details>
<p></p>



Depending how many records you imported, you may need to wait a moment or refresh your browser to view the Imported data in Dashnetics.
