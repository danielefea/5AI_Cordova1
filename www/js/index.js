document.addEventListener('deviceready', onDeviceReady, false);
document.getElementsByTagName("button")[0].addEventListener("click", avvioGioco);

let spazio=[];
let lumache;
let instanzaSetInterval= [];
let yTraguardo = 0;

function onDeviceReady() {
   
}

function avvioGioco(){
    lumache = document.querySelectorAll(".lu");
    spazio = [0,0,0,0];
    yTraguardo = (document.querySelector("hr").getBoundingClientRect()).y;

    for(let i=0; i<lumache.length; i++){
        clearInterval(instanzaSetInterval[i]);
        instanzaSetInterval[i] = setInterval(muovi.bind(this, i), 100);
    }
}

function muovi(i){
    spazio[i] += Math.random()*(50-5)+5;
    lumache[i].style.transform = "translateY(-"+spazio[i]+"px)";

    if(lumache[i].getBoundingClientRect().y <= yTraguardo){
        clearInterval(instanzaSetInterval[i]);
    }
}