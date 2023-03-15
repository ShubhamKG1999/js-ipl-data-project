/**
 * Creates an object consiting of ids of all matches played in given year.
 * @param {Array} matchesData - An array of match objects.
 * @param {Array} year - Required year.
 * @returns {Object} idInYear - An object consiting of ids of all matches played in given year.
 * @returns {}  An empty object if their is any error.
 */

function countIdInYear(matchesData, year) {

    if (year === undefined || Array.isArray(matchesData) === false) {
        return {};
    }

    const idInYear = matchesData.reduce((acc, curr) => {
        
        id = curr.id;
        season = curr.season;

        if (id !== "" && season !== "") {

            if (season === year) {
                acc[id] = year;
            }
        }

        return acc;
    }, {});

    return idInYear;
}

module.exports = countIdInYear;