#!/usr/bin/env node

import { getArgs } from './helpers/index.js';
import {
    DICTIONARY,
    printError,
    printHelp,
    printSuccess,
    saveKeyValue,
    getWeather,
} from './services/index.js';

const save = async (key, val) => {
    if (!val.length) {
        printError(`${key} | Nothing to save`);
        return;
    }
    try {
        await saveKeyValue(key, val).then(() => {
            printSuccess(`${key} successfully saved`);
        });
    } catch (e) {
        printError(e.message);
    }
};

const initCLI = async () => {
    const args = getArgs(process.argv);

    if (args?.h) return printHelp();
    if (args?.c) await save(DICTIONARY.city, args.c);
    if (args?.t) await save(DICTIONARY.token, args.t);
    if (args?.m) await save(DICTIONARY.mode, args.m);
    if (args?.u) await save(DICTIONARY.units, args.u);
    if (args?.l) await save(DICTIONARY.lang, args.l);

    // Send weather
    if (!Object.entries(args).length) console.log(await getWeather());
};

initCLI();
