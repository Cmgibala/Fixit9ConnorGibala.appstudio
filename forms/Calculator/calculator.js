

btAdd.onclick=function(){
  num1 = Number(inptNum1.value);
  num2 = Number(inptNum2.value);
  name = inptName1.value;
  alAnswer.value = (`${name}, the sum of the numbers is ${num1 + num2}.`);
}


btMultiply.onclick=function(){
  num1 = Number(inptNum1.value);
  num2 = Number(inptNum2.value);
  alAnswer.value = (`${name}, the product of the numbers is ${num1 * num2}.`);
}

btClear.onclick=function(){
  inptNum1.value = '';
  inptNum2.value = '';
  alAnswer.value = '';
}
