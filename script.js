var istatus = document.querySelector("h2");
var btn = document.querySelector("#add");
var check = 0 
btn.addEventListener("click", function() {
     if (check == 0) {
         istatus.innerHTML = "Now Friend";
         istatus.style.color = "Green";
         btn.innerHTML = "Remove";
         btn.style.backgroundColor = "red"; // बटन का बैकग्राउंड लाल
         check = 1;
     } else {
         istatus.innerHTML = "Stranger";
         istatus.style.color = "red";
         btn.innerHTML = "Add Friend";
         btn.style.backgroundColor = "green"; // बटन का बैकग्राउंड हरा
         check = 0;
     }
 });
 