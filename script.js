const quoteApiUrl='https://api.quotable.io/random';
const quoteText=document.getElementById('quote')
const textArea=document.getElementById('quoteInput')


const fetchQuote=()=>{
    return fetch(quoteApiUrl)
        .then(response=>response.json())
        .then(data=>data.content)
}

async function renderQuote(){
    const quote = await fetchQuote();
    quote.split('').forEach((el,index)=>{
        const span=document.createElement('span')
        span.innerText=el;
        quoteText.appendChild(span)
        span.classList.remove('incorrect')
    })
}

let correct=true;

textArea.addEventListener('input',(e)=>{
    const spans=document.querySelectorAll('span')
    const inputLetters=textArea.value.split('')

    spans.forEach((el,index)=>{
        const character=inputLetters[index];
        if (character==null){
            el.classList.remove('correct')
            el.classList.remove('incorrect')
        }
        else if (character===el.innerText){
            el.classList.add('correct')
            el.classList.remove('incorrect')
        }
        else if (character!==el.innerText){
            el.classList.add('incorrect')
            el.classList.remove('correct')
        }
    })


})

renderQuote()