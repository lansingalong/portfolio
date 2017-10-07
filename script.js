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
		if (["all", "featured", "motion", "ux", "visual"].indexOf(hash) > -1) {
			return hash;
		} else {
			return "all";
		}
	} else {
		return "featured";
	}
}

function updateActiveTab(){
	$("#nav-filter a").removeClass("active");
	$("#nav-filter a[href='#" + getCategory() + "']").addClass("active");
}

function onLoad() {
	makeMosaicLayout();
	$grid.isotope({
		filter: ".category-" + getCategory()
	});
	updateActiveTab();
}

$(onLoad);

window.onhashchange = onLoad;