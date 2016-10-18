class Negociacao { //criando classe em JS6
	constructor (data, quantidade, valor){ //método construtor da classe
							//por convenção utiliza-se o _ antes de um atributo ou propriedade para sinalizar que este não pode ser alterado ex: _data
		this._data =  new Date(data.getTime()); //reinstaciando o atributo para evitar o problema com freeze shallow
		this._quantidade = quantidade;
		this._valor = valor;

		Object.freeze(this); //congela o objeto contra alterações após instanciado para evitar falhas de segurança;

	}

	get volume(){ // function inside of class is called method!!!
		return this._quantidade * this._valor;
	}

	get data(){ // Metodo de acesso ao atributo ou propriedade
		return new Date(this._data.getTime());
	}

	get quantidade(){
		return this._quantidade;
	}

	get valor(){
		return this._valor;
	}



} //fim da classe
