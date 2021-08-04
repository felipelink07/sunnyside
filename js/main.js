//Toggle Menu function

var menu = document.getElementById("main-nav");
var toggleButton = document.getElementById("toggle");

function toggleAction() {
    toggleButton.addEventListener('click', function(){
        if (menu.style.display === "none") {
            menu.style.display = "block";
          } else {
            menu.style.display = "none";
          }
    })
    
  }

toggleAction();