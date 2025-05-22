// Obtendo referências aos botões de escolha do jogador
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');

// Obtendo referências aos elementos onde o resultado será exibido
const playerChoiceDisplay = document.getElementById('player-choice');
const computerChoiceDisplay = document.getElementById('computer-choice');
const gameResultDisplay = document.getElementById('game-result');

// Obtendo referências aos elementos do placar
const playerScoreDisplay = document.getElementById('player-score');
const computerScoreDisplay = document.getElementById('computer-score');

// Variáveis para armazenar as pontuações
let playerScore = 0;
let computerScore = 0;

// Array com as opções possíveis para o jogo
const choices = ['pedra', 'papel', 'tesoura'];

// Função para gerar a escolha do computador
function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length); // Gera um índice aleatório (0, 1 ou 2)
    return choices[randomIndex]; // Retorna a escolha correspondente ao índice
} 

// ... (código anterior: referências e getComputerChoice)

// Função para determinar o vencedor
function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'Empate!';
    } else if (
        (playerChoice === 'pedra' && computerChoice === 'tesoura') ||
        (playerChoice === 'papel' && computerChoice === 'pedra') ||
        (playerChoice === 'tesoura' && computerChoice === 'papel')
    ) {
        playerScore++; // Incrementa a pontuação do jogador
        playerScoreDisplay.textContent = playerScore; // Atualiza o placar na tela
        return 'Você venceu!';
    } else {
        computerScore++; // Incrementa a pontuação do computador
        computerScoreDisplay.textContent = computerScore; // Atualiza o placar na tela
        return 'Você perdeu!';
    }
}

// ... (Todo o código anterior: referências, getComputerChoice, determineWinner)

// Função principal que será executada quando um botão for clicado
function playGame(playerChoice) {
    playerChoiceDisplay.textContent = `Sua escolha: ${playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)}`; // Exibe a escolha do jogador
    
    const computerChoice = getComputerChoice(); // Pega a escolha do computador
    computerChoiceDisplay.textContent = `Escolha do computador: ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}`; // Exibe a escolha do computador

    const result = determineWinner(playerChoice, computerChoice); // Determina o vencedor
    gameResultDisplay.textContent = `Resultado: ${result}`; // Exibe o resultado
}

// Adicionando os event listeners aos botões
rockButton.addEventListener('click', () => playGame('pedra'));
paperButton.addEventListener('click', () => playGame('papel'));
scissorsButton.addEventListener('click', () => playGame('tesoura'));