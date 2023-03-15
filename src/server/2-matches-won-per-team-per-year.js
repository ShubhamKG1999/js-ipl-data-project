/**
 * Counts the total number of matches played per team per season.
 * @param {Array} matchesData - An array of match objects.
 * @returns {Object} matchesWonPerTeamPerYear - An object containing the total number of matches played per team per season.
 * @returns {}  An empty object if their is any error.
 */

function countMatchesWonPerTeamPerYear(matchesData) {

    if (!Array.isArray(matchesData)) {
        return {};
    }

    const matchesWonPerTeamPerYear = matchesData.reduce((acc, curr) => {

        const season = curr.season;
        const winner = curr.winner;

        // logic to count the total number of matches played per team per season.
        if (season !== "" && winner !== "") {
            (acc.hasOwnProperty(season) === true) ?
                acc[season][winner] = (acc[season][winner] || 0) + 1
                : (acc[season] = {}, acc[season][winner] = 1);
        }

        return acc;
    }, {});

    return matchesWonPerTeamPerYear;
}

module.exports = countMatchesWonPerTeamPerYear;