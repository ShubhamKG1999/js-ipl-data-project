/**
 * Sorts and an object and returns an object consisting of top values according to the value of object in object of objects.
 * @param {Array} count - Required number of top values.
 * @returns {Object} topMost - An object consisting of top values according to the value of object in object of objects.
 * @returns {}  An empty object if their is any error.
 */

function topOfObjectOfObjects(objectData, count) {

    if (objectData === undefined && count === undefined) {
        return {};
    }

    const arr = [];

    Object.entries(objectData).forEach((curr) => {
        arr.push([curr[0], Object.entries(curr[1])]);
    }) ;

    const top = arr.sort((a,b) => b[1][0][1]-a[1][0][1]).slice(0, count).reduce((acc, curr) => {
        acc[curr[0]] = {};
        acc[curr[0]][curr[1][0][0]] = curr[1][0][1];
        return acc;
    }, {});

    return top;
}

module.exports = topOfObjectOfObjects;