const playingClass = 'playing',
    crashRide = document.getElementById('crash-ride'),
    hiHatTop = document.getElementById('hihat-top');
const animateCrashOrRide = () => {
    crashRide.style.transform = 'rotate(0deg) scale(1.5)';
};
const animateHiHatClosed = () => {
    hiHatTop.style.top = '171px';
};
const playSound = e => {
    const keyCode = e.keyCode,
        keyElement = document.querySelector(`div[data-key="${keyCode}"]`);

    if(!keyElement) return;

    const audioElement = document.querySelector(`audio[data-key="${keyCode}"]`);
    audioElement.currentTime = 0;
    audioElement.play();
    switch(keyCode) {
        case 69:
        case 82:
            animateCrashOrRide();
        break;
        case 75:
            animateHiHatClosed();
        break;
    }
    keyElement.classList.add(playingClass);
};
const removeCrashRideTransition = e => {
    if(e.propertyName !== 'transform') return;
        e.target.style.transform = 'rotate(-7.2deg) scale(1.5)';
};
const removeHiHatTopTransition = e => {
    if(e.propertyName !== 'top') return;
        e.target.style.top = '166px';
};
const removeKeyTransition = e => {
    if(e.propertyName !== 'transform') return;
        e.target.classList.remove(playingClass)
};
const drumKeys = Array.from(document.querySelectorAll('.key'));
drumKeys.forEach(key => {
    key.addEventListener('transitionend', removeKeyTransition);
});
crashRide.addEventListener('transitionend', removeCrashRideTransition);
hiHatTop.addEventListener('transitionend', removeHiHatTopTransition);
window.addEventListener('keydown', playSound);

//Cor de Fundo
const tema1 = document.getElementById("tema1")
const tema2 = document.getElementById("tema2")
const tema3 = document.getElementById("tema3")

function mudarTema1(){
document.body.style.backgroundImage = 'url(img/3d-.webp)' 
document.body.style.backgroundSize = '117%'
document.body.style.backgroundPositionY = '30%'
}
function mudarTema2(){
        document.body.style.backgroundImage = 'url(img/palco-luzes.webp)' 
        document.body.style.backgroundSize = '100%'
    }
function mudarTema3(){
        document.body.style.backgroundImage = 'url(img/palco.jpg)' 
        document.body.style.backgroundSize = '100%'
}

    
const cortina1 = document.getElementById("cortina1")
const cortina2 = document.getElementById("cortina2")


function desvendar(){
    cortina1.style.left = '-700px'

    cortina2.style.right = '-700px'

}

//Cor da Bateria
const cor = document.getElementById("cor")
const cor1 = document.getElementById("bateria")
const cor2 = document.getElementById("bateria2")
const cor3 = document.getElementById("bateria3")
const bateria = document.getElementById("drum-kit")

function mudarBateria(){
    bateria.style.filter = 'hue-rotate(0deg)'
    }
function mudarBateria1(){
bateria.style.filter = 'hue-rotate(200deg)'
}
function mudarBateria2(){
    bateria.style.filter = 'hue-rotate(1550deg)'
}
function mudarBateria3(){
    bateria.style.filter = 'hue-rotate(45deg)'
}

//Fumaca

const fumaca = document.getElementById("fumaca")

var currentHeigthIndex = 1
    var heigth = [
        '0',
        '100%',
        '150%',
        '200%'
        
    ]
function fumaça(){
    
    if(currentHeigthIndex == heigth.length)
    {
        currentHeigthIndex=0;
    }
    fumaca.style.height = heigth[currentHeigthIndex]
    currentHeigthIndex++
}