const textoHeader = document.getElementById('portfolio');
const fonts = ['serif', 'system-ui', 'Arial', 'monospace', 'cursive'];
let i = 0;

function mudarFonte(){

    textoHeader.style.fontFamily = fonts[i];
    i = (i + 1) % fonts.length;

    setTimeout(function(){mudarFonte()}, 2000);
}

mudarFonte();
