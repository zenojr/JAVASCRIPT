
//textContent seta o valor coletado no DOM para a variavel

//var tdPeso1 = document.getElementById("peso-1");
//var tdAltura1 = document.getElementById("altura-1");
//var paciente1 = { peso : tdPeso1.textContent, altura : tdAltura1.textContent};
//primeiro paciente FIM

//var tdPeso2 = document.getElementById("peso-2");
//var tdAltura2 = document.getElementById("altura-2");
//var paciente2 = { peso : tdPeso2.textContent, altura : tdAltura2.textContent};
//segundo paciente FIM 

//var pacientes = [paciente1, paciente2];





var trPacientes = document.getElementsByClassName("paciente"); //array que pega as trs 


for (var posicaoAtual = 0; posicaoAtual <= trPacientes.length -1 ; posicaoAtual++) {
	

	
	var pacienteTr = trPacientes[posicaoAtual]; //array class paciente
	
	//pega elementos dentro do array pacienteTr com variavle de controle
	var tdNome = pacienteTr.getElementsByClassName("info-nome")[0];
	var tdPeso = pacienteTr.getElementsByClassName("info-peso")[0];
	var tdAltura = pacienteTr.getElementsByClassName("info-altura")[0];

	var paciente = {nome:tdNome.textContent, peso:tdPeso.textContent, altura:tdAltura.textContent};

	if (paciente.altura != 0) {
	    var imc = paciente.peso / (paciente.altura * paciente.altura);

	    var tdImc = pacienteTr.getElementsByClassName("info-imc")[0];
	    tdImc.textContent = imc; 

	    console.log(imc);

	} else {
	  console.log("informe altura");
	}
	posicaoAtual++;

};//endFor
