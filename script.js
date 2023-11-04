// JavaScript function to toggle plan pricing display
function check() {
  var checkBox = document.getElementById("checkbox");
  var text1 = document.getElementsByClassName("text2");
  var text2 = document.getElementsByClassName("text1");

  for (var i = 0; i < text1.length; i++) {
    if (checkBox.checked) {
      text1[i].style.display = "block";
      text2[i].style.display = "none";
    } else {
      text1[i].style.display = "none";
      text2[i].style.display = "block";
    }
  }
}

// Initial function call to set the correct display on page load
document.addEventListener("DOMContentLoaded", function() {
  check();
});