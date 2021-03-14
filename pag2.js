// seleccion botones medicamentos////////////////////////////////////////////////
let _1mgAdrenalina = document.getElementById('1mgAdrenalina');
let _05mgAtropina = document.getElementById('0.5mgAtropina');
let _1mgAtropina = document.getElementById('1mgAtropina');
let _25GrSulfatoMagnesio = document.getElementById('1.25GrSulfatoMagnesio');
let _150mgAmiodarona = document.getElementById('150mgAmiodarona');
let _300mgAmiodarona = document.getElementById('300mgAmiodarona');
let _100mgLidocaina = document.getElementById('100mgLidocaina');
let _1grCloruroCalcio = document.getElementById('1grCloruroCalcio');
let _4mgNaloxona = document.getElementById('0.4mgNaloxona');
let _20mlDextrosa = document.getElementById('20mlDextrosa');
let _250mlBicarbonatoSodico = document.getElementById('250mlBicarbonatoSodico');
let _500mlSolFisiologico = document.getElementById('500mlSolFisiologico');
let _500mlSolRingerLactato = document.getElementById('500mlSolRingerLactato');
let ciclo = document.getElementById('ciclo');
let tiempoLimite = 20;
//////////////////////////////////////////////////////////////////////////////////
// creación de elementos//////////////////////////////////////////////////////////
function creacionParrafos(textNode){
    const mostrar = document.getElementById('mostrar');
    mostrar.style.display = 'block';
    let parrafo = document.createElement('p');
    let hr = document.createElement('hr');
    let texto = document.createTextNode(textNode);
    parrafo.appendChild(texto);
    mostrar.appendChild(parrafo);
    mostrar.appendChild(hr);
}
// creacion de ventanas flotante///////////////////////////////////////////////////
function presenciaPulso(){
    let btnSi = document.createElement('button');
    btnSi.style.backgroundColor = '#1D77DC';
    let btnNo = document.createElement('button');
    let parrafo = document.createElement('p');
    let textoParrafo = document.createTextNode('Hay presencia de pulso?');
    let textoSi = document.createTextNode('Si, pulso presente');
    let textoNo = document.createTextNode('Ausente');
    let hr = document.createElement('hr');
    const mostrar = document.getElementById('ventanFlotante');
    mostrar.style.display = 'block';
    parrafo.appendChild(textoParrafo);
    btnNo.appendChild(textoNo)
    btnSi.appendChild(textoSi);
    mostrar.appendChild(parrafo)
    mostrar.appendChild(hr);
    mostrar.appendChild(btnNo);
    mostrar.appendChild(btnSi);
    btnSi.addEventListener('click',()=>{
        mostrar.style.display = 'none';
        
        creacionParrafos(`${horaExacta()} Termino del ${ciclo.textContent}° Ciclo de RCP`);
    });
    btnNo.addEventListener('click',()=>{
        ritmo();
        mostrar.style.display = 'none';

    });} 
