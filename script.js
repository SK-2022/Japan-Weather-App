// Functions that take a location and return the weather data for that location.
//Ensure to rewrite this code again using 1. regular promise syntax and 2. using the throw new error feature
import "./style.css";

//Select all the relevant elements
const weatherIconData = document.querySelector(".weather-icon-data");
const weatherConditionData = document.querySelector(".weather-condition-data");
const tempData = document.querySelector(".temp-data");
const feelsLikeData = document.querySelector(".feels-like-data");

const searchButton = document.querySelector(".search-button");

let weatherAppData;

searchButton.addEventListener("click", async () => {
  const locationInputField = document.querySelector(".location-input-field");
  const locationInput = locationInputField.value;

  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${locationInput}?key=NQ7MF6XN5T5GXL6XVR4XGKF9U`,
    );

    weatherAppData = await response.json();
    //Line 25 is just to see the json in the console
    console.log(weatherAppData);

    //Display the data on the page

    console.log(weatherAppData.currentConditions.icon);
    weatherConditionData.textContent = weatherAppData.currentConditions.icon;
    tempData.textContent = `${weatherAppData.currentConditions.temp}°F`;
    feelsLikeData.textContent = `${weatherAppData.currentConditions.feelslike}°F`;

    return;
  } catch (error) {
    console.log("Something broke", error);
  }
});

//Temperature conversion button
const tempConversionButton = document.querySelector(".temp-conversion-button");

tempConversionButton.addEventListener("click", () => {
  if (!weatherAppData) {
    alert("Please search for a location first.");
  }

  if (tempData.textContent.includes("°F")) {
    tempData.textContent =
      (((weatherAppData.currentConditions.temp - 32) * 5) / 9).toFixed(1) +
      "°C";
    feelsLikeData.textContent =
      (((weatherAppData.currentConditions.temp - 32) * 5) / 9).toFixed(1) +
      "°C";
    tempConversionButton.textContent = "Convert to Fahrenheit";
  } else {
    tempData.textContent = `${weatherAppData.currentConditions.temp}°F`;
    feelsLikeData.textContent = `${weatherAppData.currentConditions.temp}°F`;
    tempConversionButton.textContent = "Convert to Celsius";
  }
});
