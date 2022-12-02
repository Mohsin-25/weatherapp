import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Card.css";
import HourlyForecast from "./HourlyForecast";
import WeatherToday from "./WeatherToday";
import TodaysForecast from "./TodaysForecast";
import ShortTopForecast from "./ShortTopForecast";

export default function Card() {
  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState("");
  const [searchText, setSearchText] = useState("");
  const [btn, setBtn] = useState("");
  const [celsius, setCelsius] = useState(true);

  const MyAPI = "https://weatherapi-com.p.rapidapi.com/forecast.json";
  const options = {
    url: MyAPI,
    params: { q: `${searchText}` || "india", days: "3" },
    headers: {
      "X-RapidAPI-Key": "8c3ec3c425mshb7667a4fb271420p12cf3ejsn8eed16b15dd9",
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    },
  };

  const getData = async () => {
    try {
      const res = await axios.request(options).then(function (response) {
        setMyData(response.data);
      });
    } catch (error) {
      setIsError(error);
    }
  };

  //
  // console.log(myData);
  //

  useEffect(() => {
    getData(`${MyAPI}`);
  }, [btn]);

  const submitHandler = (e) => {
    e.preventDefault();
    setBtn(searchText);
  };

  document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      submitHandler(e);
    }
  });

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

  return (
    <div className="card">
      <div className="input-div">
        <input
          type="text"
          placeholder="Search for a city"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button onClick={submitHandler}>Search</button>
      </div>
      {isError && (
        <p style={{ textAlign: "center", color: "white" }}>{isError.message}</p>
      )}

      <div className="containers">
        <ShortTopForecast
          myData={myData}
          celsius={celsius}
          switchTempUnitCelsius={switchTempUnitCelsius}
          switchTempUnitFarenhite={switchTempUnitFarenhite}
        ></ShortTopForecast>

        <TodaysForecast myData={myData} celsius={celsius}></TodaysForecast>

        <WeatherToday myData={myData} celsius={celsius}></WeatherToday>

        <HourlyForecast myData={myData} celsius={celsius}></HourlyForecast>
      </div>
    </div>
  );
}
