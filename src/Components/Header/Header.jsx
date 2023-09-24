import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./Header.css";


export default function Header() {
  return (
    <>
      <Navbar />
      {/* <div><img src="./images/Purple-Lens.png" className="w-[100px] h-[100px]" /></div> */}
      <div className="">
        <hr className="text-gray-600" />
        <div className="igniting absolute right-0 mt-8 mr-6 z-30">
          <div className="ignite-txt">
            <p className="ignite text-white">
              Igniting a Revolution in HR Innovation
            </p>
          </div>
          <div>
            <span className="flex absolute right-0">
              <img src="./images/Vector4.svg" />
            </span>
          </div>
        </div>
        <div className="header flex md:flex-row md:text-left text-center flex-col justify-center align-middle items-center mt-[10%]">
          <div className="flex flex-col gap-3">
            <div className="flex relative">
              <h1 className=" getlinked-text text-5xl text-white font-bold pt-20">
                getLinked Tech Hackathon{" "}
                <span className="text-[#D434FE]">1.0</span>
              </h1>
              <span className="flex absolute right-0 bottom-0">
                <img
                  src="./images/chain.png"
                  alt="chain"
                  className="w-[86px] h-[86px]"
                />
                <img
                  src="./images/blast.png"
                  alt="blast"
                  className="w-[58px] h-[58px]"
                />
              </span>
            </div>
            <p className="participate text-white">
              Participate in getlinked tech Hackathon 2023 stand a chance to win
              a Big prize
            </p>
            <Link to="/register">
              <button className="registerbtn">Register</button>
            </Link>
            <div className="time-div mt-10 ">
              <p className="time">
                00<span>H</span> 00<span>M</span>00<span>S</span>
              </p>
            </div>
          </div>

          <div className="boy-img">
            <div className="relative">
              <img
                src="./images/man-wearing-smart-glasses.png"
                alt="man wearing smart glasses"
                className="h-[600px] w-[828px]"
              />
              <img
                src="./images/virtual_screen.png"
                alt="virtual screen"
                className="absolute top-0"
              />
            </div>
          </div>
        </div>
      </div>
      <hr className="text-white" />
    </>
  );
}
