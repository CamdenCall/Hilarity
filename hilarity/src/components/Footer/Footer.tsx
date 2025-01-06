import Link from 'next/link';
import "./Footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-top">
          <img src="/images/logo-text.svg" alt="logo" />
          <div className="links">
            <Link href="/">Home</Link>
            <Link href="/careers">Careers</Link>
            <Link href="/#contact">Contact</Link>
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