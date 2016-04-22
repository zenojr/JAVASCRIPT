
var botao = document.querySelector("#adiciona-paciente"); //usar # para add por ID com query selector

botao.addEventListener("click", function(event) {
	event.preventDefault(); //impede comportamento padrão
	var pacienteNovo = "<tr class='paciente'>"+
						"<td class='info-nome'>Zeno</td>"+
						"<td class='info-peso'>89</td>"+
						"<td class='info-altura'>1.76</td>"+
						"<td class='info-imc'></td>"+
					"</tr>";

	var tabela = document.querySelector("table"); //seletor diferente do document.GetElementByXXX que traz o primeiro elemento
	tabela.innerHTML = tabela.innerHTML + pacienteNovo;

	 
})