/**
 * Counts the strike rate per batsman per season in all seasons.
 * @param {Array} id - An object consiting of ids of all matches played in all seasons.
 * @param {Array} deliveriesData - An array of delivery object.
 * @returns {Object} strikeRatePerBatsmanPerSeason - An object containing the strike rate per batsman per season in all seasons.
 * @returns {}  An empty object if their is any error.
 */

function countStrikeRateRerBatsmanPerSeason(idInAllYears, deliveriesData) {

    if (id !== undefined && !Array.isArray(deliveriesData)) {
        return {};
    }

    runsAndBowlsPerBatsmanPerSeason = deliveriesData.reduce((acc, curr) => {

        const matchId = curr.match_id;
        const season = idInAllYears[matchId];

        const batsman = curr.batsman;
        const batsmanRuns = parseInt(curr.batsman_runs);
        const wideRuns = curr.wide_runs;

        // logic to count the  runs and bowlers per bowler.
        if (batsman !== "" && batsmanRuns !== "" && wideRuns != "") {

            (acc.hasOwnProperty(season) === true) ?

                acc[season].hasOwnProperty(batsman) ? (acc[season][batsman]["runs"] += batsmanRuns,
                    acc[season][batsman]["bowls"] += (wideRuns !== 0) ? 1 : 0)
                    : acc[season][batsman] = { "runs": 0 + batsmanRuns, "bowls": 1 }

                : (acc[season] = {});

        }

        return acc;
    }, {});

    
    const strikeRatePerBatsmanPerSeason = {};
    // logic to count the  strike-rate per batsman.
    for (let key1 in runsAndBowlsPerBatsmanPerSeason) {
        let count = 0;
        for (let key2 in runsAndBowlsPerBatsmanPerSeason[key1]) {
            count++;

            (strikeRatePerBatsmanPerSeason.hasOwnProperty(key1) === true) ?
                strikeRatePerBatsmanPerSeason[key1][key2] =
                Math.round(((runsAndBowlsPerBatsmanPerSeason[key1][key2]["runs"]
                    / runsAndBowlsPerBatsmanPerSeason[key1][key2]["bowls"]) * 100) * 100) / 100
                : strikeRatePerBatsmanPerSeason[key1] = {};

            if(count === 10) {
                break;
            }
        }
    }

    return strikeRatePerBatsmanPerSeason;
}

module.exports = countStrikeRateRerBatsmanPerSeason;