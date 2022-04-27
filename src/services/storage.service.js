import { homedir } from 'os';
import { join } from 'path';
import { promises } from 'fs';

const storagePath = join(homedir(), '.weather.json');

const DICTIONARY = {
    token: 'token',
    city: 'city',
    mode: 'mode',
    units: 'units',
    lang: 'lang',
};

const isExist = async (filePath) => {
    try {
        await promises.stat(filePath);
        return true;
    } catch (e) {
        return false;
    }
};

function isValidJson(json) {
    try {
        const o = JSON.parse(json);
        if (o && typeof o === 'object') {
            return o;
        }
    } catch (e) {
        return false;
    }

    return false;
}

const saveKeyValue = async (key, val) => {
    let data = {};
    if (await isExist(storagePath)) {
        const file = await promises.readFile(storagePath);
        const json = file.toString();
        data = isValidJson(json) ? JSON.parse(json) : {};
    }
    data[key] = val;
    return await promises.writeFile(storagePath, JSON.stringify(data));
};

const getConf = async (key = '') => {
    if (await isExist(storagePath)) {
        const file = await promises.readFile(storagePath);
        const data = JSON.parse(file.toString());
        return key.length ? data[key] : data;
    }
    return undefined;
};

export { saveKeyValue, getConf, DICTIONARY };
