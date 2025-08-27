// SEÇÃO PARA DECLARAÇÕES DE VARIAVEIS
let nmemoria1 = 0
let nmemoria2 = 0
let resultado = 0
let indOp = 0
let input = document.getElementById('input')
const btnvrg = document.getElementById('btnvrg'); 
const btnClear = document.getElementById('btnClear'); 
const btnClearResult = document.getElementById('btnClearResult');

// DEFININDO VALOR INCIAL DA CALCULADORA
input.value = 0

function escolherop(op) {
    nmemoria1 = parseInt(input.value)
    input.value = 0
    indOp = op 
  };

btnClear.onclick = function() {
    input.value = 0
};

btnClearResult.onclick = function() {
    nmemoria1 = 0
    nmemoria2 = 0
    input.value = 0
};

btnigual.onclick = function() {

  nmemoria2 = parseInt(input.value)
   if (indOp == 1){
        resultado = nmemoria1 + nmemoria2
        input.value = resultado

   }else if (indOp == 2){
        resultado = nmemoria1 - nmemoria2
        input.value = resultado

   }else if (indOp == 3){
        resultado = nmemoria1 / nmemoria2
        input.value = resultado

   }else if (indOp == 4){
        resultado = nmemoria1 * nmemoria2
        input.value = resultado
   }

  nmemoria1 = 0
  nmemoria2 = 0
};

function addnumero(numero) {
    if (input.value === '0') {
        input.value = numero.toString();
    } else {
        input.value += numero.toString();
    }
}























