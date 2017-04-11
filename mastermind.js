var color = ["red", "blue", "green", "yellow", "purple", "orange", "gray", "black"];
var combination = [];


// geeft random code van var color.
for(var i = 0; i < 4; i++){
    combination[i] = color [Math.floor(Math.random() * color.length)]
}

console.log(combination);

//selecteer de element waar je op klikt met de id code in dit geval een kleur waar je op klikt.
//function(e) die (e) kan je ook veranderen, het is gewoon een variable
var colors = document.getElementsByClassName("color");
for(var i = 0; i < color.length; i++){
    colors[i].addEventListener("click", function(e){
        //console.dir(e);
        color1 = e.target.id;
        console.log(color1);
    })
}

//De kleur die je hebt aangeklikt met de getElementByClassName die kleur kan je nu in een span zetten.
var spanSlots = document.querySelectorAll("#row1 span");


    for(var i = 0; i < spanSlots.length; i++){
        spanSlots[i].addEventListener("click", function(s){
            s.target.style.backgroundColor = color1;
        });
    }


//Deze check kijkt of de kleuren op juiste plaats zitten of op de verkeerde plek of helemaal niet.
var check = function(e){

    console.log("test check");

    var spanSlots = document.querySelectorAll("#row1 span");
    var results = [];

    var tempCombination = combination.splice(0);

    console.log("start: " + tempCombination);




    for(var i = 0; i < spanSlots.length; i++) {
        //x console.log(spanSlots);
        //console.log(combination[i]);
        //console.log(slots[i].style.backgroundColor);

        // check1: controleer of de gekozen kleur op de huidige positie (i) 
        // overeenkomt met de kleur uit de gegenereerde kleuren op dezelfde positie
        if(tempCombination[i] == spanSlots[i].style.backgroundColor){
            //console.log("Kleur op juiste plaats");
            results.push('juiste kleur juiste plek');
            tempCombination.splice(i, 1);
        }
    }
    console.log("einde: " + tempCombination);

    for(var j = 0; j < spanSlots.length; j++) {
        // check2 : kleur staat er wel in maar niet op de juiste plaats.

        for(u = 0; u < tempCombination.length; u++){
            results.push('kleur aanwezig niet op de juiste plaats');
            
            if(tempCombination[u] == spanSlots[j]){
                tempCombination.splice(u, 1);
                
            }
            else{
                results.push('kleur niet aanwezig');
            }  
        }

       
    }

    console.dir(results);
}

var colorSubmit = document.getElementById("colorSubmit");
colorSubmit.addEventListener("click", check);
