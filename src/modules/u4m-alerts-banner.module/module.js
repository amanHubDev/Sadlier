var show = localStorage.getItem("show");
if (show === "true") {
  $(".information-banner").hide();
  $("body").addClass("anncmnt_hide");
}

$(".closeTrigger").click(function (event) {
  event.preventDefault();
  $(".information-banner").hide();
  $("body").addClass("anncmnt_hide");
  localStorage.setItem("show", "true");
});
