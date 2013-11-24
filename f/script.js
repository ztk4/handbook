$(document).ready(function() {
	
	for(var i=0; i<5; i++) { //stagger pages in background
		var $bgPage = $('<div class="bgPage" />');
		$bgPage.css('transform', 'rotate('+(i * (i%2 === 1 ? -0.75 : 1.25))+'deg)');
		$bgPage.css('z-index', -i-1);
		$("#pageStack").append($bgPage);
	}
	
	function flipPage(newPage) {
		if(newPage < 0 || newPage >= numPages) return;
		$page.removeClass("show").removeClass("up").removeClass("down");
		var $newPage = getPage(newPage).removeClass("hidden").removeClass("up").removeClass("down");
		if(newPage > page) {
			$page.addClass("up");
			$newPage.addClass("up");
		}else {
			$page.addClass("down");
			$newPage.addClass("down");
		}
		$page.addClass("hidden").delay(1000).fadeOut(0); //allows people to highlight and click on further pages by hiding higher element
		$newPage.addClass("show").show(); //bring back element
		$page = $newPage;
		page = newPage;
	}
	
	function getPage(pageNumber) {
		return $('.page[data-number="' + pageNumber + '"]');
	}
	
	function nextPage() {
		flipPage(page+1);
	}
	
	function prevPage() {
		flipPage(page-1);
	}
	
	var $page = getPage(0), page = 0, numPages = $('.page').length;
	
	$('.arrow').css('z-index', numPages+1);
	
	for(var i = numPages; i>0; i--) {
		getPage(numPages-i).css('z-index', i)
	}
	
	$('#next').click(nextPage);
	$('#prev').click(prevPage);
	
	$('.jump').click(function() {
		flipPage($(this).data('number'));
	});
	
	if(window.location.split("#").length > 0) flipPage(window.location.split("#")[1];
	
});