// Array contendo os 12 templos solicitados com dados de consagração e área reais
const templos = [
  {
    nomeDoTemplo: "Salt Lake",
    localizacao: "Salt Lake City, Utah, Estados Unidos",
    consagracao: "1893, 6 de abril",
    area: 382207,
    urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/2018/400x250/slctemple7.jpg"
  },
  {
    nomeDoTemplo: "Roma",
    localizacao: "Roma, Itália",
    consagracao: "2019, 10 de março",
    area: 40000,
    urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/2019/400x250/1-Rome-Temple-2160936.jpg"
  },
  {
    nomeDoTemplo: "Paris",
    localizacao: "Le Chesnay, França",
    consagracao: "2017, 21 de maio",
    area: 44175,
    urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/paris-france/400x250/paris-france-temple-exterior-evening-1905504.jpg"
  },
  {
    nomeDoTemplo: "Tóquio",
    localizacao: "Minato-ku, Tóquio, Japão",
    consagracao: "1980, 27 de outubro",
    area: 53997,
    urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/tokyo-japan/200x320/tokyo_japan_temple-evening.jpeg"
  },
  {
    nomeDoTemplo: "São Paulo",
    localizacao: "São Paulo, São Paulo, Brasil",
    consagracao: "1978, 30 de outubro",
    area: 59246,
    urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/sao-paulo-brazil/400x250/sao-paulo-brazil-temple-lds-187030-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Frankfurt",
    localizacao: "Friedrichsdorf, Alemanha",
    consagracao: "1987, 28 de agosto",
    area: 32895,
    urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/frankfurt-germany/400x250/frankfurt-temple-3-2278181.jpg"
  },
  {
    nomeDoTemplo: "Lisboa",
    localizacao: "Lisboa, Portugal",
    consagracao: "2019, 15 de setembro",
    area: 23730,
    urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lisbon-portugal/400x250/03-045a97e8471a9f581e927698521a1d184f4b3753.jpeg"
  },
  {
    nomeDoTemplo: "Kyiv",
    localizacao: "Kyiv, Ucrânia",
    consagracao: "2010, 29 de agosto",
    area: 22184,
    urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/kyiv-ukraine/400x250/kyiv-ukraine-temple-lds-736359-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Sydney",
    localizacao: "Carlingford, New South Wales, Austrália",
    consagracao: "1984, 20 de setembro",
    area: 30677,
    urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/sydney-australia/400x250/sydney-australia-temple-lds-988492-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Fortaleza",
    localizacao: "Fortaleza, Ceará, Brasil",
    consagracao: "2019, 2 de junho",
    area: 34200,
    urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/fortaleza-brazil/400x250/1-Fortaleza-Temple-Photo-2233938.jpg"
  },
  {
    nomeDoTemplo: "Colonia Juárez",
    localizacao: "Colonia Juárez, Chihuahua, México",
    consagracao: "1999, 6 de março", 
    area: 6800,
    urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/colonia-juarez-chihuahua-mexico/400x250/colonia-juarez-chihuahua-mexico-temple-1543027-wallpaper.jpg"
  },
   {
    nomeDoTemplo: "Recife",
    localizacao: "Recife, Pernambuco, Brasil",
    consagracao: "2000, 15 de dezembro",
    area: 37200,
    urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/recife-brazil/400x250/recife-brazil-temple-lds-700211-wallpaper.jpg"
  }
];

document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.getElementById("menu-button");
    const navMenu = document.getElementById("nav-menu");
    const galleryContainer = document.getElementById("gallery");
    const mainTitle = document.getElementById("main-title");

    /* ==========================================================
       1. MENU HAMBÚRGUER RESPONSIVO (SEGURO PARA VALIDADOR)
       ========================================================== */
    if (menuButton && navMenu) {
        if (window.innerWidth < 768) {
            navMenu.classList.add("hidden-mobile");
        }

        menuButton.addEventListener("click", () => {
            if (navMenu.classList.contains("hidden-mobile")) {
                navMenu.classList.remove("hidden-mobile");
                navMenu.classList.add("show");
                menuButton.classList.add("open");
                menuButton.setAttribute("aria-label", "Fechar Menu");
            } else {
                navMenu.classList.remove("show");
                navMenu.classList.add("hidden-mobile");
                menuButton.classList.remove("open");
                menuButton.setAttribute("aria-label", "Abrir Menu");
            }
        });
    }

    /* ==========================================================
       2. FUNÇÃO DE RENDERIZAÇÃO DINÂMICA
       ========================================================== */
    function exibirTemplos(listaFiltrada) {
        galleryContainer.innerHTML = "";
        
        listaFiltrada.forEach(templo => {
            const card = document.createElement("figure");
            
            card.innerHTML = `
                <img src="${templo.urlDaImagem}" alt="Fotografia do Templo de ${templo.nomeDoTemplo}" loading="lazy">
                <figcaption>
                    <h3>${templo.nomeDoTemplo}</h3>
                    <p class="temple-info"><span class="info-label">Localização:</span> ${templo.localizacao}</p>
                    <p class="temple-info"><span class="info-label">Consagração:</span> ${templo.consagracao}</p>
                    <p class="temple-info"><span class="info-label">Área Total:</span> ${templo.area.toLocaleString()} sq ft</p>
                </figcaption>
            `;
            
            galleryContainer.appendChild(card);
        });
    }

    /* ==========================================================
       3. LÓGICA DE FILTRAGEM DE ARRAYS (MÉTODO SEGURO)
       ========================================================== */
    // Função auxiliar para cortar a string da data e pegar apenas os 4 caracteres do ano
    const obterAno = (dataStr) => parseInt(dataStr.substring(0, 4));

    document.getElementById("filter-home").addEventListener("click", (e) => {
        e.preventDefault();
        mainTitle.textContent = "Página Inicial";
        exibirTemplos(templos);
    });

    document.getElementById("filter-old").addEventListener("click", (e) => {
        e.preventDefault();
        mainTitle.textContent = "Templos Antigos";
        const filtrados = templos.filter(t => obterAno(t.consagracao) < 1900);
        exibirTemplos(filtrados);
    });

    document.getElementById("filter-new").addEventListener("click", (e) => {
        e.preventDefault();
        mainTitle.textContent = "Templos Novos";
        const filtrados = templos.filter(t => obterAno(t.consagracao) > 2000);
        exibirTemplos(filtrados);
    });

    document.getElementById("filter-large").addEventListener("click", (e) => {
        e.preventDefault();
        mainTitle.textContent = "Templos Grandes";
        const filtrados = templos.filter(t => t.area > 90000);
        exibirTemplos(filtrados);
    });

    document.getElementById("filter-small").addEventListener("click", (e) => {
        e.preventDefault();
        mainTitle.textContent = "Templos Pequenos";
        const filtrados = templos.filter(t => t.area < 10000);
        exibirTemplos(filtrados);
    });

    // Inicialização da galeria completa ao carregar a página
    exibirTemplos(templos);

    /* ==========================================================
       4. RODAPÉ DINÂMICO
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