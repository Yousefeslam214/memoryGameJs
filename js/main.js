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

//Effect Duration
let duration = 1000;

//Select Blocks Container
let blocksContainer = document.querySelector(".memory-game-blocks");

//create Array From Game Blocks
let blocks = Array.from(blocksContainer.children);

//Create Range of Keys
let orderRange = [...Array(blocks.length).keys()];

suffle(orderRange)
blocks.forEach((block,index)=>{
       block.style.order = orderRange[index]
})

function suffle(array) {
       let current = array.length,
       temp,random;
       while (current > 0) {
              //Get Random Number
              random = Math.floor(Math.random() * current);
              current--;
              console.log(random)

              // Save Curent Ele in Stash
              temp = array[current];

              //Current Ele = Random Ele
              array[current] = array[random];

              //Random Ele = Get Ele feom stash
              array[random] = temp;

       }

       return array;
}