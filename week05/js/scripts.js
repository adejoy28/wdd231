let currentUrl = window.location.href;

const everything = currentUrl.split('?');

let formData = everything[1].split("&");

// Creata a show function to display the data collected from the user.
function show(cup) {
    formData.forEach((item) => {
        if (item.startsWith(cup)) {            // let cup = item.split('=');
            result = item.split("=")[1].replace("%40", "@").replace("%2B", "+");
        }
    });
    return result;
}
// end Show

const showInfo = document.querySelector('#results');

showInfo.innerHTML = `
    <p>Appointment for ${show('first')} ${show('last')}</p>
    <p>Proxy ${show('ordinance')} on ${show('fecha')} in the ${show('location')} Temple</p>
    <p>Your Phone: ${show('phone')}</p>
    <p>Your Email: <a href=\"mailto:${show('email')}" target="_blank">${show('email')}</a></p>
`;