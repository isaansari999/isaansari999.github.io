let matchIndex = 0;
const karenBtn = document.getElementById("match-karen");
const alexBtn = document.getElementById("match-alex");
const startBtn = document.getElementById("start-btn");

karenBtn.addEventListener("click", () => {
    matchIndex = 0;
    karenBtn.classList.add("selected");
    alexBtn.classList.remove("selected");
})

alexBtn.addEventListener("click", () => {
    matchIndex = 1;
    alexBtn.classList.add("selected");
    karenBtn.classList.remove("selected");
})

startBtn.addEventListener("click", () => {
    const scriptIndex = document.getElementById("script-control").value;
    window.location.href = `Wireframe3.html?match=${matchIndex}&script=${scriptIndex}`;
})
