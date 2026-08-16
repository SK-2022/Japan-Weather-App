// Functions that take a location and return the weather data for that location.
//Ensure to rewrite this code again using 1. regular promise syntax and 2. using the throw new error feature
async function getWeather() {
  let location = "Sendai";
  try {
    let response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=NQ7MF6XN5T5GXL6XVR4XGKF9U`,
    );
    let weatherAppData = await response.json();
    return console.log(weatherAppData);
  } catch (error) {
    console.log("Something done got fucked up", error);
  }
}

getWeather();
