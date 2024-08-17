function getweather(event) {
  event.preventDefault();
  const cityInput = document.getElementById("city");
  const citysearch = cityInput.value.trim();
  const apiKey = "45b2f84093935e7fde7c3b7d6a0744fd";

  if (!citysearch) {
    alert("Please enter city name");
    return;
  }

  const currentweatherurl = `https://api.openweathermap.org/data/2.5/weather?q=${citysearch}&appid=${apiKey}&units=metric`;

  fetch(currentweatherurl)
    .then((response) => response.json())
    .then((data) => {
      displayweather(data);
    })
    .catch((error) => {
      console.error("Error fetching current weather data:", error);
      alert("Error fetching current weather data. Please try again.");
    });
}

function displayweather(data) {
  const temperature = document.getElementById("temp");
  const wspeed = document.getElementById("windspeed");
  const humid = document.getElementById("humidity");
  const displayimage = document.getElementById("displayer");
  const description = data.weather[0].description;
  const iconCode = data.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@4x.png`;

  temperature.innerHTML = "";
  wspeed.innerHTML = "";
  humid.innerHTML = "";

  if (data.cod === "404") {
    alert(data.message);
  } else {
    const temp = Math.round(data.main.temp);
    const windspeed = data.wind.speed;
    const humidity = data.main.humidity;

    temperature.innerHTML = `${temp}°C`;
    humid.innerHTML = `${humidity}%`;
    wspeed.innerHTML = `${windspeed} m/s`;
    displayimage.src = iconUrl;
    displayimage.alt = description;
    


    
  }
}

