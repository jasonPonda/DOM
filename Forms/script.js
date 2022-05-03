const elem = document.querySelector('#firstname')

elem.addEventListener('keyup', function(event) {
    const firstname = elem.value

    const span = document.querySelector('span').innerHTML = firstname
    
})

const age = document.querySelector('#age')

age.addEventListener('keyup', function(e){
    const below = age.value
 
    if(below >= 18){
        const section = document.querySelector('#a-hard-truth').innerHTML = below
        section.style.visibility = 'visible'
    }

   /* if (e.style.visibility === 'hidden') {
        e.style.visibility = 'visible';
      } else {
        e.style.visibility = 'hidden';
      }*/
}) 