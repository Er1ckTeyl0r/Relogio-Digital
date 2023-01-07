const hora = document.getElementById('hora');
const minuto = document.getElementById('minuto');
const segundo = document.getElementById('segundo');

const frase = document.getElementById('frase');

const relogio = setInterval(function time () {
    let dataToday = new Date()
    let hr = dataToday.getHours()
    let min = dataToday.getMinutes()
    let seg = dataToday.getSeconds()

    hr = 1

    if (hr < 10) hr = '0' + hr;

    if (min < 10) min = '0' + min;

    if (seg < 10) seg = '0' + seg;

    hora.textContent = hr;
    minuto.textContent = min;
    segundo.textContent = seg;

    if (hr >=5 && hr < 12) {
        document.body.style.background = 'linear-gradient(120deg, rgb(212, 191, 119), rgb(116, 116, 38))';
        frase.textContent = 'Bom Dia!';
    }

    if (hr >=12 && hr < 18) {
        document.body.style.background = 'linear-gradient(120deg, rgb(218, 137, 32), rgb(175, 60, 45))';
        frase.textContent = 'Boa Tarde!';
    }

    else if (hr >= 18 && hr <=23) { 
        document.body.style.background = 'linear-gradient(120deg, rgb(32, 26, 26), rgb(42, 39, 90))';
        frase.textContent = 'Boa Noite!';
    }
    else {
        document.body.style.background = 'linear-gradient(120deg, rgb(32, 26, 26), rgb(42, 39, 90))';
        frase.textContent= 'Boa Madrugada!'
    }

})