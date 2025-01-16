import React from "react";
import {
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaFacebook,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-grayColor dark:bg-primary text-white overflow-hidden">
      <footer className="bg-grayColor dark:bg-primary text-white py-12">
        <div className="container mx-auto px-6 md:px-12">
          {/* Top Section - Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-12 mb-8">
            {/* About Section */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg sm:text-xl mb-4 text-primary dark:text-secondary">
                About
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-primary dark:text-white hover:text-primary dark:hover:text-secondary"
                  >
                    Our Story
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-primary dark:text-white hover:text-primary dark:hover:text-secondary "
                  >
                    Our Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-primary dark:text-white hover:text-primary dark:hover:text-secondary "
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-primary dark:text-white hover:text-primary dark:hover:text-secondary "
                  >
                    Gurus
                  </a>
                </li>
              </ul>
            </div>

            {/* Quick Links Section */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg sm:text-xl mb-4 text-primary dark:text-secondary">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-primary dark:text-white hover:text-primary dark:hover:text-secondary "
                  >
                    Projects in Pakistan
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-primary dark:text-white hover:text-primary dark:hover:text-secondary "
                  >
                    Project in Karachi
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-primary dark:text-white hover:text-primary dark:hover:text-secondary "
                  >
                    Project in Islamabad
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-primary dark:text-white hover:text-primary dark:hover:text-secondary "
                  >
                    Project in Lahore
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Us Section */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg sm:text-xl mb-4 text-primary dark:text-secondary">
                Contact Us
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="mailto:info@realestate.com"
                    className="text-primary dark:text-white hover:text-primary dark:hover:text-secondary "
                  >
                    info@realestate.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:111-555-555"
                    className="text-primary dark:text-white hover:text-primary dark:hover:text-secondary "
                  >
                    111-555-555
                  </a>
                </li>
              </ul>
            </div>

            {/* Follow Us Section */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg sm:text-xl mb-4 text-primary dark:text-secondary">
                Follow Us
              </h3>
              <div className="flex flex-col sm:flex-row justify-start items-center gap-2 ">
                <a
                  href="#"
                  className="text-primary dark:text-white hover:text-primary dark:hover:text-secondary"
                >
                  <FaInstagram size={24} />
                </a>
                <a
                  href="#"
                  className="text-primary dark:text-white hover:text-primary dark:hover:text-secondary"
                >
                  <FaLinkedin size={24} />
                </a>
                <a
                  href="#"
                  className="text-primary dark:text-white hover:text-primary dark:hover:text-secondary"
                >
                  <FaTwitter size={24} />
                </a>
                <a
                  href="#"
                  className="text-primary dark:text-white hover:text-primary dark:hover:text-secondary"
                >
                  <FaYoutube size={24} />
                </a>
                <a
                  href="#"
                  className="text-primary dark:text-white hover:text-primary dark:hover:text-secondary font-semibold"
                >
                  <FaFacebook size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Bottom Section (Copyright & Policies) */}
      <div className="w-full py-4 bg-primary/10 dark:bg-grayColor/30 text-center mt-8 sm:mt-0">
        <p className="text-sm text-primary dark:text-secondary font-bold">
          &copy; 2025 Real/Estate. All rights reserved.
        </p>
        <div className=" text-sm text-primary dark:text-secondary">
          <a
            href="#"
            className="hover:text-primary dark:hover:text-secondary font-semibold"
          >
            Terms & Conditions
          </a>{" "}
          |
          <a
            href="#"
            className="hover:text-primary dark:hover:text-secondary font-semibold"
          >
            Privacy Policy
          </a>{" "}
          |
          <a
            href="#"
            className="hover:text-primary dark:hover:text-secondary font-semibold"
          >
            Disclaimer
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
