import { useState, useEffect } from "react";
export const RoadMap = ({ className }) => {
  return (
    <div className={"roadmap background-grey border-r-20 " + className}>
      <div className="roadmap__list"></div>
      <div className="roadmap__main">
      </div>
    </div>
  );
};
