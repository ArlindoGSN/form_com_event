let btn = document.querySelector("#enviar");

btn.addEventListener("click", function () {
  verificar();
});

function verificar() {
  let array = ["nome", "e-mail", "cidade", "estado", "texto"];

  for (let i = 0; i < array.length; i++) {
    const campo = array[i];
    let valor = document.getElementById(campo).value;

    if (campo === "e-mail" && (valor === "") == false) {
      const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (regexEmail.test(valor) === false) {
        alert("Email esperado example@example.com");
        var valido = false;
      }
    }

    if (valor === "") {
      alert(`Campo ${campo} está vazio`);
      document.getElementById(campo).style.border = "2px solid red";
      var valido = false;
    }
  }

  if (valido != false) {
    for (let i = 0; i < array.length; i++) {
      const campo = array[i];
      let valor = document.getElementById(campo).value;
      document.getElementById(campo).style.border = "1px solid";
    }

    return alert("Valido");
  }
}
