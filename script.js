// Functions that take a location and return the weather data for that location. 

async function getWeather() {
    let location = "Sendai";
    let date1 = "Today";
    let date2 = "Tomorrow";
    try {
        let response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/${date1}/${date2}?key=NQ7MF6XN5T5GXL6XVR4XGKF9U`)
        let weatherAppData = await response.json()
        return weatherAppData
    } 
}