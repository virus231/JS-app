export class Question {
    static create(question) {
        return fetch('https://question-app-362ac.firebaseio.com/questions.json', {  //Ссилка к базе Данних
            method: 'POST',
            body: JSON.stringify(question),
            headers: {
                'Content-Type': 'application/json'
            }
        })  
        .then(response => response.json())
        .then(response => {
            question.id = response.name;
            return question;
        })
        .then(addToLocalStorage)
    }
}

function addToLocalStorage(question) {
    const all = getQuestionFromLocalStorage();
    all.push(question);
    localStorage.setItem('questions', JSON.stringify(all));
}

function getQuestionFromLocalStorage() {
    return JSON.parse(localStorage.getItem('questions') || '[]')
}