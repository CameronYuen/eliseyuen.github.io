$(document).ready(function() {
    $('#fullpage').fullpage({
    	anchors:['firstPage', 'secondPage'],
    	scrollOverflow: true,
    	continuousVertical: false,
    	slidesNavigation: true
    });
});

 $(window).load(function() {  document.getElementById("hideAll").style.display = "none"; });