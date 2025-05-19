var collectionSection = document.querySelector(".colleciton-section");
var searchInput = document.getElementById("search");
var productElements = collectionSection.querySelectorAll(".arrival-images-container"); // Select only the product elements

searchInput.addEventListener("keyup", function(event) {
    var enteredValue = event.target.value.toUpperCase();

    productElements.forEach(function(productElement) {
        var productName = productElement.querySelector("p").textContent;
        if (productName.toUpperCase().indexOf(enteredValue) < 0) {
            productElement.style.display = "none";
        } else {
            productElement.style.display = "block";
        }
    });
});