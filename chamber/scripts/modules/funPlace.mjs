const url = "././chamber/data/funPlaces.json";

async function fetchAPI(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}


export const funPlaces = fetchAPI(url);
console.log(funPlaces);

// export default { funPlaces };