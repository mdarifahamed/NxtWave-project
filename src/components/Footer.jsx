import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Correct FontAwesomeIcon import
import { faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons"; //
import google from "../assets/images/icons/google.png";
import mastercard from "../assets/images/icons/mastercard.png";
import paypal from "../assets/images/icons/paypal.png";
import amex from "../assets/images/icons/amex.png";
import apple from "../assets/images/icons/apple.png";
import opay from "../assets/images/icons/opay.png";

function Footer() {
  return (
    <>
      <div className="bg-black text-white py-10">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div>
            <p className="text-lg font-semibold mb-2">Be the first to know</p>
            <p className="text-gray-300">
              Sign up for updates from mettā muse.
            </p>
            <div className="flex gap-3 mt-3">
              <input
                type="text"
                className="w-[300px] px-3"
                placeholder="Enter your e-mail"
              />
              <div className="border border-gray-500 p-2 rounded">
                <p className="text-gray-500">Subscribe</p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div>
            <p className="text-lg font-semibold mb-2">CONTACT US</p>
            <p className="text-gray-300">+44 221 133 5360</p>
            <p className="text-gray-300">customercare@mettamuse.com</p>
            <p className="mt-4 text-lg font-semibold">Currency</p>
            <p className="text-gray-300">+ USD</p>
            <p className="text-gray-400 text-sm">
              Transactions will be completed in Euros and a currency reference
              is available on hover.
            </p>
          </div>
        </div>
        <div className="h-px bg-gray-500 w-full mt-5"></div>

        <div className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: About */}
          <div>
            <p className="font-semibold mb-2">About Us</p>
            <p className="mb-1">Stories</p>
            <p className="mb-1">Boutiques</p>
            <p className="mb-1">Contact Us</p>
            <p>EU Compliances Docs</p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <p className="font-semibold mb-2">Quick Links</p>
            <p className="mb-1">Orders & Shipping</p>
            <p className="mb-1">Join/Login as a Seller</p>
            <p className="mb-1">Payment & Pricing</p>
            <p className="mb-1">Return & Refunds</p>
            <p className="mb-1">FAQs</p>
            <p className="mb-1">Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>

          {/* Column 3: Follow Us */}
          <div>
            <p className="font-semibold mb-2">Follow Us</p>
            <p>mettā muse Accepts</p>
            <div style={{ fontSize: "32px", display: "flex", gap: "20px" }}>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  style={{ color: "#0A66C2" }}
                />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  style={{ color: "#E1306C" }}
                />
              </a>
            </div>

            <div className="flex gap-4 flex-wrap">
              <img
                src={google}
                alt="Google"
                className="w-[50px] h-[40px] object-contain rounded-[8px]"
              />
              <img
                src={mastercard}
                alt="Mastercard"
                className="w-[50px] h-[40px] object-contain rounded-[8px]"
              />
              <img
                src={paypal}
                alt="Paypal"
                className="w-[50px] h-[40px] object-contain rounded-[8px]"
              />
              <img
                src={amex}
                alt="Amex"
                className="w-[50px] h-[40px] object-contain rounded-[8px]"
              />
              <img
                src={apple}
                alt="Apple Pay"
                className="w-[50px] h-[40px] object-contain rounded-[8px]"
              />
              <img
                src={opay}
                alt="Opay"
                className="w-[50px] h-[40px] object-contain rounded-[8px]"
              />
            </div>
          </div>
        </div>

        <div className="text-center">
          <p>Copyright © 2025 mettamuse. All rights reserved.</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
