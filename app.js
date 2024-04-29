// <i class="fa-solid fa-heart"></i>
const iconHeart = document.querySelectorAll('.icon-heart');
const imgBox = document.querySelectorAll('.img-box')
const contentBox = document.querySelectorAll('.content')

let checKed = false;

iconHeart.forEach((value, index) => {
    value.addEventListener('click', ()=> {
        if (!checKed) {
            value.innerHTML = `<i class="fa-solid fa-heart" style="color: red;"></i>`
            checKed = true;
        } else {
            value.innerHTML = `<i class="fa-regular fa-heart " style="color: red;"></i>`
            checKed = false;
        }
    })
})

