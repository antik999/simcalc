function generateSimoron() {
    const randomNumber = Math.floor(Math.random() * 100) + 1; // Случайное число от 1 до 100
    const result = document.getElementById("result");
    result.textContent = `Ваше счастливое число: ${randomNumber}`;
}
