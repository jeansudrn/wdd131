// Aguarda o documento HTML ser completamente carregado
document.addEventListener("DOMContentLoaded", () => {
    
    /* ==========================================================
       1. MENU HAMBÚRGUER RESPONSIVO
       ========================================================== */
    const menuButton = document.getElementById("menu-button");
    const navMenu = document.getElementById("nav-menu");

    if (menuButton && navMenu) {
        menuButton.addEventListener("click", () => {
            // Alterna a classe 'show' para exibir/esconder as opções do menu
            navMenu.classList.toggle("show");
            
            // Alterna a classe 'open' para mudar o ícone de ☰ para ✕
            menuButton.classList.toggle("open");
            
            // Atualiza o atributo de acessibilidade aria-label dinamicamente
            if (menuButton.classList.contains("open")) {
                menuButton.setAttribute("aria-label", "Fechar Menu");
            } else {
                menuButton.setAttribute("aria-label", "Abrir Menu");
            }
        });
    }

    /* ==========================================================
       2. RODAPÉ DINÂMICO (ANO ATUAL E ÚLTIMA MODIFICAÇÃO)
       ========================================================== */
    // Captura o elemento do ano corrente
    const yearSpan = document.getElementById("currentyear");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Captura o elemento da última modificação do documento
    const lastModifiedSpan = document.getElementById("lastModified");
    if (lastModifiedSpan) {
        lastModifiedSpan.textContent = document.lastModified;
    }
});