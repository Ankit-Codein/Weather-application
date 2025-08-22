const input = document.getElementById('enter-city')
const button = document.getElementById('search-button')

const cityName = document.getElementById('city-name');
const cityTime = document.getElementById('city-time');
const cityTemp = document.getElementById('city-temp');
const airquality = document.getElementById('air-quality');
const humidity = document.getElementById('humidity')

async function getData(cityName) {
    const promise = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=b9bd7746175342e9ab470840250201&q=${cityName}&aqi=yes`
    );
    return await promise.json();
}

// Function to fetch weather data
input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") { // Check if Enter key is pressed
        event.preventDefault(); // Prevent form submission (optional)
        button.click(); // Trigger search button click
    }
});


button.addEventListener('click', async () => {
    const value = input.value;
    const result = await getData(value);
    console.log(result);
    
    cityName.innerText = `Location: ${result.location.name}, ${result.location.region}, ${result.location.country}`    
    cityTime.innerText = `Date & Time: ${result.location.localtime}`
    cityTemp.innerText = `Temperature: ${result.current.temp_c}°C`;
    airquality.innerText = `Air Quality: ${result.current.air_quality.pm2_5}`;    
    humidity.innerText = `Humidity: ${result.current.humidity}%`;
})



