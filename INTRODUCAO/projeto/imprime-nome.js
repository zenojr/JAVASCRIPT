var trPacientes = document.getElementsByClassName("paciente"); //array que pega as trs 

percorreArray(trPacientes,function (pacienteTr){
				//pega elementos dentro do array pacienteTr com variavle de controle
				var tdNome = pacienteTr.getElementsByClassName("info-nome")[0];
				var tdPeso = pacienteTr.getElementsByClassName("info-peso")[0];
				var tdAltura = pacienteTr.getElementsByClassName("info-altura")[0];

				var pacienteAtual = {nome:tdNome.textContent, 
									peso:tdPeso.textContent, 
									altura:tdAltura.textContent,
									pegaImc: function () { //função anonima
										if (this.altura != 0) {
				    						var imc = this.peso / (this.altura * this.altura);
				    						return imc;

										} else {
				  							console.log("informe altura");
										}
										}


									}; //constroi o objeto

				
				console.log(pacienteAtual.nome);

			} );



	

	
	
	
	
