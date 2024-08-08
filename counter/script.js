const counterValue = document.getElementById('counter-value')
const incrementBtn = document.getElementById('increment')
const decrementBtn = document.getElementById('decrement')
const resetBtn = document.getElementById('reset')
const changeByInput = document.getElementById('changeBy')
const container = document.getElementById('container')

incrementBtn.addEventListener('click', ()=> {
    let newValue = Number(counterValue.textContent) + Number(changeByInput.value);
    counterValue.textContent =newValue;
})

decrementBtn.addEventListener('click', ()=> {
    let newValue = Number(counterValue.textContent) - Number(changeByInput.value);
    newValue < 0 ? 0: counterValue.textContent = newValue;
})

resetBtn.addEventListener('click', ()=> {
    counterValue.textContent = 0;
})