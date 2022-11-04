export const Contact = () => {
  return (
    <section className="contact-section">
      <article className="contact-article-1">
        <h1>Contact Me</h1>
        <p>Hi there, contact me to ask me about anything you have in mind.</p>
      </article>
      <article className="contact-article-2">
        <div className="form-container">
          <form action="" className="form">
            {/* first name */}
            <div className="form_field">
              <label htmlFor="firstname">First name</label>
              <input
                type="text"
                id="first_name"
                placeholder="Enter your first name"
              />
            </div>
            {/* last name */}
            <div className="form_field">
              <label htmlFor="lastname">Last name</label>
              <input
                type="text"
                id="last_name"
                placeholder="Enter your last name"
              />
            </div>
            {/* email */}
            <div className="form_field">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="yourname@email.com" />
            </div>

            {/* textarea */}
            <div className="form_field">
              <label htmlFor="message">Message</label>
              <textarea
                name=""
                cols="30"
                rows="10"
                id="message"
                placeholder="Send me a message and I'll reply you as soon as possible..."
              ></textarea>
            </div>
            {/* checkbox */}
            <div>
              <input type="checkbox" />
              <span>
                You agree to providing your data to NAME who may contact you.
              </span>
            </div>
            {/* submit button */}
            <button id="btn__submit" type="submit">
              Send message
            </button>
          </form>
        </div>
      </article>
    </section>
  );
};