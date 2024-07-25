let simbolos = ["♦", "♥", "♠", "♣"];
let numeros = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];

function displayCard() {
  let simbolosCarta = simbolos[Math.floor(Math.random() * simbolos.length)];
  let simpleNumeros = numeros[Math.floor(Math.random() * numeros.length)];
  let showCarta = `${simbolosCarta} ${simpleNumeros}`;

  let element = document.getElementById("showing");
  if (element) {
    element.style.background = "blue"; // Usa comillas alrededor del color
    element.style.color = "black"; // Ajusta el color del texto para mejorar la legibilidad
    element.style.padding = "10px"; // Añade algo de padding para que el texto no toque los bordes
    element.style.borderRadius = "5px"; // Añade esquinas redondeadas
    element.innerHTML = showCarta;
  }
}
