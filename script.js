// init Masonry
var $grid = $('.grid').masonry({
	itemSelector: '.grid-item',
	columnWidth: 300,
	resize: true
});
// layout Masonry after each image loads
$grid.imagesLoaded().progress( function() {
	$grid.masonry('layout');
});