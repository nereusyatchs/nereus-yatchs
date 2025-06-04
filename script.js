const texts = {
  pt: {
    inicio_titulo: "O Futuro do Luxo Náutico",
    inicio_descricao:
      "Projetos exclusivos de yatchs ultramodernos, meticulosamente desenhados para atender aos padrões mais exigentes do mercado náutico. Cada linha é pensada para unir elegância, inovação tecnológica e conforto supremo, criando embarcações que não apenas navegam, mas também inspiram. Projetadas para quem busca distinção e performance sem compromissos, nossas criações são verdadeiras obras de arte sobre as águas.",
    sobre_titulo: "Sobre Nós",
    sobre_descricao:
      "Na Nereus Yatchs, não construímos apenas embarcações — criamos verdadeiras experiências de luxo sobre as águas. Nossa filosofia vai além do convencional: cada yatch é uma obra única, concebida por uma equipe de engenheiros náuticos renomados e designers visionários, que unem precisão técnica à arte do design contemporâneo. Projetos exclusivos, feitos sob medida para os gostos mais refinados, onde tecnologia de ponta, sustentabilidade consciente e requinte estético se encontram em perfeita harmonia.",
    modelos_titulo: "Conheça Nossos Modelos",
    aether_titulo: "Aether X",
    aether_descricao:
      "O yatch compacto que redefine o conceito de mobilidade marítima inteligente. Com design minimalista e tecnologia de ponta, o Aether X é ideal para quem busca performance e elegância em qualquer tipo de navegação.",
    vega_titulo: "Vega Z",
    vega_descricao:
      "Um yatch gigante de última geração, projetado para clientes que buscam o topo do topo. O Vega Z oferece um interior personalizável, automação completa e um nível de conforto sem precedentes, mesmo nas longas navegações.",
    tecnologia_titulo: "Tecnologia e Inovação",
    tecnologia_descricao:
      "Cada yatch Nereus é uma síntese de inovação e excelência náutica. Projetados com materiais ultraleves e extremamente resistentes, nossos modelos incorporam inteligência artificial, sistemas avançados de energia limpa e conectividade completa, oferecendo uma experiência a bordo sem precedentes — tecnológica, intuitiva e profundamente luxuosa.",
    contato_titulo: "Agende uma Consulta Exclusiva",
  },
  en: {
    inicio_titulo: "The Future of Maritime Luxury",
    inicio_descricao:
      "Exclusive projects of ultra-modern yachts, meticulously designed to meet the highest standards of the nautical market. Every line is crafted to unite elegance, cutting-edge technology and supreme comfort, creating vessels that not only sail but also inspire. Designed for those who seek distinction and uncompromised performance, our creations are true works of art on water.",
    sobre_titulo: "About Us",
    sobre_descricao:
      "At Nereus Yatchs, we don’t just build vessels—we create luxurious experiences on the sea. Our philosophy goes beyond the conventional: each yacht is a unique masterpiece, designed by renowned naval engineers and visionary designers who combine technical precision with contemporary design artistry. Custom-made projects for the most refined tastes, where advanced technology, conscious sustainability, and aesthetic sophistication coexist in perfect harmony.",
    modelos_titulo: "Our Models",
    aether_titulo: "Aether X",
    aether_descricao:
      "The compact yacht that redefines the concept of intelligent maritime mobility. With minimalist design and cutting-edge technology, the Aether X is ideal for those seeking performance and elegance in any type of navigation.",
    vega_titulo: "Vega Z",
    vega_descricao:
      "A state-of-the-art giant yacht designed for clients who seek the peak of luxury. The Vega Z offers a customizable interior, full automation, and an unprecedented level of comfort, even during long voyages.",
    tecnologia_titulo: "Technology & Innovation",
    tecnologia_descricao:
      "Each Nereus yacht represents the synthesis of innovation and nautical excellence. Built with ultra-lightweight and highly resistant materials, our models incorporate artificial intelligence, advanced clean energy systems, and full connectivity, offering an onboard experience like never before—technological, intuitive, and deeply luxurious.",
    contato_titulo: "Schedule an Exclusive Consultation",
  },
};

function toggleLang() {
  const lang = document.documentElement.lang === 'pt-br' ? 'en' : 'pt-br';
  document.documentElement.lang = lang;
  const idioma = lang === 'pt-br' ? 'pt' : 'en';

  // Seção Início
  document.querySelector("#inicio h2").textContent = texts[idioma].inicio_titulo;
  document.querySelector("#inicio p").textContent = texts[idioma].inicio_descricao;

  // Seção Sobre
  document.querySelector("#sobre h2").textContent = texts[idioma].sobre_titulo;
  document.querySelector("#sobre-text").textContent = texts[idioma].sobre_descricao;

  // Seção Modelos
  document.querySelector("#modelos h2").textContent = texts[idioma].modelos_titulo;

  document.querySelector(".modelo:nth-child(1) h3").textContent = texts[idioma].aether_titulo;
  document.querySelector(".modelo:nth-child(1) .descricao-modelo").textContent = texts[idioma].aether_descricao;

  document.querySelector(".modelo:nth-child(2) h3").textContent = texts[idioma].vega_titulo;
  document.querySelector(".modelo:nth-child(2) .descricao-modelo").textContent = texts[idioma].vega_descricao;

  // Seção Tecnologia
  document.querySelector("#tecnologia h2").textContent = texts[idioma].tecnologia_titulo;
  document.querySelector("#tecnologia-text").textContent = texts[idioma].tecnologia_descricao;

  // Seção Contato
  document.querySelector("#contato h2").textContent = texts[idioma].contato_titulo;
}
