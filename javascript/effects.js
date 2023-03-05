// Loader Animation
const loader = document.getElementById('anim');
const transition = document.querySelector('.transition')

window.addEventListener("load", () => {
transition.classList.add('slide');
setTimeout(() => {
  transition.classList.remove('slide');
}, 1500);
})


