// Referências aos elementos
var playButton = document.getElementById('play-button');
var pauseButton = document.getElementById('pause-button');
var video = document.getElementById('background-video');
var dialogBox = document.getElementById('dialog-box');
var closeDialog = document.getElementById('close-dialog');

// Verificar se o vídeo está carregado
video.addEventListener('error', function() {
    console.error('Erro ao carregar o vídeo. Verifique o caminho e o formato.');
});

// Verificar se o vídeo está pronto para reprodução
video.addEventListener('canplay', function() {
    console.log('O vídeo está pronto para reprodução.');
});

// Inicialmente, o botão pause-button deve estar oculto
pauseButton.style.display = 'none';

// Variável para armazenar o tempo atual do vídeo quando for pausado
let currentTime = 0;

// Evento de clique no botão de play
playButton.addEventListener('click', function() {
    // Iniciar o vídeo
    video.play();
    
    // Esconder o botão de play
    playButton.style.display = 'none';
    
    // Mostrar o botão de pause
    pauseButton.style.display = 'block';
});

// Evento de clique no botão de pause
pauseButton.addEventListener('click', function() {
    // Pausar o vídeo e armazenar o tempo atual
    currentTime = video.currentTime;
    video.pause();

    // Mostrar a caixa de diálogo
    dialogBox.style.display = 'flex';
});

// Evento de clique no botão de fechar diálogo
closeDialog.addEventListener('click', function() {
    // Esconder a caixa de diálogo
    dialogBox.style.display = 'none';

    // Retomar o vídeo de onde foi pausado
    video.currentTime = currentTime;
    video.play();
});
