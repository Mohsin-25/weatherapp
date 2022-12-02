import React from "react";

export default function TodaysForecast({ myData, celsius }) {
  return (
    <div className="TodaysForecast">
      <div className="container-two">
        {myData?.location && (
          <p className="container-heading">
            Today's Forecast for{" "}
            <span className="location">{myData?.location?.name}</span>,
            <span className="location">
              &nbsp;{myData?.location?.region}&nbsp;
            </span>
            <small>
              <small>
                {celsius ? (
                  <span>(temp in &#176;C)</span>
                ) : (
                  <span>(temp in &#176;F)</span>
                )}
              </small>
            </small>
          </p>
        )}
        <div className="day-quarter-box">
          <div className="row">
            <div className="day-quarter">
              <p className="day-quarter-heading">Morning</p>
              {myData?.forecast && (
                <p className="day-quarter-temp">
                  {celsius
                    ? myData?.forecast?.forecastday[0].hour[5]?.temp_c
                    : myData?.forecast?.forecastday[0].hour[5]?.temp_f}
                  &#176;
                </p>
              )}
              <div
                className="day-quarter-img-div"
                title={myData?.forecast?.forecastday[0].hour[5].condition?.text}
              >
                <img
                  src={myData?.forecast?.forecastday[0].hour[5]?.condition.icon}
                  alt=""
                  className="day-quarter-img"
                />
              </div>
              {myData?.forecast && (
                <p>
                  <strong>
                    💧{" "}
                    {myData?.forecast?.forecastday[0].hour[5]?.chance_of_rain}
                  </strong>
                  %
                </p>
              )}
            </div>

            <div className="day-quarter">
              <p className="day-quarter-heading">Afternoon</p>
              {myData?.forecast && (
                <p className="day-quarter-temp">
                  {celsius
                    ? myData?.forecast?.forecastday[0].hour[13]?.temp_c
                    : myData?.forecast?.forecastday[0].hour[13]?.temp_f}
                  &#176;
                </p>
              )}
              <div
                className="day-quarter-img-div"
                title={
                  myData?.forecast?.forecastday[0].hour[13].condition?.text
                }
              >
                <img
                  src={
                    myData?.forecast?.forecastday[0].hour[13]?.condition.icon
                  }
                  alt=""
                  className="day-quarter-img"
                />
              </div>
              {myData?.forecast && (
                <p>
                  <strong>
                    💧{" "}
                    {myData?.forecast?.forecastday[0].hour[13]?.chance_of_rain}
                  </strong>
                  %
                </p>
              )}
            </div>
          </div>
          <div className="row">
            <div className="day-quarter">
              <p className="day-quarter-heading">Evening</p>
              {myData?.forecast && (
                <p className="day-quarter-temp">
                  {celsius
                    ? myData?.forecast?.forecastday[0].hour[17]?.temp_c
                    : myData?.forecast?.forecastday[0].hour[17]?.temp_f}
                  &#176;
                </p>
              )}
              <div
                className="day-quarter-img-div"
                title={
                  myData?.forecast?.forecastday[0].hour[17].condition?.text
                }
              >
                <img
                  src={
                    myData?.forecast?.forecastday[0].hour[17]?.condition.icon
                  }
                  alt=""
                  className="day-quarter-img"
                />
              </div>
              {myData?.forecast && (
                <p>
                  <strong>
                    💧{" "}
                    {myData?.forecast?.forecastday[0].hour[17]?.chance_of_rain}
                  </strong>
                  %
                </p>
              )}
            </div>

            <div className="day-quarter">
              <p className="day-quarter-heading">Overnight</p>
              {myData?.forecast && (
                <p className="day-quarter-temp">
                  {celsius
                    ? myData?.forecast?.forecastday[0].hour[0]?.temp_c
                    : myData?.forecast?.forecastday[0].hour[0]?.temp_f}
                  &#176;
                </p>
              )}
              <div
                className="day-quarter-img-div"
                title={myData?.forecast?.forecastday[0].hour[0].condition?.text}
              >
                <img
                  src={myData?.forecast?.forecastday[0].hour[0]?.condition.icon}
                  alt=""
                  className="day-quarter-img"
                />
              </div>
              {myData?.forecast && (
                <p>
                  <strong>
                    💧{" "}
                    {myData?.forecast?.forecastday[0].hour[0]?.chance_of_rain}
                  </strong>
                  %
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
