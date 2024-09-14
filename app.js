const simoronPhrases = [
    "Сегодня ваш день!",
    "Удача на вашей стороне!",
    "Этот день принесет сюрпризы!",
    "Чудеса рядом!",
    "Просто поверь в себя!",
    "Все получится!",
    "Скоро исполнится желание!",
    "Везение уже на пути!",
    "Время действовать!",
    "Будь готов к лучшему!"
];

function generateSimoron() {
    const randomNumber = Math.floor(Math.random() * 100) + 1; // Случайное число от 1 до 100
    const randomPhrase = simoronPhrases[Math.floor(Math.random() * simoronPhrases.length)];
    const result = document.getElementById("result");
    result.textContent = `Ваше счастливое число: ${randomNumber}. ${randomPhrase}`;
}
