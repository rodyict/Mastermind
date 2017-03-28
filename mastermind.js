var color = ["red", "blue", "green", "yellow", "purple", "orange", "gray", "black"];
var combination = [];

for(var i = 0; i < 4; i++){
    combination[i] = color [Math.floor(Math.random() * color.length)]
}

console.log(combination);


//function(e) die e kan je ook veranderen het is gewoon een variable
var colors = document.getElementsByClassName("color");
for(var i = 0; i < color.length; i++){
    colors[i].addEventListener("click", function(e){
        //console.dir(e);
        color1 = e.target.id;
        console.log(color1);

    })
}