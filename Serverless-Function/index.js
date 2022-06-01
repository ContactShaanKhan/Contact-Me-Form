// AWS Function to handle a contact me page
// *** The readme explains how to setup everything (like gateway cors) ***

// Helpers ------------------------------------

const toString = function (jsn) {
    return JSON.stringify(jsn);
};

const setResponse = function (code, message) {
    const response = {
        statusCode: code,
    };

    if (message) {
        response.body = toString(message);
    }

    return response;
};

const constructEmailParams = function ({ destinations, subject, body }) {
    return {
        Destination: {
            ToAddresses: destinations
        },
        Message: {
            Body: {
                Text:
                {
                    Data: body
                }
            },

            Subject: { Data: subject }
        },
        Source: process.env.MY_EMAIL
    };
}

// Main Handler ------------------------------------

const aws = require('aws-sdk');
const ses = new aws.SES({ region: process.env.MY_REGION });

exports.handler = async function (event, context) {
    // Get the data from the event
    const httpMethod = event.httpMethod;

    // ONLY accept POST or OPTIONS methods
    if (httpMethod === "OPTIONS") {
        return setResponse(200);
    }

    if (httpMethod !== "POST") {
        return setResponse(404);
    }

    // Extract headers and body
    const headers = event.headers;
    const body = event.body;

    // Simple check to make sure a certain header is present - just 'cause :D
    const token = headers.shadowbestdog;
    const secret = "IT-IS-NO-SECRET-THAT-SHADOW-IS-THE-CUTEST-DOG-ALIVE-!9976802140!";
    if (token !== secret)
        return setResponse(418);

    // Now extract the things we want
    const obj = JSON.parse(body);
    const sender = obj.sender;
    const senderEmail = obj.senderEmail;
    const text = obj.text;

    // Some basic housekeeping
    if (!text || text.trim() === "" || text.length < 1 || !sender || sender.trim === "")
        return setResponse(400);
    if (text.length > 500)
        return setResponse(413);
    if (!senderEmail || senderEmail.trim() === "" || !senderEmail.includes('@'))
        return setResponse(401);

    // <------------ DO THE EMAIL SENDING ------------>

    try {
        // Send email to the person who filled out the form
        await ses.sendEmail(constructEmailParams({
            destinations: [senderEmail],
            subject: "Thank you for reaching out!",
            body: `Hello ${sender},\n\nI hope all is well with you and thank you for reaching out to me.\n\nFor your convenience, here is a copy of your message:\n\n"${text}"\n\nYou can expect a response soon :)\n\nBest,\n${process.env.MY_NAME}`
        })).promise();

        // Send email to me!
        await ses.sendEmail(constructEmailParams({
            destinations: [process.env.MY_EMAIL],
            subject: `${sender} has contacted you!`,
            body: `Sender: ${sender}\n\nSender Email: ${senderEmail}\n\nMessage: ${text}`
        })).promise();

        return setResponse(200, "Shadow is the best dog - bar NONE!");
    }
    catch (error) {
        return setResponse(500);
    }
};
