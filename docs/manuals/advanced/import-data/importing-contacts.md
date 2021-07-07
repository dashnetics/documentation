--- 
sidebar position: 1 

--- 
# Importing Contacts 


Step 1 is to Export your data from your existing accounting package or program, 

If you haven't done that yet. [Click Here](exporting-data-from-your-accounting-package)

After you have exported your contact data from your external software. The next step is:

Prepare your data
-----------------

Once you have exported a .CSV or .XLS file:

1.  **Remove any duplicate or obsolete records**, and any blank columns or rows within the data.
2.  Check that your data has the following **mandatory fields**, _each in its own column_:
    1.  Client Name (this is a Company name)
    2.  Primary Contact First Name
    3.  Primary Contact Last Name
3.  Review the format of any **Transaction Terms** in your file to make sure they match how Dashnetics describes them. For example, use '30 Days' not '30', 'thirty' or another format. You can check on how Dashnetics formats this data by going to **Create > Client**. Check the 'Terms' drop-down menu to see the options available.
    
    You can create your own Transaction Terms in Dashnetics before importing your data. Just go to **Site Administration > Settings**, and search on **[Transaction Terms](/display/SiteAdmin/Transaction+Terms)**.
    

 Other things to consider

### Will you need extra fields? (Custom Fields)

If you have data that doesn't fit into the [fields we provide](/display/office/Client+and+Supplier+Fields), you can add [custom fields](/display/SiteAdmin/Custom+Fields) in Dashnetics, before starting your import. For example, you may have data like 'Customer Type' (VIP/Gold/Silver) or an internal reference number. If required, please also consider this additional information

### Do you have clients with multiple work sites or suppliers with multiple branches?

Dashnetics can store multiple locations (such as work sites or branches) for a single client or supplier. You can also have multiple contacts for a single client or supplier.

This information can be included in your export files; however, you must ensure the client or supplier is referenced against each location or contact.

If you have any questions or require assistance with preparing your data, please [contact our Customer Service Team](/display/AHH/Help+and+Support).

Upload your file
----------------

Follow the steps below to upload your file to Dashnetics.

1. If you're uploading clients, navigate to **Manage** > **Clients**. If you're uploading suppliers, go to **Manage > Suppliers**.

2\. Click  ![](/img/download.png) **(Bulk Import)** at the top right.

3\. In the Bulk Data Import Window , select a file to upload, or drag and drop a file onto the window. As soon as you've made your selection or dropped a file onto the window, the upload begins.


Map the columns
---------------

Next, you will need to match the columns in your file to the fields available in Dashnetics. On this window we can use an existing mapping template, or start a new template.

If your file came from Xero or Quickbooks, you can use our preset mapping templates. Otherwise anyone can start a new template. Use the tabs below to learn more.



*   [**...**](#13077870774c4080b0d7547af89ef42c3c2956ce0)
*   [**![](/img/Integration_XERO_Round_24.png)Xero**](#XeroMapTab)
*   [**![](/img/Integration_QB_Round_24.png)Quickbooks Online**](#QuickbooksMapTab)
*   [...](#aui-tabs-responsive-dropdown-1)

       ![](/img/selecttab.png) Select the application used to export your file.

### Mapping data from Xero

If your .CSV file came from Xero, click **Use Template** on the **Xero - Default Template**.

To review the mapping between an existing mapping template and the file you've uploaded, click the  ![](/img/AddIcon.png)  (expand) icon. The pre-set mapping will display. You can change these if you need to by clicking **Use Template** and following the instructions in the 'Other Applications' tab.



### Mapping data from QuickBooks Online

If your .CSV file came from QuickBooks Online, click **Use Template** on the **Quickbooks - Default Template**.

Please check the .CSV or .XLS file that was uploaded. QuickBooks is known to insert a blank column between each column that has data. If this has occurred please remove all the blank columns in your file and upload the file once more.

To review the mapping between an existing mapping template and the file you've uploaded, click the ![](/img/AddIcon.png)  (expand) icon. The pre-set mapping will display. You can change these if you need to by clicking **Use Template** and following the instructions in the 'Other Applications' tab.



### Mapping data using a new template

Click **Start A New Template**.



For each column, click the down arrow and select the Dashnetics field name that most closely matches the column found in your spreadsheet. In the example shown, we're telling Dashnetics that Column 4 contains the 'Postcode' and column 5 contains the 'Country'.

Data appearing under the dark grey column headers will be imported.

*   To switch a dark grey column header off, click the arrow beside the field and select **\-- not mapped --**. You can do this for any field other than the mandatory fields (marked with an asterisk).
*   To switch a light grey column header on, click the arrow beside the field and select the most suitable mapping category.

If you plan to upload the file format to another business unit, you can save the current mapping to use again. Tick the **Save this mapping as a template** box at the bottom of the window and enter a name for the template.

 Can't find a similar Dashnetics field?

If you found columns in your file which don't match the [fields we provide](/display/office/Client+and+Supplier+Fields), you can always stop the process and add [custom fields](/display/SiteAdmin/Custom+Fields) in Dashnetics. See the previous section 'Prepare your data' to learn more.

Notes about mapping custom fields

*   If you're using custom fields but don't include them in your upload, or don't map the fields, the custom fields will still be added to your entries but with blank values.
*   Column mapping for custom fields cannot be saved using the 'Save this mapping as a template' option. You can still save and use mapping templates but the custom fields will need to be mapped individually each time you use the bulk upload feature.



*   [**Other applications**](#OtherMapTab)

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

The number of items marked with an error and not imported. You can download a copy of the entries that contained an error. Refer to [Bulk Data Imports Troubleshooting](https://help.Dashnetics.com/x/JxYwBQ) for help with the most common types of issues.

After closing the results window, you may need to refresh your browser to view the Imported data in Dashnetics.
