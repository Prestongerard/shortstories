$(document).ready(function(){

	$(".book-cover").click(function(){
		$(".book-cover").fadeOut("fast");
		$(".page-2").fadeIn();
	});

	$(".back-arrow").click(function(){
		$(".page-2").fadeOut("fast");
		$(".book-cover").fadeIn();
	});

	function grabstory1() {
		var xhttp = new XMLHttpRequest();
		xhttp.open("GET", "url://Users/yiptv/Desktop/testing.txt", true);   //change file location when uploaded online
		xhttp.send();
		document.getElementById(".content").innerHTML = xhttp.responseText;
	}

	$(".soul-particles").click(function(){
		console.log('click');
		grabstory1();
	});
});