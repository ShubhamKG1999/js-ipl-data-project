/**
 * Counts the total number of dismissal of one player by another player.
 * @param {Array} deliveriesData - An array of delivery object.
 * @returns {Object} countDismissalOfOnePlayerByAnother - An object containing the total number of dismissal of one player by another player.
 * @returns {}  An empty object if their is any error.
 */

function countDismissalOfOnePlayerByAnother(deliveriesData) {

    if (!Array.isArray(deliveriesData)) {
        return {};
    }

    const dismissalOfOnePlayerByAnother = deliveriesData.reduce((acc, curr) => {

        const batsman = curr.player_dismissed;
        const bowler = curr.bowler;
        const dismissalKind = curr.dismissal_kind;

        // logic to count the total number of dismissal of one player by another player.
        if (batsman !== "" && bowler !== "" && dismissalKind !== "run out")

            (acc.hasOwnProperty(batsman) === true) ?
                acc[batsman][bowler] = (acc[batsman][bowler] || 0) + 1
                : (acc[batsman] = {}, acc[batsman][bowler] = 1);

        return acc;
    }, {});

    return dismissalOfOnePlayerByAnother;
}

module.exports = countDismissalOfOnePlayerByAnother;