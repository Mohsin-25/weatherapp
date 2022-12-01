import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Card.css";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SwipeIcon from "@mui/icons-material/Swipe";

export default function Card() {
  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState("");
  const [searchText, setSearchText] = useState("");
  const [btn, setBtn] = useState("");
  const [containers, setContainers] = useState(true);

  const MyAPI = "https://weatherapi-com.p.rapidapi.com/forecast.json";
  const options = {
    url: MyAPI,
    params: { q: `${searchText}`, days: "3" },
    headers: {
      "X-RapidAPI-Key": "8c3ec3c425mshb7667a4fb271420p12cf3ejsn8eed16b15dd9",
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    },
  };

  const getData = async (url) => {
    try {
      //   const res = await axios.get(url);
      //   setMyData(res.data);
      const res = await axios.request(options).then(function (response) {
        setMyData(response.data);
      });
    } catch (error) {
      setIsError(error);
    }
  };
  useEffect(() => {
    getData(`${MyAPI}`);
  }, [btn]);

  const submitHandler = (e) => {
    e.preventDefault();
    setBtn(searchText);

    // setTimeout(() => {
    //   setContainers(!containers);
    // }, 1000);

    setContainers(true);
  };

  document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      submitHandler(e);
    }
  });
  // console.log(myData);

  const [celsius, setCelsius] = useState(true);

  const switchTempUnitFarenhite = () => {
    setCelsius(false);
    document.querySelector(".switchTempUnitFarenhite").classList.add("active");
    document.querySelector(".switchTempUnitCelsius").classList.remove("active");
  };

  const switchTempUnitCelsius = () => {
    setCelsius(true);
    document.querySelector(".switchTempUnitCelsius").classList.add("active");
    document
      .querySelector(".switchTempUnitFarenhite")
      .classList.remove("active");
  };

  // window.addEventListener("load", () => {
  //   setContainers(!containers);
  // });

  //   axios
  //     .request(options)
  //     .then(function (response) {
  //       setMyData(response.data);
  //     })
  //     .catch(function (error) {
  //       setIsError(error);
  //     });

  return (
    <>
      <div className="card">
        {/* {isError && <p>{isError.message}</p>} */}
        <div className="input-div">
          <input
            type="text"
            placeholder="Search for a city"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button onClick={submitHandler}>Search</button>
        </div>
        {containers && myData !== "" && (
          <div className="containers">
            <div className="container-one">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                {myData?.location && (
                  <p className="location-div">
                    <span className="location">{myData?.location?.name}</span>,
                    <span className="location">
                      &nbsp;{myData?.location?.region}&nbsp;
                    </span>
                    as of{" "}
                    {Number(
                      myData?.location?.localtime.split(" ")[1].split(":")[0]
                    ) > 12
                      ? Number(
                          myData?.location?.localtime
                            .split(" ")[1]
                            .split(":")[0]
                        ) - 12
                      : Number(
                          myData?.location?.localtime
                            .split(" ")[1]
                            .split(":")[0]
                        )}
                    {Number(
                      myData?.location?.localtime.split(" ")[1].split(":")[0]
                    ) < 12 ? (
                      <span> am</span>
                    ) : (
                      <span> pm</span>
                    )}{" "}
                    <small>
                      <small>
                        ({myData?.location?.localtime.split(" ")[1]})
                      </small>
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
                        {celsius
                          ? myData?.current?.temp_c
                          : myData?.current?.temp_f}
                        &#176;
                        {/* <small>
                <small><small>C</small></small>
              </small> */}
                      </span>
                    </p>
                  )}

                  <p className="condition">
                    {myData?.current?.condition?.text}
                  </p>
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

            <div className="container-three">
              {myData?.location && (
                <p className="container-heading">
                  Weather Today in{" "}
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
                  </small>
                </p>
              )}
              <div className="feelsLike-sunRiseSet-div">
                {myData?.current && (
                  <div className="feelsLike-div">
                    <p className="feelsLike-temp">
                      {celsius
                        ? myData?.current?.feelslike_c
                        : myData?.current?.feelslike_f}
                      &#176;
                    </p>
                    <p className="feelsLike">Feels like</p>
                  </div>
                )}
                <div className="sunRiseSet-div">
                  <p>
                    Sunrise :{" "}
                    <span>
                      {myData?.forecast?.forecastday[0]?.astro?.sunrise}
                    </span>{" "}
                  </p>
                  <p>
                    Sunset :{" "}
                    <span>
                      {myData?.forecast?.forecastday[0]?.astro?.sunset}
                    </span>{" "}
                  </p>
                </div>
              </div>
              <div className="moreDetails">
                <div className="column">
                  <div className="moreDetails-row">
                    <p>
                      <span>🌡️</span> High/Low
                    </p>
                    <p>
                      {celsius
                        ? myData?.forecast?.forecastday[0]?.day?.maxtemp_c
                        : myData?.forecast?.forecastday[0]?.day?.maxtemp_f}
                      &#176;/
                      {celsius
                        ? myData?.forecast?.forecastday[0]?.day?.mintemp_c
                        : myData?.forecast?.forecastday[0]?.day?.mintemp_f}
                      &#176;
                    </p>
                  </div>
                  <hr />
                  <div className="moreDetails-row">
                    <p>
                      <span>☵</span> Humidity
                    </p>
                    <p>{myData?.current?.humidity}%</p>
                  </div>
                  <hr />
                  <div className="moreDetails-row">
                    <p>
                      <span>↕️</span> Pressure
                    </p>
                    <p>{myData?.current?.pressure_mb} mb</p>
                  </div>
                  <hr />
                  <div className="moreDetails-row">
                    <p>
                      <span>👀</span> Visibility
                    </p>

                    <p>{myData?.current?.vis_km} km</p>
                  </div>
                  <hr />
                </div>
                <div className="column">
                  <div className="moreDetails-row">
                    <p>
                      <span>🎐</span> Wind
                    </p>

                    <p>{myData?.current?.wind_kph} km/h</p>
                  </div>
                  <hr />
                  <div className="moreDetails-row">
                    <p>
                      <span>💧</span> Precipitation
                    </p>

                    {/* <p>{myData?.current?.precip_mm} mm</p> */}
                    <p>
                      {myData?.forecast?.forecastday[0].day?.totalprecip_mm} mm
                    </p>
                  </div>
                  <hr />
                  <div className="moreDetails-row">
                    <p>
                      <span>🌑</span> UV Index
                    </p>

                    <p>{myData?.current?.uv} of 10</p>
                  </div>
                  <hr />
                  <div className="moreDetails-row">
                    <p>
                      <span>🌛</span> Moon Phase
                    </p>
                    {/* <p>Waxing Crescent</p> */}
                    <p>--</p>
                  </div>
                  <hr />
                </div>
              </div>
            </div>

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
                      title={
                        myData?.forecast?.forecastday[0].hour[5].condition?.text
                      }
                    >
                      <img
                        src={
                          myData?.forecast?.forecastday[0].hour[5]?.condition
                            .icon
                        }
                        alt=""
                        className="day-quarter-img"
                      />
                    </div>
                    {myData?.forecast && (
                      <p>
                        <strong>
                          💧{" "}
                          {
                            myData?.forecast?.forecastday[0].hour[5]
                              ?.chance_of_rain
                          }
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
                        myData?.forecast?.forecastday[0].hour[13].condition
                          ?.text
                      }
                    >
                      <img
                        src={
                          myData?.forecast?.forecastday[0].hour[13]?.condition
                            .icon
                        }
                        alt=""
                        className="day-quarter-img"
                      />
                    </div>
                    {myData?.forecast && (
                      <p>
                        <strong>
                          💧{" "}
                          {
                            myData?.forecast?.forecastday[0].hour[13]
                              ?.chance_of_rain
                          }
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
                        myData?.forecast?.forecastday[0].hour[17].condition
                          ?.text
                      }
                    >
                      <img
                        src={
                          myData?.forecast?.forecastday[0].hour[17]?.condition
                            .icon
                        }
                        alt=""
                        className="day-quarter-img"
                      />
                    </div>
                    {myData?.forecast && (
                      <p>
                        <strong>
                          💧{" "}
                          {
                            myData?.forecast?.forecastday[0].hour[17]
                              ?.chance_of_rain
                          }
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
                      title={
                        myData?.forecast?.forecastday[0].hour[0].condition?.text
                      }
                    >
                      <img
                        src={
                          myData?.forecast?.forecastday[0].hour[0]?.condition
                            .icon
                        }
                        alt=""
                        className="day-quarter-img"
                      />
                    </div>
                    {myData?.forecast && (
                      <p>
                        <strong>
                          💧{" "}
                          {
                            myData?.forecast?.forecastday[0].hour[0]
                              ?.chance_of_rain
                          }
                        </strong>
                        %
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>

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
                <SwipeIcon
                  className="swipeIcon"
                  sx={{ fontSize: 25 }}
                ></SwipeIcon>
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
                          {Number(hour.time?.split(" ")[1].split(":")[0]) >
                          12 ? (
                            <p>
                              {Number(hour.time?.split(" ")[1].split(":")[0]) -
                                12}
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
        )}
      </div>
    </>
  );
}
