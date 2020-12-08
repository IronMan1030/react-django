import React from "react";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebook, faSkype, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  const socialLinks = [
    {
      id: 1,
      icon: faTwitter,
      link: "",
      class: "twitter",
    },
    {
      id: 2,
      icon: faFacebook,
      link: "",
      class: "facebook",
    },
    {
      id: 3,
      icon: faInstagram,
      link: "",
      class: "instagram",
    },
    {
      id: 4,
      icon: faSkype,
      link: "",
      class: "skype",
    },
    {
      id: 5,
      icon: faLinkedin,
      link: "",
      class: "linkedin",
    },
  ];
  return (
    <div>
      <div className="footer">
        <div className="footer-top">
          <div className="container footer_container">
            <div className="row">
              <div className="col-lg-3 col-md-6 footer-info">
                <h3>Primafirm</h3>
                <p>
                  A108 Adam Street <br />
                  OT 535022, Canada
                  <br />
                  <br />
                  <strong>Phone:</strong> +1 5589 55488 55
                  <br />
                  <strong>Email:</strong> info@example.com
                  <br />
                </p>
                <div className="social-links mt-3">
                  {socialLinks.map((socialLink) => {
                    return (
                      <a href={socialLink.link} className={socialLink.class} key={socialLink.id}>
                        <FontAwesomeIcon icon={socialLink.icon} />
                      </a>
                    );
                  })}
                </div>
              </div>
              <div className="col-lg-2 col-md-6 footer-info footer-links">
                <h4>Company</h4>
                <ul id="footer_links">
                  <li>
                    <a href="/">About</a>
                  </li>
                  <li>
                    <a href="/">Terms</a>
                  </li>
                  <li>
                    <a href="/">Blog</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 footer-info footer-links">
                <h4>Support</h4>
                <ul id="footer_links-1">
                  <li>
                    <a href="/">Help Center</a>
                  </li>
                  <li>
                    <a href="/">Vendor FAQ</a>
                  </li>
                  <li>
                    <a href="ven_request.html">Vendor Registration</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 col-md-6 footer-info">
                <h3>
                  <img className="img-fluid" src="images/logo_dark.png" width="170" alt="logo-dark-footer" />
                </h3>
                <p>
                  Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem lacus. Ut vehicula rhoncus
                  elementum. Etiam quis tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel in justo.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="copyright">
            © Copyright
            <strong>
              <span>Premafirm inc. © 2020</span>
            </strong>
            . All Rights Reserved
          </div>
          <div className="credits">{/* Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a> */}</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
