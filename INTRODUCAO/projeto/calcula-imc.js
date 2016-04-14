
var peso = document.getElementById("peso-1").textContent; //textContent seta o valor coletado no DOM para a variavel
var altura = document.getElementById("altura-1").textContent;




if (altura != 0) {
    var imc = peso / (altura * altura);

    var tdImc = document.getElementById("imc-2");
    
    tdImc.textContent = imc; 

    console.log(imc);

} else {
  console.log("informe altura");
}


