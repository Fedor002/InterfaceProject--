const Tsech = document.querySelector('.Tsekh');
const Boss = document.querySelector('.Boss');
const Employee = document.querySelector('.Employee');
const cancelButton = document.querySelector('.closeCircle');

const originT = Tsech.textContent;
const originB = Boss.textContent;
const originE = Employee.textContent;


const Tsech_drop = document.querySelectorAll('#Tsekh_dropdown-content');
const Boss_drop = document.querySelectorAll('#Boss_dropdown-content');
const Employee_drop = document.querySelectorAll('#Employee_dropdown-content');

let dotCount =0, discriptWidth;

cancelButton.addEventListener('click', backToBegin)

function placeChoosenOption(index){
    Tsech.textContent = `${Tsech_drop[index].textContent}`
}

Tsech_drop.forEach((dot,index)=>{
    dot.addEventListener('click', () =>{
        dotCount = index;
        placeChoosenOption(dotCount);
    })
})

function placeChoosenOptionB(index){
    Boss.textContent = `${Boss_drop[index].textContent}`
}

Boss_drop.forEach((dot,index)=>{
    dot.addEventListener('click', () =>{
        dotCount = index;
        placeChoosenOptionB(dotCount);
    })
})

function placeChoosenOptionE(index){
    Employee.textContent = `${Employee_drop[index].textContent}`
}

Employee_drop.forEach((dot,index)=>{
    dot.addEventListener('click', () =>{
        dotCount = index;
        placeChoosenOptionE(dotCount);
    })
})

function backToBegin(){
    Tsech.textContent = originT;
    Boss.textContent = originB;
    Employee.textContent = originE;
}