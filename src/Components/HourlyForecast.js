import React, { useState } from "react";
import SwipeIcon from "@mui/icons-material/Swipe";
import axios from "axios";

export default function HourlyForecast({ myData, celsius }) {
  return (
    <div className="hourlyForecast">
      <div className="container-four">
        {myData?.location && (
          <p className="container-heading">
            Today's Hourly Forecast for{" "}
            <span className="location">{myData?.location?.name}</span>,
            <span>&nbsp;{myData?.location?.region}&nbsp;</span>
            <small>
              <small>
                {celsius ? (
                  <span>(temp in &#176;C)</span>
                ) : (
                  <span>(temp in &#176;F)</span>
                )}
              </small>
            </small>{" "}
          </p>
        )}
        {myData?.location && (
          <SwipeIcon className="swipeIcon" sx={{ fontSize: 25 }}></SwipeIcon>
        )}
        <div className="hourly-forecast-div">
          {myData?.forecast?.forecastday[0]?.hour?.map((hour, index) => {
            return (
              <div key={index} className="hourly-forecast">
                <p className="hourly-forecast-temp">
                  {celsius ? hour.temp_c : hour.temp_f}&#176;
                </p>
                <div>
                  <img
                    src={hour.condition?.icon}
                    className="hourly-forecast-img"
                    alt=""
                  />
                </div>
                <p>{hour.condition?.text}</p>
                <div style={{ display: "flex" }}>
                  <strong>
                    {/* <p>{Number(hour.time?.split(" ")[1].split(":")[0])}</p> */}
                    {Number(hour.time?.split(" ")[1].split(":")[0]) > 12 ? (
                      <p>
                        {Number(hour.time?.split(" ")[1].split(":")[0]) - 12}
                        &nbsp;
                      </p>
                    ) : (
                      <p>
                        {Number(hour.time?.split(" ")[1].split(":")[0])}
                        &nbsp;
                      </p>
                    )}
                  </strong>
                  {Number(hour.time?.split(" ")[1].split(":")[0]) < 12 ? (
                    <p> am</p>
                  ) : (
                    <p> pm</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
