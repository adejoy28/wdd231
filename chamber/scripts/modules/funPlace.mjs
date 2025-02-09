const url = "../chamber/data/funPlaces.json";

const fetchAPI = async (url) => {
    const response = await fetch(url);
    // console.log(response.json());

    const data = await response.json();
    // console.log(data);

    console.table(data.places);
    return data;
}
console.log(window.location.pathname);
const funPlaces = fetchAPI(url);
// console.log(funPlaces);
// console.log(funPlaces[0]);

export { funPlaces };