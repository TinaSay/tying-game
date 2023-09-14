const quoteApiUrl = 'https://api.quotable.io/random';
const quoteText = document.getElementById('quote')
const textArea = document.getElementById('quoteInput')
const counter = document.querySelector('.counter')


const fetchQuote = () => {
    return fetch(quoteApiUrl)
        .then(response => response.json())
        .then(data => data.content)
}

async function renderQuote() {
    const quote = await fetchQuote();
    quoteText.innerHTML = ""
    quote.split('').forEach((el, index) => {
        const span = document.createElement('span')
        span.innerText = el;
        quoteText.appendChild(span)
        span.classList.remove('incorrect')
    })
    textArea.value = null;
    startTimer();
}

renderQuote()
let startTime;

const startTimer = () => {
    startTime = new Date();

    setInterval(() => {
        counter.innerText = setTimerTime()

    }, 1000)
}

const setTimerTime = () => {
    return Math.floor((new Date() - startTime) / 1000)

}

textArea.addEventListener('input', (e) => {
    const spans = document.querySelectorAll('span')
    const inputLetters = textArea.value.split('')
    let correct = true;

    spans.forEach((el, index) => {
        const character = inputLetters[index];
        if (character == null) {
            el.classList.remove('correct')
            el.classList.remove('incorrect')
            correct = false;
        } else if (character === el.innerText) {
            el.classList.add('correct')
            el.classList.remove('incorrect')
        } else {
            el.classList.add('incorrect')
            el.classList.remove('correct')
            correct = false
        }
    })
    if (correct) renderQuote();

})

