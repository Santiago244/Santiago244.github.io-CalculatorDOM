let d = document;
// Declare variables
const array = ['+','-','.','/','*'];
let radioBtn = d.getElementById("radioBtn")
let spans = d.querySelectorAll(".spans")
let signOperations = d.querySelectorAll('.sign')
let btnReset = d.querySelector(".cont__keys__div2__reset");
let btnDel = d.querySelector(".del");
let labelSmall = d.getElementById("labelSmall");
let labelBig = d.getElementById("labelBig");
let labelSmallBelow = d.getElementById("labelSmallBelow");
let equal = d.querySelector(".equal")


let firstValue = 0;
let operationType = '';
let secondValue = 0;
// Buton for reset the values
btnReset.addEventListener("click", ()=>{
    labelBig.textContent = 0;
    labelSmall.textContent = '';
})

// Buton for del
btnDel.addEventListener("click", ()=>{
    let currentValue = labelBig.textContent.slice(0, labelBig.textContent.length - 1)
    labelBig.textContent = currentValue;
    if(labelBig.textContent == ''){
        labelBig.textContent = 0;
    }
})

// Error function
const error = ()=>{
    labelSmallBelow.textContent = "Error"
}

// For each of numbers
Array.from(spans).forEach(number =>{
    number.addEventListener("click", ()=>{
        if(labelBig.textContent == 0){
            labelBig.textContent = number.textContent;
        }
        else{
            labelBig.textContent += number.textContent;
        }
    })
});
// Define variable for storing the labelBig.textContent;
// Operation is the value of the element in HTML
Array.from(signOperations).forEach(operation =>{
    operation.addEventListener("click", ()=>{
        if(labelBig.textContent == 0){ 
            labelBig.textContent = operation.textContent;
        }
        // else if(operation.textContent.slice(operation.textContent.length - 1) in array){//     error()// }
        else{
            operationType = operation.textContent;
            labelBig.textContent += operation.textContent;
            labelSmall.textContent = labelBig.textContent;
            labelBig.textContent = 0;
            // storeNumbers(operationType)
        }
    })
});






function solve(){
    let answer = 0;
    switch(operationType){
        case '+':
            answer = parseFloat(firstValue) + parseFloat(secondValue);
            break;
        case '-':
            answer = parseFloat(firstValue) - parseFloat(secondValue);
            break;
        case '*':
            answer = parseFloat(firstValue) * parseFloat(secondValue);
            break;
        case '/':
            answer =  parseFloat(firstValue) / parseFloat(secondValue);
            break;
    }
    labelSmall.textContent = '';
    labelBig.textContent = 0;
    firstValue = 0;
    return answer;
}

equal.addEventListener("click", ()=>{
    secondValue = labelBig.textContent;
    firstValue = labelSmall.textContent;
    labelBig.textContent = solve();
})

let body = d.getElementById("body");
let cont = d.getElementById("cont");
let contP = d.getElementById("contP");
let contKeys = d.getElementById("contKeys");
let contRadioBtn = d.getElementById("contRadioBtn");
let spansAll = d.getElementById('contKeys').querySelectorAll(".cont__keys__div__span");
let counter = 0;

const setVarsFirstTheme = function(bodyText,direction,color1, color2, color3, color4, color5, colorResetDel){
    for(let i = 0; i < spansAll.length; i++){
        spansAll[i].style.backgroundColor = color1;
    }
    contRadioBtn.style.justifyContent = direction;
    body.style.color = bodyText;
    body.style.backgroundColor = color5;
    equal.style.backgroundColor = color2;
    contRadioBtn.style.backgroundColor = color4;
    btnDel.style.backgroundColor = colorResetDel;
    btnDel.style.boxShadow = color4;
    cont.style.backgroundColor =  color3;
    contP.style.backgroundColor = color4;
    contKeys.style.backgroundColor = bodyText;
    contKeys.style.backgroundColor = color4;
    radioBtn.style.backgroundColor = color2;
    btnReset.style.backgroundColor = colorResetDel;
}

radioBtn.addEventListener("click", ()=>{
    if(counter == 0){
        // 2 theme
        for(let i = 0; i < spansAll.length; i++){
            spansAll[i].style.color = '#35352c';
        }
        setVarsFirstTheme('#35352c','center','#fff', '#ca5502', '#e6e6e6', '#ededed', '#e6e6e6', '#377f86')
        contKeys.style.backgroundColor = "#d1cccc";
        counter = 1;
    }
    else if(counter == 1){
        // 3 theme
        for(let i = 0; i < spansAll.length; i++){
            spansAll[i].style.color = '#ffe53d';
        }
        // #58077d
        setVarsFirstTheme('#ffe53d','right','#58077d', '#00e0d1','#1d0934', '#341c4f','#160628', '#871c9c')
        btnDel.style.color = "#fff"
        counter = 2;
    }
    else{
        // 1 theme
        for(let j = 0; j < spansAll.length; j++){
            spansAll[j].style.color = '#444b5a';
        }
        btnDel.style.color = "#fff"
        setVarsFirstTheme('#fff','left','#eae3dc', '#d03f2f', '#3a4764', '#182034', '#637097', '#637097');
        counter = 0;
        // #637097
    }
})