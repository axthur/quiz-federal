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
        "Qual dessas matérias do curso você prefere?", // 1
        "Qual dessas linguagens de programação você prefere?", // 2
        "Qual dessas áreas você prefere atuar?", //3
        "Qual desses sistemas operacionais você prefere?" //4
    ];

    // Opções de resposta de cada pergunta
    const answers = [
        ["Matemática", "Português", "Biologia", "História"], // 0
        ["Programação WEB", "Programação Java/Portugol", "Projeto de Software", "Fundamentos de Hardware"], // 1
        ["Java", "JavaScript", "C", "Python"], // 2
        ["Front-end", "Back-end", "Documentação", "Administração"], // 3
        ["Windows", "Linux", "macOS", "UNIX"] // 4
    ];

    // Carrega a questão
    const question = document.getElementById('question');

    // Carrega o número da questão
    const number = document.getElementById('number');

    // Indentifica qual a pergunta atual
    let i = 0;

    // Lista de IDs
    const Luciano = 0;
    const Felippe = 1;
    const Edson = 2;
    const Marcos = 3;
    const Cassia = 4;

    // Lista de professores disponíveis
    const professores = [
        "Luciano",
        "Felippe",
        "Edson",
        "Marcos Vinícius",
        "Cássia"
    ];

    // Lista de pontos em cada professor
    const points = [
        0, 0, 0, 0, 0
    ];

    // Add event listener em todos os botões
    const buttons = document.querySelectorAll('.options button');
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            // Pega o ID da opção
            const data = parseInt(this.getAttribute('id'));

            // Pega a opção
            switch (data) {
                // Opção 0
                case 0:
                    switch (i) {
                        // Matemática
                        case 0:
                            points[Luciano]++;
                            points[Felippe]++;
                            break;

                        // Programação WEB
                        case 1:
                            points[Luciano]++;
                            break;

                        // Java
                        case 2:
                            points[Felippe]++;
                            break;

                        // Front-end
                        case 3:
                            break;

                        // Windows
                        case 4:
                            points[Felippe]++;
                            points[Cassia]++;
                            break;
                    }
                    break;

                // Opção 1
                case 1:
                    switch (i) {
                        // Português
                        case 0:
                            break;

                        // Programação Java/Portugol
                        case 1:
                            points[Felippe]++;
                            break;

                        // JavaScript
                        case 2:
                            break;

                        // Back-end
                        case 3:
                            points[Luciano]++;
                            points[Felippe]++;
                            break;

                        // Linux
                        case 4:
                            points[Cassia]++;
                            break;
                    }
                    break;

                // Opção 2
                case 2:
                    switch (i) {
                        // Biologia
                        case 0:
                            break;

                        // Projeto de Software
                        case 1:
                            points[Marcos]++;
                            points[Cassia]++;
                            break;

                        // C
                        case 2:
                            break;

                        // Documentação
                        case 3:
                            break;

                        // macOS
                        case 4:
                            break;
                    }
                    break;

                // Opção 3
                case 3:
                    switch (i) {
                        // História
                        case 0:
                            break;

                        // Rede de Computadores
                        case 1:
                            points[Edson]++;
                            break;

                        // Python
                        case 2:
                            points[Luciano]++;
                            break;

                        // Administração
                        case 3:
                            points[Cassia]++;
                            break;

                        // UNIX
                        case 4:
                            break;
                    }
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
                window.location.href = `resultado.html?${queryString}`
            }
        })
    });
});
