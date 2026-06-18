// === EMAILJS - Integração com formulário ===
document.addEventListener("DOMContentLoaded", function () {
  // 1. Inicializa o EmailJS com sua Public Key
  emailjs.init("ru_BCZJ25-KsZPmg6"); 
  
  const form = document.getElementById("contact-form");
  
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      
      // --- VALIDAÇÃO MANUAL DOS CAMPOS ---
      // Pega todos os inputs, selects e textareas que possuem a classe 'required' ou o atributo required
      const campos = form.querySelectorAll("input[required], textarea[required], select[required]");
      let formularioValido = true;
      
      campos.forEach(campo => {
        if (!campo.value.trim()) {
          formularioValido = false;
        }
      });

      if (!formularioValido) {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return; // Interrompe o envio se houver campos vazios
      }
      // -----------------------------------

      // 2. Envio do EmailJS
      // ATENÇÃO: Troque "service_XXXXXXX" pelo seu Service ID real do painel do EmailJS!
      const SERVICE_ID = "service_XXXXXXX"; 
      const TEMPLATE_ID = "template_6yvfvvt";

      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, "#contact-form")
        .then(
          function (response) {
            console.log("✅ Mensagem enviada!", response.status, response.text);
            alert("Sua mensagem foi enviada com sucesso!");
            form.reset();
          },
          function (error) {
            console.error("❌ Erro ao enviar:", error);
            alert("Houve um erro ao enviar sua mensagem. Verifique o console para mais detalhes.");
          }
        );
    });
  }
});
