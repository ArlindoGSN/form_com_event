let btn = document.querySelector("#enviar");

btn.addEventListener("click", function () {
  verificar();
});

function verificar() {
  let array = ["nome", "e-mail", "cidade", "estado", "texto"];
  let valido = true;

  for (const element of array) {
    const campo = element;
    let valor = document.getElementById(campo).value;

    if (campo === "e-mail" && (valor === "") == false) {
      const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (regexEmail.test(valor) === false) {
        alert("Email esperado example@example.com");
        valido = false;
      }
    }

    if (valor === "") {
      alert(`Campo ${campo} está vazio`);
      document.getElementById(campo).style.border = "2px solid red";
      valido = false;
    }
  }

  if (valido != false) {
    for (const element of array) {
      const campo = element;
      document.getElementById(campo).style.border = "1px solid";
    }

    return alert("Valido");
  }
}
