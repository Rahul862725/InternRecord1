// Open the popup
let popup=document.getElementById("popup");
$(document).ready(function() {
	setTimeout(function() {
		openPopup();
	}, 1000);
});

function openPopup() {
	 popup.style.display="block";
}
  
  // Close the popup
  function closePopup() {
	 
	popup.style.display = "none";
  }
  
  // Attach the close button click event listener
  var closeButton = document.getElementById("close-btn");
  var closeButton1 = document.getElementById("close-btn1");
  closeButton.addEventListener("click", closePopup);
  closeButton1.addEventListener("click", closePopup);

  