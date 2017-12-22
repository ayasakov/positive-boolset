module.exports = function getPositiveKeysOfBoolset(boolset) {
    const result = [];
    for (let i = 0; i < boolset.length - 1; i += 2) {
        if (boolset[i + 1]) {
            result.push(boolset[i]);
        }
    }

    return result;
};
