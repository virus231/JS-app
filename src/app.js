import {
    Question
} from './question';
import {
    isValid
} from './utils';
import './style.css'


const form = document.getElementById('form');
const input = form.querySelector('#question-input');
const submitBtn = form.querySelector('#submit');

form.addEventListener('submit', submitFormHandler);
input.addEventListener('input', () => {
    submitBtn.disabled = !isValid(input.value);
})

function submitFormHandler(event) {
    event.preventDefault();

    if (isValid(input.value)) {
        const question = {
            text: input.value.trim(),
            data: new Date().toJSON()
        }

        // submitBtn.disabled = true;
        //Async requset to server to save question 
        Question.create(question).then(() => {
            input.value = ''; // Очищаємо поле input
            input.className = '';
        })
        // console.log('Question', question);
        // submitBtn.disabled = false;
    }
}

console.log('App working');