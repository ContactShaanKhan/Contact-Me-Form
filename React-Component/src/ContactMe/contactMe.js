import React from "react";
import './contactMe.css'

// Fill in endpoint for your backend

// Server constants ------------------------------------
const maxCharacters = 500;
const endPoint = "https://INSERT-ENDPOINT-HERE";
const server_NotSoSecret_secret = "IT-IS-NO-SECRET-THAT-SHADOW-IS-THE-CUTEST-DOG-ALIVE-!9976802140!";

// Main component ------------------------------------

export default function ContactMe() {
    // Maintain the state of the text
    const [formData, setFormData] = React.useState({
        fullName: "",
        email: "",
        message: "",
    });

    // Enum Type for the different types of form entries
    const formEntries = {
        FULLNAME: 0,
        EMAIL: 1,
        MESSAGE: 2
    };

    // Function to actually send the post request ------------------------------------
    const createPost = async function (body = "default", reply_to = "") {
        console.log("Sending post...");

        const myHeaders = {
            shadowbestdog: server_NotSoSecret_secret
        };

        const data = {
            sender: "",
            text: "Testing"
        };

        const request = new Request(endPoint, {
            method: "POST",
            body: JSON.stringify(data),
            headers: new Headers(myHeaders),
        });


        fetch(request);
    };

    // Handlers and Component ------------------------------------

    const handleSubmit = function (event) {
        console.log("Submitting...", formData);

        if (formData.message === "") {
            alert("Your message is empty, try again.");
        }
        else if (formData.fullName === "") {
            alert("Please enter your name.");
        }
        else {

        }
        event.preventDefault();
    };


    const handleFormChange = function (which, text) {
        setFormData({
            fullName: (which === formEntries.FULLNAME) ? text : formData.fullName,
            email: (which === formEntries.EMAIL) ? text : formData.email,
            message: (which === formEntries.MESSAGE) ? text : formData.message
        });
    };

    return (
        <div>
            <button onClick={createPost} />
            <div id="contactMe-Container">
                <div className="contactMe-Buffer" />
                <div id="contactMe-Container-Form">
                    <div id="contactMe-Container-Form-Inner">
                        <form onSubmit={handleSubmit}>
                            <label>
                                Full Name:
                                <input
                                    type="text"
                                    placeholder="Your Full Name..."
                                    onChange={(event) => handleFormChange(formEntries.FULLNAME, event.target.value)}
                                />
                            </label>

                            <label>
                                Email Address:
                                <input
                                    type="text"
                                    placeholder="Your Email Address..."
                                    onChange={(event) => handleFormChange(formEntries.EMAIL, event.target.value)}
                                />
                            </label>

                            <label>
                                Message:
                                <textarea
                                    id="message-text"
                                    value={formData.message}
                                    maxLength="500"
                                    placeholder="Your Message..."
                                    onChange={(event) => handleFormChange(formEntries.MESSAGE, event.target.value)}
                                />

                            </label>
                            <input type="submit" value="Submit" ></input>
                        </form>
                    </div>
                </div>
                <div className="contactMe-Buffer" />
            </div>
        </div>
    );

}
