//Restarted this game 3 times, got lost in the code ...will try to recount where I was getting tripped up

$(()=>{
  //CACHE DOM NODES and start of game and Global variables....not all of this goes in the onload function, right?
  let mentalHealth = 0;
  $button = $('#myBtn');
  $grid = $('.grid');
  $result = $('#result');
  const $modal = $('#modal'); 
  const $textBox = $('#modal-textbox'); 
  const $openModal = $('#openModal'); 
  const $closeModal = $('#close');  
    //event handlers //////////// event Handlers are throughout this code, I wasn't sure why some seemed to break code if I moved them
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
  ///the function that actually starts the game
  startGame= ()=>{
      const answer = prompt('Congrats! You had a baby! Can you make it through the day???', 'Ready to play? Yes or No?');
        if(answer === 'Yes' || answer === 'yes'){
          makeGameBoard();
      } else {
          alert('come back when you are a mature adult!');
              }
  }
  const cardArray = [ ///I wanted to have 3 different arrays for 3 different rounds...
    {
      saying: 'You taught the baby French!',
      value: 'good'
    },
    {
      saying: 'You explained the Theory of Relativity to the baby!',
      value: 'good'
    },
    {
      saying: 'The baby vomited on you!',
      value: 'bad'
    },
    {
      saying: 'The baby stole your car!',
      value: 'bad'
    },
    {
      saying: 'The baby drank your coffee!',
      value: 'bad'
    },
    {
      saying: 'The baby knit you a sweater!',
      value: 'good'
    },
  ]
  makeGameBoard =()=> { ////this was a nightmare for me, feels unwieldy and I kept breaking things
    for (let i= 0; i < cardArray.length; i++) {
        shuffle();
        let $card = $('<div>');
        $card.attr('id','babyCard');
        $card.addClass('cards');
        $card.attr('data-id', i);
        let $h2 = $('<h2>').addClass('toggleActive');
        $h2.append(cardArray[i].saying);
        let $h3 = $('<h3>').addClass('toggleActive');
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
    /////// This flipCard function was just endless for me to figure out, and I couldn't figure out how to remove(class)from my now flipped cards
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
  //I spent way to much time on the gameboard and then had a heck of a time with a mentalHealth function,
  //it puts the numbers beside each other. I just ran out of time and started over too many times. I'm bummed.
  
  })









































































































