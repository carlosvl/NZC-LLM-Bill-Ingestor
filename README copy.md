Net Zero Cloud CSV Data Importer. This repository contains the metadata for a custom feature designed to enhance Salesforce Net Zero Cloud by enabling bulk data imports from CSV files. 
This solution streamlines the process of creating records, such as Energy Use Records, from data provided in a CSV file.

Overview.
This feature provides an automated solution for processing CSV files uploaded to the Received Document object in Salesforce. A user can initiate the import process with a single click, which triggers a Flow to parse the file and create the corresponding records in target objects like Energy Use Record. This significantly reduces the manual effort required for data entry and minimizes the risk of human error. 

How It Works.
The import process is a seamless, user-initiated automation that involves several key components working together: 
 + File Upload: The process begins when a user uploads a CSV data file to the Received Document object, which acts as a staging area for incoming files. 
 + Custom Button Trigger: A custom button, labeled "Import Data," is available on the Received Document record page. When the user clicks this button, the automation is initiated.
 + Flow Invocation: The custom button is configured to launch a screen flow. It passes critical information, including the recordId of the Received Document and the ContentDocumentId of the uploaded file, as input variables to the Flow.
 + Apex Class Execution: The Flow invokes a custom invocable Apex class designed specifically for this process. It passes the file content and relevant record ID to the class.CSV
 + Parsing and Record Creation: The Apex class takes over the core logic. It reads and parses the content of the CSV file row by row. For each row, it maps the data to the fields of the target Salesforce object (e.g., Energy Use Record) and creates a new record.
 
Architecture FlowUser uploads CSV to [Received Document]
    |
    V
User clicks [Custom Button] on the record page
    |
    V
[Salesforce Flow] is triggered, receiving the Record ID and File ID
    |
    V
Flow invokes [Custom Apex Class]
    |
    V
Apex class reads the CSV file, parses the data, and creates records in the target object (e.g., Energy Use Record)

Key Components.

Received Document Object: Standard Salesforce object used to store the uploaded CSV files.
Custom Button: A page layout component that initiates the Flow from the user interface.
Salesforce Flow: The primary automation tool that orchestrates the process by capturing inputs and calling the Apex class.
Custom Apex Class: Contains the business logic to handle CSV parsing and DML operations for creating new records.

Usage Guide
To use this feature, follow these steps:
+ Navigate to the Received Documents tab and create a new record.Upload the CSV file containing your data to the Files related list on the record.
+ Click the custom "Import Data" button located on the page.The flow will run in the background.
+ Once completed, the corresponding records will be created in the target object.
