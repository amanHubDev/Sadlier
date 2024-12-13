
document.querySelectorAll('.cardVideo').forEach(function(cardVideo) {
	cardVideo.addEventListener('click', function() {
		var dtPopup = cardVideo.getAttribute('data-popup-id'); 
		var popupVideoTag = document.getElementById('video-'+dtPopup); 
		var popupElement = document.getElementById(dtPopup);
		if (popupElement) {
			popupElement.style.display = 'flex';
			popupVideoTag.setAttribute('autoplay',"autoplay");
			popupVideoTag.play(); 
		}
	});
});

document.querySelectorAll('.cardpopVideo .close').forEach(function(closeButton) {
	var popVideo = document.querySelectorAll('.cardpopVideo video');
	closeButton.addEventListener('click', function() {
		document.querySelectorAll('.cardVideoPopup').forEach(function(cardVideoPopup) {
			cardVideoPopup.style.display = 'none';
			popVideo.forEach(function(popVideoo) {
				popVideoo.setAttribute('autoplay',"");
				popVideoo.pause(); 
			});
		});
	});
}); 


