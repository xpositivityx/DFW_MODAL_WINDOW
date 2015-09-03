$(document).ready(function(){
	$(".modal-window .close").click(function(){
		$(".modal-window, .modal-background").hide();
		$("html").css("height", "100%");
	});

	$("a.modal-open").click(function(){
		$(".modal-window, .modal-background").show();
		$("html").css("height", "100%");
	})
});
