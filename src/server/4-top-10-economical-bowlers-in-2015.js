/**
 * Counts the economy of bowlers in given year.
 * @param {Array} id - An object consiting of ids of all matches played in given year.
 * @param {Array} deliveriesData - An array of delivery object.
 * @returns {Object} economyOfBowlers - An object containing the economy of bowlers in given year.
 * @returns {}  An empty object if their is any error.
 */

function countEconomicalBowlers(id, deliveriesData) {

    if (id !== undefined && !Array.isArray(deliveriesData)) {
        return {};
    }

    const bowlsAndRunsBowler = deliveriesData.reduce((acc, curr) => {

        match_id = curr.match_id;

        if (id.hasOwnProperty(match_id) === true) {

            bowler = curr.bowler;
            total_runs = parseInt(curr.total_runs);
            bye_runs = parseInt(curr.bye_runs);
            legbye_runs = parseInt(curr.legbye_runs);
            penalty_runs = parseInt(curr.penalty_runs);
            wide_runs = parseInt(curr.wide_runs);
            noball_runs = parseInt(curr.noball_runs);

            // logic to count the  bowls and runs per bowler.
            if (bowler !== "" && total_runs !== ""
                && bye_runs !== "" && legbye_runs !== ""
                && penalty_runs !== "" && wide_runs !== ""
                && noball_runs !== "") {

                (acc.hasOwnProperty(bowler) === true) ?
                    (acc[bowler]["bowls"] += (noball_runs === 0 && wide_runs == 0) ? 1 : 0,
                        acc[bowler]["runs"] += total_runs - bye_runs - legbye_runs - penalty_runs)
                    : (acc[bowler] = {},
                        (noball_runs === 0 && wide_runs == 0) ? acc[bowler]["bowls"] = 1 : acc[bowler]["bowls"] = 0,
                        acc[bowler]["runs"] = total_runs - bye_runs - legbye_runs - penalty_runs);
            }
        }

        return acc;
    }, {});

    const economyOfBowlers = {};

    // logic to count the  economy per bowler.
    for (let key in bowlsAndRunsBowler) {
        economyOfBowlers[key] = Math.round((bowlsAndRunsBowler[key].runs / (bowlsAndRunsBowler[key].bowls / 6)) * 100) / 100;
    }

    return economyOfBowlers;
}

module.exports = countEconomicalBowlers;
