# Etch-a-Scetch


Eine in Quadrate eingeteilte Zeichenfläche,
wenn mit der Maus über ein Quadrat fährt wird dieses mit beliebig eingefärbt.
Es beginnt mit einem Grid in der Große 16x16.

Wenn man neu starten will muss man auf Start/Reset klicken.
Danach wird man auch gefragt welche größe das neuerstellte Grid haben soll.

```
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
```

Erstellt das Grid der Zeichenfläche und ruft die Funktion defineListeners() auf.


```
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
```

Ändert beliebig die Farbe der Kästchens.


```
function clear() {
    container.innerHTML = "";
}
```

Löscht den Inhalt des vorgegebenen Containers. 


```
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
```

Abfrage nach der neuen Grid-Größe und dei neustart den Programms.