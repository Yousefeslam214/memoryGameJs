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
       // Add Click Event
       block.addEventListener('click', function () {

              // Trigger The Flip Block Function
              flipBlock(block);
       });
})

function flipBlock(selectedBlock) {
       //Add Class is flipped
       selectedBlock.classList.add('is-flipped');

       //collect All Flipped Cards
       let allFlippedBlocks = blocks.filter(flipBlock => flipBlock.classList.contains('is-flipped'));

       //If Theres Two Selected Blocks
       if (allFlippedBlocks.length === 2){
              stopClicking()
              checkMatchedBlocks(allFlippedBlocks[0],allFlippedBlocks[1])
       }
}
function stopClicking() {
       //add class
       blocksContainer.classList.add('no-clicking');

       setTimeout(() => {

              //Remove Class No Clicking
              blocksContainer.classList.remove('no-clicking');

       }, duration);
}

function checkMatchedBlocks(first,second) {
       let triesElement = document.querySelector('.tries span');
       if (first.dataset.technology === second.dataset.technology){
              first.classList.remove('is-flipped');
              second.classList.remove('is-flipped');
              
              first.classList.add('has-match');
              second.classList.add('has-match');

              document.getElementById('success').play();

       } else {
              triesElement.innerHTML = parseInt(triesElement.innerHTML) + 1;

              setTimeout(() => {

                     first.classList.remove('is-flipped');
                     second.classList.remove('is-flipped');
              
              }, duration); 
       document.getElementById('fail').play();
       }
}



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