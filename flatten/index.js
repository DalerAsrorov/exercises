
const flattenArray = (arr) => {
    return arr.reduce((accum, curr) => {
        if (Array.isArray(curr)) {
            return accum.concat(flattenArray(curr));
        }

        accum.push(curr);
        return accum;
    }, []);
};

module.exports = flattenArray;