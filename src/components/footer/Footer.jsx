import React from "react";

import "./footer.css";
import { GitHubIcon, InstagramIcon, LinkedInIcon, TwitterIcon } from "assets";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="desk-footer">
        <div className="footer-content">
          <div className="footer-section about">
            <h2 className="footer-heading">About Us</h2>
            <p>
              ShopEx is a fashion e-commerce website website that provides
              high-quality products to our customers at affordable prices.
            </p>
          </div>
          <div className="footer-section contact">
            <h2 className="footer-heading">Contact Us</h2>
            <ul className="contact-list">
              <li>
                <i className="fas fa-map-marker-alt"> </i> 123 Main Street,
                Anytown India
              </li>
              <li>
                <i className="fas fa-phone"></i> (555) 555-5555
              </li>
              <li>
                <i className="fas fa-envelope"></i> info@ShopEx.com
              </li>
            </ul>
          </div>
          <div className="footer-section links">
            <h2 className="footer-heading">Links</h2>
            <ul className="links-list">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li>
                <Link>About Us</Link>
              </li>
              <li>
                <Link>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
        </div>
        <div className="desk-footer-bottom">
          <p>
            &copy; Ecommerce Inc. All rights reserved By ShopEx
          </p>
        </div>
      </footer>
      {/* ------------Mobile footer------------------- */}
      <footer className="mobile-footer">
        <p className="footer-bottom">© 2023 | ShopEx</p>
      </footer>
    </>
  );
}

export { Footer };
