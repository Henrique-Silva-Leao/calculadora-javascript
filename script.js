// SEÇÃO PARA DECLARAÇÕES DE VARIAVEIS
let n1 = 1 ; let n2 = 2 ;let n3 = 3 ; let n4 = 4; let n5 = 5
let n6 = 6 ; let n7 = 7 ; let n8 = 8 ; let n9 = 9; let n0 = 0
let nrest = 0
let nmemoria1 = 0
let resultado = 0
let indOp = 0
let input = document.getElementById('input')
const btn1 = document.getElementById('btn1'); const btn2 = document.getElementById('btn2'); const btn3 = document.getElementById('btn3')
const btn4 = document.getElementById('btn4'); const btn5 = document.getElementById('btn5'); const btn6 = document.getElementById('btn6');
const btn7 = document.getElementById('btn7'); const btn8 = document.getElementById('btn8'); const btn9 = document.getElementById('btn9'); const btn0 = document.getElementById('btn0')
const btnsom = document.getElementById('btnsom'); const btnsub = document.getElementById('btnsub'); const btndiv = document.getElementById('btndiv');
const btnvrg = document.getElementById('btnvrg'); const btnigual = document.getElementById('btnigual'); const btnmult = document.getElementById('btnmult')

// DEFININDO VALOR INCIAL DA CALCULADORA
input.value = (nrest)

btnsom.onclick = function() {
    nmemoria1 = parseInt(input.value)
    input.value = nrest
    indOp = 1
};
btnsub.onclick = function() {
    nmemoria1 = parseInt(input.value)
    input.value = nrest
    indOp = 2
};
btndiv.onclick = function() {
    nmemoria1 = parseInt(input.value)
    input.value = nrest
    indOp = 3
};
btnmult.onclick = function() {
    nmemoria1 = parseInt(input.value)
    input.value = nrest
    indOp = 4
};

btnigual.onclick = function() {
   if (indOp == 1){
        resultado = nmemoria1 + parseInt(input.value)
        input.value = resultado

   }else if (indOp == 2){
        resultado = nmemoria1 - parseInt(input.value)
        input.value = resultado

   }else if (indOp == 3){
        resultado = nmemoria1 / parseInt(input.value)
        input.value = resultado

   }else if (indOp == 4){
        resultado = nmemoria1 * parseInt(input.value)
        input.value = resultado

   }
};


btn1.onclick = function() {
    if (input.value === '0') {
    input.value = n1;
  } else {
    input.value = input.value + n1;
  }
};

btn2.onclick = function() {
    if (input.value === '0') {
    input.value = n2;
  } else {
    input.value = input.value + n2;
  }
};

btn3.onclick = function() {
    if (input.value === '0') {
    input.value = n3;
  } else {
    input.value = input.value + n3;
  }
};

btn4.onclick = function() {
    if (input.value === '0') {
    input.value = n4;
  } else {
    input.value = input.value + n4;
  }
};

btn5.onclick = function() {
    if (input.value === '0') {
    input.value = n5;
  } else {
    input.value = input.value + n5;
  }
};

btn6.onclick = function() {
    if (input.value === '0') {
    input.value = n6;
  } else {
    input.value = input.value + n6;
  }
};

btn7.onclick = function() {
    if (input.value === '0') {
    input.value = n7;
  } else {
    input.value = input.value + n7;
  }
};

btn8.onclick = function() {
    if (input.value === '0') {
    input.value = n8;
  } else {
    input.value = input.value + n8;
  }
};

btn9.onclick = function() {
    if (input.value === '0') {
    input.value = n9;
  } else {
    input.value = input.value + n9;
  }
};

btn0.onclick = function() {
    if (input.value === '0') {
    input.value = n0;
  } else {
    input.value = input.value + n0;
  }
};























