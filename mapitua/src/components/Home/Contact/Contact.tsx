import "./Contact.scss"

const Contact = () => {
    return (
      <section className="contact" id="contact">
        <div className="header">
            <h2 className="gradient">Contact</h2>
            <p className="-s16">Where Style Meets the Digital Future.</p>
        </div>
        <div className="form">
            <div className="field">
                <label>Email</label>
                <input type="email" placeholder="email@domain.com"></input>
            </div>
            <div className="field">
                <label>Message</label>
                <textarea placeholder="Any extra information you want us to know" rows={20}></textarea>
            </div>
            <button>Submit</button>
        </div>
      </section>
    );
  };
  
export default Contact;