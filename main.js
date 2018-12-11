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
            let ulContent = '';

            for (let palette of allPalettes) {

                const listPalettes = `<li class="box-palette"> ${palette.name}</li>`;
                ulContent += listPalettes;
                ulEl.innerHTML = ulContent;

                const palettesColors = palette.colors;
                let liColor = '';

                for (let colors of palettesColors) {
                    const listColors = `<div class="color-box" style="background-color:${colors}"</div>`;
                    liColor += listColors;
                    console.log(liColor);
                }
            }
        })
}

funtionInit();
