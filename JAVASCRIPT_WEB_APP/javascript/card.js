var $cards = document.querySelectorAll('.card');
var $cardColors = document.querySelectorAll('.card-colors');

for(var index = 0; index < $cards.length; index++){
	$cards[index].addEventListener('click', function(event){
		var $origin = event.target; 
		var $card = this; 

		if ($origin.classList.contains('card-colors')) {
			$card.dataset.color = $origin.dataset.color;

		for(var position = 0; position < $cardColors.length; position++){
			$cardColors[position].classList.remove('isActive');
		};
			$origin.classList.add('isActive');
		};
		

		
	});
};
