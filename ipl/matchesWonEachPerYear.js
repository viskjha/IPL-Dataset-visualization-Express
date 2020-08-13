function matchesWonEachPerYear(matches){
    const result = {};

    for(let matche of matches){
        const season = matche.season;
        const winner = matche.winner;

        if(result[season]){
            if(result[season][winner]) result[season][winner] += 1;
            else result[season][winner] = 1;
        }else{
            result[season] = {}
            result[season][winner] = 1;
        }
    }
    // console.log(result);
    // console.log(matches.slice(0,3));

    return result;
}

module.exports = matchesWonEachPerYear;