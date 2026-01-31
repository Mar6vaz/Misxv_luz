document.addEventListener('DOMContentLoaded', () => {

  /* ---------- GALERÍA / MEMORIAS ---------- */
  const gallerySwiper = new Swiper(".gallery-swiper", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 15,
    centeredSlides: true,
  
    autoplay: {
      delay: 2800,
      disableOnInteraction: false,
    },
  
    effect: "slide",
    speed: 900,
  });
  
  /* ---------- ANIMACIONES SCROLL ---------- */
  AOS.init({
    duration: 1200,
    easing: 'ease-out-cubic',
    once: true,
  });

  /* ---------- CONTADOR ---------- */
  const countdownEl = document.getElementById("countdown");
  const eventDate = new Date("April 11, 2026 17:00:00").getTime();

  if (countdownEl) {
    setInterval(() => {
      const now = new Date().getTime();
      const diff = eventDate - now;

      if (diff <= 0) {
        countdownEl.innerHTML = "<p>¡El gran día ha llegado!</p>";
        return;
      }

      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((diff % (1000 * 60)) / 1000);

      countdownEl.innerHTML = `
        <div><span>${d}</span>Días</div>
        <div><span>${h}</span>Horas</div>
        <div><span>${m}</span>Min</div>
        <div><span>${s}</span>Seg</div>
      `;
    }, 1000);
  }

  /* ---------- MÚSICA ---------- */
  const audio = document.getElementById('bgMusic');
  const btn = document.getElementById('musicBtn');
  let playing = false;

  if (btn && audio) {
    btn.addEventListener('click', () => {
      if (!playing) {
        audio.play();
        btn.classList.add('playing');
        playing = true;
      } else {
        audio.pause();
        btn.classList.remove('playing');
        playing = false;
      }
    });
  }

});
/* ---------- ANIMACIÓN PORTADA ---------- */
window.addEventListener('load', () => {
  const name = document.querySelector('.animate-name');
  const title = document.querySelector('.animate-title');

  if(name && title){
    setTimeout(() => {
      name.classList.add('show');
    }, 400);

    setTimeout(() => {
      title.classList.add('show');
    }, 1200);
  }
});
window.addEventListener("scroll", () => {
  const indicator = document.querySelector(".scroll-indicator");
  if (!indicator) return;

  if (window.scrollY > 50) {
    indicator.style.opacity = "0";
    indicator.style.pointerEvents = "none";
  } else {
    indicator.style.opacity = "1";
  }
});


