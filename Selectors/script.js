/*
*/

const matches = document.querySelectorAll(".important");

matches.forEach((importantElement) => {
    importantElement.innerHtml = "This is an important item";
});

console.log(matches)


const image = document.querySelectorAll("img");

image.forEach((importantImage) => {
   if(importantImage.className !== 'important')
    importantImage.style.display = 'none'
})


const paraph = document.querySelectorAll('p');

paraph.forEach((importantParaph) => {
    if(importantParaph.className !== '')
        importantParaph.style.visibility = 'visible'
        console.log(importantParaph.innerText)
})

function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
   
    return bgColor;
}

const paraphElem = document.querySelectorAll('p');

for(let i = 0; i < paraphElem.length; i++) {
    if(!paraphElem[i].className)
    paraphElem[i].style.color = random_bg_color();
}



