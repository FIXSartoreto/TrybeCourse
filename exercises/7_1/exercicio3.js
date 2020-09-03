let clickCount = 0;
const btnClick = document.querySelector(".btn-click");
const pCount = document.querySelector(".count-click");

btnClick.addEventListener("click", () => pCount.innerHTML = `Você clicou nessa pagina: ${clickCount += 1} vezes!`);