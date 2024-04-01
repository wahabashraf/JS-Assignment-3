// Simple Alert
document.getElementById("simple").onclick = function(){
    alert("Hello World!")
}
// Print Name
document.getElementById("pname").onclick  = function(){
    let name = document.getElementById("input").value;
    if(name == "" ){
        alert("Please enter your name");
        return;
    }
    document.getElementById("output").innerHTML = "Your name is : "+name+" !";
}
// Print Cities
document.getElementById("pcity").onclick = function(){
    let cities = ["Faisalabad" , "Lahore" , "Karachi" , "Islamabad" , "Burewala" , "Shekhupura" , "Kashmir"]
    for(let i = 0; i < cities.length; i++ ){
        let num = i + 1;
        document.getElementById("output").innerHTML += num +  ") " +cities[i]+ "<br>";
    }
}
//Add City
document.getElementById("mcity").onclick = function(){
let city = document.getElementById("input").value;
    if(city == ""){
        alert("Please enter your city");
        return;
    }    
document.getElementById("output").innerHTML = "<span style='color: yellow;'>" +city+ " &#128525</span> is added in list." +"<br>";
}
// Generate Table
document.getElementById("table").onclick = function(){
    let num = document.getElementById("input").value;
    if(num == ""){
        alert("Please enter a number")
        return;
    }
    let limit = +prompt("Give a number")
    document.getElementById("output").innerHTML = "";
    for (let i = 1; i <= limit; i++){
        document.getElementById('output').innerHTML += num + " * " + i + " = " + num * i + "<br>";
    }
}
// clear input
document.getElementById("clear").onclick = function(){
    document.getElementById("input").innerHTML = ""
}
// clear output
document.getElementById("clearoutput").onclick = function(){
    document.getElementById("output").innerHTML = ""
}