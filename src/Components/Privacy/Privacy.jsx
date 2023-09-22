import React from "react";
import { Text } from "@chakra-ui/react";

export default function Privacy() {
  return (
    <>
      <div className="text-white">
        <div>
          <div>
            <h2>
              Privacy Policy and <span>Terms</span>
            </h2>
            <p>Last updated on September 12, 2023</p>
            <p>
              Below are our privacy & policy, which outline a lot of goodies.
              It's our aim to always take of our participant
            </p>
          </div>
          <div>
            <Text>
              At getlinked tech Hackathon 1.0, we value your privacy and are
              committed to protecting your personal information. This Privacy
              Policy outlines how we collect, use, disclose, and safeguard your
              data when you participate in our tech hackathon event. By
              participating in our event, you consent to the practices described
              in this policy.
            </Text>
            <Text>Licensing Policy</Text>
            <Text>Here are terms of our Standard License:</Text>
            <ul>
              <li>
                <img src='./images/tick.svg' alt='tick icon'/>
                The Standard License grants you a non-exclusive right to
                navigate and register for our event
              </li>
              <li>
              <img src='./images/tick.svg' alt='tick icon'/>
                You are licensed to use the item available at any free source
                sites, for your project developement
              </li>
            </ul>
          </div>
        </div>

        <div></div>
      </div>
    </>
  );
}
