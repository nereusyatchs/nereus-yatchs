// === SLIDER AUTOMÁTICO NO HERO ===
const heroSlides = document.getElementById("heroSlides");
const images = [
  "assets/banner1.jpg",
  "assets/banner2.jpg",
  "assets/banner3.jpg"
];

let currentImageIndex = 0;

function changeBackground() {
  if (!heroSlides) return;
  
  heroSlides.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('${images[currentImageIndex]}')`;
  currentImageIndex = (currentImageIndex + 1) % images.length;
}

// Só inicia o slider se o elemento existir
if (heroSlides) {
  setInterval(changeBackground, 6000);
  changeBackground();
}

// === SISTEMA DE IDIOMA (EN/PT) ===
const texts = {
  pt: {
    inicio_titulo: "O Futuro do Luxo Náutico",
    inicio_descricao: "Projetos exclusivos de yatchs ultramodernos, meticulosamente criados para clientes exigentes.",
    sobre_titulo: "Sobre Nós",
    sobre_descricao: "Na Nereus Yatchs, não construímos apenas embarcações — criamos verdadeiras experiências de luxo sobre as águas...",
    tecnologia_titulo: "Tecnologia e Inovação",
    tecnologia_descricao: "Cada yatch Nereus é uma síntese de inovação e excelência náutica...",
    contato_titulo: "Agende uma Consulta Exclusiva",
    btn_idioma: "EN",
    form_nome: "Nome Completo",
    form_email: "E-mail",
    form_telefone: "Telefone",
    form_mensagem: "Mensagem",
    form_enviar: "Enviar Mensagem"
  },
  en: {
    inicio_titulo: "The Future of Maritime Luxury",
    inicio_descricao: "Exclusive projects of ultra-modern yachts, meticulously crafted for demanding clients.",
    sobre_titulo: "About Us",
    sobre_descricao: "At Nereus Yatchs, we don't just build vessels — we create luxurious experiences on the sea...",
    tecnologia_titulo: "Technology & Innovation",
    tecnologia_descricao: "Each Nereus yacht represents the synthesis of innovation and nautical excellence...",
    contato_titulo: "Schedule an Exclusive Consultation",
    btn_idioma: "PT",
    form_nome: "Full Name",
    form_email: "Email",
    form_telefone: "Phone",
    form_mensagem: "Message",
    form_enviar: "Send Message"
  }
};

function updateLanguage(idioma) {
  // Atualiza textos dinamicamente com verificação de existência
  const elements = {
    "#inicio h1": texts[idioma].inicio_titulo,
    "#inicio p": texts[idioma].inicio_descricao,
    "#sobre h2": texts[idioma].sobre_titulo,
    "#sobre-text": texts[idioma].sobre_descricao,
    "#tecnologia h2": texts[idioma].tecnologia_titulo,
    "#tecnologia-text": texts[idioma].tecnologia_descricao,
    "#contato-titulo": texts[idioma].contato_titulo,
    "#btn-idioma": texts[idioma].btn_idioma,
    "label[for='nome']": texts[idioma].form_nome,
    "label[for='email']": texts[idioma].form_email,
    "label[for='telefone']": texts[idioma].form_telefone,
    "label[for='mensagem']": texts[idioma].form_mensagem,
    "#contact-form button[type='submit']": texts[idioma].form_enviar
  };

  Object.keys(elements).forEach(selector => {
    const element = document.querySelector(selector);
    if (element) {
      element.textContent = elements[selector];
    }
  });

  // Atualiza placeholders dos inputs
  const placeholders = {
    "#nome": idioma === 'pt' ? "Seu nome completo" : "Your full name",
    "#email": idioma === 'pt' ? "seu@email.com" : "your@email.com",
    "#telefone": idioma === 'pt' ? "(00) 00000-0000" : "(00) 00000-0000",
    "#mensagem": idioma === 'pt' ? "Digite sua mensagem..." : "Type your message..."
  };

  Object.keys(placeholders).forEach(selector => {
    const element = document.querySelector(selector);
    if (element) {
      element.placeholder = placeholders[selector];
    }
  });
}

function toggleLang() {
  const currentLang = document.documentElement.lang || 'pt-br';
  const newLang = currentLang === 'pt-br' ? 'en' : 'pt-br';
  document.documentElement.lang = newLang;
  
  const idioma = newLang === 'pt-br' ? 'pt' : 'en';
  updateLanguage(idioma);
  
  // Salva preferência no localStorage
  localStorage.setItem('idioma', idioma);
}

// === EMAILJS - Integração com formulário ===
document.addEventListener("DOMContentLoaded", function () {
  // Inicializa EmailJS
  if (typeof emailjs !== 'undefined') {
    emailjs.init("ru_BCZJ25-KsZPmg6");
  }

  // Carrega idioma salvo ou padrão
  const savedLang = localStorage.getItem('idioma') || 'pt';
  document.documentElement.lang = savedLang === 'pt' ? 'pt-br' : 'en';
  updateLanguage(savedLang);

  // Adiciona event listener ao botão de idioma
  const btnIdioma = document.getElementById("btn-idioma");
  if (btnIdioma) {
    btnIdioma.addEventListener("click", toggleLang);
  }

  // Formulário de contato
  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      // Validação básica
      const nome = document.getElementById("nome")?.value.trim();
      const email = document.getElementById("email")?.value.trim();
      const mensagem = document.getElementById("mensagem")?.value.trim();

      if (!nome || !email || !mensagem) {
        const idioma = document.documentElement.lang === 'pt-br' ? 'pt' : 'en';
        alert(idioma === 'pt' 
          ? "Por favor, preencha todos os campos obrigatórios." 
          : "Please fill in all required fields.");
        return;
      }

      // Validação de email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        const idioma = document.documentElement.lang === 'pt-br' ? 'pt' : 'en';
        alert(idioma === 'pt' 
          ? "Por favor, insira um e-mail válido." 
          : "Please enter a valid email address.");
        return;
      }

      // Desabilita botão durante envio
      const submitBtn = form.querySelector("button[type='submit']");
      const originalText = submitBtn.textContent;
      submitBtn.disabled = true;
      submitBtn.textContent = "Enviando...";

      emailjs.sendForm("nereus-yachts", "template_6yvfvvt", "#contact-form")
        .then(
          function (response) {
            console.log("✅ Mensagem enviada!", response.status, response.text);
            const idioma = document.documentElement.lang === 'pt-br' ? 'pt' : 'en';
            alert(idioma === 'pt' 
              ? "Sua mensagem foi enviada com sucesso! Entraremos em contato em breve." 
              : "Your message was sent successfully! We will contact you soon.");
            form.reset();
          },
          function (error) {
            console.error("❌ Erro:", error);
            const idioma = document.documentElement.lang === 'pt-br' ? 'pt' : 'en';
            alert(idioma === 'pt' 
              ? "Houve um erro ao enviar sua mensagem. Por favor, tente novamente." 
              : "There was an error sending your message. Please try again.");
          }
        )
        .finally(() => {
          submitBtn.disabled = false;
          submitBtn.textContent = originalText;
        });
    });
  }
});
