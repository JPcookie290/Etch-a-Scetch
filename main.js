'use strict'

const btn = document.getElementById('reset');
const container = document.getElementById('drawpad');

function gridCreate(num) {
    container.style.gridTemplateColumns = 'repeat('+num+', 1fr)'; 
    container.style.gridTemplateRows = 'repeat('+num+', 1fr)';
    let gridSize = num * num;
    for (let i = 0; i < gridSize; i++) {
        const element = document.createElement('div');
        container.appendChild(element);
        element.classList.add('box');
    }
    defineListeners();
}

function defineListeners() {
    const box = document.getElementsByClassName('box');
    for (const element of box) {
        element.addEventListener('mouseover', () => {
            let farbe1 = Math.floor(Math.random() * 255)
            let farbe2 = Math.floor(Math.random() * 255)
            let farbe3 = Math.floor(Math.random() * 255)
            console.log('mouseover')
            element.style.backgroundColor = `rgb(${farbe1},${farbe2},${farbe3})`;
        })
    }
}

gridCreate(16);

function clear() {
    container.innerHTML = "";
}

btn.addEventListener('click', () => {
    clear();
    let zahl = parseInt(prompt("Wie groß soll das Grid sein?"))
    if(isNaN(zahl)){
        zahl =  parseInt(prompt("Bitte geben Sie eine Zahl ein!"))
    }
    if(zahl <= 50 && zahl > 0 ){
        gridCreate(zahl);
    }else{
        gridCreate(50);
    }  
})