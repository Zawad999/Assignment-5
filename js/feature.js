const actionBtnContainer = document.querySelectorAll('.action-btn');

for(let btn of actionBtnContainer){
    btn.addEventListener('click', function(event){
        swapBtnStyle();
        togglePage(event.target);
    })
}