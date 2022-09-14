
/*
Abaixo de 17	Muito abaixo do peso
Entre 17 e 18,49	Abaixo do peso
Entre 18,5 e 24,99	Peso normal
Entre 25 e 29,99	Acima do peso
*/

//  peso / (altura*altura);

var peso;
var altura;
var imc;
var resultado;

function calcular(event){
  event.preventDefault();

  peso = document.getElementById('peso').value;
  altura = document.getElementById('altura').value;

  imc = peso / (altura * altura);

  resultado = document.getElementById('resultado');

  if(imc < 17){
    resultado.innerHTML = '<br/> Seu resultado foi: ' + imc.toFixed(2) + '<br/> Cuidado você está muito abaixo do peso!' + ' <br/> <img src="https://veja.abril.com.br/wp-content/uploads/2016/05/gene-magreza-peito-20110831-original.jpeg"  width="150">'
  }else if(imc > 17 && imc <= 18.49){
    resultado.innerHTML = '<br/> Seu resultado foi: ' + imc.toFixed(2) + '<br/> Você está Abaixo do peso!'  + ' <br/>  <img src="https://www.greenme.com.br/wp-content/uploads/2020/11/muito-magro.jpg"  width="150">';
  }else if(imc >= 18.5 && imc < 24.99){
    resultado.innerHTML = '<br/> Seu resultado foi: ' + imc.toFixed(2) + '<br/> Você está no peso ideal!'  + ' <br/>  <img src="https://classic.exame.com/wp-content/uploads/2016/09/size_960_16_9_mulher-em-cima-da-balanca.jpg"  width="150">';
  }else if(imc > 25 && imc <= 29.99){
    resultado.innerHTML = '<br/> Seu resultado foi: ' + imc.toFixed(2) + '<br/> Você está acima do peso!' + ' <br/>  <img src="https://veja.abril.com.br/wp-content/uploads/2016/07/saude-obesidade-20160725-01.jpg"  width="150">';
  }else if(imc >= 30){
    resultado.innerHTML = '<br/> Seu resultado foi: ' + imc.toFixed(2) + '<br/> Cuidado Obesidade!' + ' <br/>  <img src="https://www.infoescola.com/wp-content/uploads/2008/06/obesidade_1395587945.jpg"  width="150">';
  }else if(imc === "0.00") {
    resultado.innerHTML = 'por favor digite numeros validos'
  }

  document.getElementById('peso').value = '';
  document.getElementById('altura').value = '';


}