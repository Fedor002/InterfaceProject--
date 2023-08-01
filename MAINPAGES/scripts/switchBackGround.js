const switchCircle = document.querySelector('.whiteElipse');

switchCircle.addEventListener('click', changeStyle);

function changeStyle(){
    if(switchCircle.style.left ==="0px"){
        switchCircle.style.left = "40px";
    }
    else{
        switchCircle.style.left = "0px";
    }
}