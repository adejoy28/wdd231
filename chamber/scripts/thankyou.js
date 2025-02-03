// select all needed parameters

const currUrl = window.location.href;
const output = document.querySelector("#output");
// const form = document.querySelector("#");
// console.clear();
// console.clear();
// output.textContent = currUrl;



function show(key, value) {
    const newUrl = currUrl.split("?")[1].split("&");
    newUrl.forEach(item => {
        const result = item.split("=");
        console.table(result);
        if (result.includes(key)) {
            value = result[1].replace("%2B", "+").replaceAll("+", " ").replace("%40", "@");
        }
    })
    console.log(value);
    return value;
}

const section = `
        <section>
            <h2>Submission successful</h2>
            <p><b>Name</b>: ${show('firstname')}, ${show('lastname')}</p>
            <p><b>Email</b>: ${show('email')}</p>
            <p><b>Phone</b>: ${show('phone')}</p>
            <p><b>Business Name</b>: ${show('business-name')}</p>
           <p><b>Date</b>: ${show('datetime')}</p>
        </section>
`

output.innerHTML = section;
//.split("=");

