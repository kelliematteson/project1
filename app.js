

$(()=>{
    // Get the modal
const modal = document.getElementById("myModal");
const btn = document.getElementById("myBtn");
const span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} 
const $cards = $('.card').on('click', (event)=>{
    $(event.currentTarget).toggleClass('active')  
  })
const $card1 =$('#card1 .choice-result');
const $card2 =$('#card2 .choice-result');
const $card3 =$('#card3 .choice-result');
const $card4 =$('#card4 .choice-result');

  
//This code starts the game with a prompt to initialize
  const startGame =()=> {
    const ready = prompt('Ready to start the game?', 'yes or no?');
    if (ready === 'yes'){
      modal.style.display = "block";
    } else {
      alert('come back when you are a mature adult!')
    }
    
  }
  //startGame();
  //creating my arrays and getting random choices for each card
  const badBabyArray = ['you forgot the baby!','you sold the baby on amazon!', 'you lost the baby at Costco!']
  const goodBabyArray = ['You taught the baby French!','You showed the baby no screen time!', 'You sewed the baby a sweater!']
  const comboBabyArray = [...badBabyArray, ...goodBabyArray];
  let randomIndex = Math.floor(Math.random()* comboBabyArray.length);
  let randomChoice = comboBabyArray[randomIndex];
  //I need to append a random choice to each card now- the div
  $card1.append(randomChoice);
  $card2.append(randomChoice);
  $card3.append(randomChoice);
  $card4.append(randomChoice);
  

})