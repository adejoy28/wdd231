const lat = 49.75;
const long = 6.64;
const api = "d460ab0e21d369e892e27c99b2333e36";

const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

// const url = `https://api.openweathermap.org/data/2.5/?lat=${lat}&lon=${long}&appid=d7a4e471ff33be558b99cdb129385cac`;//${api}`;
// const url = `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&units=standard&appid=${api}`;
const url = `https://api.openweathermap.org/data/2.5/weather?q=Abeokuta&units=metric&appid=${api}`;

// fetch(url, {})
//     .then(response => {
//         console.log(response);
//     }).then(data => {
//         console.log(data.JSON());
//     })

async function apiFetch() {
    try {
        const response = await fetch(url);
        // if (!response.ok) {
        //     throw new Error(`Response Status: ${response.status}`)
        // }
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            console.log(data.main.temp);
            console.log(data.weather[0].description);
            console.log(data.weather[0].icon);

            displayResults(data);
        } else {
            throw Error(await response.text());
        }

    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;C`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;
}


/*

75 C
Description
Max-temp
Low-temp
Humidity
Sunrise
Sunset
*/