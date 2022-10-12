import handleDice from "./handleDice.js";

(()=>{
    
    let current_player = handleDice.p1;
    
    const btns = document.querySelector(".btn-wrapper");
    btns.addEventListener("click", (e)=>{
        
        const btn = e.target.classList;
        
        if(btn.contains("roll-btn")){
            const rand = handleDice.rollingDice(current_player);
            const ele = document.querySelector(`.${current_player.name}`).querySelector(".current-score");
            ele.innerText = rand;

            if(current_player.score === 0 ){
                current_player = handleDice.p2;
            }
        }

        if(btn.contains("save-btn")){
            console.log("THIS IS SAVE");
        }

        if(btn.contains("new-btn")){
            location.reload();
            current_player = handleDice.p1;
        }
        
    });

})();