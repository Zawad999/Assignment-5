const actionBtnContainer = document.querySelectorAll('.action-btn');

for(let btn of actionBtnContainer){
    btn.addEventListener('click', function(event){
        const clickedBtn = event.target;
        if(clickedBtn.classList.contains('current') == false){
            swapBtnStyle();
            togglePage(event.target);
        }
        
    })
}