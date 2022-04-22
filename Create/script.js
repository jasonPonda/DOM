/*
*/
let learner = ["Emre", "Eric", "Gilles", "Jamie", "Jason",
    "Jeremy", "Martin", "Rayane", "Rayhan", "Ricardo",
    "Steffanie", "Sébastien", "Tanguy", "Tibaud", "Zakaria"];



let newArticle = document.querySelector('article')

function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
   
    return bgColor;
}

for(let i = 0; i < learner.length; i++){
    let newP = document.createElement("section")
    newP.innerHTML = learner[i]
    newArticle.appendChild(newP)

    newP.style.backgroundColor = random_bg_color();

}


