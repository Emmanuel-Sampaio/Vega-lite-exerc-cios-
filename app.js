// Cria a estrutura HTML da página
document.write(`
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Vega-Lite API — Exercícios 2025.2</title>

  <!-- Importa as bibliotecas Vega, Vega-Lite e Vega-Embed -->
  <script src="https://cdn.jsdelivr.net/npm/vega@5"><\/script>
  <script src="https://cdn.jsdelivr.net/npm/vega-lite@5"><\/script>
  <script src="https://cdn.jsdelivr.net/npm/vega-embed@6"><\/script>

  <!-- Estilo da página -->
  <style>
    body {
      font-family: "Segoe UI", Arial, sans-serif;
      margin: 40px auto;
      max-width: 1100px;
      padding: 0 20px;
      background: #fafafa;
    }
    h1 {
      text-align: center;
      color: #333;
    }
    h2 {
      text-align: center;
      color: #555;
      margin-top: 50px;
      margin-bottom: 20px;
    }
    .chart {
      display: flex;
      justify-content: center;
      margin: 40px 0;
    }
  </style>
</head>

<body>
  <h1>Vega-Lite API — Exercícios 2025.2</h1>

  <h2>Gráfico de Barras: Média de Max BPM por Tipo de Treino</h2>
  <div id="chart1" class="chart"></div>

  <h2>Scatterplots: Relação entre Peso e Altura por Gênero</h2>
  <div id="chart2" class="chart"></div>
</body>
</html>
`);

// Aguarda o carregamento das bibliotecas
window.addEventListener('load', async function() {
  const dataUrl = "life_style_data_sample.csv";

  // ======== Gráfico de Barras ========
  const barSpec = {
    data: { url: dataUrl },
    mark: "bar",
    encoding: {
      x: { aggregate: "mean", field: "Max_BPM", type: "quantitative", title: "Média de Max BPM" },
      y: { field: "Workout_Type", type: "nominal", sort: "-x", title: "Tipo de Treino" }
    },
    width: 500,
    height: 300,
    title: "Média de Max BPM por Tipo de Treino"
  };

  // ======== Scatterplot ========
  const scatterSpec = {
    data: { url: dataUrl },
    mark: "point",
    encoding: {
      x: { field: "Weight (kg)", type: "quantitative", title: "Peso (kg)", scale: { zero: false } },
      y: { field: "Height (m)", type: "quantitative", title: "Altura (m)", scale: { zero: false } },
      color: { field: "Gender", type: "nominal", title: "Gênero" },
      column: { field: "Gender", type: "nominal", title: "Gênero" }
    },
    width: 250,
    height: 300,
    title: "Relação entre Peso e Altura por Gênero"
  };

  await vegaEmbed("#chart1", barSpec);
  await vegaEmbed("#chart2", scatterSpec);
});