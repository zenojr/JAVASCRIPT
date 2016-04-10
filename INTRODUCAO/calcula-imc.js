
//peso /altura * altura

var peso = 100;
var altura = 1.80;

var ehDiferenteDeZero = (altura != 0);

if (ehDiferenteDeZero) {
  var imc = peso / (altura * altura);

  console.log(imc);
}
