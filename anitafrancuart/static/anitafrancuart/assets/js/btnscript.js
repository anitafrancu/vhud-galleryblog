
$(document).ready(function(){
	$(this).scrollTop(0);
});

//Get the button
var topbutton = document.getElementById("back-top-btn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
	topbutton.style.display = "block";
	} else {
	topbutton.style.display = "none";
	}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}

function CopyToClipboard(containerid) {		
	if (document.selection) {
	//clipboardData.clearData();
	var range = document.body.createTextRange();
	range.moveToElementText(document.getElementById(containerid));
	range.select().createTextRange();
	document.execCommand("copy");
	
	// select the contents
	var selection = document.selection ();
	selection.removeAllRanges ();

	} else if (window.getSelection) {
	var range = document.createRange();
	range.selectNode(document.getElementById(containerid));
	window.getSelection().addRange(range);
	document.execCommand("copy");

	// select the contents
	var selection = window.getSelection ();
	selection.removeAllRanges ();
	} 
}		