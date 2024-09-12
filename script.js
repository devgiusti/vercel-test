// Referências aos elementos
var playButton = document.getElementById('play-button');
var pauseButton = document.getElementById('pause-button');
var video = document.getElementById('background-video');

// Inicialmente, o botão pause-button deve estar oculto
pauseButton.classList.add('hidden');

// Evento de clique no botão de play
playButton.addEventListener('click', function() {
    // Iniciar o vídeo
    video.play();
    
    // Esconder o botão de play
    playButton.style.display = 'none';
    
    // Mostrar o botão de baixar foto
    pauseButton.classList.remove('hidden');
});

// Evento de clique no botão de baixar foto
pauseButton.addEventListener('click', function() {
    // Ação para baixar foto (implemente aqui a lógica para baixar a foto)
    console.log('Baixar foto clicado!');
});

// Variável para armazenar o tempo atual do vídeo quando for pausado
let currentTime = 0;

document.getElementById('pause-button').addEventListener('click', function() {
    // Pausar o vídeo
    var video = document.getElementById('background-video');
    currentTime = video.currentTime; // Armazena o tempo atual do vídeo
    video.pause();

    // Mostrar a caixa de diálogo
    var dialogBox = document.getElementById('dialog-box');
    dialogBox.style.display = 'flex'; // Mostrar a caixa de diálogo
});

document.getElementById('close-dialog').addEventListener('click', function() {
    // Esconder a caixa de diálogo
    var dialogBox = document.getElementById('dialog-box');
    dialogBox.style.display = 'none'; // Esconder a caixa de diálogo

    // Retomar o vídeo de onde foi pausado
    var video = document.getElementById('background-video');
    video.currentTime = currentTime; // Define o tempo atual para o tempo pausado
    video.play(); // Retomar a reprodução
});
