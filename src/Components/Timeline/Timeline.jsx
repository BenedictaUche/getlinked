import React from "react";
import "./Timeline.css";

export default function Timeline() {
  const data = [
    {
      id: 1,
      title: "Hackathon Announcement",
      description:
        "The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register",
      date: "November 18, 2023",
    },
    {
      id: 2,
      title: "Teams Registration begins",
      description: "Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register",
      date: "November 18, 2023",
    },
    {
      id: 3,
      title: "Teams Registration ends",
      description: "Interested Participants are no longer allowed to register",
      date: "November 18, 2023",
    },
    {
      id: 4,
      title: "Announcement of the accepted teams and ideas",
      description: "All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced",
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
      <div className="text-white">
        <h2 className="timeline-h2 text-center">Timeline</h2>
        <p className="timeline-p text-center">
          Here is the breakdown of the time we anticipate <br />
          using for the upcoming event.
        </p>
        <div>
          {data.map((item) => {
            return (
              <div key={item.id} className="timeline-div">
                <div className="timeline-date">
                  <p>{item.date}</p>
                </div>
                <div className="timeline-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
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
