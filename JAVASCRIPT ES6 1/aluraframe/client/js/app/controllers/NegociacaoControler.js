class NegociacaoControler {


    constructor(){
      let $ = document.querySelector.bind(document); //cria um seletor para o document.querySelector para utilizar o $ no lugar do document, lembrar q o bind mantém a associação com o this do document.

      this._inputData = $('#data'); //instaciamos com o operador this. para que possamos chamar o DOM apenas uma vez e armazenar
      this._inputQuantidade = $('#quantidade');
      this._intputValor = $('#valor');

      console.log(typeof(this._inputData));

    }
    adiciona(event){
      event.preventDefault();


      //let data = new Date(this._inputData.value.split('-')); //solução 1 para trocar o -  da data e reconhecer a virgula;

      let data = new Date(this._inputData.input.value.replace(/-/g ','));//faz o replace utilizando o // como seletor global /g e faz um replace pela virgula;
      console.log(data);


    }

}
