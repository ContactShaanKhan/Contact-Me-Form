import axios from "axios";
import React from "react";

// Fill in endpoint for your backend

// Server constants ------------------------------------
const maxCharacters = 500;
const endPoint = "https://insert-your-endpoint";
const server_NotSoSecret_secret = "IT-IS-NO-SECRET-THAT-SHADOW-IS-THE-CUTEST-DOG-ALIVE-!9976802140!";

// Main component ------------------------------------

export default function ContactMe() {

    // Function to actually send the post request
    const createPost = async function (body = "default", reply_to = "") {
        console.log("Sending post...");

        const config = {
            headers: {
                'shadowbestdog': server_NotSoSecret_secret,
            }
        };

        const data = {
            "sender": "",
            "text": "Testing"
        };

        const res = await axios.post(endPoint, data, config);
    };

    return (
        <div>
            <button onClick={createPost} />
        </div>
    );

}
