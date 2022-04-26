const _initTime = Date.now()

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}
const section1 = document.querySelectorAll('section')[0]
const section2 = document.querySelectorAll('section')[1]

const clickOnSquare = (e) => {
  const div1 = document.createElement('div')
  section1.appendChild(div1)
  div1.className = 'displayedsquare'
  const name = e.target.classList[1]
  const ul = document.querySelector('ul')
  const li = document.createElement('li')
  ul.appendChild(li)
  li.innerHTML = `[${getElapsedTime()}] created a new ${name} square`

  if (e.target.classList.contains('violet')) return div1.style.backgroundColor = 'magenta'
  if (e.target.classList.contains('green')) return div1.style.backgroundColor = 'lime'
  if (e.target.classList.contains('orange')) return div1.style.backgroundColor = 'orange'
}

const actionSquares = document.querySelectorAll('.actionsquare')
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', clickOnSquare)
}

getHex()




/* Body Background color change */
function getHex() {
  return '#' + Math.random().toString(16).slice(2, 8);
}
function setBackground() {
  var bgColor = getHex();
  document.body.style.background = bgColor;
}
document.body.onkeyup = function (a) {
  if (a.keyCode === 32) {
    setBackground();
    const ul1 = document.querySelector('ul')
    const li1 = document.createElement('li')
    const color = a.target.style.backgroundColor
    ul1.appendChild(li1)
    li1.innerHTML = `[${getElapsedTime()}] created a new ${color} square`
  }
}
function remove(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild)
  }
}
document.addEventListener('keydown', function (e) {
  if (e.key === 'l') {
    let ul = document.querySelector('ul')
    remove(ul)
  }
});

document.addEventListener('keydown', function (event) {
  if (event.key === 's') {
    let ul = document.querySelector('.displayedsquare-wrapper')
    remove(ul)
  }
})
const carre = document.querySelector('.displayedsquare-wrapper')

function popUp(e) {

  alert(e.target.style.backgroundColor)
}

carre.addEventListener('click', popUp)