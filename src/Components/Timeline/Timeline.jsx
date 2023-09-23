import React from "react";
import "./Timeline.css";

export default function Timeline() {
  const data = [
    {
      id: 1,
      title: "Hackathon Announcement",
      description: "The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register",
      image: "./images/rectangle1.svg",
      date: "November 18, 2023",
    },
    {
      id: 2,
      title: "Teams Registration begins",
      description: "Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register",
      image: "./images/rectangle2.svg",
      date: "November 18, 2023",
    },
    {
      id: 3,
      title: "Teams Registration ends",
      description: "Interested Participants are no longer allowed to register",
      image: "./images/rectangle3.svg",
      date: "November 18, 2023",
    },
    {
      id: 4,
      title: "Announcement of the accepted teams and ideas",
      description: "All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced",
      image: "./images/rectangle4.svg",
      date: "November 18, 2023",
    },
    {
      id: 5,
      title: "Getlinked Hackathon 1.0 Offically Begins",
      description: "Accepted teams can now proceed to build their ground breaking skill driven solutions",
      date: "November 18, 2023",
    },
    {
      id: 6,
      title: "Demo Day",
      description: "Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day",
      date: "November 18, 2023",
    }
  ];
  return (
    <>
      <div className="text-white mx-[10%] mt-8">
        <h2 className="timeline-h2 text-center">Timeline</h2>
        <p className="timeline-p text-center">
          Here is the breakdown of the time we anticipate <br />
          using for the upcoming event.
        </p>
        <div>
          {data.map((item) => {
              return (
                <div key={item.id} className="timeline-div relative flex justify-normal md:justify-between py-10 flex-col md:flex-row">

                  <div className="timeline-content flex flex-col absolute left-0 md:relative justify-end md:justify-start items-end w-full md:w-[500px]">
                    <h3 className="text-[#D434FE] text-left md:text-right">{item.title}</h3>
                    <p className="items-start w-[400px] md:w-full">{item.description}</p>
                  </div>
                  <div>
                    <div className="flex justify-start md:justify-center items-center align-middle mb-4"><img src='./images/vertical.svg' alt='line' /></div>
                    <div className="rectangle-div flex justify-center align-middle items-center">{item.id}</div>
                  </div>
                  <div className="timeline-date flex absolute md:relative bottom-24 md:left-0 left-[25%] justify-start">
                    <p className="text-[#D434FE]">{item.date}</p>
                  </div>
                </div>
              );
          })}
          {/* <ul>
            <li>
              <span></span>
              <span>
                <h3>Hackathon Announcement</h3>
                <p>
                  The getlinked tech hackathon 1.0 is formally announced to the
                  general public and teams begin to get ready to register
                </p>
              </span>
            </li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul> */}
        </div>
        <div></div>
      </div>
    </>
  );
}
