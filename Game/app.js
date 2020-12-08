

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

  const startGame =()=> {
    const ready = prompt('Ready to start the game?', 'yes or no?');
    if (ready === 'yes'){
      modal.style.display = "block";
    } else {
      alert('come back when you are a mature adult!')
    }
    
  }
  //startGame();
  
  const babyArray = ['You forgot the baby!','You sold the baby on amazon!', 'You sewed the baby a sweater!','You had extra diapers in the fridge!']
  

  

})