import { useState } from "react";

function Contact() {
    // JSX: Javascript XML
    const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
        name: e.target.name.value,
        from: e.target.from.value,
        message: e.target.message.value,
    };

    try {
        const res = await fetch("http://localhost:8080/api/v1/user/send_email", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        const data = await res.json();

        if (data.isSent) {
            alert("Message sent successfully 🚀");
        } else {
            alert("Message failed ❌");
        }

    } catch (err) {
        alert(err);
    }
};

    return (
    <section id="contactme">
        <h2>Contact Me</h2>
        <form onSubmit={handleSubmit}>
    <input type="text" name="name" placeholder="Your name..." />

    <input type="email" name="from" placeholder="Your email..." />

    <input type="text" name="message" placeholder="Your message..." />

    <button type="submit">Send Your Message</button>
</form>

        <p>Soon V2 : Navbar will be added, Blogs sections will be opened and daily blogs will be added</p>
    </section>
    );
}

export default Contact;