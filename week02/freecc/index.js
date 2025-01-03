// Fetch ApI tut

// // using fetch api to get data from a server
let u = document.querySelector("#uS");

fetch("https://jsonplaceholder.typicode.com/users/", {})
    .then(response => response.json())
    .then(data => {
        // console.log(data);
        data.forEach(e => {
            let h2 = document.createElement("h2");
            let p = document.createElement("p");
            // document.querySelector("h2").textContent = data.name
            // document.querySelector("p").textContent = data.email
            h2.textContent = e.name
            p.textContent = e.email

            u.appendChild(h2);
            u.appendChild(p);

            // console.log(u);
            // console.log(e.email);
        });
    })
    .catch(err => console.log(err))

// // using a POST request instead of a GET request
// fetch("https://jsonplaceholder.typicode.com/users", {
//     method: "POST", // Set method here
//     headers: {
//         'Content-Type': 'Application/json'
//     },
//     body: JSON.stringify({
//         name: 'Nathan Sebastian',
//         email: 'ns@gmail.com'
//     })
// })
//     .then(response => response.json())
//     // .then(data => console.log(data))
//     .then(console.log("DAta successfully added"))
//     .catch(e => console.log(e));


// using a PUT

// fetch("https://jsonplaceholder.typicode.com/users/1", {
//     method: 'PUT',
//     headers: {
//         'Content-Type': 'Application/json'
//     },
//     body: JSON.stringify({
//         name: 'Nathan Sebastian',
//         username: 'NathS'
//     })
// }).then(response => response.json())
// .then(data => console.log(data))
// .catch(e => console.log(e))

fetch("https://jsonplaceholder.typicode.com/users/1", {
    method: "PATCH",
    headers: {
        'Content-Type': "Application/json"
    },
    body: JSON.stringify({
        name: 'Nathan Sebestian',
        usename: 'nsebhastian'
    })
}).then(response => response.json())
    .then(data => console.log(data));

// fetch("https://jsonplaceholder.typicode.com/users/1", {
//     method: "DELETE"
// }).then(response => response.json())
//     .then(data => console.log(data))
//     .finally(console.log('user is deleted'))