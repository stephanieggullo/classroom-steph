'use strict';

// crear funcion para:
// cargar paletas y sus nombres.
// la url nos devolvera una paleta de color. Cada paleta tiene un nombre. Cuando la pag carga:
//  tenemos que llamar a el point y se carga cada paleta de colores con su nombre
const ulEl = document.querySelector('.ul-contein');
const boxs = document.querySelector('.boxs');

const funtionInit = () => {
    fetch('https://raw.githubusercontent.com/Adalab/dorcas-repaso-sprint2/master/data/palettes.json')
        .then(response => {
            return response.json()
        })
        .then(data => {
            const allPalettes = data.palettes;

            for (let palette of allPalettes) {
                let myList = document.createElement("li");
                myList.classList.add("box-palette");
                myList.innerHTML = palette.name;
                ulEl.appendChild(myList);

                const palettesColors = palette.colors;
                let liColor = '';

                for (let colors of palettesColors) {
                    const listColors = `<div class="color-box" style="background-color:#${colors}"</div>`;
                    liColor += listColors;
                    console.log(liColor);
                    myList.innerHTML += liColor;
                }
            }
        })
}

funtionInit();
