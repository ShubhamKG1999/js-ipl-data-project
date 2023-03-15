/**
 * Counts the total number of matches played per season.
 * @param {Array} matchesData - An array of match objects.
 * @returns {Object} matchesPerYear - An object containing the total number of matches played per season.
 * @returns {}  An empty object if their is any error.
 */

function countMatchesPerYear(matchesData) {

    if (!Array.isArray(matchesData)) {
        return {};
    }

    const matchesPerYear = matchesData.reduce((acc, curr) => {

        const season = curr.season;
        
        // logic to count the total number of matches played per season
        if (season !== "") {
            (acc.hasOwnProperty(season) === true) ? acc[season]++ : acc[season] = 1;
        }

        return acc;
    }, {});

    return matchesPerYear;
}


module.exports = countMatchesPerYear;