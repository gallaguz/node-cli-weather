// import * as https from 'https';
import axios from 'axios';
import { getConf } from './storage.service.js';

const getWeather = async () => {
    const url = 'https://api.openweathermap.org/data/2.5/weather';
    const conf = await getConf();

    const params = {};
    if (conf?.token) params.appid = conf.token;
    else throw new Error('Token not set. Use argument -h for help');

    if (conf?.city) params.q = conf.city;
    else throw new Error('City not set. Use argument -h for help');

    if (conf?.mode) params.mode = conf.mode;
    if (conf?.units) params.units = conf.units;
    if (conf?.lang) params.lang = conf.lang;

    const { data } = await axios.get(url, {
        params,
    });

    return data;
};

// const getWeather = async () => {
//     const conf = await getConf();
//     const url = new URL('https://api.openweathermap.org/data/2.5/weather');
//
//     if (conf?.token) url.searchParams.append('appid', conf.token);
//     else throw new Error('Token not set. Use argument -h for help');
//
//     if (conf?.city) url.searchParams.append('q', conf.city);
//     else throw new Error('City not set. Use argument -h for help');
//
//     if (conf?.mode) url.searchParams.append('mode', conf.mode);
//     if (conf?.units) url.searchParams.append('units', conf.units);
//     if (conf?.lang) url.searchParams.append('lang', conf.lang);
//
//     https.get(url, (response) => {
//         let res = '';
//         response.on('data', (chunk) => (res += chunk));
//         response.on('end', () => console.log(res));
//     });
// };

export { getWeather };
