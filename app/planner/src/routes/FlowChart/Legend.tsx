import React from "react";

import "@/routes/FlowChart/Legend.css";

export const Legend: React.FC = () => {
  return (
    <div className="legend">
      <div className="legend-row">
        <div className="class-fill completed-line"></div>
        <p className={"shift-left"} aria-label={"Completed Course"}>Completed Course</p>
      </div>
      <div className="legend-row">
        <div className="class-fill uncompleted-line"></div>
        <div className={"shift-left"} aria-label={"Uncompleted Course"}>Uncompleted Course</div>
      </div>
      {/*<div className="legend-row">*/}
      {/*  <div className="class-fill confirmed-line"></div>*/}
      {/*  <p className={"shift-left"} aria-label={"Confirmed Course"}>Confirmed Course</p>*/}
      {/*</div>*/}
      {/*<div className="legend-row">*/}
      {/*  <div className="class-fill unconfirmed-line"></div>*/}
      {/*  <p className={"shift-left"} aria-label={"Unconfirmed Course"}>Unconfirmed Course</p>*/}
      {/*</div>*/}
      <div className="legend-row">
        <svg
          width="50"
          height="12"
          viewBox="0 0 50 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            className={"prereq-path"}
            x="44.9103"
            y="4"
            width="4"
            height="44.9103"
            rx="1"
            transform="rotate(90 44.9103 4)"
            fill="black"
          />
          <path
            className={"prereq-path"}
            d="M48.9734 5.20818C49.4924 5.6085 49.4924 6.3915 48.9734 6.79182L44.8742 9.95371C44.2168 10.4608 43.2635 9.99218 43.2635 9.1619V2.8381C43.2635 2.00782 44.2168 1.53918 44.8742 2.04629L48.9734 5.20818Z"
          />
        </svg>
        <p className={"shift-left"} aria-label={"Prereq Course"}>Prereq Course</p>
      </div>
      <div className="legend-row">
        <svg
          width="50"
          height="12"
          viewBox="0 0 50 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            className={"concurrent-path"}
            x="44.9103"
            y="4"
            width="4"
            height="44.9103"
            rx="1"
            transform="rotate(90 44.9103 4)"
          />
          <path
            className={"concurrent-path"}
            d="M48.9734 5.20818C49.4924 5.6085 49.4924 6.3915 48.9734 6.79182L44.8742 9.95371C44.2168 10.4608 43.2635 9.99218 43.2635 9.1619V2.8381C43.2635 2.00782 44.2168 1.53918 44.8742 2.04629L48.9734 5.20818Z"
          />
        </svg>
        <p className={"shift-left"} aria-label={"Concurrent Course"}>Concurrent Course</p>
      </div>
      <div className="legend-row">
        <svg
          width="50"
          height="12"
          viewBox="0 0 50 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            className={"recommended-path"}
            x="44.9103"
            y="4"
            width="4"
            height="44.9103"
            rx="1"
            transform="rotate(90 44.9103 4)"
          />
          <path
            className={"recommended-path"}
            d="M48.9734 5.20818C49.4924 5.6085 49.4924 6.3915 48.9734 6.79182L44.8742 9.95371C44.2168 10.4608 43.2635 9.99218 43.2635 9.1619V2.8381C43.2635 2.00782 44.2168 1.53918 44.8742 2.04629L48.9734 5.20818Z"
          />
        </svg>
        <p className={"shift-left"} aria-label={"Recommended Course"}>Recommended Course</p>
      </div>
    </div>
  );
};
