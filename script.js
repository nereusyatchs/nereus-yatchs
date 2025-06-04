const texts = {
  pt: {
    inicio: "O Futuro do Luxo Náutico",
    sobre: "Na Nereus Hatchs, nossa visão vai além da construção: criamos experiências únicas no mar. Fundada por engenheiros náuticos e designers visionários, cada projeto é feito sob medida, combinando inovação, sustentabilidade e requinte absoluto.",
    tecnologia: "Cada hatch Nereus é construído com materiais ultraleves e resistentes, integrando inteligência artificial, sistemas de energia limpa e conectividade total. A experiência a bordo nunca foi tão avançada.",
    contato: "Agende uma Consulta Exclusiva",
    aether_descricao: "O hatch compacto que redefine o conceito de mobilidade marítima inteligente. Com design minimalista e tecnologia de ponta, o Aether X é ideal para quem busca performance e elegância em qualquer tipo de navegação.",
    vega_descricao: "Um hatch gigante de última geração, projetado para clientes que buscam o topo do topo. O Vega Z oferece um interior personalizável, automação completa e um nível de conforto sem precedentes, mesmo nas longas navegações."
  },
  en: {
    inicio: "The Future of Maritime Luxury",
    sobre: "At Nereus Hatchs, our vision goes beyond construction: we create unique experiences at sea. Founded by visionary naval engineers and designers, each project is custom-made, combining innovation, sustainability and absolute sophistication.",
    tecnologia: "Each Nereus hatch is built with ultra-lightweight and durable materials, integrating artificial intelligence, clean energy systems and full connectivity. The onboard experience has never been so advanced.",
    contato: "Schedule an Exclusive Consultation",
    aether_descricao: "The compact hatch that redefines the concept of intelligent maritime mobility. With minimalist design and cutting-edge technology, the Aether X is ideal for those seeking performance and elegance in any navigation.",
    vega_descricao: "A state-of-the-art giant hatch designed for clients who seek the highest level of luxury. The Vega Z offers a customizable interior, full automation and an unprecedented level of comfort, even on long voyages."
  }
};

function toggleLang() {
  const lang = document.documentElement.lang === 'pt-br' ? 'en' : 'pt-br';
  document.documentElement.lang = lang;

  const idioma = lang === 'pt-br' ? 'pt' : 'en';

  document.querySelector("#inicio h2").textContent = texts[idioma].inicio;
  document.querySelector("#sobre-text").textContent = texts[idioma].sobre;
  document.querySelector("#tecnologia-text").textContent = texts[idioma].tecnologia;
  document.querySelector("#contato h2").textContent = texts[idioma].contato;
  document.querySelector("#aether-descricao").textContent = texts[idioma].aether_descricao;
  document.querySelector("#vega-descricao").textContent = texts[idioma].vega_descricao;
}
