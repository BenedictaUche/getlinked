import React from "react";
import {
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaLinkedinIn,
  FaPhone,
  FaSearchLocation,
} from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <div className="footer flex justify-center flex-col text-white">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="footer-div flex flex-col gap-4">
            <img
              src="./images/getlinked.svg"
              alt="getlinked logo"
              className="mt-10 w-40"
            />
            <p className="md:w-[25rem] w-full">
              Getlinked Tech Hackathon is a technology innovation program
              established by a group of organizations with the aim of showcasing
              young and talented individuals in the field of technology
            </p>
            <div className="mt-4">
              <p>
                Terms of use <span className="text-[#D434FE]">|</span> Privacy Policy
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-6 mt-8">
            <div className="useful">
                <p className="text-[#D434FE]">Useful Links</p>
                <ul className="flex flex-col gap-3">
                    <li>Overview</li>
                    <li>Timeline</li>
                    <li>FAQs</li>
                    <li>Register</li>
                </ul>
            </div>
            <div>
              <ul className="socials flex justify-between gap-3 align-middle items-center">
                <li className="text-[#D434FE]">Follow us</li>
                <li>
                  <FaInstagram />
                </li>
                <li>
                  <FaTwitter />
                </li>
                <li>
                  <FaFacebook />
                </li>
                <li>
                  <FaLinkedinIn />
                </li>
              </ul>
            </div>
          </div>

          <div className="useful mt-8">
          <p className="text-[#D434FE]">Contact us</p>
          <div className="flex flex-col gap-6 ">
            <ul>
              <li className="flex gap-2">
                <span>
                  <FaPhone />
                </span>
                +234 6707653444
              </li>
              <li className="flex gap-2">
                <span>
                  <FaSearchLocation />
                </span>
                27,Alara Street Yaba 100012 Lagos State
              </li>
            </ul>
            </div>
          </div>
        </div>

        <div>
          <p className="text-center">All rights reserved. © getlinked Ltd.</p>
        </div>
      </div>
    </>
  );
}
