function calculaImc(paciente){
	if (paciente.altura != 0) {
	    var imc = paciente.peso / (paciente.altura * paciente.altura);
	    return imc;

	} else {
	  console.log("informe altura");
	}
	

}



var trPacientes = document.getElementsByClassName("paciente"); //array que pega as trs 


for (var posicaoAtual = 0; posicaoAtual <= trPacientes.length -1 ; posicaoAtual++) {
	

	
	var pacienteTr = trPacientes[posicaoAtual]; //array class paciente
	
	//pega elementos dentro do array pacienteTr com variavle de controle
	var tdNome = pacienteTr.getElementsByClassName("info-nome")[0];
	var tdPeso = pacienteTr.getElementsByClassName("info-peso")[0];
	var tdAltura = pacienteTr.getElementsByClassName("info-altura")[0];

	var pacienteAtual = {nome:tdNome.textContent, peso:tdPeso.textContent, altura:tdAltura.textContent}; //constroi o objeto

	
	var imc = calculaImc(pacienteAtual);

	var tdImc = pacienteTr.getElementsByClassName("info-imc")[0];
	tdImc.textContent = imc; 
	console.log(imc);


};//endFor
