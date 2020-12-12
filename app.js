$(()=>{
//CACHE DOM NODES and start of game and Global variables
let mentalHealth = 0;
$button = $('#myBtn');
$grid = $('.grid');
$result = $('#result');
const $modal = $('#modal'); //this is the modal
const $textBox = $('#modal-textbox'); //this is the textbox in the modal
const $openModal = $('#openModal'); //this is the button that opens the modal
const $closeModal = $('#close');  //this is the anchor tag that closes the modal
  //event handlers
const openModal = (event) => {
    $modal.css('display','flex');
  }
const closeModal = (event) => {
    
    $modal.css('display','none');
  }
//event listeners
$openModal.on('click', openModal);
$closeModal.on('click',closeModal);
const $scoreBoard =$result.append(mentalHealth);
startGame= ()=>{
    const answer = prompt('Congrats! You had a baby! Can you make it through the day???', 'Ready to play? Yes or No?');
      if(answer === 'Yes' || answer === 'yes'){
        makeGameBoard();
    } else {
        alert('come back when you are a mature adult!');
            }
}
const cardArray = [
  {
    saying: 'you forgot the baby',
    value: 'bad'
  },
  {
    saying: 'you fed the baby',
    value: 'good'
  },
  {
    saying: 'you forgot the baby',
    value: 'bad'
  },
  
]
makeGameBoard =()=> {
  for (let i= 0; i < cardArray.length; i++) {
      shuffle();
      let $card = $('<div>');
      $card.attr('id','babyCard');
      $card.addClass('cards');
      $card.attr('data-id', i);
      let $h2 = $('<h2>').addClass('inactive');
      $h2.append(cardArray[i].saying);
      let $h3 = $('<h3>').addClass('inactive');
      $h3.append(cardArray[i].value);
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
  const flipCard = (event) => {
    const $dataId = $(event.currentTarget).data("id");
      let $value = cardArray[$dataId].value;
      if($value === 'bad'){
        alert('The baby won this round!')
        mentalHealth -= 2;
        $scoreBoard.append(mentalHealth);
    } else {
      alert('The parent won this time!')
      mentalHealth += 2;
      $scoreBoard.append(mentalHealth);
    }

      }
 


  











})









































































































