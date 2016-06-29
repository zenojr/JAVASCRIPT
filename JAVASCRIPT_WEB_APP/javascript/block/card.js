var $cardColors = document.querySelectorAll('.card-options');
var $cards = document.querySelectorAll('.card');



for(var index = 0; index < $cards.length; index ++){
	$cards[index].addEventListener('click', function(event) {


	var $position = event.target;
	var $card = this;
	var $cardContent = $card.querySelector('.card-content');
		if($position.dataset.color){
			$card.dataset.color = $position.dataset.color;
		
			for(var i=0; i < $cardColors.length; i++){
				$cardColors[i].classList.remove('isActive');
			};
				$position.classList.add('isActive');			
		};

		if ($position.classList.contains('card-delete')) {
			$card.remove();
		}

		if ($position.classList.contains('card_edit')) {
			if ($cardContent.getAttribute('contenteditable')=='false') {
				$cardContent.setAttribute('contenteditable', 'true');
				$cardContent.focus();
				$position.classList.add('isActive');
			}else {
				$cardContent.setAttribute('contenteditable', 'false');
    			$cardContent.blur();
    			$position.classList.remove('isActive');
			}
		}
	});
};



 