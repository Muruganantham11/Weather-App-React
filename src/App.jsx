import { useEffect, useState } from "react";
import Header from "./Header";
import SearchCity from "./SearchCity";
import WeatherDetails from "./WeatherDetails";
import clearIcon from "./assets/clear.png";
import drizzle from "./assets/drizzle.png";
import heavyRain from "./assets/heavyRain.png";
import snowfall from "./assets/snowfall.png";
import cloud from "./assets/cloud.png";

const App = () => {
  const weatherIconMap = {
    "01d": clearIcon,
    "01n": clearIcon,
    "02d": clearIcon,
    "02n": clearIcon,
    "03d": cloud,
    "03n": cloud,
    "04d": cloud,
    "04n": cloud,
    "09d": drizzle,
    "09n": drizzle,
    "10d": drizzle,
    "10n": drizzle,
    "11d": heavyRain,
    "11n": heavyRain,
    "13d": snowfall,
    "13n": snowfall,
  };
  let API_KEY = "8b085fa94bcec06031f08353d8e6d959";
  const [searchCity, setSearchCity] = useState("");
  const [icon, setIcon] = useState(clearIcon);
  const [temprature, setTemprature] = useState(0);
  const [city, setCity] = useState("chennai");
  const [country, setCountry] = useState("");
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [windSpeed, setWindSpeed] = useState(0);
  const [cityNotFound, setCityNotFound] = useState(false);
  const [isLoading, setisLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
      try {
        const response = await fetch(URL);
        const data = await response.json();

        if (data.cod === "404") {
          console.error("city not found");
          setCityNotFound(true);
          setisLoading(false);
          return;
        }

        setTemprature(Math.floor(data.main.temp));
        setCity(data.name);
        setCountry(data.sys.country);
        setLatitude(data.coord.lat);
        setLongitude(data.coord.lon);
        setHumidity(data.main.humidity);
        setWindSpeed(data.wind.speed);
        const weatherIconCode = data.weather[0].icon;
        setIcon(weatherIconMap[weatherIconCode] || clearIcon);
        setCityNotFound(false);
        setFetchError(null);
      } catch (error) {
        setFetchError("an error occured while featching the data");
      } finally {
        setisLoading(false);
      }
    };
  (async () => await fetchItem())();
  }, [city]);


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!searchCity) return;
    setCity(searchCity);
    setSearchCity("");
  };

  return (
    <div className="bg-gray-200 w-120 min-h-140 rounded-2xl  mx-auto mt-7 p-4">
      <Header title="Weather App" />
      <SearchCity
        searchCity={searchCity}
        setSearchCity={setSearchCity}
        handleSubmit={handleSubmit}
      />
      {isLoading && <p className="text-center mt-20 text-2xl">Loading...</p>}
      {fetchError && (
        <p className="text-center mt-20 text-2xl">{`Error:${fetchError}`}</p>
      )}
      {cityNotFound && (
        <div className="text-center mt-20 text-2xl">City Not Found</div>
      )}

      {!isLoading && !cityNotFound && !fetchError && (
        <WeatherDetails
          icon={icon}
          temprature={temprature}
          city={city}
          country={country}
          latitude={latitude}
          longitude={longitude}
          humidity={humidity}
          windSpeed={windSpeed}
        />
      )}
    </div>
  );
};

export default App;
