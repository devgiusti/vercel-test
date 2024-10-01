// Seleciona os elementos do DOM: botões de play, pause/baixar foto e o vídeo de fundo
const playButton = document.getElementById('play-button');
const pauseButton = document.getElementById('pause-button');
const video = document.getElementById('background-video');

// Oculta o botão de pause/baixar foto inicialmente
pauseButton.classList.add('hidden');

// Função para mostrar um botão
function showButton(button) {
    button.classList.remove('hidden');
}

// Função para esconder um botão
function hideButton(button) {
    button.classList.add('hidden');
}

// Ao clicar no botão de play, o vídeo começa a ser reproduzido
playButton.addEventListener('click', function() {
    // Tenta reproduzir o vídeo e, se bem-sucedido, altera a exibição dos botões
    video.play().then(() => {
        hideButton(playButton);  // Esconde o botão de play
        showButton(pauseButton); // Mostra o botão de baixar foto
    }).catch((error) => {
        // Lida com erros de reprodução de vídeo, se ocorrerem
        console.error('Erro ao reproduzir o vídeo:', error);
    });
});

// Ao clicar no botão de pause/baixar foto, executa a ação desejada (neste caso, um log no console)
pauseButton.addEventListener('click', function() {
    console.log('Baixar foto clicado!'); // Ação ao clicar no botão de baixar foto
});
