
var add = document.getElementById('addElem');
var list = document.getElementById('list');

var itemsByTagName = document.getElementsByTagName('li');


add.addEventListener('click', function(e) {
 	var newElem = document.createElement('li');

	newElem.innerHTML = 'item ' + itemsByTagName.length;
	list.appendChild(newElem);
	console.log(itemsByTagName.length - 1);
});

