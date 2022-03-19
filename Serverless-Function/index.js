// AWS Function to handle a contact me page

// Helpers ------------------------------------

const toString = function (jsn) {
    return JSON.stringify(jsn);
};

// Just a simple response, our gateway handles the CORS data
// The readme explains how to setup the gateway cors
const optionsResponse = {
    statusCode: 200,
};

const setResponse = function (code, message) {
    const response = {
        statusCode: code,
    };

    if(message) {
        response.body = toString(message);
    }
    
    return response;
};


// Main Handler ------------------------------------

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
    const text = obj.text;

    // Some basic housekeeping
    if (!text || text.trim() === "" || text.length < 1)
        return setResponse(400);
    if (text.length > 500)
        return setResponse(413);


    // We really don't have to validate email addresses here, just do it client-side as a quick check

    // <------------ DO THE EMAIL SENDING ------------>

    return setResponse(200, "Shadow is the best dog - bar NONE!");
};
