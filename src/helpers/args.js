const getArgs = (args) => {
    return args.slice(2).reduce((acc, el, index, arr) => {
        if (el.charAt(0) === '-') {
            if (index === arr.length - 1) {
                acc[el.substring(1)] = true;
            } else if (arr[index + 1]?.charAt(0) !== '-') {
                acc[el.substring(1)] = arr[index + 1];
            } else {
                acc[el.substring(1)] = true;
            }
        }
        return acc;
    }, {});
};

export { getArgs };
