import axios from "axios";
const BASE_URL = "https://youtube138.p.rapidapi.com";
const YOUTUBE_API_KEY = '1c2cc01df8msh82f96735ab3a27ep15c155jsn2d36c7c4deb9';
const options = {
    params: { hl: "en", gl: "US" },
    headers: {
        "X-RapidAPI-Key":
            YOUTUBE_API_KEY,
        "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
    },
};

export const fetchDataFromApi = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
};
