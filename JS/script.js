$(document).ready(function() {
	createMosaic = function(size) {
		var $container = $("#container")
		$container.empty();
		scale = 500 / size;
		for (i = 0; i < size; i++) {
			var newRowDiv = $('<div class="row" style="height:' + scale +'; width: 500px;"></div>');
			$container.append(newRowDiv);
			for (j = 0; j < size; j++) {
				var newCellDiv = $('<div class="cell" style="display: inline-block; height:' + scale + '; width:' + scale + ';"></div>');
				newRowDiv.append(newCellDiv);
				newCellDiv.hover(function() {
					$(this).css("background-color","black");
				});
			}
		}
	}
	createMosaic(16);
	$("button").click(function() {
		currentSideInt = prompt("How many squares per side?");
		createMosaic(currentSideInt);
	});
});
