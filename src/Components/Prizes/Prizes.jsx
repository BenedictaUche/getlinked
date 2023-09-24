import React from "react";
import "./Prizes.css";

export default function Prizes() {
  return (
    <>
      <hr />
      <div className="prizes_and_awards flex flex-col text-white py-20 pr-10 relative">
        <div className="float-right mx-14">
          <h2 >
            Prizes and <br />
            <span className="text-[#D434FE]">Rewards</span>
          </h2>
          <p >
            Highlight of the prizes or rewards for winners and <br /> for
            participants.
          </p>
        </div>
        <div className="prize-imgs flex justify-between px-10 py-18">
          <img src="./images/cup.png" alt="an awards cup" className="" />
          <img
            src="./images/Rewards.svg"
            alt="the reward cups"
            className="mt-30"
          />
        </div>
      </div>
      <hr />
    </>
  );
}
