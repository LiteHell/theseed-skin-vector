$(function() {
	var isVideoAvailable = (function(){
		var v = document.createElement('video');
		return v.canPlayType && v.canPlayType('video/mp4; codecs="avc1.4D401E').replace(/no/, '');
	 })();
	 // fix alert bug
	$(".alert.fade.in").removeClass("fade in");
	$(".wiki-article img.wiki-image-loading").removeClass('wiki-image-loading').each(function () {
		var img = $(this);
		var playAsVideo = img.attr('data-video-src') && isVideoAvailable;
		if(playAsVideo) {
			// liberty skin 참고함.
			var videoTag = $("<video class='wiki-image' loop autoplay muted playsinline>");
			videoTag.attr('src', img.attr('data-video-src'));
			videoTag.attr('poster', '/skins/liberty/images/loading.gif');
			if(img.attr('width')) videoTag.attr('width', img.attr('width'));
			if(img.attr('height')) videoTag.attr('height', img.attr('height'));
			img.after(videoTag);
			img.remove();
		} else {
			img.attr('src', $(this).attr("data-src"));
		}
	});
	$("#searchform").submit(function() { return false; });
	$("#searchInput").keypress(function (event) {
		if (event.key !== "Enter") return;
		event.preventDefault();
		var val = $(this).val();
		if (val.length > 0) {
			location.href = "/go/" + encodeURIComponent(val);
		}
	});
	$("#searchInput").autocomplete({
		delay: 100,
		source: function(request, response) {
			$.ajax({
				url: '/complete/' + encodeURIComponent(request.term),
				dataType : 'json',
				success: function(data) {
					response(data);
				},
				error: function(data) {
					response([]);
				}
			});
		},
		select: function(event, ui) {
			if(ui.item.value) {
				location.href = "/w/" + encodeURIComponent(ui.item.value);
			}
		}
	});
	$("#searchButton").click(function () {
		var val = $("#searchInput").val();
		if (val.length > 0) {
			location.href = "/go/" + encodeURIComponent(val);
		}
	});
	$("#skin-settings").click(function (evt){
		evt.preventDefault();
		// 스킨 설정 개발하기 귀찮음.
		// 데헷★
		var style = document.createElement("style");
		style.innerHTML = "@keyframes shake {" +
		  "10%, 90% {" +
		  "	transform: translate(-20vw, 20vw) rotate(30deg);" +
		  "}" +
		  "20%, 80% {" +
		  "	transform: translate(10vw,-10vw) rotate(-60deg);" +
		  "}" +
		  "30%, 50%, 70% {" +
		  "	transform: translate(-30vw, 30vw) rotate(90deg);" +
		  "}" +
		  "40%, 60% {" +
		  "	transform: translate(40vw, 40vw) rotate(-180deg);" +
		  "}" +
		  "} body { animation: shake infinite 0.1s; }";
		document.head.appendChild(style);
		setTimeout(function(){
			document.head.removeChild(style);
		}, 5000);
	});
});