// Referências aos elementos
var playButton = document.getElementById('play-button');
var pauseButton = document.getElementById('pause-button');
var video = document.getElementById('background-video');
var closeButton = document.getElementById('close-dialog');

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
    // Parar o vídeo
    video.pause();
    
    // Mostrar a caixa de diálogo
    var dialogBox = document.getElementById('dialog-box');
    dialogBox.classList.remove('hidden');
});

// Evento de clique no botão de fechar da caixa de diálogo
closeButton.addEventListener('click', function() {
    // Fechar a caixa de diálogo
    var dialogBox = document.getElementById('dialog-box');
    dialogBox.classList.add('hidden');
    
    // Retomar o vídeo e mostrar o botão de play novamente
    video.play();
    playButton.style.display = 'block';
});
