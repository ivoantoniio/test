document.addEventListener('DOMContentLoaded', () => {
    const closePopup = document.getElementById('close-popup');
    const popup = document.getElementById('popup');

    // Função para abrir o pop-up, caso o usuário não tenha fechado anteriormente
    function showPopup() {
        const isPopupClosed = localStorage.getItem('popupClosed'); // Verifica se o pop-up já foi fechado

        if (!isPopupClosed) { // Se o pop-up não foi fechado antes, exibe-o
            popup.style.display = 'flex';
        }
    }

    // Função para fechar o pop-up
    function hidePopup() {
        popup.style.display = 'none';
        localStorage.setItem('popupClosed', 'true'); // Marca o pop-up como fechado
    }

    // Evento para fechar o pop-up ao clicar no botão "Fechar"
    closePopup.addEventListener('click', hidePopup);

    // Fecha o pop-up ao clicar fora do conteúdo
    window.addEventListener('click', (event) => {
        if (event.target === popup) {
            hidePopup();
        }
    });

    // Abre o pop-up automaticamente ao carregar a página
    showPopup();
});
