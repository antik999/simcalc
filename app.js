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
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    const randomPhrase = simoronPhrases[Math.floor(Math.random() * simoronPhrases.length)];
    const result = document.getElementById("result");
    
    // Убираем предыдущий результат (делаем невидимым)
    result.classList.remove("show");
    
    // Задержка для анимации
    setTimeout(() => {
        result.textContent = `Ваше счастливое число: ${randomNumber}. ${randomPhrase}`;
        result.classList.add("show"); // Показать результат с анимацией
    }, 100); // Небольшая задержка, чтобы анимация прошла плавно
}