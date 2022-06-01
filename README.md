# Contact Me Form

This repo contains both the code and instructions to set-up your back end using AWS Lambda which is a function as a service (FaaS) and your front end with a simple React contact form.

## The Backend

Contains brief instructions on how to setup the FaaS component and the mail component.    

The backend receives requests from contact forms, processes them, and sends 2 emails.  
1. The first email is sent to you, with all the information the sender wrote.
2. The second email is sent to the sender as an acknowledgement of filling out the form.

### FaaS Component

Uses AWS Lambda and AWS API Gateway.

### Mail Component

Uses AWS Simple Email Service (SES).

## The React Component

Contains the javascript and css files for a simple contact form that works with the corresponding backend.  The React component has no dependencies beyond React itself, you may just copy the JavaScript and CSS into your own files and go.
