// Array mit Farb-Hexcodes
const darkColorsArr = [
  "#2C3E50",
  "#34495E",
  "#2C2C2C",
  "#616A6B",
  "#4A235A",
  "#2F4F4F",
  "#0E4B5A",
  "#36454F",
  "#2C3E50",
  "#800020",
];

// Funktion, um einen zufälligen Index im Bereich des Arrays zu erhalten
function getRandomIndex() {
  const randomIndex = Math.floor(darkColorsArr.length * Math.random());
  return randomIndex;
}

// Selektiere das body-Element
const body = document.querySelector("body");

// Selektiere das Element, das den aktuellen Hex-Farbcode anzeigen soll
const bgHexCodeSpanElement = document.querySelector("#bg-hex-code");

// Funktion, die die Hintergrundfarbe ändert
function changeBackgroundColor() {
  // Hole eine zufällige Farbe aus dem Array
  const color = darkColorsArr[getRandomIndex()];

  // Setze den Text des bgHexCodeSpanElement auf den Hex-Farbcode
  bgHexCodeSpanElement.innerText = color;

  // Ändere die Hintergrundfarbe des body-Elements auf die ausgewählte Farbe
  body.style.backgroundColor = color;
}

// Selektiere den Button, der die Hintergrundfarbe ändern soll
const btn = document.querySelector("#btn");

// Füge dem Button ein onclick-Ereignis hinzu, das die changeBackgroundColor-Funktion aufruft
btn.onclick = changeBackgroundColor;
