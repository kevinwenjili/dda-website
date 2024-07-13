import { ReactNode } from "react";
import "./Footer.css";

interface Props {
  children?: string;
}

const Footer = ({ children }: Props) => {
  return (
    <>
      <div id="footer" className="footer-spacer">
        &nbsp;
      </div>
      <div className="footer-container">
        <div className="footer-header">Contact Us</div>
        <div className="footer-display">
          <div className="footer-logo">
            <img src="assets/logo/logo-black.png" className="logo" />
          </div>
          <div>
            <div className="footer-column">
              <div className="footer-category">Email</div>
              <div>
                <a
                  className="footer-link"
                  href="mailto:info@dougdixonassociates.com"
                >
                  info@dougdixonassociates.com
                </a>
              </div>
              <div className="footer-category">Phone</div>
              <div>+1-647-405-0523</div>
              <div className="footer-category">Address</div>
              <div>
                <div>2 County Court Boulevard</div>
                <div>Suite 345</div>
                <div>Brampton, Ontario</div>
                <div>Canada, L6W 3W8</div>
              </div>
            </div>
          </div>
          <div>&nbsp;</div>
          <div className="footer-credit">
            <span>Website by </span>
            <a className="footer-link" href="https://github.com/kevinwenjili">
              Kevin Wenji Li
            </a>
            <span> for </span>
            <a
              className="footer-link"
              href="https://cs50.harvard.edu/x/2024/project/"
            >
              CS50X
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
