import handleDice from "./handleDice.js";

(()=>{

    const btns = document.querySelector(".btn-wrapper");
    btns.addEventListener("click", (e)=>{
        
        const btn = e.target.classList;
        console.log(btn);
        
        if(btn.contains("roll-btn")){
            console.log("THIS IS ROLL");
        }

        if(btn.contains("save-btn")){
            console.log("THIS IS SAVE");
        }

        if(btn.contains("new-btn")){
            console.log("THIS IS NEW");
        }
        
    });

})();