// Espera carregar os elementos
document.addEventListener('DOMContentLoaded', function () {
    // Carrega as quatro opções de resposta
    const options = [
        document.getElementById('0'),
        document.getElementById('1'),
        document.getElementById('2'),
        document.getElementById('3'),
    ];

    // Todas as perguntas do quiz
    const questions = [
        "Qual dessas matérias da escola você prefere?", // 0
        "Qual dessas matérias do curso você prefere?" // 1
    ];

    // Opções de resposta de cada pergunta
    const answers = [
        ["Matemática", "Português", "Biologia", "Geografia"], // 0
        ["Programação WEB", "Programação Java", "Projeto de Software", "Rede de Computadores"] // 1
    ];

    // Carrega a questão
    const question = document.getElementById('question');

    // Carrega o número da questão
    const number = document.getElementById('number');

    // Indentifica qual a pergunta atual
    let i = 0;

    // Lista de professores disponíveis
    const professores = [
        "Luciano", // 0
        "Felippe", // 1
        "Edson", // 2
        "Marcos" // 3
    ];

    // Lista de pontos em cada professor
    const points = [
        0, 0, 0, 0
    ];

    // Add event listener em todos os botões
    const buttons = document.querySelectorAll('.options button');
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            // Pega o ID da opção
            const data = parseInt(this.getAttribute('id'));

            switch (data) {
                case 0:
                    points[0]++;
                    break;
                case 1:
                    points[1]++;
                    break;
                case 2:
                    points[2]++;
                    break;
                case 3:
                    points[3]++;
                    break;
            }

            // Próxima questão
            i++;

            if (i < questions.length) { // Se não tiver acabado o quiz
                question.innerText = questions[i];
                number.innerText = `#${i + 1}`;

                let j = 0;
                for (j = 0; j < 4; j++) {
                    options[j].innerText = answers[i][j];
                }
            } else { // Se o quiz tiver acabado
                let maior = 0;
                let nome;

                for (let j = 0; j < points.length; j++) {
                    if (points[j] > maior) {
                        maior = points[j];
                        nome = professores[j];
                    }
                }
                const queryString = `resultado=${encodeURIComponent(JSON.stringify(nome))}`;
                window.location.href = `/pages/resultado.html?${queryString}`
            }
        })
    });
});