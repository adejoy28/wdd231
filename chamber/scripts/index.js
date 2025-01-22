const api = '86115c565cf13fbb6c81d10a4ed106d7';
// const url = `https://api.openweathermap.org/url/2.5/weather?q=Abeokuta&units=imperial&appid=${appid}`;
const url = `https://api.openweathermap.org/data/2.5/weather?q=Abeokuta&units=metric&appid=${api}`;

async function apiFetch(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();

        if (response.ok) {
            // console.log(data);

            displayCurrResults(data)
        } else {
            throw Error("Error:" + response.text());
        }
    } catch (error) {
        console.log(error)
    }
    // console
}



const displayCurrResults = (data) => {
    const currWeatherSection = document.querySelector("#currWeather");

    const imgSrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`
    const desc = data.weather[0].description;
    const section = `
        <div class="curr-weather">
            <img src="${imgSrc}" alt="${desc}" class="weather-icon">
            <p class="temp">${data.main.temp}<sup>o</sup> F</p>
            <p class="weather-info">${desc}</p>
            <!-- <div class="sub1"> -->
                <p class="high-temp">High: ${data.main.temp_max}<sup>o</sup> F</p>
                <p class="low-temp">Low: ${data.main.temp_min}<sup>o</sup> F</p>
                <p class="humidity">Humidity: ${data.main.humidity}%</p>
                <p class="wind">Wind: ${data.main.humidity}%</p>
                <p class="sunrise">Sunrise: ${convertToLocaleZone(data.timezone, data.sys.sunrise)}</p>
                <p class="sunset">Sunrise: ${convertToLocaleZone(data.timezone, data.sys.sunset)}</p>
            <!-- </div> -->
        </div >
    `;

    currWeatherSection.innerHTML += section;

}

async function displayForecastResult() {
    const ForecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=Abeokuta&appid=${api}&units=metric`
    try {
        const response = await fetch(ForecastUrl);
        const data = await response.json();

        if (response.ok) {
            // console.log(data);
            const section = document.querySelector("#weatherForecast");

            const div = `
                <div>
                    <p>Today: ${data.list[0].main.temp}<sup>o</sup> </p>
                    <p>Tomorrow: ${data.list[19].main.temp}<sup>o</sup> </p>
                    <p>Next Tomorrow: ${data.list[39].main.temp}<sup>o</sup> </p>
                </div>
            `;
            console.log(data);
            // console.log();
            // console.log();

            section.innerHTML += div;
        } else {
            throw Error("Error:" + response.text());
        }
    } catch (error) {
        console.log(error)
    }
}

function convertToLocaleZone(apiTimeZone, data) {
    const clientOffset = new Date().getTimezoneOffset();
    const offsetTimestamp = (apiTimeZone + (clientOffset * 60) + data);
    let date = new Date(offsetTimestamp * 1000);

    return date.toLocaleTimeString();
}
apiFetch(url);
displayForecastResult();