import "./ContactMe.css";

function ContactMe(props) {
  return (
    <div ref={props.refname} className="contact-section">
      <h1 className="contact-info">Contact Info</h1>
      <div className="contact-container">
        <div className="contact-item1">
          <h2 className="contact-title">Emails</h2>
          <ul>
            <li>
              <p className="contact-email">samehmillania@gmail.com</p>
            </li>
            <li>
              <p className="contact-email">
                millania.bebawy00@eng-st.cu.edu.eg
              </p>
            </li>
          </ul>
        </div>

        <div className="contact-item2">
          <h2 className="contact-title">Phone Number</h2>
          <p className="contact-email">(+20) 122 139 4061</p>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
