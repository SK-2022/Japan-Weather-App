// Functions that take a location and return the weather data for that location.
//Ensure to rewrite this code again using 1. regular promise syntax and 2. using the throw new error feature
import "./style.css";

let searchButton = document.querySelector(".search-button");

searchButton.addEventListener("click", async () => {
  const locationInputField = document.querySelector(".location-input-field");
  const locationInput = locationInputField.value;

  try {
    let response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${locationInput}?key=NQ7MF6XN5T5GXL6XVR4XGKF9U`,
    );

    let weatherAppData = await response.json();

    console.log(weatherAppData.currentConditions.temp);
    console.log(weatherAppData.currentConditions.conditions);
    console.log(weatherAppData.currentConditions.icon); // Whats this??
    console.log(weatherAppData.currentConditions.feelslike);
    return;
  } catch (error) {
    console.log("Something broke", error);
  }
});
