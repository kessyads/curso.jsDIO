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
        count++
        currentNumber.innerHTML = count;
    });

    subButton.addEventListener('click', function(){
        count--
        currentNumber.innerHTML = count;
    });

})


