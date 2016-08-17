// init Masonry
var $grid = $('.grid').masonry({
	itemSelector: '.grid-item',
	resize: true,
	fitWidth: true,
	percentPosition: true
});
// layout Masonry after each image loads
$grid.imagesLoaded().progress( function() {
	$grid.masonry('layout');
});