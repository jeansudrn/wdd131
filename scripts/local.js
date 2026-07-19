document.addEventListener("DOMContentLoaded", () => {
    // 1. GERENCIAMENTO DO RODAPÉ
    const yearSpan = document.getElementById("current-year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    const lastModSpan = document.getElementById("last-mod");
    if (lastModSpan) {
        lastModSpan.textContent = document.lastModified;
    }

    // 2. CONFIGURAÇÃO DOS DADOS METEOROLÓGICOS (Valores para a Amazônia)
    const temperaturaAtual = 29; // Em °C
    const velocidadeVentoAtual = 8; // Em km/h

    // 3. EXECUÇÃO CONDICIONAL DA SENSAÇÃO TÉRMICA
    const campoSensacao = document.getElementById("chill");

    if (campoSensacao) {
        // Verifica se cumpre os limites técnicos (Temp <= 10°C e Vento > 4.8km/h)
        if (temperaturaAtual <= 10 && velocidadeVentoAtual > 4.8) {
            const resultado = calcularSensacaoTermica(temperaturaAtual, velocidadeVentoAtual);
            campoSensacao.textContent = `${resultado.toFixed(1)} °C`;
        } else {
            // Como 29°C não atende à condição de frio, exibirá "N/A" em conformidade com as regras
            campoSensacao.textContent = "N/A";
        }
    }
});

/**
 * Calcula o fator de sensação térmica em linha única (Unidades Métricas)
 */
function calcularSensacaoTermica(t, v) {
    return 13.12 + (0.6215 * t) - (11.37 * Math.pow(v, 0.16)) + (0.3965 * t * Math.pow(v, 0.16));
}