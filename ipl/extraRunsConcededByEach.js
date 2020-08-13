function extraRunsConcededByEach(deliveries) {
    const result = {};
    for (let deliverie of deliveries) {
      const match_id = deliverie.match_id;
      const bowling_team = deliverie.bowling_team;
      const extra_runs = deliverie.extra_runs;
      // console.log(match_id);
      // console.log(bowling_team);
      // console.log(extra_runs);

      if (parseInt(match_id) > 576 && parseInt(match_id) < 637) {
        // console.log(bowling_team + ' ' + extra_runs);
        if (result[bowling_team]) {
          result[bowling_team] += parseInt(extra_runs);
        } else {
          result[bowling_team] = parseInt(extra_runs);
        }
      }

    }
    return result;
  }
  
  module.exports = extraRunsConcededByEach;