'use strict'

const btn = document.getElementById('reset');
const container = document.getElementById('drawpad');

function gridCreate() {
    let gridSize = 16 * 16;
    for (let i = 0; i < gridSize; i++) {
        const element = document.createElement('div');
        container.appendChild(element);
        element.classList.add('box');
    }
    defineListeners();

}
function defineListeners() {
    const box = document.getElementsByClassName('box');
    console.log(box);
    for (const element of box) {
        let farbe1 = Math.floor(Math.random() * 255) 
        let farbe2 = Math.floor(Math.random() * 255) 
        let farbe3 = Math.floor(Math.random() * 255) 
        element.addEventListener('mouseover', () => {
            element.style.backgroundColor = `rgb(${farbe1},${farbe2},${farbe3})`;
        })
    }
}

gridCreate();