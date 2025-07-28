emailjs.init("fuEIOf6GGlQiv5U-g"); 

const form = document.getElementById("formulario");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm("service_3fn0zkk", "template_h3hfqrm", this)
    .then(function () {
      alert("¡Correo enviado con éxito!");
      form.reset(); 
    }, function (error) {
      console.error("Error al enviar correo:", error);
      alert("Hubo un error al enviar el correo.");
    });
});




