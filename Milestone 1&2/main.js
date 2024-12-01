var languageSect = document.querySelector(".language");
var togleButton = document.querySelector("#toggle");
togleButton.addEventListener("click", function () {
    if (languageSect.style.display === "none") {
        languageSect.style.display = "block";
    }
    else {
        languageSect.style.display = "none";
    }
});
