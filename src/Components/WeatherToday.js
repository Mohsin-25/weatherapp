import React from "react";

export default function WeatherToday({ myData, celsius }) {
  return (
    <div className="weatherToday">
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
              <span>{myData?.forecast?.forecastday[0]?.astro?.sunrise}</span>{" "}
            </p>
            <p>
              Sunset :{" "}
              <span>{myData?.forecast?.forecastday[0]?.astro?.sunset}</span>{" "}
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
              <p>{myData?.forecast?.forecastday[0].day?.totalprecip_mm} mm</p>
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
    </div>
  );
}
