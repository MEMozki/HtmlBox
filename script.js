document.getElementById("runButton").addEventListener("click", function() {
    const code = document.getElementById("htmlCode").value;
    localStorage.setItem("htmlCode", code);  // Сохраняем код в localStorage
    window.location.href = "result.html";    // Переходим на страницу исполнения
});
