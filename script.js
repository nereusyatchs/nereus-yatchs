// === SLIDER AUTOMÁTICO NO HERO ===
const heroSlides = document.getElementById("heroSlides");
const images = [
  "assets/banner1.jpg",
  "assets/banner2.jpg",
  "assets/banner3.jpg"
];

let currentImageIndex = 0;

function changeBackground() {
  heroSlides.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('${images[currentImageIndex]}')`;
  currentImageIndex = (currentImageIndex + 1) % images.length;
}

setInterval(changeBackground, 6000);
changeBackground(); // Primeira imagem imediatamente

// === SISTEMA DE IDIOMA (EN/PT) ===
const texts = {
  pt: {
    inicio_titulo: "O Futuro do Luxo Náutico",
    inicio_descricao:
      "Projetos exclusivos de yatchs ultramodernos, meticulosamente criados para clientes exigentes.",
    sobre_titulo: "Sobre Nós",
    sobre_descricao:
      "Na Nereus Yatchs, não construímos apenas embarcações — criamos verdadeiras experiências de luxo sobre as águas...",
    tecnologia_titulo: "Tecnologia e Inovação",
    tecnologia_descricao:
      "Cada yatch Nereus é uma síntese de inovação e excelência náutica...",
    contato_titulo: "Agende uma Consulta Exclusiva"
  },
  en: {
    inicio_titulo: "The Future of Maritime Luxury",
    inicio_descricao:
      "Exclusive projects of ultra-modern yachts, meticulously crafted for demanding clients.",
    sobre_titulo: "About Us",
    sobre_descricao:
      "At Nereus Yatchs, we don't just build vessels — we create luxurious experiences on the sea...",
    tecnologia_titulo: "Technology & Innovation",
    tecnologia_descricao:
      "Each Nereus yacht represents the synthesis of innovation and nautical excellence...",
    contato_titulo: "Schedule an Exclusive Consultation"
  }
};

function toggleLang() {
  const lang = document.documentElement.lang === 'pt-br' ? 'en' : 'pt-br';
  document.documentElement.lang = lang;
  const idioma = lang === 'pt-br' ? 'pt' : 'en';

  // Atualiza os textos dinamicamente
  document.querySelector("#inicio h1").textContent = texts[idioma].inicio_titulo;
  document.querySelector("#inicio p").textContent = texts[idioma].inicio_descricao;
  document.querySelector("#sobre h2").textContent = texts[idioma].sobre_titulo;
  document.querySelector("#sobre-text").textContent = texts[idioma].sobre_descricao;
  document.querySelector("#tecnologia h2").textContent = texts[idioma].tecnologia_titulo;
  document.querySelector("#tecnologia-text").textContent = texts[idioma].tecnologia_descricao;
  document.querySelector("#contato h2").textContent = texts[idioma].contato_titulo;
}

// === EMAILJS - Integração com formulário ===
document.addEventListener("DOMContentLoaded", function () {
  // Inicialização do EmailJS
  emailjs.init("YOUR_PUBLIC_KEY"); // Substitua pelo seu User ID real

  // Evento de envio do formulário
  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      emailjs.sendForm("nereus-yachts", "template_b6ab9ok", "#contact-form")
        .then(
          function (response) {
            console.log("✅ Mensagem enviada com sucesso!", response.status, response.text);
            alert("Sua mensagem foi enviada com sucesso!");
            form.reset();
          },
          function (error) {
            console.error("❌ Erro ao enviar:", error);
            alert("Houve um erro ao enviar a mensagem. Tente novamente.");
          }
        );
    });
  }
});
