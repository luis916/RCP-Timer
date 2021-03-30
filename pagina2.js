// seleccion de elementos//
let _1mg_adrenalina = document.getElementById('1mg-adrenalina');
let _05mg_atropina = document.getElementById('0.5mg-atropina');
let _1mg_atropina = document.getElementById('1mg-atropina');
let _125_magnesio = document.getElementById('1.25gr-magnesio');
let _150mg_amiodrona = document.getElementById('150mg-amiodrona');
let _300mg_amiodrona = document.getElementById('300mg-amiodrona');
let _100mg_lidocaina = document.getElementById('100mg-lidocaina');
let _1gr_calcio = document.getElementById('1gr-calcio');
let _04mg_naxolona = document.getElementById('0.4mg-naxolona');
let _20ml_dextrosa = document.getElementById('20ml-dextrosa');
let _250ml_bicarbonato = document.getElementById('250ml-bicarbonato');
let _500ml_fisiologico = document.getElementById('500ml-fisiologico');
let  _500_solRinger = document.getElementById('500ml-solRinger');
let segundos = document.getElementById('segundos');
let farmacos = document.querySelector('.farmacos');
let farmacos_botones = document.getElementById('farmacos_botones');
let farmacos_seleccionar = document.getElementById('farmacos-btn');
let ciclo = document.getElementById('ciclo');
let circulo = document.querySelector('.circulo');
let seccion = document.querySelector('.seccion');
let segundosInicial;
let _10segundos_incial ;
let div10segundos = document.createElement('div');
div10segundos.classList.add('div_10_segundos');
let reiniciar = document.getElementById('reiniciar');
//hora actual//
function horaActual(){
let fecha = new Date;
return `${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`;
}
//
// funcion cuenta atras//
function cuentaAtras(){
    segundosInicial = 120;
    let intervalo = setInterval(()=>{
        segundos.textContent = segundosInicial--;
        if(segundos.textContent == -1){
            segundos.style.color = 'red';
            clearInterval(intervalo);
            farmacos.style.display = 'none';
            segundos.textContent = 0;
            divPresenciaPulso.style.display = 'block';
            // cuenta atras de 10 segundos//
            _10segundos();
        }
    },1000);
}
//
//Creación de lista de medicamentos administrados//
let div = document.createElement('div');
div.classList.add('lista-medicamentos');
document.body.appendChild(div);
let cicloInicial = document.createElement('p');
let textoCicloInicial = document.createTextNode(`${horaActual()} Inicio del 1° Ciclo de reanimación`);
cicloInicial.appendChild(textoCicloInicial);
div.appendChild(cicloInicial);
//funcion creadora de parrafos
function creacionParrafos(text){
    let parrafo = document.createElement('p');
    let textoParrafo = document.createTextNode(text);
    parrafo.appendChild(textoParrafo);
    div.appendChild(parrafo);
}
//
//eventos botones de farmacos//
farmacos_seleccionar.addEventListener('click',()=>{
    farmacos_botones.style.display = 'block';
})
_1mg_adrenalina.addEventListener('click',function evento(){
    creacionParrafos(`${horaActual()} 1mg Adrenalina`);
    farmacos_botones.style.display = 'none';
    _1mg_adrenalina.textContent = 'Medicamento no disponible';
    _1mg_adrenalina.style.color = 'red';
    let Cuenta_10_segundos_span = document.createElement('span');
    let Cuenta_10_segundos_span_texto = document.createTextNode('180');
    Cuenta_10_segundos_span.appendChild(Cuenta_10_segundos_span_texto);
    Cuenta_10_segundos_span.style.background = 'black';
    Cuenta_10_segundos_span.style.marginLeft = '.5vh';
    _1mg_adrenalina.appendChild(Cuenta_10_segundos_span);
    let cuentaAtras_10 = setInterval(()=>{
        Cuenta_10_segundos_span.textContent = parseInt(Cuenta_10_segundos_span.textContent)-1;
        if(Cuenta_10_segundos_span.textContent == 0){
            clearInterval(cuentaAtras_10);
        }
    },1000);
    _1mg_adrenalina.removeEventListener('click',evento);
    setTimeout(()=>{
        _1mg_adrenalina.addEventListener('click',evento)
        _1mg_adrenalina.textContent = '1mg Adrenalina';
        _1mg_adrenalina.style.color = 'black';
    },180000)
});
_05mg_atropina.addEventListener('click',()=>{
    creacionParrafos(`${horaActual()} 0.5mg Atropina`);
    farmacos_botones.style.display = 'none';
});
_1mg_atropina.addEventListener('click',()=>{
    creacionParrafos(`${horaActual()} 1mg Atropina`);
    farmacos_botones.style.display = 'none';
});
_125_magnesio.addEventListener('click',()=>{
    creacionParrafos(`${horaActual()} 1.25gr Sulfato de magnesio`);
    farmacos_botones.style.display = 'none';
});
_150mg_amiodrona.addEventListener('click',()=>{
    creacionParrafos(`${horaActual()} 150 mg Amiodrona`);
    farmacos_botones.style.display = 'none';
});
_300mg_amiodrona.addEventListener('click',()=>{
    creacionParrafos(`${horaActual()} 300 mg Amiodrona`);
    farmacos_botones.style.display = 'none';
});
_100mg_lidocaina.addEventListener('click',()=>{
    creacionParrafos(`${horaActual()} 100mg Lidocaina`);
    farmacos_botones.style.display = 'none';
});
_1gr_calcio.addEventListener('click',()=>{
    creacionParrafos(`${horaActual()} 1gr cloruro calcio`);
    farmacos_botones.style.display = 'none';
});
_04mg_naxolona.addEventListener('click',()=>{
    creacionParrafos(`${horaActual()} 0.4 mg Naxolona`);
    farmacos_botones.style.display = 'none';
});
_20ml_dextrosa.addEventListener('click',()=>{
    creacionParrafos(`${horaActual()} 20ml Dextrosa 30%`);
    farmacos_botones.style.display = 'none';
});
_250ml_bicarbonato.addEventListener('click',()=>{
    creacionParrafos(`${horaActual()} 250 ml Bicarbonato sódico 2/3 Mol`);
    farmacos_botones.style.display = 'none';
});
_500ml_fisiologico.addEventListener('click',()=>{
    creacionParrafos(`${horaActual()} 500ml Fisiologico 0.9%`);
    farmacos_botones.style.display = 'none';
});
_500_solRinger.addEventListener('click',()=>{
    creacionParrafos(`${horaActual()} 500ml Sol Ringer`);
    farmacos_botones.style.display = 'none';
});
//

