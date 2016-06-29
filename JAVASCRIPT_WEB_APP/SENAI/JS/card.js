var $card = document.querySelectorAll('.card-colors');



for(var i = 0; i < $card.length; i++ ){
	$card[i].addEventListener('click', function(){
	console.log('Clicou!!!!!');
});
}