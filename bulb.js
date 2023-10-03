var buttonOff = document.querySelector("#button-off")
let com=0
buttonOff.addEventListener("click", function () {
    if(com===0){
        buttonOff.textContent = "TURN ON";
        com =1
        buttonOff.style.backgroundColor="green"
       }
       else{
        buttonOff.textContent = "TURN Off";
        com =0
        buttonOff.style.backgroundColor="white"
    }
});


