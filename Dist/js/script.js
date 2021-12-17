console.log("test")

///////////////////////////////////////////////////////
                // 2021-12-16 //


document.getElementById("heading").innerHTML = "Pavadinimas įdėtas su JS";

document.getElementsByClassName;
document.getElementsByName;
document.getElementsByTagName;

///////////////////////////////////////////////////////

// innerHTML - tai kas yra tarp tagų;
// attribute - galime pakeisti atributą;
// style - stiliaus priskyrimas tagui;

// setAttribute(attribute, value) - pridėti(keist) naują atributą

//Pagr. metodai
// document.createElement("");
// document.removeChild("");
// document.appendChild("");
// document.replaceChild("");
// document.write("");

///////////////////////////////////////////////////////

// norime pakeisti nuorodos href

function changeURL (url){
    document.getElementById("link").setAttribute("href", url)
}

let today = new Date();

document.getElementById("date").innerHTML = "Copyright "+ today.getFullYear();

///////////////////////////////////////////////////////
//Stiliaus keitimas

document.getElementById("date").style.color = "green";

//Events

// Kai vartotojas spaudzia peles klavisa
// Peles zymekliu uzvedimas (hover(js))
// Peles ratuko - scroll
// Bet kurio klaviso paspaudimas
// Input laukelio reiksmes pasikeitimas
// Formos submit

function showDate(){
    document.getElementById("heading2").innerHTML = Date();
}
document.getElementById("heading2").onclick = showDate;

// HOVER

function mouseOver(obj){
    obj.innerHTML="Welcome";
}

function mouseOut(obj){
    obj.innerHTML="Hover Me"
}

///////////////////////////////////////////////////////
//Form validation//

function validateForm(){
    let fieldValue = document.forms["form1"]["firstName"].value;
    if (fieldValue == "") {
        alert("First Name must be filled!")
        return false
    }
}

function checkNumber(){
    let number = document.getElementById("number").value
    let message;
    if(isNaN(number) || number<1 || number>10){
        message = "Ivedete bloga skaiciu"
    } else {
        message = "Ivesta teisingai"
    }
    document.getElementById("message").innerHTML = message;
}

///////////////////////////////////////////////////////
//EventListener//

document.getElementById("text1").addEventListener("click", function(){
    alert("Laba diena!");
});

function toggleBox(){
    let box2 = document.getElementById("box2");
    box2.classList.toggle("green");
}

document.getElementById("box2").addEventListener("click", toggleBox);

// 6

const numbers = [];

for (let i=0; i<6; i++){
    numbers[i] = Math.floor(Math.random()*(9999-1000))+1000;
}

console.log(numbers);

let sorted = numbers.sort(function(a, b){
    return a-b
}).join(" | ");

console.log(sorted)

/////
