$(document).ready(function() {
	startGrid(16);
});
function startGrid(x){
	for(var row=1;row<=x;row++){
		for(var col=1;col<=x;col++){
		$("#wrapper > #container").append('<div class="grid"></div>');
	}
	}
	$(".grid").width(980/x);
	$(".grid").height(980/x);


}
