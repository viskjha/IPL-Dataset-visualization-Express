function matchesStory(matches){
    const result = {};
    for(matche of matches){
        const winner = matche.winner;
        if(result[winner]){
            result[winner] +=1;
        }else result[winner] = 1;
    }

    return result;
}

module.exports = matchesStory;