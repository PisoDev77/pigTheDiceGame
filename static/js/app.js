import handleDice from "./handleDice.js";

(()=>{

    const btns = document.querySelector(".btn-wrapper");
    btns.addEventListener("click", (e)=>{
        console.log(e.target);
    });

})();