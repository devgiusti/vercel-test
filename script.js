        // Referências aos elementos
        const playButton = document.getElementById('play-button');
        const pauseButton = document.getElementById('pause-button');
        const video = document.getElementById('background-video');
        const dialogBox = document.getElementById('dialog-box');
        const closeDialog = document.getElementById('close-dialog');

        // Oculta o botão de pause inicialmente
        pauseButton.style.display = 'none';

        // Armazena o tempo atual do vídeo quando for pausado
        let currentTime = 0;

        // Função para iniciar o vídeo ao clicar no botão de play
        playButton.addEventListener('click', function() {
            // Verifica se o vídeo está pronto para ser reproduzido
            if (video.readyState >= 3) {
                video.play().catch(function(error) {
                    console.error('Erro ao reproduzir o vídeo: ', error);
                });
            } else {
                console.error('O vídeo não está pronto para ser reproduzido.');
            }
            // Esconde o botão de play e exibe o botão de pause
            playButton.style.display = 'none';
            pauseButton.style.display = 'block';
        });

        // Função para pausar o vídeo e exibir a caixa de diálogo
        pauseButton.addEventListener('click', function() {
            currentTime = video.currentTime; // Armazena o tempo atual do vídeo
            video.pause(); // Pausa o vídeo
            dialogBox.style.display = 'flex'; // Exibe a caixa de diálogo
        });

        // Função para fechar a caixa de diálogo e retomar o vídeo
        closeDialog.addEventListener('click', function() {
            dialogBox.style.display = 'none'; // Oculta a caixa de diálogo
            video.currentTime = currentTime; // Volta ao tempo em que o vídeo foi pausado
            video.play().catch(function(error) {
                console.error('Erro ao tentar retomar o vídeo:', error);
            });
        });

        // Evento para lidar com erros durante a reprodução no iOS
        video.addEventListener('error', function(e) {
            console.error('Erro de vídeo:', e);
        });

        // Adiciona controles ao vídeo para facilitar testes
        video.setAttribute('controls', 'controls');
