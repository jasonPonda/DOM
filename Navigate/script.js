/*const section2 = document.querySelector('section')[1]
*/
const section1 = document.querySelector('section')
const sectionsChildren = section1.children
console.log(sectionsChildren)
const ol = section1.children[3]
console.log(ol)

const li1 = ol.children[0]
const li2 = ol.children[1]
const li3 = ol.children[2]
const li4 = ol.children[3]
const li5 = ol.children[4]
li5.appendChild(li1)
li5.appendChild(li2)
li5.appendChild(li3)
li5.appendChild(li4)

const section2 = document.querySelectorAll('section')[1]
const p1 = section2.children[1]
const section2Child = section2.children[0]

const section3 = document.querySelectorAll('section')[2]
const div = section3.children[0]
const section3Child = div.children[0]
const p = div.children[1]

section2.appendChild(section3Child)
section2.appendChild(p1)
section3.appendChild(div)
div.appendChild(section2Child)
div.appendChild(p)




console.log(section2)
console.log(section3)
