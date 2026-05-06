function Contact() {
    // JSX: Javascript XML
const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);

  const data = {
    name: String(formData.get("name") || ""),
    from: String(formData.get("from") || ""),
    message: String(formData.get("message") || ""),
  };

  try {
    const res = await fetch("http://localhost:8080/api/v1/user/send_email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const response = await res.json();

    if (response.isSent) {
      alert("Message is sent successfully. Wait for response");
    } else {
      alert("Sending message failed. Try again later");
    }
  } catch (err) {
    alert("Sending message failed.");
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