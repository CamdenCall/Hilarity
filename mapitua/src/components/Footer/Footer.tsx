import "./Footer.scss"

const Footer = () => {
    return (
      <footer>
        <div className="container">
            <div className="footer-top">
                <img src="/images/logo-text.svg" alt="logp" />
                <div className="links">
                    <a href="/">Home</a>
                    <a href="/careers">Careers</a>
                    <a href="/#contact">Contact</a>
                </div>
            </div>
            <div className="footer-bottom">
                <img src="images/copyright.svg" />
                <p className="-s16">2025 MAPITUIA Copyright. All Rights Reserved</p>
            </div>
        </div>
      </footer>
    );
  };
  
export default Footer;