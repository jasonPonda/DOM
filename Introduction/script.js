/*
*/
console.log(document.title)

document.title = "Modifying the DOM";

console.log(document.title)

document.body.style.backgroundColor = '#FF69B4'

function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    console.log(bgColor);
    document.body.style.background = bgColor;
}

random_bg_color()

function bodyChild() {
    const collection = document.body.children;
    let text = "";
    for (let i = 0; i < collection.length; i++) {
        text += collection[i].tagName + " ";
    }
    console.log(text);
}

bodyChild()