// div para la presencia de pulso//
let divPresenciaPulso = document.createElement('div');
divPresenciaPulso.classList.add('presencia_pulso');
let presencia_pulso_parrafo = document.createElement('p');
let presencia_pulso_texto = document.createTextNode('Hay presencia de pulso?');
let hr = document.createElement('hr');
let presencia_pulso_btnSI = document.createElement('button');
let presencia_pulso_btnNo = document.createElement('button');
let presencia_pulso_btnSI_texto = document.createTextNode('Si, Pulso presente');
let presencia_pulso_btnNo_texto = document.createTextNode('Ausente');
presencia_pulso_btnSI.appendChild(presencia_pulso_btnSI_texto);
presencia_pulso_btnNo.appendChild(presencia_pulso_btnNo_texto);
presencia_pulso_parrafo.appendChild(presencia_pulso_texto);
divPresenciaPulso.appendChild(presencia_pulso_parrafo);
divPresenciaPulso.appendChild(hr);
divPresenciaPulso.appendChild(presencia_pulso_btnSI);
divPresenciaPulso.appendChild(presencia_pulso_btnNo);
document.body.appendChild(divPresenciaPulso);
// boton de pulso presente//
presencia_pulso_btnSI.addEventListener('click',()=>{
    divPresenciaPulso.style.display = 'none'; 
    div10segundos.style.display = 'none';
});
//
// boton de pulso ausente//
presencia_pulso_btnNo.addEventListener('click',()=>{
    divPresenciaPulso.style.display = 'none';
    let Parrafo_pulsoAusente = document.createElement('p');
    let textoPulsoAusente = document.createTextNode(`${horaActual()} Pulso ausente`);
    Parrafo_pulsoAusente.appendChild(textoPulsoAusente);
    div.appendChild(Parrafo_pulsoAusente);
    //ritmo desfibrilable//
    let divRitmoDesfibrilable = document.createElement('div');
    divRitmoDesfibrilable.classList.add('ritmo-desfibrilable');
    divRitmoDesfibrilable.style.display = 'block';
    let ritmo_desfibrilable_parrafo = document.createElement('p');
    let ritmo_desfibrilable_texto = document.createTextNode('El ritmo es desfibrilable?');
    let ritmo_desfibrilable_btnSi = document.createElement('button');
    let ritmo_desfibrilable_btnNo = document.createElement('button');
    let ritmo_desfibrilable_btnSi_texto = document.createTextNode('Si, el ritmo es desfibrilable');
    let ritmo_desfibrilable_btnNo_texto = document.createTextNode('No');
    let Parrafo_sumar_ciclo = document.createElement('p');
    let Parrafo_sumar_ciclo_texto = document.createTextNode(`${horaActual()} Inicio del ${ciclo.textContent}°  Ciclo de reanimación`);
    Parrafo_sumar_ciclo.appendChild(Parrafo_sumar_ciclo_texto);
    ritmo_desfibrilable_btnSi.appendChild(ritmo_desfibrilable_btnSi_texto)
    ritmo_desfibrilable_btnNo.appendChild(ritmo_desfibrilable_btnNo_texto);
    ritmo_desfibrilable_parrafo.appendChild(ritmo_desfibrilable_texto);
    divRitmoDesfibrilable.appendChild(ritmo_desfibrilable_parrafo)
    divRitmoDesfibrilable.appendChild(hr);
    divRitmoDesfibrilable.appendChild(ritmo_desfibrilable_btnSi);
    divRitmoDesfibrilable.appendChild(ritmo_desfibrilable_btnNo);
    document.body.appendChild(divRitmoDesfibrilable);
    // 
    // boton ritmo desfibrilable no//
    ritmo_desfibrilable_btnNo.addEventListener('click',()=>{
        ciclo.textContent = parseInt(ciclo.textContent)+1;   
        let Parrafo_sumar_ciclo = document.createElement('p');
        let Parrafo_sumar_ciclo_texto = document.createTextNode(`${horaActual()} Inicio del ${ciclo.textContent}° Ciclo de reanimación`);
        Parrafo_sumar_ciclo.appendChild(Parrafo_sumar_ciclo_texto);
        div.appendChild(Parrafo_sumar_ciclo);
        segundosInicial = 120;
        cuentaAtras();
        divRitmoDesfibrilable.style.display = 'none';
        farmacos.style.display = 'block';
        div10segundos.style.display = 'none';
    });
    // boton desfibrilable si//
    ritmo_desfibrilable_btnSi.addEventListener('click',()=>{
        let divJoules = document.createElement('div');
        divJoules.classList.add('joules');
        let parrafo_joules = document.createElement('p');
        let parrafo_joules_texto = document.createTextNode('Cuantos joules desea utilizar?');
        let joules_input = document.createElement('input');
        joules_input.setAttribute('type','number');
        let joules_cancelar = document.createElement('button');
        let joules_ok = document.createElement('button');
        let joules_cancelar_text = document.createTextNode('Cancel');
        let joules_ok_text = document.createTextNode('OK');
        joules_cancelar.append(joules_cancelar_text)
        joules_ok.appendChild(joules_ok_text);
        parrafo_joules.appendChild(parrafo_joules_texto);
        divJoules.appendChild(parrafo_joules);
        divJoules.appendChild(hr);
        divJoules.appendChild(joules_input);
        divJoules.appendChild(joules_cancelar);
        divJoules.appendChild(joules_ok);
        document.body.appendChild(divJoules);
        divRitmoDesfibrilable.style.display = 'none';
        // boton joules cancelar //
        joules_cancelar.addEventListener('click',()=>{
            ciclo.textContent = parseInt(ciclo.textContent)+1;
            let Parrafo_sumar_ciclo = document.createElement('p');
            let Parrafo_sumar_ciclo_texto = document.createTextNode(`${horaActual()} Inicio del ${ciclo.textContent}° Ciclo de reanimación`);
            Parrafo_sumar_ciclo.appendChild(Parrafo_sumar_ciclo_texto);
            div.appendChild(Parrafo_sumar_ciclo);
            divJoules.style.display = 'none';
            segundosInicial = 120;
            cuentaAtras();
            divRitmoDesfibrilable.style.display = 'none';
            farmacos.style.display = 'block';
            div10segundos.style.display = 'none';
        });
        //
        // boton joules ok//
        joules_ok.addEventListener('click',()=>{
            divJoules.style.display = 'none';   
            let joules_parrafo = document.createElement('p');
            let joules_texto = document.createTextNode(`${horaActual()} Desfibrilación eléctrica con ${joules_input.value} Joules`);
            joules_parrafo.appendChild(joules_texto);
            div.appendChild(joules_parrafo);
            ciclo.textContent = parseInt(ciclo.textContent)+1;
            let Parrafo_sumar_ciclo = document.createElement('p');
            let Parrafo_sumar_ciclo_texto = document.createTextNode(`${horaActual()} Inicio del ${ciclo.textContent}° Ciclo de reanimación`);
            Parrafo_sumar_ciclo.appendChild(Parrafo_sumar_ciclo_texto);
            div.appendChild(Parrafo_sumar_ciclo);
            segundosInicial = 120;
            cuentaAtras();
            divRitmoDesfibrilable.style.display = 'none';
            farmacos.style.display = 'block';
            div10segundos.style.display = 'none';
        })
    });

});
// 
let div10segundos_span = document.createElement('span');
let div10segundos_span_texto = document.createTextNode('10'); 
div10segundos_span.appendChild(div10segundos_span_texto);   
     function _10segundos(){
         _10segundos_incial = 10;
             div10segundos.style.display = 'block';      
            seccion.appendChild(div10segundos);     
            div10segundos.appendChild(div10segundos_span);
            let intervalo_10_segundos = setInterval(()=>{
                div10segundos_span.textContent = _10segundos_incial--;
                if(div10segundos_span.textContent == -1){
                    clearInterval(intervalo_10_segundos);
                    div10segundos.style.display = 'none';
                }
            },1000);div10segundos_span.textContent = 10;}
//_10segundos();
reiniciar.addEventListener('click',()=>{
   // if (confirm('Seguro que desea reiniciar?')){
        window.location.reload();
    }
    
);
cuentaAtras();
