# Function to handle the server side functionality of a Contact Me Form

## Instructions

1. When creating the gateway you need to enable the CORS stuff correctly: 
  - `Access-Control-Allow-Origin: "*"`,
  - `Access-Control-Allow-Headers: "shadowbestdog" and "content-type"`,
  - `Access-Control-Allow-Methods: POST and OPTIONS`  
2. Within the lambda function set the environment variables found in .env of this repository.
3. Setup SES using resource #1.

## Request format (POST)
```
{  
  "headers": {  
      "shadowbestdog": "IT-IS-NO-SECRET-THAT-SHADOW-IS-THE-CUTEST-DOG-ALIVE-!9976802140!"  
  },  
  "body": {  
      "sender": "INSERT SENDER FULL NAME",  
      "senderEmail": "INSERT SENDER ADDRESS",  
      "text": "Body of the message (<= 500 Characters>)"  
  }  
}  
```

## Useful Resources
1. https://aws.amazon.com/premiumsupport/knowledge-center/lambda-send-email-ses/