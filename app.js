// main section Javascript

const iconHeart = document.querySelector('.icon-heart');
const imgScale = document.querySelectorAll('img-scale');
const imgboxOne = document.getElementById('img-scale')

console.log(imgboxOne)

imgboxOne.addEventListener('mouseover', (e) => {
    iconHeart.classList.toggle('hidden')
})