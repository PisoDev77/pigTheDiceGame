import handleDice from "./handleDice.js";

(()=>{
    
    let current_player = handleDice.p1;
    
    const btns = document.querySelector(".btn-wrapper");
    btns.addEventListener("click", (e)=>{
        
        const btn = e.target.classList;
        
        if(btn.contains("roll-btn")){
            const rand = handleDice.rollingDice(current_player);
            const curr = document.querySelector(`.${current_player.name}`).querySelector(".current-score");
            const saved = document.querySelector(`.${current_player.name}`).querySelector(".saved-score");
            
            curr.innerText = rand;
            saved.innerText = current_player.score;

            if(current_player.score === 0 ){
                current_player = 
                current_player === handleDice.p1 ?
                handleDice.p2
                :
                handleDice.p1
                ;
            }
          
        }

        if(btn.contains("save-btn")){
            current_player = 
                current_player === handleDice.p1 ?
                handleDice.p2
                :
                handleDice.p1
                ;
        }

        if(btn.contains("new-btn")){
            location.reload();
            current_player = handleDice.p1;
        }
        
    });

})();