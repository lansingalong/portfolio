var $grid;
function makeMosaicLayout(){
	// init Masonry
	$grid = $('.grid').isotope({
	  itemSelector: '.grid-item',
	  layoutMode: 'masonry',
	  resize: true,
	  fitWidth: true,
	  percentPosition: true,
	  filter: function () {
	  	return ".category-" + getCategory();
	  }
	});


	// layout Masonry after each image loads
	$grid.imagesLoaded().progress( function() {
		$grid.isotope('layout');
	});
}


function getCategory() {
	hash = window.location.hash.slice(1)
	if(hash) {
		if (["all", "featured", "motion", "ux", "web", "mobile", "illustration"].indexOf(hash) > -1) {
			return hash;
		} else {
			return "all";
		}
	} else {
		return "all";
	}
}

function updateActiveTab(){
	$("#nav-filter a").removeClass("active");
	$("#nav-filter a[href='#" + getCategory() + "']").addClass("active");
}

$(function() {
	makeMosaicLayout();
	updateActiveTab();
});

window.onhashchange = function() {
	$grid.isotope({
		filter: ".category-" + getCategory()
	});

	updateActiveTab();
}