const texts = {
  pt: {
    inicio: "Bem-vindo aos limites do luxo marítimo",
    sobre: "Somos uma empresa visionária no setor náutico...",
    tecnologia: "Nossa frota utiliza materiais ultraleves, IA integrada e sistemas sustentáveis.",
    contato: "Entre em Contato"
  },
  en: {
    inicio: "Welcome to the edge of maritime luxury",
    sobre: "We are a visionary company in the nautical industry...",
    tecnologia: "Our fleet uses ultra-light materials, integrated AI and sustainable systems.",
    contato: "Contact Us"
  }
};

function toggleLang() {
  const lang = document.documentElement.lang === 'pt-br' ? 'en' : 'pt-br';
  document.documentElement.lang = lang;

  document.querySelector("#inicio h2").textContent = texts[lang === 'pt-br' ? 'pt' : 'en'].inicio;
  document.querySelector("#sobre p").textContent = texts[lang === 'pt-br' ? 'pt' : 'en'].sobre;
  document.querySelector("#tecnologia p").textContent = texts[lang === 'pt-br' ? 'pt' : 'en'].tecnologia;
  document.querySelector("#contato h2").textContent = texts[lang === 'pt-br' ? 'pt' : 'en'].contato;
}