# Function to handle the server side functionality of a Contact Me Form

## Instructions

1. When creating the gateway you need to enable the CORS stuff correctly: 
  - Access-Control-Allow-Origin: "*",
  - Access-Control-Allow-Headers: "shadowbestdog" and "content-type",
  - Access-Control-Allow-Methods: POST and OPTIONS  
2. Set your endpoint link in index.js
3. Within the lambda function set the environment variables found in .env of this repository.

## Request format
{
  "headers": {
      "shadowbestdog": "IT-IS-NO-SECRET-THAT-SHADOW-IS-THE-CUTEST-DOG-ALIVE-!9976802140!"
  },
  "body": {
      "sender": "INSERT SENDER FULL NAME",
      "senderEmail": "INSERT SENDER ADDRESS", 
      "text": "Body of the message"
  }
}

- The senderEmail field is optional
- The text field can only be <= 500 characters (including whitespace)

## Useful Resources
1. https://aws.amazon.com/premiumsupport/knowledge-center/lambda-send-email-ses/
2. https://scripteverything.com/amazon-ses-send-email-from-domain-using-gmail/
3. https://github.com/simalexan/api-lambda-send-email-ses/blob/master/index.js