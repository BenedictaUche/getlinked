import React from "react";
import "./Rules.css";

export default function Rules() {
  return (
    <>
      <div className="intro flex flex-col-reverse md:flex-row justify-center align-middle items-center text-white">
        <div>
          <h2 className="rules-text">Rules and <span className="text-[#D434FE]">Guidelines</span></h2>
          <p className="rules-p">
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you're a coding
            genius, a design maverick, or a concept wizard, you'll have the
            chance to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that's what we're all about!
          </p>
        </div>

        <div>
            <img src="./images/woman-sitting.png" alt="woman sitting" />
        </div>
      </div>
      <hr />
    </>
  );
}
