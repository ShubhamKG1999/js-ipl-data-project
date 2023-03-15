/**
 * Counts the extra runs per team in given year.
 * @param {Array} id - An object consiting of ids of all matches played in given year.
 * @param {Array} deliveriesData - An array of delivery object.
 * @returns {Object} extraRunsPerTeam - An object containing the extra runs per team in given year.
 * @returns {}  An empty object if their is any error.
 */

function countExtraRunsPerTeam(id, deliveriesData) {

  if (id !== undefined && !Array.isArray(deliveriesData)) {
    return {};
  }

  const extraRunsPerTeam = deliveriesData.reduce((acc, curr) => {

    match_id = curr.match_id;

    // logic to count the  extra runs per team in given year.
    if (id.hasOwnProperty(match_id) === true) {

      bowling_team = curr.bowling_team;
      extra_runs = parseInt(curr.extra_runs);

      if (bowling_team !== "" && extra_runs !== "")

        (acc.hasOwnProperty(bowling_team) === true) ?
          acc[bowling_team] += extra_runs
          : acc[bowling_team] = extra_runs;
    }

    return acc;
  }, {});

  return extraRunsPerTeam;
}

module.exports = countExtraRunsPerTeam;