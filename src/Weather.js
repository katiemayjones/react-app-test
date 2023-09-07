import React from "react";

export default function Weather() {
  return (
    <div className="row">
      <div className="col">
        <img
          src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/few-clouds-day.png"
          id="main-icon"
          alt="cloudy-day-icon"
          className ="mainIcon"
        />
      </div>{" "}
    </div>
  );
}
