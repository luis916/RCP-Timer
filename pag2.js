const segundos = document.getElementById('segundos');
const volver = document.getElementById('volver');
const ciclo = document.getElementById('ciclo');
setInterval(function(){
    segundos.textContent = segundos.textContent-1;
    if(segundos.textContent == 0){segundos.textContent = 120;ciclo.textContent =parseInt(ciclo.textContent)+1;}
},1000);

volver.addEventListener('click',function(){
   window.onbeforeunload = function(e) {
        return 'Perdera todos los cambios';
      };
})



