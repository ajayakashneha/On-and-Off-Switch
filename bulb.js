var buttonOff = document.querySelector("#button-off")
let com=0;
buttonOff.addEventListener("click", function () {

    if(com===0){
        buttonOff.textContent = "TURN ON";
        com =1
        buttonOff.style.backgroundColor = "green"
        let img = document.querySelector("#bulbImage")
        img.setAttribute("src" , "bulb-on.png")
       }
       else{
        buttonOff.textContent = "TURN Off";
        com =0
        buttonOff.style.backgroundColor="white"
        let img = document.querySelector("#bulbImage")
        img.setAttribute("src" , "bulb-off.png")
    }
});


