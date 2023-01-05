const nextSlide = document.getElementById('nextSlide')
const supplement = document.querySelector('.supplement')
const main = document.querySelector('.main')

nextSlide.addEventListener('click', function() {
    if (supplement.classList.contains('hidden')) {
        supplement.classList.toggle('hidden');
        main.classList.toggle('hidden')
    }
})