import axios from "axios";

export const api = axios.create({
    baseURL : 'https://api.openweathermap.org/data/2.5/weather',
});

export const api_key = 'b9a7796f82ab56dcc28e37243cb1d29a';