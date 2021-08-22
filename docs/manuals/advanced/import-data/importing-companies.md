---
sidebar_position: 53
id: importing-companies
title: Importing Companies
description: Importing Companies into Dashnetics
---
# Importing Companies 
[<i className="material-icons-h1 end">videocam</i>](/vids/Dashnetics-Import-Companies.mp4)

Step 1 is to Export your data from your existing accounting package or program, 

If you haven't done that yet. [Click Here for help](exporting-data-from-your-accounting-package)

After you have exported your company data from your external software. The next step is:

Prepare your data
-----------------

Once you have exported a .CSV or tab deliminated file:

1.  **Remove any duplicate or obsolete records**, and any blank columns or rows within the data.
### Columns
2.  Check that your data has the following **mandatory fields**, _each in its own column_:
    1.  **ID** _in column1 _
    
        - The first column of the file is the import identifier. 
    
        - This needs to be unique and is used to identify the company in later imports.

        - Make sure ids you choose don't match an existing dashnetics id.
    
    2.  **Company Name** _in column 2_

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

|[Company ID](a "Must be the 1st Column")	| [Company Name](a "Must be the 2nd Column")|	Company Code|	[Main Contact Person](a "you may wish to remove any contact fields as Contacts will be stored in Contacts, this is therefore duplicate data") |	[Main Contact Title](a "you may wish to remove any contact fields as Contacts will be stored in Contacts, this is therefore duplicate data") |	Address|	City|	Region|	PostalCode|	Country|	Phone|	www|
|-------	|--------|	---------|	----------|	----------|	----------|	---------|	--------|	---------|	-------|	-------|	---------|
|[CATEGORY](a "Must say CATEGORY as the first Column for the row to be read as Category Names")	|[Leave BLANK](a "Company Name cannot have a Category")|	[codes](a "This will create a new Field Category called "codes" and the "Company Code (1st row)" field will be under this category from now on")|	[contacts](a "This will create a new Field Category called 'contacts' and the 'Main Contact Person (1st row)' field will be under this category from now on")|	[contacts](a "This will place the 'Main Contact Title (1st row)' field under the already existing 'contacts' category from now on")|	address|	address|	address|	address|	address|	contacts|	contacts|
|101|	Test Company 1|	TC1|	Testy Testerton|	Senior Tester|	1 Test Ln|	Testertown|	Testshire|	1234|	Australia|	61412345678 |	https://dashnetics.com.au |
|102|	Test Company 2|	TC2|	Testina Test|	Junior Tester|	14 Test St|	Testerfield|	Testshire|	1234|	Australia|	61400000000 |	https://dashnetics.com.au |

You can also download the above example to use or send as a template [**HERE !**](/files/import_companies_template.csv) 

    

### Things to consider prior to import ###

<details>

<summary>

<h3 style={{ display: 'inline'}}>Will you need extra fields? </h3>

</summary><p></p>

If you have data that didn't export from your current system, but you would like to add in Dashnetics, now is a great time to do so, before starting your import. 

For example, you may have , or would like to have, data like 'Customer Type' (VIP/Gold/Silver) or an internal reference number. 

Please take a moment to consider adding this additional information


</details>
<p></p>


<details>

<summary>

<h3 style={{ display: 'inline'}}>Do you want to group Fields into Categories? </h3>

</summary><p></p>

You can either:

a) Import Field Categories by adding them as a row in your data.  **[See Example Above](### Example)**.
    
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

It is a good idea to ensure you have this linked before import, particularly if you are splitting 1 exported "Customer" file into "Company" and "Contact" import files



</details>
<p></p>


<details>

<summary>

<h3 style={{ display: 'inline'}}>Do you want to remove "Contact Person" from customer before import? </h3>

</summary><p></p>

You can have single or multiple contacts for a single client or supplier.

Contacts are linked to Companies (Customers, Families, Suppliers etc) by an ID

Therefore, leaving a "Primary Contact" in your Company import is unnecessary duplication of your information.



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

<h3 style={{ display: 'inline'}}> 3.  Select <span className="buttontext"> Import Companies </span> </h3>

</summary><p></p>


![img](/img/menu_contacts_companies.png)



</details>
<p></p>


<details>

<summary>

<h3 style={{ display: 'inline'}}> 4.  Select <span className="buttontext"> Upload </span> </h3>

</summary><p></p>


![img](/img/importcompanies_upload.png)



</details>
<p></p>



<details>

<summary>

<h3 style={{ display: 'inline'}}> 5.  Select <span className="buttontext"> Add Files </span> </h3>

</summary><p></p>


![img](/img/importcompanies_addfiles.png)



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


![img](/img/importcompanies_upload2.png)



</details>
<p></p>



<details>

<summary>

<h3 style={{ display: 'inline'}}> 5.  Select <span className="buttontext"> Finish </span> </h3>

</summary><p></p>


![img](/img/importcompanies_finish.png)



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

<h3 style={{ display: 'inline'}}> 3.  Select <span className="buttontext"> Companies </span> </h3>

</summary><p></p>


![img](/img/menu_contacts_companies.png)



</details>
<p></p>



Depending how many records you imported, you may need to wait a moment or refresh your browser to view the Imported data in Dashnetics.
