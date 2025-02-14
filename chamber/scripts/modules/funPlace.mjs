const url = "../chamber/data/funPlaces.json";

const fetchAPI = async (url) => {
    const response = await fetch(url);

    const data = await response.json();

    return data;
}
export const funPlaces = fetchAPI(url);