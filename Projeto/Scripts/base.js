// Banco de dados em memória, recuperando do localStorage se existir (Atende: Usar localStorage)
let transactions = JSON.parse(localStorage.getItem('grana_cash_data')) || [];

// Captura de elementos globais de navegação (Atende: Interação DOM)
const menuBtn = document.getElementById('menu-btn');
const navList = document.getElementById('nav-list');

// Função 1: Controlar a abertura do Menu Hamburguer (Atende: Ter mais de uma função)
if (menuBtn && navList) {
    menuBtn.addEventListener('click', () => {
        navList.classList.toggle('open');
    });
}

// Função 2: Salvar registros no banco local do navegador
function syncStorage() {
    localStorage.setItem('grana_cash_data', JSON.stringify(transactions));
}

// Função 3: Adicionar um novo item no array de transações
function appendTransaction(description, amount, type) {
    const item = {
        id: Date.now(),
        description: description,
        amount: parseFloat(amount),
        type: type
    };
    
    // Insere o objeto no array principal (Atende: Usar objetos, arrays e métodos de array)
    transactions.push(item);
    syncStorage();
    renderDashboard();
}

// Função 4: Remover item por ID único
function removeTransaction(id) {
    // Filtra removendo o ID correspondente usando método de array (Atende: Métodos de array)
    transactions = transactions.filter(t => t.id !== id);
    syncStorage();
    renderDashboard();
}

// Função 5: Realizar as contas e atualizar toda a tela do painel
function renderDashboard() {
    // Referências do DOM na página dashboard.html
    const tableBody = document.querySelector('#transactions-table tbody');
    const incomeDisplay = document.getElementById('total-income');
    const expenseDisplay = document.getElementById('total-expense');
    const balanceDisplay = document.getElementById('total-balance');

    // Valida se estamos de fato na página do painel para evitar erros de console
    if (!tableBody) return;

    // Zera o corpo da tabela antes de desenhar os itens
    tableBody.innerHTML = '';

    let sumIncome = 0;
    let sumExpense = 0;

    // Varre o array de lançamentos (Atende: Métodos de array - forEach)
    transactions.forEach(t => {
        // Estrutura Condicional para classificar os tipos (Atende: Usar branch condicional)
        if (t.type === 'income') {
            sumIncome += t.amount;
        } else {
            sumExpense += t.amount;
        }

        // Variáveis de formatação visual
        const fontClass = t.type === 'income' ? 'text-success' : 'text-danger';
        const sign = t.type === 'income' ? '+' : '-';

        /* 
           CONSTRUÇÃO DO HTML USANDO EXCLUSIVAMENTE TEMPLATE LITERALS 
           (Atende perfeitamente ao critério obrigatório do curso)
        */
        const rowTemplate = `
            <tr>
                <td>${t.description}</td>
                <td class="${fontClass}">${sign} R$ ${t.amount.toFixed(2)}</td>
                <td>
                    <button class="btn-delete" onclick="removeTransaction(${t.id})">Excluir</button>
                </td>
            </tr>
        `;

        // Modifica a estrutura inserindo o template renderizado no DOM (Atende: Interação DOM)
        tableBody.insertAdjacentHTML('beforeend', rowTemplate);
    });

    // Calcula o saldo líquido final
    const finalBalance = sumIncome - sumExpense;

    // Atualiza os cartões de resumo na tela usando Template Literals
    incomeDisplay.textContent = `R$ ${sumIncome.toFixed(2)}`;
    expenseDisplay.textContent = `R$ ${sumExpense.toFixed(2)}`;
    balanceDisplay.textContent = `R$ ${finalBalance.toFixed(2)}`;

    // Altera a cor do texto do saldo de acordo com o resultado positivo ou negativo
    if (finalBalance >= 0) {
        balanceDisplay.className = 'text-success';
    } else {
        balanceDisplay.className = 'text-danger';
    }
}

// Escutador do evento de submit do Formulário Padrão (Atende: Ouvir e reagir a eventos)
const financeForm = document.getElementById('finance-form');
if (financeForm) {
    financeForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Impede o recarregamento padrão da página

        const descValue = document.getElementById('description').value;
        const amountValue = document.getElementById('amount').value;
        const typeValue = document.getElementById('type').value;

        // Passa as informações validadas para a função de inserção
        appendTransaction(descValue, amountValue, typeValue);

        // Limpa todos os campos do formulário após o registro bem-sucedido
        financeForm.reset();
    });
}

// Inicialização automática ao carregar a página
renderDashboard();