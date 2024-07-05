# Random_Background_Color_Changer



<img width="1225" alt="random_background_color_changer" src="https://github.com/WingsOfFury/random_background_color_changer/assets/85767977/34745e41-cee4-4efc-b5bf-fbb7af1b6c69">

---

### Dieses Projekt bestand aus Basic Debugging und gleichzeitiger Programmierung des random Background Color Changer.

```javascript
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

function getRandomIndex() {
  const randomIndex = Math.floor(darkColorsArr.length * Math.random());
  return randomIndex;
}

const body = document.querySelector("body");
const bgHexCodeSpanElement = document.querySelector("#bg-hex-code");

function changeBackgroundColor() {
  const color = darkColorsArr[getRandomIndex()];

  bgHexCodeSpanElement.innerText = color;
  body.style.backgroundColor = color;
}
const btn = document.querySelector("#btn");

btn.onclick = changeBackgroundColor;
```
