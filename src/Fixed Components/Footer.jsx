import React from "react";
import { Link } from "react-router-dom";
import Facebook from "/Icons/facebook.png";
import Twitter from "/Icons/twitter.png";
import Instagram from "/Icons/instagram-logo.png";
import LinkedIn from "/Icons/linkedin.png";
function Footer() {
  return (
    <section className="overflow-hidden">
      {/* whole footer container */}
      <div className="container shrink grid lg:grid-cols-4 gap-3 p-4 border-t-2 border-b-2 border-gray-300">
        {/* About uniconnect part of the footer */}
        <div className="flex flex-col gap-2">
          <h2 className="h2">About UniConnect</h2>
          <p className="p1 ">
            A platform for university students, alumni, and faculty to connect,
            collaborate, and grow together.
          </p>

          {/* social media links with icon*/}
          <div className="social-links flex justify-start gap-10  mt-2">
            <a
              href="https://www.facebook.com/uniconnect"
              target="_blank"
              rel="noopener noreferrer"
             className="hover-effect-normal h-5 w-5"
            >
              <img src={Facebook} alt="Facebook" />
            </a>
            <a
              href="https://twitter.com/uniconnect"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-effect-normal h-5 w-5"
            >
              <img src={Twitter} alt="Twitter" />
            </a>
            <a
              href="https://www.instagram.com/uniconnect/"
              target="_blank"
              rel="noopener noreferrer"
               className="hover-effect-normal h-5 w-5"
            >
              <img src={Instagram} alt="Instagram" />
            </a>
            <a
              href="https://www.linkedin.com/company/uniconnect/"
              target="_blank"
              rel="noopener noreferrer"
               className="hover-effect-normal h-5 w-5"
            >
              <img src={LinkedIn} alt="LinkedIn" />
            </a>
          </div>
        </div>
        {/* Quick links of footer */}
        <div className="flex flex-col gap-2">
          <h2 className="h2">Quick Links</h2>
          <Link to="/about" className="p1 hover-effect-normal">
            About us
          </Link>
          <Link to="/contact" className="p1 hover-effect-normal">
            Contact
          </Link>
          <Link to="/privacy-policy" className="p1 hover-effect-normal">
            Privacy Policy
          </Link>
          <Link to="/terms" className="p1 hover-effect-normal">
            Terms of service
          </Link>
        </div>

        {/* Resources of footer */}
        <div className="flex flex-col gap-2">
          <h2 className="h2">Resources</h2>
          <Link to="/study-groups" className="p1 hover-effect-normal">
            Study Groups
          </Link>
          <Link to="/job-postings" className="p1 hover-effect-normal">
            Job Postings
          </Link>
          <Link to="/forums" className="p1 hover-effect-normal">
            Forums
          </Link>
          <Link to="/achievements" className="p1 hover-effect-normal">
            Achievements
          </Link>
        </div>

        {/* Subscribe part of the footer */}
        <div className="flex flex-col gap-2">
          <h2 className="h2">Subscribe</h2>
          <p className="p1 ">Stay updated with the latest news and events</p>
          <input
            type="text"
            placeholder="Your email address"
            className="inputs"
          />
          <button className="button mt-2">Subscribe</button>
        </div>
      </div>
      {/* copyright tag */}
      <p className="p1 flex justify-center p-4">  © 2025 UniConnect. All rights Reserved. </p>
    </section>
  );
}

export default Footer;
