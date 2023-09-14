#The challenge for speeding up your touchtyping skills

- A random quote is generated from https://api.quotable.io/random
- The timer starts
- The user should type exact quote in the provided textarea
- If he mistypes the error is highlighted 
- If he types all letters correct they are highlighted with green
- After the user is done the new quote is being rendered

###Useful code parts

####Timer with interval
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

####API fetch
    return fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data => data.content)