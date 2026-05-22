const Contact = () => {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <form className="contact-form">
        <input
          type="text"
          placeholder="Enter your name"
        />
        <input
          type="email"
          placeholder="Enter your email"
        />
        <textarea
          placeholder="Enter your message"
        ></textarea>
        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
export default Contact;