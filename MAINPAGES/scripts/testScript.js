const vidgetLine = document.querySelector('.vidgetLine');
const vidgetContext = document.querySelector('.vidgetContext')

vidgetLine.addEventListener("click", function(event){
    for (var i = vidgetLine.children.length - 1; i >= 0; i--) {
        vidgetLine.children[i].classList.remove('activeButton');
    }

    for (var i = vidgetContext.children.length - 1; i >= 0; i--) {
        vidgetContext.children[i].classList.remove('activeBlock');
    }

    if (event.target.closest('button')){
        event.target.closest('button').classList.add('activeButton');

        document.getElementById(event.target.closest('button').getAttribute('data-target')).classList.add('activeBlock');
    }
})
