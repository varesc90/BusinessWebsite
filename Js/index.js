
var slideIndex = 1; // First Picture
showDivs(slideIndex); // Display First Image

function plusDivs(n) {
  showDivs(slideIndex += n);  // Function that subtact or add value into slideIndex
}


function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides"); //Get an element with class "mySlide"
  if (n > x.length) {slideIndex = 1} // if slide index greater than element , reset the slide index
  if (n < 1) {slideIndex = x.length}// if slide index is less than element , reset to the last image
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none"; // Display none for all element
  }
  x[slideIndex-1].style.display = "block"; //Display block for the image that = slideIndex
}
