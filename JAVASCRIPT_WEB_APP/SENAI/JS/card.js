var $cardColors = document.querySelectorAll('.card-colors');
var $card = document.querySelectorAll('.card');



for(var i = 0; i < $card.length; i++ ){
	$card[i].addEventListener('click', function(event){
		var $this = event.target;
		var $card = $this;

		
		this.classList.add('isActive');
		

});
}