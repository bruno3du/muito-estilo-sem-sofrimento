document.addEventListener("DOMContentLoaded", () => {
  lucide.createIcons();

  const chartReceitasCard = document.getElementById("chart-receitas");
  const chartAtivosCard = document.getElementById("chart-ativos");
  const modal = document.getElementById("modal");
  const closeModal = document.getElementById("close-modal");
  const modalTitle = document.getElementById("modal-title");
  const modalContent = document.getElementById("modal-content");

  const ctxReceitas = document.getElementById("chartReceitas");
  const ctxAtivos = document.getElementById("chartAtivos");

  new Chart(ctxReceitas, {
    type: "doughnut",
    data: {
      labels: ["Receitas", "Despesas"],
      datasets: [
        {
          data: [10000, 5000],
          backgroundColor: ["#10b981", "#ef4444"],
          borderWidth: 0,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: {
          display: true,
        },
        tooltip: {
          callbacks: {
            label: function (context) {
              return `R$ ${context.parsed.toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}`;
            },
          },
        },
      },
    },
  });

  new Chart(ctxAtivos, {
    type: "doughnut",
    data: {
      labels: ["LCI", "LCA", "CDI"],
      datasets: [
        {
          data: [100, 150, 200],
          backgroundColor: ["#8b5cf6", "#a855f7", "#c084fc"],
          borderWidth: 0,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      
      plugins: {
        tooltip: {
          callbacks: {
            label: function (context) {
              return `R$ ${context.parsed.toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}`;
            },
          },
        },
      },
    },
  });

  const reportReceitas = `
  <div class="space-y-4">
    <div class="bg-green-50 rounded-lg p-4 border border-green-200">
      <h3 class="font-semibold text-green-700 mb-2">Receitas</h3>
      <p class="text-2xl font-bold text-green-600">R$ 10.000,00</p>
      <p class="text-sm text-gray-600 mt-2">Total de receitas no período</p>
    </div>
    <div class="bg-red-50 rounded-lg p-4 border border-red-200">
      <h3 class="font-semibold text-red-700 mb-2">Despesas</h3>
      <p class="text-2xl font-bold text-red-600">R$ 5.000,00</p>
      <p class="text-sm text-gray-600 mt-2">Total de despesas no período</p>
    </div>
    <div class="bg-blue-50 rounded-lg p-4 border border-blue-200">
      <h3 class="font-semibold text-blue-700 mb-2">Saldo</h3>
      <p class="text-2xl font-bold text-blue-600">R$ 5.000,00</p>
      <p class="text-sm text-gray-600 mt-2">Saldo positivo</p>
    </div>
    <div class="mt-4">
      <h4 class="font-semibold text-gray-700 mb-2">Detalhamento</h4>
      <ul class="space-y-2 text-sm text-gray-600">
        <li>• Receitas: 66.67% do total</li>
        <li>• Despesas: 33.33% do total</li>
        <li>• Margem: 50%</li>
      </ul>
    </div>
  </div>
`;

  const reportAtivos = `
  <div class="space-y-4">
    <div class="bg-purple-50 rounded-lg p-4 border border-purple-200">
      <h3 class="font-semibold text-purple-700 mb-2">Total Investido</h3>
      <p class="text-2xl font-bold text-purple-600">R$ 450,00</p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div class="bg-indigo-50 rounded-lg p-4 border border-indigo-200">
        <h4 class="font-semibold text-indigo-700 mb-1">LCI</h4>
        <p class="text-xl font-bold text-indigo-600">R$ 100,00</p>
        <p class="text-xs text-gray-600 mt-1">22.22%</p>
      </div>
      <div class="bg-purple-50 rounded-lg p-4 border border-purple-200">
        <h4 class="font-semibold text-purple-700 mb-1">LCA</h4>
        <p class="text-xl font-bold text-purple-600">R$ 150,00</p>
        <p class="text-xs text-gray-600 mt-1">33.33%</p>
      </div>
      <div class="bg-pink-50 rounded-lg p-4 border border-pink-200">
        <h4 class="font-semibold text-pink-700 mb-1">CDI</h4>
        <p class="text-xl font-bold text-pink-600">R$ 200,00</p>
        <p class="text-xs text-gray-600 mt-1">44.44%</p>
      </div>
    </div>
    <div class="mt-4">
      <h4 class="font-semibold text-gray-700 mb-2">Distribuição</h4>
      <ul class="space-y-2 text-sm text-gray-600">
        <li>• LCI: R$ 100,00 (22.22%)</li>
        <li>• LCA: R$ 150,00 (33.33%)</li>
        <li>• CDI: R$ 200,00 (44.44%)</li>
      </ul>
    </div>
  </div>
`;

  function openModal(title, content) {
    modalTitle.textContent = title;
    modalContent.innerHTML = content;
    modal.classList.remove("hidden");
    lucide.createIcons();
  }

  function closeModalFunc() {
    modal.classList.add("hidden");
  }

  chartReceitasCard.addEventListener("click", () => {
    openModal("Relatório de Receitas e Despesas", reportReceitas);
  });

  chartAtivosCard.addEventListener("click", () => {
    openModal("Relatório de Carteira de Ativos", reportAtivos);
  });

  closeModal.addEventListener("click", closeModalFunc);

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModalFunc();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeModalFunc();
    }
  });
});
