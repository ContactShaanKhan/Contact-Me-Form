# Function to handle the server side functionality of a Contact Me Form

## Instructions

1. When creating the gateway you need to enable the CORS stuff correctly: 
  - Access-Control-Allow-Origin: "*",
  - Access-Control-Allow-Headers: "shadowbestdog" and "content-type",
  - Access-Control-Allow-Methods: POST and OPTIONS  
2. Set your endpoint link in index.js

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
