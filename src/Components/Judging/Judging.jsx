import React from "react";
import './Judging.css'

export default function Judging() {
  return (
    <>
      <div className="flex intro flex-col mt-5 md:mt-10 md:flex-row justify-between align-middle items-center">
        <div>
          <img src="./images/woman_with_bar.png" alt="judging" className="w-[600px] h-[550px]" />
        </div>

        <div className="text-white mb-8 text-center md:text-left">
          <h2 className="rules-text">
            Judging Criteria <span className="text-[#D434FE]">Key attributes</span>
          </h2>
          <ul className="judging-ul flex flex-col gap-4 mt-8 mr-20">
            <li>
              <span className="text-[#FF26B9]">Innovation and Creativity:</span> Evaluate the uniqueness and creativity
              of the solution. Consider whether it addresses a real-world
              problem in a novel way or introduces innovative features.
            </li>
            <li>
              <span className="text-[#FF26B9]">Functionality:</span> Assess how well the solution works. Does it perform
              its intended functions effectively and without major issues?
              Judges would consider the completeness and robustness of the
              solution.
            </li>
            <li>
              <span className="text-[#FF26B9]">Impact and Relevance:</span> Determine the potential impact of the
              solution in the real world. Does it address a significant problem,
              and is it relevant to the target audience? Judges would assess the
              potential social, economic, or environmental benefits.
            </li>
            <li>
              <span className="text-[#FF26B9]">Technical Complexity:</span> Evaluate the technical sophistication of the
              solution. Judges would consider the complexity of the code, the
              use of advanced technologies or algorithms, and the scalability of
              the solution.
            </li>
            <li>
              <span className="text-[#FF26B9]">Adherence to Hackathon Rules:</span> Judges will Ensure that the team
              adhered to the rules and guidelines of the hackathon, including
              deadlines, use of specific technologies or APIs, and any other
              competition-specific requirements.
            </li>
          </ul>
          <button className="registerbtn mt-10">Read More</button>
        </div>
      </div>
      <hr />
    </>
  );
}
