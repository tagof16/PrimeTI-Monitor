// HEADER EFEITO

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

  if(window.scrollY > 50){

    header.style.background =
      "rgba(2,8,23,.92)";

    header.style.boxShadow =
      "0 0 30px rgba(0,0,0,.25)";

  } else {

    header.style.background =
      "rgba(2,8,23,.75)";

    header.style.boxShadow = "none";

  }

});

// ANIMAÇÃO HERO

const heroText =
  document.querySelector(".hero-text");

const heroCard =
  document.querySelector(".hero-card");

window.addEventListener("load", () => {

  heroText.style.opacity = "0";
  heroText.style.transform = "translateY(40px)";

  heroCard.style.opacity = "0";
  heroCard.style.transform = "translateY(40px)";

  setTimeout(() => {

    heroText.style.transition = ".7s ease";
    heroCard.style.transition = ".7s ease";

    heroText.style.opacity = "1";
    heroText.style.transform = "translateY(0px)";

    heroCard.style.opacity = "1";
    heroCard.style.transform = "translateY(0px)";

  }, 300);

});

// ANIMAÇÃO CARDS

const cards =
  document.querySelectorAll(
    ".card, .step, .plan"
  );

const observer =
  new IntersectionObserver((entries) => {

    entries.forEach(entry => {

      if(entry.isIntersecting){

        entry.target.style.opacity = "1";
        entry.target.style.transform =
          "translateY(0px)";

      }

    });

  }, {
    threshold: 0.2
  });

cards.forEach((card, index) => {

  card.style.opacity = "0";
  card.style.transform =
    "translateY(50px)";

  card.style.transition =
    `.6s ease ${index * 0.1}s`;

  observer.observe(card);

});

// HOVER PLANOS

const plans =
  document.querySelectorAll(".plan");

plans.forEach(plan => {

  plan.addEventListener("mouseenter", () => {

    plan.style.transform =
      "translateY(-8px)";

    plan.style.boxShadow =
      "0 0 50px rgba(11,132,255,.25)";

  });

  plan.addEventListener("mouseleave", () => {

    if(plan.classList.contains("destaque")){

      plan.style.transform = "scale(1.04)";

    } else {

      plan.style.transform =
        "translateY(0px)";

    }

    plan.style.boxShadow = "";

  });

});

// EFEITO BOTÕES

const buttons =
  document.querySelectorAll(
    ".btn-primary, .btn-secondary, .btn-header, .cta a, .plan a"
  );

buttons.forEach(button => {

  button.addEventListener("mouseenter", () => {

    button.style.transform =
      "translateY(-3px)";

  });

  button.addEventListener("mouseleave", () => {

    button.style.transform =
      "translateY(0px)";

  });

});

// SCROLL SUAVE

document.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

  anchor.addEventListener("click", function(e){

    e.preventDefault();

    const target =
      document.querySelector(
        this.getAttribute("href")
      );

    target.scrollIntoView({
      behavior: "smooth"
    });

  });

});

// MOCKUP FLOAT

const mockup =
  document.querySelector(".mockup");

let floating = 0;

setInterval(() => {

  floating += 0.02;

  mockup.style.transform =
    `translateY(${Math.sin(floating) * 8}px)`;

}, 30);

// TOAST

window.addEventListener("load", () => {

  setTimeout(() => {

    const toast =
      document.createElement("div");

    toast.innerHTML =
      "🚀 PrimeAgenda carregado com sucesso";

    toast.style.position = "fixed";
    toast.style.right = "30px";
    toast.style.bottom = "30px";

    toast.style.padding =
      "18px 22px";

    toast.style.borderRadius =
      "16px";

    toast.style.background =
      "linear-gradient(135deg,#0b63f6,#0b84ff)";

    toast.style.color = "white";

    toast.style.fontWeight = "700";

    toast.style.zIndex = "9999";

    toast.style.boxShadow =
      "0 0 35px rgba(11,132,255,.35)";

    document.body.appendChild(toast);

    setTimeout(() => {

      toast.remove();

    }, 4000);

  }, 1200);

});

// RELÓGIO HEADER

const clock =
  document.createElement("div");

clock.classList.add("clock");

clock.style.color = "#94a3b8";
clock.style.fontWeight = "700";
clock.style.marginLeft = "20px";

header.appendChild(clock);

function atualizarRelogio(){

  const agora = new Date();

  const hora =
    agora.toLocaleTimeString("pt-BR");

  clock.innerHTML =
    `🕒 ${hora}`;

}

setInterval(atualizarRelogio, 1000);

atualizarRelogio();