/**
 * Sorts and an object and returns an object of object consisting top-most value according to the value of object in object of objects.
 * @param {Array} matchesData - An object of objects.
 * @returns {Object} topMost - An object of object consisting the top-most value according to the value of object in objects of object.
 * @returns {}  An empty object if their is any error.
 */

function topMostOfObjectOfObjects(objectData) {

    if (objectData === undefined) {
        return {};
    }

    topMost = {};

    for (let key in objectData) {

        if (objectData[key] === undefined) {
            return {};
        }

        topMost[key] = {};

        topMost[key][Object.keys(objectData[key])
        [Object.values(objectData[key]).indexOf(
            Math.max(...Object.values(objectData[key])))]] =
            Math.max(...Object.values(objectData[key]));
    }

    return topMost;
}

module.exports = topMostOfObjectOfObjects;