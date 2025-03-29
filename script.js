const textoHeader = document.getElementById('portfolio');
const fonts = ['serif', 'system-ui', 'Arial', 'monospace', 'cursive'];
let i = 0;
// function oi() {
//     setTimeout(function(){oi()}, 3000);
//     console.log('oi');
// }
// oi();

function mudarFonte(){

    textoHeader.style.fontFamily = fonts[i];
    i = (i + 1) % fonts.length;
    console.log(i);

    setTimeout(function(){mudarFonte()}, 2000);
}

mudarFonte();
