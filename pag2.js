
const segundos = document.getElementById('segundos');
const volver = document.getElementById('volver');
const ciclo = document.getElementById('ciclo');
const dropdownContent = document.getElementById('dropdown-content');
const dropdownBtn = document.querySelector('.dropdown-btn');
dropdownContent.style.display = 'none';
dropdownContent.style.transitionDuration = '10s';
dropdownBtn.addEventListener('click',function(){
    dropdownContent.style.display = 'block';
    setTimeout(function(){
        dropdownContent.style.transitionDuration = '10s';
        dropdownContent.style.display = 'none';
    },4000);
});
setInterval(function(){
    if(segundos.textContent>10){
        segundos.textContent = segundos.textContent-1;
    }else
    if(segundos.textContent<=10){
        segundos.textContent = segundos.textContent-1;
       // speechSynthesis.speak(new SpeechSynthesisUtterance(segundos.textContent))
    }
},1000);

volver.addEventListener('click',function(){
   window.onbeforeunload = function(e) {
        return 'Perdera todos los cambios';
      };
})
