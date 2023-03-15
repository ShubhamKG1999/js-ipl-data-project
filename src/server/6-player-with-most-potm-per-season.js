/**
 * Counts the total player of the match per player per season.
 * @param {Array} matchesData - An array of match objects.
 * @returns {Object} potmPerSeason - An object containing the total player of the match per player per season.
 * @returns {}  An empty object if their is any error.
 */

function countPotmPerSeason(matchesData) {

    if (!Array.isArray(matchesData)) {
        return {};
    }

    const potmPerSeason = matchesData.reduce((acc, curr) => {

        const season = curr.season;
        const playerOfMatch = curr.player_of_match;

        if (season !== "" && playerOfMatch !== "")

            // logic to count total player of the match per player per season.
            (acc.hasOwnProperty(season) === true) ?
                acc[season][playerOfMatch] = (acc[season][playerOfMatch] || 0) + 1
                : (acc[season] = {}, acc[season][playerOfMatch] = 1);

        return acc;
    }, {})

    return potmPerSeason;
}

module.exports = countPotmPerSeason;