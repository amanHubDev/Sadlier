
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





var getVideoTrigger = document.querySelectorAll(".video_pop_trigger");
var getVideoModal = document.querySelectorAll(".cardVideoPopup");

Array.prototype.slice.call(getVideoTrigger).forEach(function (ele, index) {
  ele.addEventListener("click", function (el) {
    var getId = this.getAttribute("data-trigger-id");

    document
      .querySelector('[data-video-id="' + getId + '"]')
      .classList.add("open");

    console.log(getId);

    var getIframe = document.querySelector(
      '[data-video-id="' + getId + '"] iframe'
    );
    if (getIframe) {
      var getSrc = getIframe.getAttribute("data-src");
      console.log(getSrc, "getSrc");
      document
        .querySelector('[data-video-id="' + getId + '"] iframe')
        .setAttribute("src", getSrc);
    }

    document.querySelector("body").classList.add("modal_popup_open");

    setTimeout(function () {
      document
        .querySelector('[data-video-id="' + getId + '"]')
        .classList.add("anim");
      var checkVideo = document.querySelector(
        '[data-video-id="' + getId + '"] video'
      );
      if (checkVideo) {
        checkVideo.play();
        checkVideo.muted = false;
      }
    });
  });
});

var getVideoClose = document.querySelectorAll(".cardVideoPopup .close");

Array.prototype.slice.call(getVideoClose).forEach(function (ele, index) {
  ele.addEventListener("click", function (el) {
    this.parentNode.parentNode.parentNode.classList.remove("open");
    this.parentNode.parentNode.parentNode.classList.remove("anim");
    document.querySelector("body").classList.remove("modal_popup_open");

    // var checkChildren = this.nextElementSibling.children[0];

    var checkChildren = this.nextElementSibling.querySelector("video");
    var checkChildren2 = this.nextElementSibling.querySelector("iframe");

    if (checkChildren) {
      checkChildren.pause();
      checkVideo.muted = true;
    }

    if (checkChildren2) {
      checkChildren2.setAttribute("src", "");
    }
  });
});



