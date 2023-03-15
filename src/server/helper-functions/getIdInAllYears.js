/**
 * Creates an object consiting of ids of all matches played in all years.
 * @param {Array} matchesData - An array of match objects.
 * @returns {Object} idInAllYears - An object consiting of ids of all matches played in all years.
 * @returns {}  An empty object if their is any error.
 */

function getIdInAllYears(matchesData) {

    if (Array.isArray(matchesData) === false) {
        return {};
    }

    const idInAllYears = matchesData.reduce((acc, curr) => {

        id = curr.id;
        season = curr.season;

        if (id !== "" && season !== "") {
            acc[id] = season;
        }

        return acc;
    }, {});

    return idInAllYears;
}

module.exports = getIdInAllYears;