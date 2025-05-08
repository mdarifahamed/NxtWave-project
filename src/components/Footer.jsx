import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import google from "../assets/images/icons/google.png";
import mastercard from "../assets/images/icons/mastercard.png";
import paypal from "../assets/images/icons/paypal.png";
import amex from "../assets/images/icons/amex.png";
import apple from "../assets/images/icons/apple.png";
import opay from "../assets/images/icons/opay.png";
import american from "../assets/images/icons/american.png";

function Footer() {
  return (
    <div className="bg-black text-white py-10 px-4 sm:px-6">
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        
        <div>
          <p className="text-lg font-semibold mb-2">Be the first to know</p>
          <p className="text-gray-300">Sign up for updates from mettā muse.</p>
          <div className="flex flex-col sm:flex-row gap-3 mt-3">
            <input
              type="text"
              className="px-4 py-2 w-full sm:w-[300px] text-black rounded"
              placeholder="Enter your e-mail"
            />
            <button className="border border-gray-500 px-4 py-2 rounded text-gray-500 hover:text-white hover:border-white transition">
              Subscribe
            </button>
          </div>
        </div>

        
        <div>
          <p className="text-lg font-semibold mb-2">CONTACT US</p>
          <p className="text-gray-300">+44 221 133 5360</p>
          <p className="text-gray-300">customercare@mettamuse.com</p>
          <p className="mt-4 text-lg font-semibold">Currency</p>
          <div className="flex items-center gap-2 mt-1">
            <img
              src={american}
              alt="USD"
              className="w-10 h-10 rounded-full"
            />
            <p className="text-gray-300">+ USD</p>
          </div>
          <p className="text-gray-400 text-sm mt-1">
            Transactions will be completed in Euros and a currency reference is available on hover.
          </p>
        </div>
      </div>

      
      <div className="h-px bg-gray-500 w-full my-8"></div>

     
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-2 sm:px-6">
        
        <div>
          <p className="font-semibold mb-2">About Us</p>
          <ul className="space-y-1 text-gray-300 cursor-pointer">
            <li>Stories</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>EU Compliances Docs</li>
          </ul>
        </div>

       
        <div>
          <p className="font-semibold mb-2">Quick Links</p>
          <ul className="space-y-1 text-gray-300 cursor-pointer" >
            <li>Orders & Shipping</li>
            <li>Join/Login as a Seller</li>
            <li>Payment & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div>
          <p className="font-semibold mb-2">Follow Us</p>
          <div className="flex gap-4 text-2xl mb-3">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} style={{ color: "#0A66C2" }} />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} style={{ color: "#E1306C" }} />
            </a>
          </div>
          <p className="mb-2">mettā muse Accepts</p>
          <div className="flex flex-wrap gap-4 items-center">
            {[google, mastercard, paypal, amex, apple, opay].map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`payment-${i}`}
                className="w-[50px] h-[40px] object-contain rounded-[8px]"
              />
            ))}
          </div>
        </div>
      </div>

      
      <div className="text-center mt-10 text-sm text-gray-400">
        <p>Copyright © 2025 mettamuse. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;

