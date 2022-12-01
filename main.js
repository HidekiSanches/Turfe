var qtdCavalo = 0;
var nome = [];
var contador = 0;
var contador5 = 0
var voltasss = 0;
var tempo = []
var tempo1 = 0
var tempo2 = 0
var tempo3 = 0
var tempo4 = 0
var tempo5 = 0
var tempo6 = 0
var tempo7 = 0
var tempos1 = []
var tempos2 = []
var tempos3 = []
var tempos4 = []
var tempos5 = []
var tempos6 = []
var tempos7 = []

function jogar() {
  jogar1.style = `display: none;`;
  jogar2.style = `display: flex;`;
  cont1.style = `display: none;`;
  loding.style = `display: flex;`;

  setTimeout(() => {
    loding.style = `display: none;`;
    cont2.style = `display: flex;`;
  }, "2000");
}
function registrar() {
  qtdCavalo = ipt_num.value;
  var ipt = (ipt_nome.value).toUpperCase();
  var erro = true;

  if (Number.isNaN(qtdCavalo)) {
    erro = false;
    alert(`Insira um valor numérico`);
  }
  if (qtdCavalo <= 1) {
    erro = false;
    alert(`Insira uma quantia valida`);
  }
  if (qtdCavalo > 7) {
    erro = false
    alert(`Limite de cavalos ultrapassado`)
  }
  if (erro) {
    cont2.style = `display: none;`;
    cont3.style = `display: flex;`;
    cavalo.style = `display: flex;`;

    if (erro && ipt == `` && contador != 0) {
      erro = false;
      alert(`Insira um nome valido`);

      ipt_nome.value = ``;
    }
    for (let i = 0; i < nome.length; i++){
      if (ipt == nome[i]){
        erro = false;
        alert(`Cavalo já cadastrado`)
        ipt_nome.value = ``
      }
    }
    if (erro && ipt != `` && contador != qtdCavalo) {
      contador++;
      cavalos.innerHTML = ``;
      nome.push(ipt.toUpperCase());
      var contador2 = 0

      for (let i = 0; i < nome.length; i++) {
        contador2++
        cavalos.innerHTML += `${contador2}º - ${nome[i]}<br>`;
      }

      num_cav.innerHTML = `${contador + 1}`;
      setTimeout(() => {
        if (contador == qtdCavalo) {
          cont3.style = `display: none;`;
          cont4.style = `display: flex;`;
          cavalo.style = `display: none;`;
        }
      }, "10");

      ipt_nome.value = ``;
    }
  }
}
function registrar2() {
  var ipt2 = ipt_volta.value;
  voltasss = ipt2
  var erro = true;

  if (erro && ipt2 <= 0) {
    erro = false;
    alert(`Insira uma volta valida`);

    ipt_volta.value = ``;
  }
  if (erro && ipt2 > 0) {
    voltasss = ipt_volta.value;
    cont4.style = `display: none;`;
    loding.style = `display: flex`;

    setTimeout(() => {
      loding.style = `display: none;`;
      resultado.style = `display: flex;`;
    }, "2000");

    ipt_volta.value = ``;
  }
}
function correr(){
  var contador3 = 0
  msg.innerHTML = ``
  voltas.innerHTML = ``
  voltas.style = `padding: 20px;`
  voltas.innerHTML += `<h1>Voltas Corridas</h1>`
console.log(contador5)
console.log(volta)
  if (contador5 < voltasss){

    
    var corredor1 = 0
    var corredor2 = 0
    var corredor3 = 0
    var corredor4 = 0
    var corredor5 = 0
  var corredor6 = 0
  var corredor7 = 0
  
  
  if (nome.length == 2){
    tempo1 = Number((Math.random()*2+7).toFixed(1))
    tempo2 = Number((Math.random()*2+7).toFixed(1))
    
    tempos1.push(tempo1)
    tempos2.push(tempo2)
  } else if (nome.length == 3){
    tempo1 = Number((Math.random()*2+7).toFixed(1))
    tempo2 = Number((Math.random()*2+7).toFixed(1))
    tempo3 = Number((Math.random()*2+7).toFixed(1))
    
    tempos1.push(tempo1)
    tempos2.push(tempo2)
    tempos3.push(tempo3)
  } else if (nome.length == 4){
    tempo1 = Number((Math.random()*2+7).toFixed(1))
    tempo2 = Number((Math.random()*2+7).toFixed(1))
    tempo3 = Number((Math.random()*2+7).toFixed(1))
    tempo4 = Number((Math.random()*2+7).toFixed(1))
    
    tempos1.push(tempo1)
    tempos2.push(tempo2)
    tempos3.push(tempo3)
    tempos4.push(tempo4)
  } else if (nome.length == 5){
    tempo1 = Number((Math.random()*2+7).toFixed(1))
    tempo2 = Number((Math.random()*2+7).toFixed(1))
    tempo3 = Number((Math.random()*2+7).toFixed(1))
    tempo4 = Number((Math.random()*2+7).toFixed(1))
    tempo5 = Number((Math.random()*2+7).toFixed(1))
    
    tempos1.push(tempo1)
    tempos2.push(tempo2)
    tempos3.push(tempo3)
    tempos4.push(tempo4)
    tempos5.push(tempo5)
  } else if (nome.length == 6){
    tempo1 = Number((Math.random()*2+7).toFixed(1))
    tempo2 = Number((Math.random()*2+7).toFixed(1))
    tempo3 = Number((Math.random()*2+7).toFixed(1))
    tempo4 = Number((Math.random()*2+7).toFixed(1))
    tempo5 = Number((Math.random()*2+7).toFixed(1))
    tempo6 = Number((Math.random()*2+7).toFixed(1))

    tempos1.push(tempo1)
    tempos2.push(tempo2)
    tempos3.push(tempo3)
    tempos4.push(tempo4)
    tempos5.push(tempo5)
    tempos6.push(tempo6)
  } else if (nome.length == 7){
    tempo1 = Number((Math.random()*2+7).toFixed(1))
    tempo2 = Number((Math.random()*2+7).toFixed(1))
    tempo3 = Number((Math.random()*2+7).toFixed(1))
    tempo4 = Number((Math.random()*2+7).toFixed(1))
    tempo5 = Number((Math.random()*2+7).toFixed(1))
    tempo6 = Number((Math.random()*2+7).toFixed(1))
    tempo7 = Number((Math.random()*2+7).toFixed(1))
    
    tempos1.push(tempo1)
    tempos2.push(tempo2)
    tempos3.push(tempo3)
    tempos4.push(tempo4)
    tempos5.push(tempo5)
    tempos6.push(tempo6)
    tempos7.push(tempo7)
  }
  
  for (let i = 0; i < tempos1.length; i++){
    if (nome.length == 2){
      contador3++ 
      voltas.innerHTML += `<br> voltas ${contador3} <br>`
      corredor1 += tempos1[tempos1.length - 1]
      corredor2 += tempos2[tempos2.length - 1]
      
      tempo[0] = (corredor1)
      tempo[1] = (corredor2)
      
      voltas.innerHTML += `<br> ${nome[0]} -- ${corredor1.toFixed(1)}, ${nome[1]} -- ${corredor2.toFixed(1)}`
    } else if (nome.length == 3){
      contador3++ 
      voltas.innerHTML += `<br> voltas ${contador3} <br>`
      corredor1 += tempos1[tempos1.length - 1]
      corredor2 += tempos2[tempos2.length - 1]
      corredor3 += tempos3[tempos3.length - 1]
      
      tempo[0] = (corredor1)
      tempo[1] = (corredor2)
      tempo[2] = (corredor3)
      
      voltas.innerHTML += `<br> ${nome[0]} -- ${corredor1.toFixed(1)}, ${nome[1]} -- ${corredor2.toFixed(1)}, ${nome[2]} -- ${corredor3.toFixed(1)}`
    } else if (nome.length == 4){
      contador3++ 
      voltas.innerHTML += `<br> voltas ${contador3} <br>`
      corredor1 += tempos1[tempos1.length - 1]
      corredor2 += tempos2[tempos2.length - 1]
      corredor3 += tempos3[tempos3.length - 1]
      corredor4 += tempos4[tempos4.length - 1]
      
      tempo[0] = (corredor1)
      tempo[1] = (corredor2)
      tempo[2] = (corredor3)
      tempo[3] = (corredor4)
      
      voltas.innerHTML += `<br> ${nome[0]} -- ${corredor1.toFixed(1)}, ${nome[1]} -- ${corredor2.toFixed(1)}, ${nome[2]} -- ${corredor3.toFixed(1)}, ${nome[3]} -- ${corredor4.toFixed(1)}`
    } else if (nome.length == 5){
      contador3++ 
      voltas.innerHTML += `<br> voltas ${contador3} <br>`
      corredor1 += tempos1[tempos1.length - 1]
      corredor2 += tempos2[tempos2.length - 1]
      corredor3 += tempos3[tempos3.length - 1]
      corredor4 += tempos4[tempos4.length - 1]
      corredor5 += tempos5[tempos5.length - 1]

      tempo[0] = (corredor1)
      tempo[1] = (corredor2)
      tempo[2] = (corredor3)
      tempo[3] = (corredor4)
      tempo[4] = (corredor5)

      voltas.innerHTML += `<br> ${nome[0]} -- ${corredor1.toFixed(1)}, ${nome[1]} -- ${corredor2.toFixed(1)}, ${nome[2]} -- ${corredor3.toFixed(1)}, ${nome[3]} -- ${corredor4.toFixed(1)}, ${nome[4]} -- ${corredor5.toFixed(1)}`
    } else if (nome.length == 6){
      contador3++ 
      voltas.innerHTML += `<br> voltas ${contador3} <br>`
      corredor1 += tempos1[tempos1.length - 1]
      corredor2 += tempos2[tempos2.length - 1]
      corredor3 += tempos3[tempos3.length - 1]
      corredor4 += tempos4[tempos4.length - 1]
      corredor5 += tempos5[tempos5.length - 1]
      corredor6 += tempos6[tempos6.length - 1]
      
      tempo[0] = (corredor1)
      tempo[1] = (corredor2)
      tempo[2] = (corredor3)
      tempo[3] = (corredor4)
      tempo[4] = (corredor5)
      tempo[5] = (corredor6)
      
      voltas.innerHTML += `<br> ${nome[0]} -- ${corredor1.toFixed(1)}, ${nome[1]} -- ${corredor2.toFixed(1)}, ${nome[2]} -- ${corredor3.toFixed(1)}, ${nome[3]} -- ${corredor4.toFixed(1)}, ${nome[4]} -- ${corredor5.toFixed(1)}, ${nome[5]} -- ${corredor6.toFixed(1)}`
    } else if (nome.length == 7){
      contador3++ 
      voltas.innerHTML += `<br> voltas ${contador3} <br>`
      corredor1 += tempos1[tempos1.length - 1]
      corredor2 += tempos2[tempos2.length - 1]
      corredor3 += tempos3[tempos3.length - 1]
      corredor4 += tempos4[tempos4.length - 1]
      corredor5 += tempos5[tempos5.length - 1]
      corredor6 += tempos6[tempos6.length - 1]
      corredor7 += tempos7[tempos7.length - 1]
      
      tempo[0] = (corredor1)
      tempo[1] = (corredor2)
      tempo[2] = (corredor3)
      tempo[3] = (corredor4)
      tempo[4] = (corredor5)
      tempo[5] = (corredor6)
      tempo[6] = (corredor7)
      
      voltas.innerHTML += `<br> ${nome[0]} -- ${corredor1.toFixed(1)}, ${nome[1]} -- ${corredor2.toFixed(1)}, ${nome[2]} -- ${corredor3.toFixed(1)}, ${nome[3]} -- ${corredor4.toFixed(1)}, ${nome[4]} -- ${corredor5.toFixed(1)}, ${nome[5]} -- ${corredor6.toFixed(1)}, ${nome[5]} -- ${corredor7.toFixed(1)}`
    }
  }
  
  for (let i = 0; i < tempo.length; i++) {
    for (let j = i + 1; j < tempo.length; j++){
      if (tempo[i] > tempo[j]){
        var aux = tempo[i]
        tempo[i] = tempo[j]
        tempo[j] = aux
        
        aux = nome[i]
        nome[i] = nome[j]
        nome[j] = aux
      }
    }
  }
  
  msg.innerHTML += `1º ${nome[0]} : ${(tempo[0]).toFixed(1)} <br> 2º ${nome[1]} : ${(tempo[1]).toFixed(1)} <br> 3º ${nome[2]} : ${(tempo[2]).toFixed(1)}`
  contador5++
} else {
  msg.innerHTML += `1º ${nome[0]} : ${(tempo[0]).toFixed(1)} <br> 2º ${nome[1]} : ${(tempo[1]).toFixed(1)} <br> 3º ${nome[2]} : ${(tempo[2]).toFixed(1)}`
  volta.style = `display: none`
  btn_correr.style = "display: none"
}
}

