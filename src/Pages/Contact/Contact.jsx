import React, {useParams, useHistory} from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Form from "../../Components/Form/Form";
import "./Contact.css";
import { FaInstagram, FaTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

export default function Contact() {

  return (
    <>
      <Navbar />
      <Link to='/'><img src='./images/back.svg' className="block md:hidden absolute left-10"/></Link>
      <div className="contact px-40 flex flex-col-reverse md:flex-row justify-between my-14">

        <div className="">
          <h2 className="contact-txt text-[#D434FE] h2">Get in Touch</h2>

          <div className="contact-info">
            <ul className="flex flex-col gap-6 mt-8">
              <li className="w-[150px]">Contact Information</li>
              <li className="w-[150px]">27, Alara Street Yaba 100012 Lagos State</li>
              <li>Call Us : 07067981819</li>
              <li className="w-[280px]">we are open from Monday-Friday 08:00am - 05:00pm</li>
            </ul>
          </div>
          <div className="flex flex-col">
            <p className="text-[#D434FE] share py-10">Share on</p>
            <ul className="flex flex-row gap-6">
                <li><FaInstagram /></li>
                <li><FaTwitter /></li>
                <li><FaFacebookF /></li>
                <li><FaLinkedinIn /></li>
            </ul>
          </div>
        </div>
        <div className="form-container">
        <Form />
        </div>
      </div>
    </>
  );
}
