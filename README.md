Net Zero Cloud - Enhanced Bill Processing
This repository contains the metadata to enhance the functionality of Salesforce Net Zero Cloud by allowing users to import utility bills (PDFs or images) and automatically create Energy Use Records.

📖 Description
This feature streamlines the process of entering energy consumption data into Net Zero Cloud. It provides a Lightning Web Component (LWC) that allows users to upload a bill for a specific Stationary Asset. The system then leverages an Einstein LLM template to parse the document, extract relevant electricity and gas utilization data, and present it to the user for verification before creating the final Energy Use Record.

✨ Features
File Upload: A user-friendly LWC to upload PDF or image files of utility bills directly to a Stationary Asset record.

AI-Powered Data Extraction: Utilizes an Einstein template to send instructions to an LLM for intelligent parsing of energy and gas consumption data from the uploaded file.

Data Rendering: The extracted data is returned as a JSON payload and cleanly rendered within the LWC for user review.

Automated Record Creation: With a single button click, users can invoke a Salesforce Flow to create an Energy Use Record from the extracted data.

Clipboard Functionality: Allows the user to easily copy the extracted data to the clipboard for use elsewhere.

⚙️ How It Works
The process follows these steps:

Upload: An end-user navigates to a Stationary Asset record and uses the custom LWC to upload an image file or a PDF of a utility bill. The file is then added to the record's file-related list.

AI Parsing: The system uses an Einstein template to send instructions to an LLM. The LLM is instructed to parse the document and extract key information regarding electricity and gas utilization.

JSON Payload: The LLM returns the extracted information structured as a JSON payload.

Review and Action: The JSON is rendered in the LWC, allowing the user to review the extracted data for accuracy.

Create or Copy: The user can then choose one of two actions:

Click a button to invoke a Flow, which creates an Energy Use Record with the parsed information.

Click a button to copy the results to their clipboard.

🚀 Usage
To use this feature, navigate to the Stationary Asset record where you wish to add an Energy Use Record. You will find the custom LWC on the page. Simply drag and drop your bill file or use the upload button to begin the process. After the file is processed, review the data and click the appropriate button to create the record or copy the data.

🛠️ Installation
To install this metadata in your Salesforce org, follow these steps:

Clone this repository to your local machine.

Use Salesforce DX to deploy the metadata to your desired org.

Bash

sfdx force:source:deploy -p force-app -u YourOrgAlias
Add the LWC component to the desired Lightning Page for the Stationary Asset object.

🤝 Contributing
Contributions are welcome! Please feel free to submit a pull request.

📄 License
This project is licensed under the MIT License.
