// Functions that take a location and return the weather data for that location.
//Ensure to rewrite this code again using 1. regular promise syntax and 2. using the throw new error feature
import "./style.css";

//Select all the relevant elements
const weatherIconData = document.querySelector(".weather-icon-data");
const weatherConditionData = document.querySelector(".weather-condition-data");
const tempData = document.querySelector(".temp-data");
const feelsLikeData = document.querySelector(".feels-like-data");

const searchButton = document.querySelector(".search-button");

searchButton.addEventListener("click", async () => {
  const locationInputField = document.querySelector(".location-input-field");
  const locationInput = locationInputField.value;

  try {
    let response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${locationInput}?key=NQ7MF6XN5T5GXL6XVR4XGKF9U`,
    );

    let weatherAppData = await response.json();
    //Line 25 is just to see the json in the console
    console.log(weatherAppData);
    //Display the data on the page
    // weatherIconData.src = weatherAppData.currentConditions.icon;
    weatherConditionData.textContent = weatherAppData.currentConditions.icon;
    tempData.textContent = weatherAppData.currentConditions.temp;
    feelsLikeData.textContent = weatherAppData.currentConditions.feelslike;
    return;
  } catch (error) {
    console.log("Something broke", error);
  }
});
