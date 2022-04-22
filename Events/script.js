let section = document.querySelector('section')
section.className = 'container'

function displayWrapper() {
    let divAbove = document.createElement('div')
    divAbove.className = 'displayedsquare-wrapper'
    divAbove = div1.cloneNode(true)

    let ul = document.createElement('ul')
    let li = document.createElement('li')

    ul.appendChild(li)
    
    section.before(divAbove)
    
}

let div1 = document.createElement('div')
div1.className = 'displayedsquare'
div1.style.background = 'green'
div1.addEventListener('click', displayWrapper)

let div2 = document.createElement('div')
div2.className = 'displayedsquare'
div2.style.background = 'violet'
div2.addEventListener('click', displayWrapper)

let div3 = document.createElement('div')
div3.className = 'displayedsquare'
div3.style.background = 'orange'
div3.addEventListener('click', displayWrapper)

section.appendChild(div1)
section.appendChild(div2)
section.appendChild(div3)


const h1 = document.createElement('h1')
h1.textContent = 'Action log'

document.body.appendChild(h1)



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