import React from "react";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export default function ShortTopForecast({
  myData,
  celsius,
  switchTempUnitCelsius,
  switchTempUnitFarenhite,
}) {
  return (
    <div className="ShortTopForecast">
      <div className="container-one">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {myData?.location && (
            <p className="location-div">
              <span className="location">{myData?.location?.name}</span>,
              <span className="location">
                &nbsp;{myData?.location?.region}&nbsp;
              </span>
              as of{" "}
              {Number(myData?.location?.localtime.split(" ")[1].split(":")[0]) >
              12
                ? Number(
                    myData?.location?.localtime.split(" ")[1].split(":")[0]
                  ) - 12
                : Number(
                    myData?.location?.localtime.split(" ")[1].split(":")[0]
                  )}
              {Number(myData?.location?.localtime.split(" ")[1].split(":")[0]) <
              12 ? (
                <span> am</span>
              ) : (
                <span> pm</span>
              )}{" "}
              <small>
                <small>({myData?.location?.localtime.split(" ")[1]})</small>
              </small>
            </p>
          )}
          <div>
            <button
              onClick={switchTempUnitCelsius}
              className="switchTempUnitCelsius active"
            >
              &#176;C
            </button>
            <button
              onClick={switchTempUnitFarenhite}
              className="switchTempUnitFarenhite"
            >
              &#176;F
            </button>
          </div>
        </div>
        <div
          style={{
            padding: 10,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>
            {myData?.current && (
              <p>
                <span className="temp">
                  {celsius ? myData?.current?.temp_c : myData?.current?.temp_f}
                  &#176;
                  {/* <small>
                <small><small>C</small></small>
              </small> */}
                </span>
              </p>
            )}

            <p className="condition">{myData?.current?.condition?.text}</p>
            <div className="day-night">
              <span>
                {/* ⬆️ */}
                <ArrowDropUpIcon
                  className="arrow max"
                  sx={{ fontSize: 30 }}
                ></ArrowDropUpIcon>
                {celsius
                  ? myData?.forecast?.forecastday[0].day?.maxtemp_c
                  : myData?.forecast?.forecastday[0].day?.maxtemp_f}
                &#176;
              </span>
              {/* &#183; */}
              <span>
                {/* ⬇️ */}
                <ArrowDropDownIcon
                  className="arrow min"
                  sx={{ fontSize: 30 }}
                ></ArrowDropDownIcon>
                {celsius
                  ? myData?.forecast?.forecastday[0].day?.mintemp_c
                  : myData?.forecast?.forecastday[0].day?.mintemp_f}
                &#176;
              </span>
            </div>
          </div>
          {myData?.current && (
            <div className="condition-img-div">
              <img
                src={myData?.current?.condition?.icon}
                alt=""
                className="condition-img"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