///
function ritmo(){
    let btnSi = document.createElement('button');
    btnSi.style.backgroundColor = '#1D77DC';
    let btnNo = document.createElement('button');
    let parrafo = document.createElement('p');
    let textoParrafo = document.createTextNode('El ritmo es desfibrilable?');
    let textoSi = document.createTextNode('Si, El ritmo es desfibrilable');
    let textoNo = document.createTextNode('No');
    let hr = document.createElement('hr');
    const mostrar = document.getElementById('desfibrilable');
    mostrar.style.display = 'block';
    parrafo.appendChild(textoParrafo);
    btnNo.appendChild(textoNo)
    btnSi.appendChild(textoSi);
    mostrar.appendChild(parrafo)
    mostrar.appendChild(hr);
    mostrar.appendChild(btnNo);
    mostrar.appendChild(btnSi);
    btnNo.addEventListener('click',()=>{
        ciclo.textContent = parseInt(ciclo.textContent)+1;
        creacionParrafos(`${horaExacta()} Termino del ${ciclo.textContent}° Ciclo de RCP`);
        creacionParrafos(`${horaExacta()} Inicio del ${ciclo.textContent}° Ciclo de RCP`);
        mostrar.style.display = 'none';
    });
    btnSi.addEventListener('click',()=>{
        mostrar.style.display = 'none';
        joules();
    });
}
///funcion joules///////////////////////////////////////////////////////////////////
function joules(){
    let mostrar = document.getElementById('joules');
    mostrar.style.display = 'block';
    let parrafo = document.createElement('p');
    let textoParrafo = document.createTextNode('Cuatos joules desea utilizar?');
    let input = document.createElement('input');
    let btnSi = document.createElement('button');
    let btnNo = document.createElement('button');
    let textoSi = document.createTextNode('Ok');
    let textoNo = document.createTextNode('Cancel');
    btnSi.appendChild(textoSi);
    btnSi.style.backgroundColor = '#1D77DC';
    btnNo.appendChild(textoNo);
    input.setAttribute('type','number');
    let hr = document.createElement('hr');
    parrafo.appendChild(textoParrafo);
    mostrar.appendChild(parrafo);
    mostrar.appendChild(hr);
    mostrar.appendChild(input);
    mostrar.appendChild(btnNo);
    mostrar.appendChild(btnSi);
    btnNo.addEventListener('click',()=>{
        mostrar.style.display = 'none';
    });
    btnSi.addEventListener('click',()=>{
        creacionParrafos(`${horaExacta()} Desfibrilación electrica con ${input.value} Joules`);
        tiempoLimite =120;
        ciclo.textContent = parseInt(ciclo.textContent)+1;
        cuentaAtras();
        mostrar.style.display = 'none';
    });  
}
// metodo hora exacta
function horaExacta(){
    let fecha = new Date();
    let horas = fecha.getHours();
    let minutos = fecha.getMinutes();
    let segundos = fecha.getSeconds();
    return `${horas}:${minutos}:${segundos}`;
}
///////////////////////////////////////////////////////////////////////////////////
// metodos cuenta atras
function cuentaAtras(){
    let segundos = document.getElementById('segundos');
    creacionParrafos(`${horaExacta()} Inicio del ${ciclo.textContent}° Ciclo de RCP`);
    let audio = document.getElementById('audio');
    let dropdown_btn = document.querySelector('.dropdown');
    let intervalo = setInterval(()=>{
        segundos.textContent = tiempoLimite--; 
        if(tiempoLimite == -1){
            clearInterval(intervalo);
            dropdown_btn.style.display = 'none';
            presenciaPulso();
        }else
        if(tiempoLimite == 14){
            audio.play();
        } 
    },1000);
}
///////////////////////////////////////////////////////////////////////////////////
// funcion mostrar medicamentos
function mostrarMedicamentos(medicamento){
medicamento.addEventListener('click',()=>{
    creacionParrafos(`${horaExacta()} ${medicamento.textContent}`);      
    });
}
mostrarMedicamentos(_1mgAdrenalina);
mostrarMedicamentos(_05mgAtropina);
mostrarMedicamentos(_1mgAtropina);
mostrarMedicamentos(_25GrSulfatoMagnesio);
mostrarMedicamentos(_150mgAmiodarona);
mostrarMedicamentos(_300mgAmiodarona);
mostrarMedicamentos(_100mgLidocaina);
mostrarMedicamentos(_1grCloruroCalcio);
mostrarMedicamentos(_4mgNaloxona);
mostrarMedicamentos(_20mlDextrosa);
mostrarMedicamentos(_250mlBicarbonatoSodico);
mostrarMedicamentos(_500mlSolFisiologico);
mostrarMedicamentos(_500mlSolRingerLactato);
    cuentaAtras();
    



















//En caso de que el pulso este presente se termina la app.//
// En caso de pulso ausente, pregunta(el ritmo es desfibrilable?)
//En caso de que la respuesta sea si, se pregunta(Cuantos juoles desea ultilizar?)solo numeros

/*

*/





