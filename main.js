const url = 'https://api.adviceslip.com/advice';
const advice = document.querySelector('#advice');
const adviceNumber = document.querySelector('.advice-id');
const adviceBtn = document.querySelector('#logo-container');

const fetchData = () => {fetch(url)
    .then(response => response.json())
    .then(responseJSON => responseJSON.slip)
    .then(data => {
        adviceNumber.innerHTML = `#${data.id}`;
        advice.innerText = `"${data.advice}"`;
    })
}

window.addEventListener('load', fetchData)
adviceBtn.addEventListener('click', fetchData)