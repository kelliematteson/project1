//cache dom nodes
const eachCard = document.getElementsByClassName('card');

$(() => {
    const pickACard = ()=> {
        eachCard.addEventListener('click', (event)=> {
            
            alert('this works!');
        })
    }
  
  
});
