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
    const userQuestion = document.getElementById("userQuestion").value;
    
    if (userQuestion.trim() === "") {
        alert("Пожалуйста, задайте вопрос!");
        return;
    }
    
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    const randomPhrase = simoronPhrases[Math.floor(Math.random() * simoronPhrases.length)];
    const result = document.getElementById("result");
    
    result.classList.remove("show");
    
    setTimeout(() => {
        result.textContent = `Ответ на ваш вопрос "${userQuestion}": Ваше счастливое число: ${randomNumber}. ${randomPhrase}`;
        result.classList.add("show");
    }, 100);
}
