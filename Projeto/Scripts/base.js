// Banco de dados recuperando do localStorage se existir (Critério 15)
let transactions = JSON.parse(localStorage.getItem('grana_cash_data')) || [];

// ==========================================
// FUNÇÃO 1: MENU GLOBAL RESPONSIVO
// ==========================================
function inicializarMenu() {
    const menuBtn = document.getElementById('menu-btn');
    const navList = document.getElementById('nav-list');

    // Verifica se os elementos do menu existem na página atual antes de aplicar o evento
    if (menuBtn && navList) {
        menuBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // Impede que o clique feche o menu imediatamente
            navList.classList.toggle('open');
        });

        // Fecha o menu se o usuário clicar em qualquer outro lugar da tela
        document.addEventListener('click', () => {
            if (navList.classList.contains('open')) {
                navList.classList.remove('open');
            }
        });
    }
}

// ==========================================
// FUNÇÕES DE SUPORTE AO BANCO DE DADOS
// ==========================================
function syncStorage() {
    localStorage.setItem('grana_cash_data', JSON.stringify(transactions));
}

function appendTransaction(description, amount, type) {
    const item = {
        id: Date.now(),
        description: description,
        amount: parseFloat(amount),
        type: type
    };
    
    transactions.push(item);
    syncStorage();
    renderDashboard();
}

function removeTransaction(id) {
    transactions = transactions.filter(t => t.id !== id);
    syncStorage();
    renderDashboard();
}

// ==========================================
// FUNÇÃO 2: RENDERIZAÇÃO DO PAINEL (DASHBOARD)
// ==========================================
function renderDashboard() {
    const tableBody = document.querySelector('#transactions-table tbody');
    const incomeDisplay = document.getElementById('total-income');
    const expenseDisplay = document.getElementById('total-expense');
    const balanceDisplay = document.getElementById('total-balance');

    // PROTEÇÃO: Se a página atual não tiver a tabela (ex: index.html ou sobre.html), aborta a execução suavemente
    if (!tableBody) return;

    tableBody.innerHTML = '';

    let sumIncome = 0;
    let sumExpense = 0;

    transactions.forEach(t => {
        if (t.type === 'income') {
            sumIncome += t.amount;
        } else {
            sumExpense += t.amount;
        }

        const fontClass = t.type === 'income' ? 'text-success' : 'text-danger';
        const sign = t.type === 'income' ? '+' : '-';

        const rowTemplate = `
            <tr>
                <td>${t.description}</td>
                <td class="${fontClass}">${sign} R$ ${t.amount.toFixed(2)}</td>
                <td>
                    <button class="btn-delete" onclick="removeTransaction(${t.id})">Excluir</button>
                </td>
            </tr>
        `;

        tableBody.insertAdjacentHTML('beforeend', rowTemplate);
    });

    const finalBalance = sumIncome - sumExpense;

    incomeDisplay.textContent = `R$ ${sumIncome.toFixed(2)}`;
    expenseDisplay.textContent = `R$ ${sumExpense.toFixed(2)}`;
    balanceDisplay.textContent = `R$ ${finalBalance.toFixed(2)}`;

    if (finalBalance >= 0) {
        balanceDisplay.className = 'text-success';
    } else {
        balanceDisplay.className = 'text-danger';
    }
}

// ==========================================
// INICIALIZAÇÃO DO FORMULÁRIO E EVENTOS
// ==========================================
const financeForm = document.getElementById('finance-form');
if (financeForm) {
    financeForm.addEventListener('submit', (e) => {
        e.preventDefault(); 

        const descValue = document.getElementById('description').value;
        const amountValue = document.getElementById('amount').value;
        const typeValue = document.getElementById('type').value;

        appendTransaction(descValue, amountValue, typeValue);
        financeForm.reset();
    });
}

// Dispara as funções assim que o arquivo JavaScript carrega
inicializarMenu();
renderDashboard();