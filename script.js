// Referencia os elementos: botões de play, pause, vídeo, caixa de diálogo e botão de fechar diálogo
const playButton = document.getElementById('play-button');
const pauseButton = document.getElementById('pause-button');
const video = document.getElementById('background-video');
const dialogBox = document.getElementById('dialog-box');
const closeDialog = document.getElementById('close-dialog');

// Oculta o botão de pause inicialmente
pauseButton.style.display = 'none';

// Armazena o tempo atual do vídeo quando for pausado
let currentTime = 0;

// Inicia o vídeo ao clicar no botão de play
playButton.addEventListener('click', function() {
    video.play();  // Reproduz o vídeo
    playButton.style.display = 'none';  // Oculta o botão de play
    pauseButton.style.display = 'block';  // Exibe o botão de pause
});

// Pausa o vídeo e exibe a caixa de diálogo ao clicar no botão de pause
pauseButton.addEventListener('click', function() {
    currentTime = video.currentTime;  // Armazena o tempo atual do vídeo
    video.pause();  // Pausa o vídeo
    dialogBox.style.display = 'flex';  // Exibe a caixa de diálogo
});

// Fecha a caixa de diálogo e retoma o vídeo ao clicar no botão de fechar
closeDialog.addEventListener('click', function() {
    dialogBox.style.display = 'none';  // Oculta a caixa de diálogo
    video.currentTime = currentTime;  // Retorna ao tempo em que o vídeo foi pausado
    video.play();  // Reproduz o vídeo novamente
});
