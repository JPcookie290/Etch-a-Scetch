'use strict'

const btn = document.getElementById('reset');

function gridCreate() {
    const container = document.getElementById('drawpad');
    let gridSize = 16 * 16;
    for (let i = 0; i < gridSize; i++) {
        const element = document.createElement('div');
        container.appendChild(element);
        element.classList.add('box');
    }
    console.log(container);
}

gridCreate();

/*container.addEventListener('mouseover', () => {
    container.style.backgroundColor = 'green';
});*/
