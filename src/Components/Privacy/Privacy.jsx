import React from "react";
import { Text } from "@chakra-ui/react";
import "./Privacy.css";

export default function Privacy() {
  return (
    <>
      <div className="privacy-container container justify-between flex flex-col md:flex-row text-white py-16 md:px-0 px-10 md:pl-20">
        <div className="">
          <div>
            <h2 className="">
              Privacy Policy and <span className="text-[#D434FE]">Terms</span>
            </h2>
            <p className="updated pt-6 pb-8">Last updated on September 12, 2023</p>
            <p className="below pb-8">
              Below are our privacy & policy, which outline a lot of goodies.
              It's our aim to always take of our participant
            </p>
          </div>
          <div className="privacy-border border-2 p-10">
            <Text className="priv-text">
              At getlinked tech Hackathon 1.0, we value your privacy and are
              committed to protecting your personal information. This Privacy
              Policy outlines how we collect, use, disclose, and safeguard your
              data when you participate in our tech hackathon event. By
              participating in our event, you consent to the practices described
              in this policy.
            </Text>
            <Text className="text-[#D434FE] mt-4">Licensing Policy</Text>
            <Text>Here are terms of our Standard License:</Text>
            <ul className="flex flex-col gap-6">
              <li className="flex gap-4">
                <img src="./images/tick.svg" alt="tick icon" />
                The Standard License grants you a non-exclusive right to
                navigate and register for our event
              </li>
              <li className="flex gap-4">
                <img src="./images/tick.svg" alt="tick icon" />
                You are licensed to use the item available at any free source
                sites, for your project developement
              </li>
            </ul>
          </div>
        </div>

        <div className="relative">
          <div className="">
          <img src="./images/man-with-lock.png" alt="man with lock" className="man"/>
          <img src="./images/Vector.svg" alt="vector" className="absolute top-0 shield"/>
          </div>
        </div>
      </div>
    </>
  );
}
