/*let count = 0;

const CURRENT_NUMBER = document.getElementById('currentNumber');

function increment() {
	count++;
	CURRENT_NUMBER.innerHTML = count;
}

function decrement() {
	count--;
	CURRENT_NUMBER.innerHTML = count;
}

function test() {
	kdowkdpo;
}

currentNumber.addEventListener(type,listener[, options]);*/

document.addEventListener('DOMContentLoaded', function(){
    const addButton = document.querySelector('button[name="adicionar"]');
    const subButton = document.querySelector('button[name="subtrair"]');
    const currentNumber = document.getElementById('currentNumber');

    let count = 0;

    addButton.addEventListener('click', function(){
        if ( count < 12 ){
        count++
        currentNumber.innerHTML = count;
        if (count >= 0) {
            currentNumber.classList.remove('negativo');
        }
    } else {
        addButton.disabled = true; 
    }
    });

    subButton.addEventListener('click', function(){
        count--
        currentNumber.innerHTML = count;
        if (count < 0){
            currentNumber.classList.add('negativo')
        }
    });


})


