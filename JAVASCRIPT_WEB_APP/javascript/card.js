var $cards = document.querySelectorAll('.card');
var $cardColors = document.querySelectorAll('.card-options');

for(var index = 0; index < $cards.length; index++){
	$cards[index].addEventListener('click', function(event){
		var $origin = event.target; 
		console.log($origin);
		var $card = this; 
		console.log($card);

		if ($origin.classList.contains('card-options')) {
			$card.dataset.color = $origin.dataset.color;
			//seleciona pelo evento click a classe do elemento clicado

		if ($origin.classList.contains('card-delete')){
			$card.remove();
		}

		for(var position = 0; position < $cardColors.length; position++){
			$cardColors[position].classList.remove('isActive');
		};
			$origin.classList.add('isActive');
		};
		


	});
};
