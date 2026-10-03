import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    console.log("First Name:", formData.get("firstName"));
    console.log("Last Name:", formData.get("lastName"));
    console.log("Phone:", formData.get("phone"));
    console.log("Email:", formData.get("email"));
    console.log("Message:", formData.get("message"));

    navigate("/");
  }

  return (
    <div className="page">
      <h1>Contact Me</h1>

      <p>Email: eliaskhoury416@gmail.com</p>

      <form onSubmit={handleSubmit}>
        <input
          name="firstName"
          type="text"
          placeholder="First Name"
          required
        />

        <input
          name="lastName"
          type="text"
          placeholder="Last Name"
          required
        />

        <input
          name="phone"
          type="tel"
          placeholder="Contact Number"
        />

        <input
          name="email"
          type="email"
          placeholder="Email Address"
          required
        />

        <textarea
          name="message"
          placeholder="Message"
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;