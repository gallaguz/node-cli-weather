import chalk from 'chalk';
// import dedent from 'dedent-js';

const printError = (err) => {
    console.log(`${chalk.bgRed('ERROR')}: ${err}`);
};

const printSuccess = (msg) => {
    console.log(`${chalk.bgGreen('MESSAGE')}: ${msg}`);
};

const printHelp = () => {
    const help = {
        noArgs: {
            title: 'Print weather',
            arg: 'No args',
            data: [],
            description: 'https://openweathermap.org/',
        },
        help: {
            title: 'help',
            arg: '-h',
            data: [],
            description: 'print help',
        },
        mode: {
            title: 'mode',
            arg: '-m',
            data: ['JSON', 'xml', 'html'],
            description: 'save',
        },
        city: {
            title: 'city',
            arg: '-c',
            data: [],
            description: 'save',
        },
        token: {
            title: 'token',
            arg: '-t',
            data: [],
            description: 'save',
        },
        units: {
            title: 'units',
            arg: '-u',
            data: ['standard', 'metric', 'imperial'],
            description: 'save',
        },
        language: {
            title: 'language',
            arg: '-l',
            data: [
                { af: 'Afrikaans' },
                { al: 'Albanian' },
                { ar: 'Arabic' },
                { az: 'Azerbaijani' },
                { bg: 'Bulgarian' },
                { ca: 'Catalan' },
                { cz: 'Czech' },
                { da: 'Danish' },
                { de: 'German' },
                { el: 'Greek' },
                { en: 'English' },
                { eu: 'Basque' },
                { fa: 'Persian (Farsi)' },
                { fi: 'Finnish' },
                { fr: 'French' },
                { gl: 'Galician' },
                { he: 'Hebrew' },
                { hi: 'Hindi' },
                { hr: 'Croatian' },
                { hu: 'Hungarian' },
                { id: 'Indonesian' },
                { it: 'Italian' },
                { ja: 'Japanese' },
                { kr: 'Korean' },
                { la: 'Latvian' },
                { lt: 'Lithuanian' },
                { mk: 'Macedonian' },
                { no: 'Norwegian' },
                { nl: 'Dutch' },
                { pl: 'Polish' },
                { pt: 'Portuguese' },
                { pt_br: 'Português Brasil' },
                { ro: 'Romanian' },
                { ru: 'Russian' },
                { sv: 'Swedish' },
                { se: 'Swedish' },
                { sk: 'Slovak' },
                { sl: 'Slovenian' },
                { sp: 'Spanish' },
                { es: 'Spanish' },
                { sr: 'Serbian' },
                { th: 'Thai' },
                { tr: 'Turkish' },
                { ua: 'Ukrainian' },
                { uk: 'Ukrainian' },
                { vi: 'Vietnamese' },
                { zh_cn: 'Chinese Simplified' },
                { zh_tw: 'Chinese Traditional' },
                { zu: 'Zulu' },
            ],
            description: 'save',
        },
    };
    const format = (object) => {
        const title = object.title.toUpperCase();
        const arg = object.arg;
        const data = (obj) => {
            return Object.entries(obj).reduce((acc, el, index, arr) => {
                acc +=
                    typeof el[1] === 'string'
                        ? `${el[0]}: ${el[1]}`
                        : data(el[1]);
                acc += index < arr.length - 1 ? `, ` : ``;
                return acc;
            }, ``);
        };
        const description = object.description;
        return `${arg} [ ${title} ] | ${description} | ${data(object.data)}`;
    };

    Object.entries(help).forEach((el) => {
        console.log(format(el[1]));
    });
};

export { printError, printSuccess, printHelp };
