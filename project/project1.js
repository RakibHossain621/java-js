const counterElement = document.getElementById('counter');
const plusBtn = document.getElementById('plusbtn');
const minusBtn = document.getElementById('minusbtn');


let count = 0;
plusBtn.addEventListener('click', () => {
    counterElement.innerHTML = count += 1 ;

     if(count >= 10){
        
        plusBtn.setAttribute('disabled', true)
    }
    else{
        plusBtn.removeAttribute('disbled',false)
    }
});

minusBtn.addEventListener('click', () => {
    counterElement.innerHTML = count -= 1;

    if (count <= 0) {
        minusBtn.setAttribute('disabled', true);
    }
    
});