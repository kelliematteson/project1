$(()=>{

 const cardArray = [
    { saying: 'The baby screamed for 4 hours!', result: 'BAD'},
    {saying: 'You taught the baby sign language!', result: 'GOOD'},
    {saying: 'You taught the baby French!', result: 'GOOD'},
    {saying: 'You read the baby poetry!', result: 'GOOD'},
    {saying: 'You knit the baby a sweater!', result: 'GOOD'},
    {saying: 'You made the baby homemade food!', result: 'GOOD'},
    {saying: 'The baby destroyed your tv!', result: 'BAD'},
    {saying: 'The baby vomited on you!', result: 'BAD'},
    {saying: 'The baby laughed in your face!', result: "BAD"},
  ]
  //GLOBAL VARIABLES AND DOM NODES
let points = 0;
const $score = $('#score');


const flipCard =(event)=>{
  $('.cards').on('click', (event) => {
    let $currentCard = $(event.currentTarget).css('background-color','black').children().eq(1).val();
    console.log($currentCard);
  }); 
    // updateMentalHealth();
 } 
 //I can't get this counter to update the score and replace it's self in the dom
//  const updateMentalHealth =()=>{
//    let $currentPoints = cardArray[i].result;
//     if ($currentPoints === 'BAD') {
//       points = -2;
//     } else {
//       points = 2;
//     }
//     $score.append(points);
//   };
 




//Shuffle Cards with Fisher-Yates method
  const createBoard = () =>{
    for (let i= 0; i < cardArray.length; i++) {
      shuffle();
      const $grid = $('.grid');
      let $card = $('<div>');
      $card.attr('id','babyCard');
      $card.addClass('cards');
      $card.attr('data-id', i);
      let $h2 = $('<h2>').addClass('active');
      $h2.append(cardArray[i].saying);
      let $h3 = $('<h3>').addClass('active');
      $h3.append(cardArray[i].result);
      $card.on("click", flipCard);
      $card.append($h2);
      $card.append($h3);
      $grid.append($card);  
    } 
  }
  const shuffle =()=> {
    for (i = cardArray.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * i);
      k = cardArray[i];
      cardArray[i] = cardArray[j];
      cardArray[j] = k;
    }
    }

    createBoard();

//create my parent class
class Parent {
  constructor(name, mentalHealth, babySitter){
    this.name = name;
    this.mentalHealth = 10;
    this.babySitter = 1;
  }
  flipCard(){
    
  }
  updateMentalHealth(){

  }
  useBabySitter(){

  }
}
const kellie = new Parent('Kellie');
console.log(kellie);

})










































































































//cache DOM Nodes
// const modal = document.getElementById("myModal");
// const btn = document.getElementById("myBtn");
// const span = document.getElementsByClassName("close")[0];
// const $card1 =$('#card1 .choice-result');
// const $card2 =$('#card2 .choice-result');
// const $card3 =$('#card3 .choice-result');
// const $card4 =$('#card4 .choice-result');
// const $card1value =$('#card1 .choice-value');


// $(()=>{
// //Modal code below
// btn.onclick = function() {
//   modal.style.display = "block";
// }
// span.onclick = function() {
//   modal.style.display = "none";
// }
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// } 
// //This code starts the game with a prompt to initialize
//   const startGame =()=> {
//     const ready = prompt('Ready to start the game?', 'yes or no?');
//     if (ready === 'yes'){
//       modal.style.display = "block";
//     } else {
//       alert('come back when you are a mature adult!')
//     }
//   }
//   // const updateScore = ()=>{
//   //   $score += $points;
//   //   $lifepoints.append($score);
//   // }
  
//   // startGame();
//   //creating my arrays and getting random choices for each card
//   //yes! created objects for my array and now able to access random key values
//   const badChoice1 = {
//     saying: 'the baby fell in the toilet!',
//     points: -2
//   }
//   const badChoice2 = {
//     saying: 'the baby when on a shopping spree!',
//     points: -2
//   }
//   const badChoice3 = {
//     saying: 'the baby bit the dog!',
//     points: -2
//   }
//   const goodChoice1 = {
//     saying: 'you knit the baby a sweater!',
//     points: 2
//   }
//   const goodChoice2 = {
//     saying: 'you taught the baby spanish!',
//     points: 2
//   }
//   const goodChoice3 = {
//     saying: 'you got the baby into Harvard!',
//     points: 2
//   }
//   const choiceArray =[badChoice1, badChoice2, badChoice3, goodChoice1, goodChoice2, goodChoice3]
//   const aRandomChoice=()=>{
//     const randomIndex = choiceArray[Math.floor(Math.random()* choiceArray.length)]
//     return randomIndex;
//   }
//   const myChoice = aRandomChoice();
//       // let randomSayingPoints = aRandomChoice().points;

 
//   const $myCard = $('.card').on('click', (event)=>{
//     $(event.currentTarget).toggleClass('active')  
//   })
  
//   // I need to append a random choice to each card now- the div
//   $card1.append(myChoice.saying);
//   $card1value.append(myChoice.points); 
//   $card2.append(myChoice.saying);
//   $card3.append(myChoice.saying);
//   $card4.append(myChoice.saying);

 
  
  

//   //Event Listeners
  

// })