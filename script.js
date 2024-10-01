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
    // Verificar se o vídeo está tocando
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
    
    // Mostrar novamente o botão de play
    playButton.style.display = 'block';
});

// Evento de clique no botão de pause para ocultar e mostrar o botão de play novamente
playButton.addEventListener('click', function() {
    // Esconder o botão de play
    playButton.style.display = 'none';
    
    // Mostrar o botão de baixar foto
    pauseButton.classList.remove('hidden');
});

// Evento de clique no botão de pause para pausar ou continuar o vídeo e mostrar novamente o botão de play
pauseButton.addEventListener('click', function() {
    // Verificar se o vídeo está tocando
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
    
    // Mostrar novamente o botão de play
    playButton.style.display = 'block';
});
