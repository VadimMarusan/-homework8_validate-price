let input = document.getElementById('1');
let error = document.querySelector('.error-message')
let span = document.createElement('span');
span.innerHTML = "";


input.addEventListener("focusout" , function (e) {
    if(input.value > 0) {
        span.innerHTML = `current price: ${input.value} <img class="button-close" src="img/close.png">`;
        input.style.color = "green";
        document.body.insertBefore(span, document.querySelector('.input-container'));
        let buttonClose = document.querySelector('.button-close');
        buttonClose.addEventListener('click', function () {
            span.style.display = "none"
            input.value = ""
        })
        input.style.border = "2px solid green";
        error.innerHTML= "";
    } else {
        error.innerHTML = 'Please enter correct price.';
        input.style.border = "2px solid red";
        input.value = "";
    }


})
