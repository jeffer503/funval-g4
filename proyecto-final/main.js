/* document.addEventListener("DOMContentLoaded", () => {
  const passwordInput = document.getElementById("password");
  const toggleBtn = document.getElementById("togglePassword");

  toggleBtn.addEventListener("click", () => {
    const isHidden = passwordInput.type === "password";
    passwordInput.type = isHidden ? "text" : "password";
  });
}); */

let token;
fetch(`https://funval-backend.onrender.com/login`, {
  method: "POST",
  headers: {
    "content type": "application/json",
  },
  body: JSON.stringify({
    nombre_usuario: "Kevindandrew",
    contaseña: "123456789",
  }).then((respuesta) => {
    return respuesta.json();
  }),
}).then((data) => {
  console.log(data);
});
