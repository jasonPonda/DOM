const _initTime = Date.now()

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

const clickOnSquare = (e) => {
  const div1 = document.createElement('div')
  section1.appendChild(div1)
  div1.className = 'displayedquare'
  const name = e.target.classList[1]
  const ul = document.querySelector('ul')
  const li = document.createElement('li')
  ul.appendChild(li)
  li.innerHTML = `[${getElapsedTime()}] created a new ${name} square`
  
  if(e.target.classList.contains('violet')) return div1.style.backgroundColor = 'magenta'
  if(e.target.classList.contains('green')) return div1.style.backgroundColor = 'lime'
  if(e.target.classList.contains('orange')) return div1.style.backgroundColor = 'orange'
}

const actionSquares = document.querySelectorAll('.actionsquare')
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', clickOnSquare)
}


const section1 = document.querySelector('section')


/* Body Background color change */
function getHex() {
    return '#' + Math.random().toString(16).slice(2, 8);
}
function setBackground() {
    var bgColor = getHex();
    document.body.style.background = bgColor;
}
document.body.onkeyup = function (a) {
    if (a.keyCode == 32) {
        setBackground();
        document.getElementById("asd").innerHTML = getHex();
    }
}