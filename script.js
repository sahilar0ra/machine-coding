const counterValue = document.getElementById('counter-value')
const incrementBtn = document.getElementById('increment')
const decrementBtn = document.getElementById('decrement')
const resetBtn = document.getElementById('reset')
const changeByInput = document.getElementById('changeBy')
const container = document.getElementById('container')

container.addEventListener("click", (e)=> {
    // console.log(e.target.getAttribute('id'));
    let elem = e.target.getAttribute('id');
    if (elem === 'increment') {
        let newValue = Number(counterValue.textContent) + Number(changeByInput.value);
        counterValue.textContent =newValue;
    }
    if (elem === 'decrement') {
        let newValue = Number(counterValue.textContent) - Number(changeByInput.value);
        newValue < 0 ? 0: counterValue.textContent = newValue;
    }
    if (elem === 'reset') {
        counterValue.textContent = 0;
    }
})

// incrementBtn.addEventListener('click', ()=> {
//     let newValue = Number(counterValue.textContent) + Number(changeByInput.value);
//     counterValue.textContent =newValue;
// })

// decrementBtn.addEventListener('click', ()=> {
//     let newValue = Number(counterValue.textContent) - Number(changeByInput.value);
//     newValue < 0 ? 0: counterValue.textContent = newValue;
// })

// resetBtn.addEventListener('click', ()=> {
//     counterValue.textContent = 0;
// })