let amigos = [];

function agregarAmigo() {
  let nombreInput = document.getElementById("amigo");
  let nombre = nombreInput.value;

  if (nombre === "") {
    alert("Por favor, inserte un nombre.");
    return;
  }

  amigos.push(nombre);

  nombreInput.value = "";

  mostrarListaAmigos();
}

function mostrarListaAmigos() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  for (let i = 0; i < amigos.length; i++) {
    let item = document.createElement("li");
    item.textContent = amigos[i];
    lista.appendChild(item);
  }
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("Agrega al menos un nombre antes de sortear.");
    return;
  }

  let indiceAleatorio = Math.floor(Math.random() * amigos.length);
  let nombreSorteado = amigos[indiceAleatorio];

  let resultado = document.getElementById("resultado");
  resultado.innerHTML = "";

  let itemResultado = document.createElement("li");
  itemResultado.textContent = `🎉 El amigo secreto es: ${nombreSorteado}`;
  resultado.appendChild(itemResultado);
}