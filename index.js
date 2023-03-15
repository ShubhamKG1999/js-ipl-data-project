// importing required modules
const csv = require("csvtojson");
const fileWriter = require("./src/server/helper-functions/fileWriter.js");

// opening reuqired csv files
const matchesPromise = csv().fromFile("./src/data/matches.csv");
const deliveriesPromise = csv().fromFile("./src/data/deliveries.csv");

// importing helper functions
const getIdInYear = require("./src/server/helper-functions/getIdInYear.js");
const getIdInAllYears = require("./src/server/helper-functions/getIdInAllYears.js");
const topOfObject = require("./src/server/helper-functions/topOfObject.js");
const topMostOfObjectOfObjects = require("./src/server/helper-functions/topMostOfObjectOfObjects.js");
const topOfObjectOfObjects = require("./src/server/helper-functions/topOfObjectOfObjects");

// importing required functions
const countMatchesPerYear = require("./src/server/1-matches-per-year.js");
const countMatchesWonPerTeamPerYear = require("./src/server/2-matches-won-per-team-per-year.js");
const countExtraRunsPerTeam = require("./src/server/3-extra-runs-per-team-in-2016.js");
const countEconomyOfBowlers = require("./src/server/4-top-10-economical-bowlers-in-2015.js");
const countTossesAndMatchesWonPerTeam = require("./src/server/5-tosses-and-matches-won-per-team.js");
const countPotmPerSeason = require("./src/server/6-player-with-most-potm-per-season.js");
const countStrikeRatePerBatsmanPerSeason = require("./src/server/7-strike-rate-per-batsman-per-season.js");
const countDismissalOfOnePlayerByAnother = require("./src/server/8-most-dismissal-of-one-player-by-another.js");
const countBowlerWithEconomyInSuperOvers = require("./src/server/9-bowler-with-best-economy-in-super-overs");

// reading required csv files
Promise.all([matchesPromise, deliveriesPromise]).then(([matchesData, deliveriesData]) => {

    // counting the total number of matches played per season. 
    const matchesPerYear = countMatchesPerYear(matchesData);

    // counting the total number of matches played per team per season.
    const matchesWonPerTeamPerYear = countMatchesWonPerTeamPerYear(matchesData);

    // counting the extra runs per team in 2016.
    const idIn2016 = getIdInYear(matchesData, "2016");
    const extraRunsPerTeamIn2016 = countExtraRunsPerTeam(idIn2016, deliveriesData);

    // counting the economy of bowlers in 2015.
    const idIn2015 = getIdInYear(matchesData, "2015");
    const economyOfBowlersIn2015 = countEconomyOfBowlers(idIn2015, deliveriesData);
    const top10EconomicalBowlersIn2015 = topOfObject(economyOfBowlersIn2015, 10);

    // counting the total number of times each team won both match and toss.
    const tossesAndMatchesWonPerTeam = countTossesAndMatchesWonPerTeam(matchesData);

    // counting the player with most number of player of the match per season.
    const potmPerSeason = countPotmPerSeason(matchesData);
    const playerWithMostPotmPerSeason = topMostOfObjectOfObjects(potmPerSeason);

    // counting the strike rate per batsman per season in all seasons.
    const idInAllYears = getIdInAllYears(matchesData);
    const strikeRateRerBatsmanPerSeason = countStrikeRatePerBatsmanPerSeason(idInAllYears, deliveriesData);

    // counting the highest number of dismissal of a player by another player.
    const dismissalOfOnePlayerByAnother = countDismissalOfOnePlayerByAnother(deliveriesData);
    const mostDismissalOfAPlayerByAnother = topMostOfObjectOfObjects(dismissalOfOnePlayerByAnother);
    const mostDismissalOfOnePlayerByAnother = topOfObjectOfObjects(mostDismissalOfAPlayerByAnother, 1);

    // counting the economy of all bowlers in super overs.
    const bowlerWithEconomyInSuperOvers = countBowlerWithEconomyInSuperOvers(deliveriesData);
    const bowlerWithBestEconomyInSuperOvers = topOfObject(bowlerWithEconomyInSuperOvers, 1);

    // writing to JSON file
    fileWriter("./src/public/matchesPerYear.json", matchesPerYear);
    fileWriter("./src/public/matchesWonPerTeamPerYear.json", matchesWonPerTeamPerYear);
    fileWriter("./src/public/extraRunsPerTeamIn2016.json", extraRunsPerTeamIn2016);
    fileWriter("./src/public/tossesAndMatchesWonPerTeam.json", tossesAndMatchesWonPerTeam);
    fileWriter("./src/public/top10EconomicalBowlersIn2015.json", top10EconomicalBowlersIn2015);
    fileWriter("./src/public/playerWithMostPotmPerSeason.json", playerWithMostPotmPerSeason);
    fileWriter("./src/public/strikeRateRerBatsmanPerSeason.json", strikeRateRerBatsmanPerSeason);
    fileWriter("./src/public/mostDismissalOfOnePlayerByAnother.json", mostDismissalOfOnePlayerByAnother);
    fileWriter("./src/public/bowlerWithBestEconomyInSuperOvers.json", bowlerWithBestEconomyInSuperOvers);
});