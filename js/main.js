//Select the Sart game
document.querySelector(".control-buttons span").onclick = function () {

       //prompt window to ask for name
       let yourName = prompt("whats your Name?");

       //if Name Is Empty
       if (yourName == null || yourName == "") {
              //set Name To Unknown
              document.querySelector(".name span").innerHTML = 'unKnown';

              //name is not Empty
       } else {
              //set Name To your Name
              document.querySelector(".name span").innerHTML = yourName
       }
       // Remove Splash Screen
       document.querySelector(".control-buttons").remove();
};
