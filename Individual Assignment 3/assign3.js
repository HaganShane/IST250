
function Click(element) {
    document.getElementById("selectedImage").src = element.src;
    document.getElementById("enlarge").style.display = "block";
    document.querySelector(".container").style = "filter: blur(5px)";
    document.querySelector("footer").style = "filter: blur(5px)";
    document.querySelector("#logo").style = "filter: blur(5px)";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;

}

function unblur() {
    document.querySelector(".container").style = "filter: none";
    document.querySelector("footer").style = "filter: none";
    document.querySelector("#logo").style = "filter: none";
}

