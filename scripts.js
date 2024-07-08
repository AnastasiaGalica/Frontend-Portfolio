/* ============ NAVBAR OPENING ============ */
function openMenu(){
    document.getElementById("navbar").classList.toggle("open-navbar");
}

/* ============ CURSOR ANIMATION ============ */
document.addEventListener('mousemove', function(e) {
    const light = document.querySelector('.cursor-light');
    light.style.transform = `translate(${e.clientX - light.offsetWidth / 2}px, ${e.clientY - light.offsetHeight / 2}px)`;
});
