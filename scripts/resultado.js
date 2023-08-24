document.addEventListener('DOMContentLoaded', function () {
    const resultadoDiv = document.getElementById('resultado');

    // Obtem o valor da query string
    const urlParams = new URLSearchParams(window.location.search);
    const resultadoString = urlParams.get('resultado');

    // Exibe o resultado na div
    resultadoDiv.innerText = `${resultadoString}`;
});
