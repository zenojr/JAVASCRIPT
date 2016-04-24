

function calculaTodosImcs(){
	var trsPacientes = document.getElementsByClassName("paciente");

	percorreArray(trsPacientes, imprimeEModificaTdDeImc);

	function imprimeEModificaTdDeImc(pacienteTr){

	    var pacienteAtual = montaPaciente(pacienteTr);    
	    var imc = pacienteAtual.pegaImc();

	    var tdImc = pacienteTr.getElementsByClassName("info-imc")[0]; 
	    tdImc.textContent = imc;

	    console.log(imc);
	}


};




function montaPaciente(pacienteTr){
	    var tdNome = pacienteTr.getElementsByClassName("info-nome")[0]; 
	    var tdPeso = pacienteTr.getElementsByClassName("info-peso")[0]; 
	    var tdAltura = pacienteTr.getElementsByClassName("info-altura")[0];

	    var pacienteAtual = {
	        nome : tdNome.textContent, 
	        peso : tdPeso.textContent, 
	        altura : tdAltura.textContent,
	        pegaImc: function() {

	            if(this.altura != 0){
	                var imc = this.peso / (this.altura * this.altura);
	                return imc;
	            } else{

	                console("Não posso dividir por zero!");
	            }
	        }
	    }
	    return pacienteAtual;
	};

 
//Usando o DOM para realizar a função
var botao = document.getElementById("calcula-imcs");
//botao.onclick = calculaTodosImcs; //quando o elemento é chamado pelo HTML, não precisa dos () para a function
//preferencialmente usar onclick, o eventListener lhe proporciona utilizar mais de uma função ou parametro simultaneo'

botao.addEventListener("click", calculaTodosImcs);




