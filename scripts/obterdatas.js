// 1. Produz dinamicamente o ano atual para os direitos autorais
const anoAtualSpan = document.getElementById("anoatual");
if (anoAtualSpan) {
    anoAtualSpan.textContent = new Date().getFullYear();
}

// 2. Obtém dinamicamente a data/hora da última modificação do documento nativo
const ultimaModificacaoP = document.getElementById("ultimaModificacao");
if (ultimaModificacaoP) {
    // Exibe exatamente no formato nativo gerado pelo sistema
    ultimaModificacaoP.textContent = `Ultima Modificação: ${document.lastModified}`;
}