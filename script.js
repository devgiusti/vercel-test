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
