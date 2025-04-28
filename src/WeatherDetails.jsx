import React from "react";
import humidityPic from "./assets/humidityPic.png";
import windSpeedPic from "./assets/windSpeedPic.png";

const WeatherDetails = ({
  icon,
  temprature,
  city,
  country,
  latitude,
  longitude,
  humidity,
  windSpeed
}) => {
  return (
    <div className="">
      <div className="mt-14 mb-6 ">
        <img src={icon} alt="image" className="w-25 mx-auto " />
      </div>
      <div className="text-center text-lg font-extrabold">{temprature}°C</div>
      <div className="text-center text-yellow-500 text-3xl font-bold">
        {city}
      </div>
      <div className="text-center text-slate-600">{country}</div>

      <div className="flex justify-center items-center gap-12">
        <div className="flex flex-col justify-center items-center p-5">
          <span className="text-slate-600">Latitude</span>
          <span className="font-bold">{latitude}</span>
        </div>

        <div className="flex flex-col justify-center items-center p-5">
          <span className="text-slate-600">Longitude</span>
          <span className="font-bold">{longitude}</span>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="ml-7 pb-3 mb-2">
          <img className="w-10 ml-2 mb-2" src={humidityPic} alt="humidity" />
          <div className="text-center">{humidity}%</div>
          <div className="text-slate-600">Humidity</div>
        </div>
        <div className="mr-7 pb-3 mb-2">
          <img className="w-10 ml-6 mb-2" src={windSpeedPic} alt="wind"/>
          <div className="text-center">{windSpeed}km/h</div>
          <div className="text-slate-600">WindSpeed</div>
        </div>
      </div>
    </div>
  );
};

export default WeatherDetails;
