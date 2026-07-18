document.addEventListener("DOMContentLoaded", () => {
    
    /* ==========================================================
       1. MENU HAMBÚRGUER RESPONSIVO (SEGURO PARA VALIDADOR)
       ========================================================== */
    const menuButton = document.getElementById("menu-button");
    const navMenu = document.getElementById("nav-menu");

    if (menuButton && navMenu) {
        // Se a tela for menor que 768px (Mobile), oculta o menu após o carregamento inicial
        if (window.innerWidth < 768) {
            navMenu.classList.add("hidden-mobile");
        }

        menuButton.addEventListener("click", () => {
            // Se o menu contém a classe que esconde, nós a removemos e mostramos o menu
            if (navMenu.classList.contains("hidden-mobile")) {
                navMenu.classList.remove("hidden-mobile");
                navMenu.classList.add("show");
                menuButton.classList.add("open");
                menuButton.setAttribute("aria-label", "Fechar Menu");
            } else {
                // Caso contrário, ocultamos o menu novamente usando a classe segura
                navMenu.classList.remove("show");
                navMenu.classList.add("hidden-mobile");
                menuButton.classList.remove("open");
                menuButton.setAttribute("aria-label", "Abrir Menu");
            }
        });
    }

    /* ==========================================================
       2. RODAPÉ DINÂMICO
       ========================================================== */
    const yearSpan = document.getElementById("currentyear");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    const lastModifiedSpan = document.getElementById("lastModified");
    if (lastModifiedSpan) {
        lastModifiedSpan.textContent = document.lastModified;
    }
});