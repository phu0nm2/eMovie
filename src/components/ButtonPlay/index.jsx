import { PlayArrow } from "@material-ui/icons";
import React from "react";
import "./index.scss";
const ButtonPlay = () => {
  return (
    <div className="buttonPlay">
      <button className="btn btn-play">
        <PlayArrow></PlayArrow>
      </button>
    </div>
  );
};

export default ButtonPlay;
