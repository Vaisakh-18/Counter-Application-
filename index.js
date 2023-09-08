let count = 0;

function increment(){
    count ++;
    document.getElementById("count-element").innerHTML = count;   
}

function save(){
    let display = count + " , ";
    document.getElementById("save-element").innerHTML += display;
    document.getElementById("count-element").innerHTML = 0;
    count = 0;
}