import React from "react";
import "./Partners.css";

export default function Partners() {
  return (
    <>
      <div className="partners text-white">
        <h2 className="text-center py-6">Partners and Sponsors</h2>
        <p className="text-center py-4">
          Getlinked Hackathon 1.0 is honored to have the following major<br />
          companies as its partners and sponsors
        </p>
        <div className="p-14 m-14 border-[#D434FE] border-2">
          <img src="./images/partners.svg" alt="partners and sponsors of getlinked"  />
        </div>
      </div>
      <hr />
    </>
  );
}
