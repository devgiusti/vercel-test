// Referencia os elementos do DOM: botões de play, pause/baixar foto e o vídeo de fundo
var playButton = document.getElementById('play-button');
var pauseButton = document.getElementById('pause-button');
var video = document.getElementById('background-video');

// Define que o botão pause/baixar foto está oculto inicialmente
pauseButton.classList.add('hidden');

// Ao clicar no botão de play, o vídeo começa a ser reproduzido
playButton.addEventListener('click', function() {
    // Inicia a reprodução do vídeo
    video.play();
    
    // Esconde o botão de play da interface
    playButton.style.display = 'none';
    
    // Exibe o botão de baixar foto
    pauseButton.classList.remove('hidden');
});

// Ao clicar no botão de pause/baixar foto, realiza a ação para baixar a foto
pauseButton.addEventListener('click', function() {
    // Exibe uma mensagem no console indicando que o botão de baixar foi clicado
    console.log('Baixar foto clicado!');
});
