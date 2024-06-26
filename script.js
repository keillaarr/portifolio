document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.getElementById("typingText");
    const text = textElement.innerHTML;
    let index = 0;

    function type() {
        if (index < text.length) {
            textElement.innerHTML = text.substr(0, index + 1);
            index++;
            setTimeout(type, 50);
        } else {
            index = 0; // Recomeça a digitação
            setTimeout(type, 1500); // Tempo de espera antes de recomeçar
        }
    }

    type();
});
