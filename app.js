

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
const $currentCard = $('.card').on('click', (event)=>{
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

  // startGame();
  //creating my arrays and getting random choices for each card
  //yes! created objects for my array and now able to access random key values
  const badChoice1 = {
    saying: 'the baby fell in the toilet!',
    points: -2
  }
  const badChoice2 = {
    saying: 'the baby when on a shopping spree!',
    points: -2
  }
  const badChoice3 = {
    saying: 'the baby bit the dog!',
    points: -2
  }
  const goodChoice1 = {
    saying: 'you knit the baby a sweater!',
    points: 2
  }
  const goodChoice2 = {
    saying: 'you taught the baby spanish!',
    points: 2
  }
  const goodChoice3 = {
    saying: 'you got the baby into Harvard!',
    points: 2
  }
  const choiceArray =[badChoice1, badChoice2, badChoice3, goodChoice1, goodChoice2, goodChoice3]
  const aRandomChoice =()=> {
    let randomChoice = choiceArray[Math.floor(Math.random()* choiceArray.length)]
    return randomChoice['saying'];
  }
  //I need to append a random choice to each card now- the div
  $card1.append(aRandomChoice());
  $card2.append(aRandomChoice());
  $card3.append(aRandomChoice());
  $card4.append(aRandomChoice());
  

})