var $cardColors = document.querySelectorAll('.card-options');
var $cards = document.querySelectorAll('.card');

for(var index = 0; index < $cards.length; index++){
	$cards[index].addEventListener('click', function(event) {
	var $position = event.target;
	var $card = this;

		if($position.classList.contains('card-options')){
			$card.dataset.color = $position.dataset.color;
		
			for(var i=0; i < $cardColors.length; i++){
				$cardColors[i].classList.remove('isActive');
			};
				$position.classList.add('isActive');
		};
	});
};



 