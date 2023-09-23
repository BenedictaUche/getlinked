import React from "react";
import './Introduction.css'
import Header from "../../Components/Header/Header";

export default function Introduction() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between intro mb-10 align-middle items-center">
        <div>
          <img src="./images/The-big-idea.png" alt="light bulb" className="mt-10" />
        </div>

        <div className="text-white text-center md:text-left">
          <h2 className="intro-text">Introduction to getlinked <span className="text-[#D434FE]">tech Hackathon 1.0</span></h2>
          <p className="intro-p">
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you're a coding
            genius, a design maverick, or a concept wizard, you'll have the
            chance to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that's what we're all about!
          </p>
        </div>
      </div>
      <hr />
    </>
  );
}
