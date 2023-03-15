/**
 * Counts the total number of times each team won both match and toss.
 * @param {Array} matchesData - An array of match objects.
 * @returns {Object} tossesAndMatchesWonPerTeam - An object containing the total number of of times each team won both match and toss.
 * @returns {}  An empty object if their is any error.
 */

function countTossesAndMatchesWonPerTeam(matchesData) {

    if (!Array.isArray(matchesData)) {
        return {};
    }

    const tossesAndMatchesWonPerTeam = matchesData.reduce((acc, curr) => {

        const winner = curr.winner;
        const tossWinner = curr.toss_winner

        // logic to count the total number of times each team won both match and toss.
        if (winner !== "" && tossWinner !== "") {

            acc[winner] = (acc[winner] || 0) + (winner === tossWinner ? 1 : 0);
        }

        return acc;
    }, {});

    return tossesAndMatchesWonPerTeam;
}

module.exports = countTossesAndMatchesWonPerTeam;