/**
 * Sorts and an object and returns an object consisting of top values according to the value.
 * @param {Array} matchesData - An object.
 * @param {Array} count - Required number of top values.
 * @returns {Object} topMost - An object consisting of top values according to the value.
 * @returns {}  An empty object if their is any error.
 */

function topOfObject(objectData, count) {

    if (objectData === undefined && count === undefined) {
        return {};
    }

    const top = Object.entries(objectData).sort((a, b) =>
        a[1] - b[1]).slice(0, count).reduce((acc, curr) => {
            acc[curr[0]] = curr[1];

            return acc;
        }, {});

    return top;
}

module.exports = topOfObject;