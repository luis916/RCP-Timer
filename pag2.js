const segundos = document.getElementById('segundos');
const volver = document.getElementById('volver');
const ciclo = document.getElementById('ciclo');
const h1 = document.getElementById('h1');
const getTiempoRestante = tiempoLimite =>{
    let actual = new Date();
    tiempoRestante = (new Date(tiempoLimite) - actual + 1000)/1000,
    segundosRestantes = ('0'+Math.floor(tiempoRestante % 60)).slice(-2),
    minutosRestantes = ('0'+Math.floor(tiempoRestante /60 % 60)).slice(-2),
    horasRestantes =('0'+Math.floor(tiempoRestante /3600% 24)).slice(-2),
    diasRestantes = Math.floor(tiempoRestante /(3600*24))
    return{
        segundosRestantes,
        minutosRestantes,
        horasRestantes,
        diasRestantes
    }
}
h1.style.display = 'block';
setInterval(()=>{getTiempoRestante('Feb 26 2021 07:00:00 GMT-0300');
h1.textContent = `Horas:${horasRestantes } Minutos:${minutosRestantes }Segundos:${segundosRestantes}`;
},10)
