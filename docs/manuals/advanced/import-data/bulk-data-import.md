--- 
sidebar position: 1 

--- 
# Bulk Data Import



Dashnetics's bulk data import tool allows you to quickly and easily import large sets of data from a .CSV or .XLS file directly into Dashnetics.

*   Import clients, locations, suppliers, assets, tasks, inventory items, and quote line items.
*   Match columns within your file to the relevant fields in Dashnetics.
*   Save field mappings as a template for regular data imports.
*   Update inventory item information.

When bulk importing data into Dashnetics, please be aware of our [recommended data limits](import-data-limits).

Prepare your data
-----------------

1.  The first step is to prepare your data for upload. You can:
    
    1.  place your data into one of our [Bulk Data Import templates](import-templates),
        
    2.  use your own (e.g. your supplier's price file), or
        
    3.  [export your data from your accounting package](exporting-data-from-your-accounting-package).
        
2.  Save your file as either a comma separated values (.CSV) file or an Excel 97-2003 Workbook (.XLS). **Note:** .XLSX files will not upload.
3.  Remove any duplicate or obsolete records, and any blank columns or rows within the data.

What do you want to import?
---------------------------

I want to import:

 Assets

Check that your data has the following mandatory fields, _each in its own column_:

*   Main Category
*   Asset Name

Category

Ensure you have created an Asset category within Dashnetics first.

Navigate to:  

*   **Manage** > **Assets** or
*   **Manage** > **Clients** > Select a client > **View** > **Assets**
    

Multiple clients

If you are importing an asset file with multiple clients, set the Client filter to 'none' by clicking the **Search** icon and selecting **Set No Client**, before clicking Bulk Import. Otherwise, Dashnetics will try to import all those assets against the selected client.

![](/img/screenshot-placeholder.png)

  

* * *

 Clients

Dedicated instructions

See our [dedicated instructions](importing-contacts) for importing clients and suppliers. Alternatively you can continue with the steps below.

Check that your data has the following mandatory fields, _each in its own column_:

*   Client Name (this is a Company name)
*   Primary Contact First Name
*   Primary Contact Last Name

Transaction Terms

Make sure the content of your **Transaction Terms** column exactly matches how Dashnetics describes Transaction Terms. For example, use '30 Days' not '30', 'thirty' or any other format.

You can check on how Dashnetics formats this data by going to **Create > Client**. Check the 'Terms' drop-down menu to see the options available.

Alternatively, you can create your own Transaction Terms in Dashnetics before importing your data. Just go to **Site Administration > Settings**.

Is Individual?

The **Individual** checkbox can have the values '1', 'yes', 'y', 't', 'true', 'on', 'checked', 'filled', or 'individual'.

Navigate to:

**Manage** > **Clients**

* * *

 Inventory items

Check that your data has the following mandatory fields, _each in its own column_:

*   Category
*   Item Description
    

Category

If you're uploading an inventory item which you don't have an Inventory category for, Dashnetics will create one for you.

Updating inventory pricing

If you are only updating your inventory pricing and not adding new items, click [here](/display/office/Bulk+Import%3A+Update+Inventory) to find out more.

The following values are allowed in the fields shown:

 Calculated Cost Type

*   NONE or NA
*   MAXIMUM, MAX, UPPER or HIGHEST
*   AVERAGE or AVG
*   LATEST, LAST or RECENT
*   SET or FIXED

* * *

 Sell Type

*   SELL
*   COST + MARK UP
*   CALCULATED COST + MARK UP

Note: You can have either 'simple' or 'detailed' pricing in your spreadsheet, but not both.

* * *

 Unit Type

Note: In most cases, plural forms will also be valid.

*   EA or EACH
*   MM, MILIMETRE, MILLIMETRE, MILIMETER or MILLIMETER
*   CM, CENTIMETRE or CENTIMETER
*   M, MT, METRE or METER
*   M2, SQUARE METER, SQUARE METRE, SQ METER or SQ METRE
*   M3, CUBIC METER, CUBIC METRE, CU METER or CU METRE
*   LM, LINEAL METRE, LINEAL METER, LINEAR METRE or LINEAR METER
*   BOX or BX
*   PKT, PACKET or PACK
*   ROLL or RL
*   BAG or BG
*   PAL, PALLET or PLT
*   PR or PAIR
*   ML, MILLILITRE, MILLILITER, MILILITRE or MILILITER
*   L, LTR, LITRE or LITER
*   BBL, BRL, BL, BARREL or BAREL
*   GL, GAL, GLN, GALLON or GALON
*   GR, GRM or GRAM
*   KG, KILOGRAM or KILOGRM
*   O, OC, OZ or OUNCE
*   LB, PND or POUND
*   TN, TON or TONNE
*   IN or INCH
*   FT, FEET or FOOT
*   YD, YRD or YARD

* * *

Navigate to:  

**Manage** > **Inventory**

* * *

 Locations

Check that your data has the following mandatory fields, _each in its own column_:

*   Client or Supplier Name (this is a Company name)
*   Location / Address 1

Navigate to  **Manage** \> **Locations** to be able to upload locations for both clients and suppliers

* * *

Alternatively, to import locations for a particular client, navigate to  **Manage** \> **Clients** \> Select the client > **View** \> **Locations**

Or, to import locations for a particular supplier, navigate to **Manage** > **Suppliers** \> Select the supplier > **View** > **Locations**

* * *



 Suppliers

Check that your data has the following mandatory fields, _each in its own column_:

*   Supplier Name (this is a Company name)
*   Primary Contact First Name
*   Primary Contact Last Name

Transaction Terms

Make sure the content of your **Transaction Terms** column exactly matches how Dashnetics describes Transaction Terms. For example, use '30 Days' not '30', 'thirty' or any other format.

You can check on how Dashnetics formats this data by going to **Create > Supplier**. Check the 'Terms' drop-down menu to see the options available.

Alternatively, you can create your own Transaction Terms in Dashnetics before importing your data. 

Navigate to:  

**Manage** > **Suppliers**

* * *

 Tasks

Check that your data has the following mandatory fields, _each in its own column_:

*   Client
*   Task Identification
*   Task Type

Navigate to:  

**ServiceTrack** > ****Current****

* * *

Upload your file  

-------------------

Follow the steps below to upload your data file to Dashnetics.  

1.  Click the ![](/img/bulk.import.icon.png) (bulk import) icon. In this example, the icon is at the top right of the screen.  

    
2.  In the Bulk Data Import window, select a file to upload, or drag and drop a file onto the window. As soon as you've made your selection or dropped a file onto the window, the upload begins.  

    

Map the columns.
---------------

The columns in your data may not exactly match the fields available in Dashnetics, so you need to map each column in your data to a Dashnetics field name. You can either use an existing mapping template, or start a new template.

 Use an existing mapping template

Depending on what you're importing, you may have options to use one of Dashnetics's default mapping templates. E.g. for clients, you will see the below options for Xero and Quickbooks; for inventory, there will be a few leading supplier mapping templates; also for inventory you will have the default pricing templates from our [Import Templates](import-templates) page. If you have saved previous mappings, you will see your own mapping templates listed with the default templates.

To review the mapping between an existing mapping template and the file you've uploaded, click the ![](/img/AddIcon.png) (expand) icon. The pre-set mapping displays, and you can change it if you need to by clicking **Use Template** and following the instructions in Step 1 of the next section.



* * *

 Start a new mapping template

This is the best option if you're unsure about whether or not to use an existing template. Click **Start A New Template** to get started.  


1.  For each column, click the down arrow and select the Dashnetics field name that most closely matches the column found in your spreadsheet. In the example below, we're telling Dashnetics that Column 4 contains the 'Postcode' and column 5 contains the 'Country'.
    

    
    Data appearing under the dark grey column headers will be imported.
    
    *   To switch a dark grey column header off, click the arrow beside the field and select **\-- not mapped --**. You can do this for any field other than the mandatory fields (marked with an asterisk).
    *   To switch a light grey column header on, click the arrow beside the field and select the most suitable mapping category.
    
2.  If you plan to upload an updated version of the same data file in the future, you can save the current mapping to use again:  
    1.  check the **Save this mapping as a template** box at the bottom of the window
    2.  enter a name for the template.

* * *

 Delete a custom mapping template

You can delete any custom bulk import templates you've created if you no longer need them.

Dashnetics default templates cannot be deleted.


* * *

Importing Custom Fields
-----------------------

When using the bulk import function, you can also import custom fields for certain areas. All you need to do is ensure your custom fields are included as headings in your Excel spreadsheet and map the fields accordingly. 

Click the relevant tab to learn more about uploading custom fields for that area.

 Things to note

*   This process can only be used for importing new entries and not updating existing ones.
*   There is a maximum of 20 custom fields per entry (except for Task custom fields).
*   Checkbox type custom fields can only allow yes/no values.
*   If you're using custom fields but don't include them in your upload, or don't map the fields, the custom fields will still be added to your entries but with blank values.
*   Column mapping for custom fields cannot be saved using the 'Save this mapping as a template' option. You can still save and use mapping templates but the custom fields will need to be mapped individually each time you use the bulk upload feature.





Import your data
----------------

Now that you've mapped your data, it's ready to be imported.

1.  Click **Import**.
    
2.  Click **Yes** on the prompt, confirming you want to import the file. The import process begins and can take a few moments.
    

The import process cannot be undone once you've clicked Import. If you need to reverse your changes after a bulk import, please contact our Customer Service team for assistance. A charge for this service may be incurred.

View import results
-------------------

Once your data has been imported, the results window appears.



  

Result

Description

Inserted

The number of new items inserted into Dashnetics

Issues

The number of items marked with an error and not imported. You can download a copy of the entries that contained an error.

After closing the results window, you may need to refresh your browser to view the Imported data in Dashnetics.

Updating existing information


You can use the bulk data import tool to update existing information within your inventory. 
