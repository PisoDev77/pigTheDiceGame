// class나 prototype이 좋으나, 시간관계상 p1 p2

const p1 = {
    name:"player1",
    score: 0,
}

const p2 ={
    name:"player2",
    score:0,
}

const rollingDice = (player) => {

    const rand = parseInt(Math.random() * (6-1) + 1);

    if(rand === 1){
        initializingScore(player);
    }else{
        savingDice(player, rand);
    }
    
    return rand;
};

const savingDice = (player, score) => {
    player.score += score; 
};

const initializingScore = (player) => {
    player.score = 0;
};

export default{
    p1,
    p2,
    rollingDice,
    savingDice,
    initializingScore
}

// //test IIFE by console
// (()=>{
//     rollingDice(p1);
//     rollingDice(p2);
    
//     console.log(p1, p2);
// })();