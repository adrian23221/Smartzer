// Get the modal

var modal = document.getElementById("my-modal");
var btn = document.getElementById("my-btn");
var span = document.getElementsByClassName("close")[0];
var spanPor = document.getElementsByClassName("close-por")[0];

btn.onclick = function() {
    modal.style.display = "block";
};

span.onclick = function() {
    modal.style.display = "none";
};

spanPor.onclick = function() {
    modal.style.display = "none";
};

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

// Get the modal
