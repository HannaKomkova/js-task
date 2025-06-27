const lockedButton = document.querySelector('.locked');
const unlockedButton = document.querySelector('.unlocked');
const input = document.querySelector('input')

lockedButton.addEventListener('click', () => {
    input.disabled = true;
})

unlockedButton.addEventListener('click', () => {
    input.disabled = false;
})



