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
    // Parar o vídeo
    video.pause();
    
    // Mostrar a caixa de diálogo
    document.getElementById('dialog-box').classList.remove('hidden');
    
    // Fechar a caixa de diálogo e retomar o vídeo quando clicar no botão fechar
    var closeButton = document.getElementById('close-dialog');
    closeButton.addEventListener('click', function() {
        // Fechar a caixa de diálogo
        document.getElementById('dialog-box').classList.add('hidden');
        
        // Retomar o vídeo
        video.play();
        
        // Mostrar novamente o botão de play e esconder o botão de baixar foto
        playButton.style.display = 'block';
        pauseButton.classList.add('hidden');
    });
});
