$(()=>{
//CACHE DOM NODES and start of game and Global variables
$button = $('#myBtn');
$grid = $('.grid');
let mentalHealth = 10;
$result = $('#result');
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
        decreaseScore();
    } else {
      increaseScore();
    }

      }
  const increaseScore =()=> {
    mentalHealth += 2;
    $result.append(mentalHealth);
  }
  const decreaseScore =()=> {
    mentalHealth -= 2;
    $result.append(mentalHealth);
  }


  











})









































































































