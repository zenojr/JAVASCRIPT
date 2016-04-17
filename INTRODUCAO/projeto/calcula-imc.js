
//textContent seta o valor coletado no DOM para a variavel

var tdPeso1 = document.getElementById("peso-1");
var tdAltura1 = document.getElementById("altura-1");
var paciente1 = { peso : tdPeso1.textContent, altura : tdAltura1.textContent};
//primeiro paciente FIM

var tdPeso2 = document.getElementById("peso-2");
var tdAltura2 = document.getElementById("altura-2");
var paciente2 = { peso : tdPeso2.textContent, altura : tdAltura2.textContent};
//segundo paciente FIM 

var pacientes = [paciente1, paciente2];
var posicaoAtual = 0;

var primeiro = pacientes[0];
var segundo = pacientes[1];

while (posicaoAtual <= pacientes.length -1) {
	// statement


if (paciente.altura != 0) {
    var imc = paciente.peso / (paciente.altura * paciente.altura);

    var tdImc = document.getElementById("imc-2");
    tdImc.textContent = imc; 

    console.log(imc);

} else {
  console.log("informe altura");
}

}//endWhile
