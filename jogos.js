// Carrossel de jogos (Swiper 11)
// Correção: "autoplayTimeout" e "autoplayHoverPause" são opções do Owl Carousel e
// eram ignoradas pelo Swiper. No Swiper o autoplay é configurado por um objeto.
const swiper = new Swiper(".mySwiper", {
    loop: true,
    autoplay: {
        delay: 2500,                 // tempo entre slides (ms)
        disableOnInteraction: false, // continua girando depois que o usuário arrasta
        pauseOnMouseEnter: true      // pausa com o mouse em cima
    },
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 200,
        modifier: 1,
        slideShadows: false
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    }
});

// O carrossel para enquanto um jogo está aberto
function pausarCarrossel() {
    swiper.autoplay.stop();
}

function retomarCarrossel() {
    // só retoma se nenhum modal continuar aberto
    if (!document.querySelector('.modal.aberto')) {
        swiper.autoplay.start();
    }
}

// Tecla Esc fecha o modal que estiver aberto
document.addEventListener('keydown', e => {
    if (e.key !== 'Escape') return;
    if (document.getElementById('modal').classList.contains('aberto')) closeModal();
    if (document.getElementById('modal-snake').classList.contains('aberto')) closeModalSnake();
    if (document.getElementById('modal-memoria').classList.contains('aberto')) closeModalMemoria();
});
