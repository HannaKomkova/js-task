// Добавьте картинку на страницу. При наведении на картинку мышкой необходимо
// ее изменять на другую картинку. Но как только мышка снова отходит в сторону, то
// возвращается первая картинка

const img = document.querySelector('img');

img.addEventListener('mouseover', () => {
    img.src = './img2.jpg'
})

img.addEventListener('mouseleave', () => {
    img.src = './img1.jpg'
})











