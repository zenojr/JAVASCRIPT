class Negociacao { //criando classe em JS6
	constructor (data, quantidade, valor){ //método construtor da classe
							//por convenção utiliza-se o _ antes de um atributo ou propriedade para sinalizar que este não pode ser alterado ex: _data
		this._data =  data; 
		this._quantidade = quantidade;
		this._valor = valor;

	}

	obtemVolume(){ // function inside of class is called method!!!
		return this._quantidade * this._valor;
	}

	getData(){ // Metodo de acesso ao atributo ou propriedade
		return this._data;
	}

	getQuantidade(){
		return this._quantidade;
	}

	getValor(){
		return this._valor;
	}



} //fim da classe