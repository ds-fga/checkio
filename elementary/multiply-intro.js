// Fução que multiplica os dois argumentos
function multTwo(a, b) {
  return a * b;
}


// Sintaxe alternativa utilizando "arrow functions"
var multTwo = (a, b) => a * b;


// Usando soma
function multTwo(a, b) {
  var total = 0;
  for(var n=1; n <= a; n++) {
    total += b;
  }
  return total;
}
