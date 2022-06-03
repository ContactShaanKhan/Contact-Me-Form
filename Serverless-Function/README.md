# Function to handle the server side functionality of a Contact Me Form

## Features
- Uses [AWS Lambda](https://aws.amazon.com/lambda/) to field the email API call.
- Uses [AWS SES](https://aws.amazon.com/ses/) to send the emails.
- Uses [HEML](https://heml.io/) for generating the email HTML.  The email code is in email.heml, the html is stored as a string within emailTemplate.js.

## Instructions

1. When creating the gateway you need to enable the CORS stuff correctly: 
  - `Access-Control-Allow-Origin: "*"`,
  - `Access-Control-Allow-Headers: "shadowbestdog" and "content-type"`,
  - `Access-Control-Allow-Methods: POST and OPTIONS`  
2. Within the lambda function configuration, set the following environment variables:
  - `MY_REGION=us-east-1`
  - `MY_EMAIL=you@yourdomain.com`
  - `MY_NAME=FIRST LAST`
3. Setup SES using https://aws.amazon.com/premiumsupport/knowledge-center/lambda-send-email-ses/
4. Update the Email format in emailTemplate.js to include links to your own personal webpages.

## Request format
```
{  
  "type": "POST",
  "headers": {  
      "shadowbestdog": "IT-IS-NO-SECRET-THAT-SHADOW-IS-THE-CUTEST-DOG-ALIVE-!9976802140!"  
  },  
  "body": {  
      "sender": "INSERT SENDER FULL NAME",  
      "senderEmail": "INSERT SENDER ADDRESS",  
      "text": "Body of the message (<= 500 Characters)"  
  }  
}  
```