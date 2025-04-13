// Gráfico de Linhas
const linha = document.getElementById('graficoLinha').getContext('2d');

const graficoLinha = new Chart(linha, {
    type: 'line',
    data: {
        labels: ['12:00', '13:00', '14:00', '15:00', '16:00', '17:00'],
        datasets: [
            {
                label: 'Temperatura',
                data: [30, 29, 28, 25, 22, 23],
                borderColor: 'rgba(255, 99, 132, 1)',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                fill: false,
                tension: 0.4
            },
            {
                label: 'Umidade',
                data: [80, 82, 80, 85, 80, 83],
                borderColor: 'rgba(54, 162, 235, 1)',
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                fill: false,
                tension: 0.4
            }
        ]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Gráfico de Barras
const barra = document.getElementById('graficoBarra').getContext('2d');

const graficoBarra = new Chart(barra, {
    type: 'bar',
    data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
        datasets: [
            {
                label: 'Temperatura Média',
                data: [22, 24, 27, 23, 20, 18],
                backgroundColor: 'rgba(255, 99, 132, 0.7)'
            },
            {
                label: 'Umidade Média',
                data: [90, 89, 93, 87, 88, 82],
                backgroundColor: 'rgba(54, 162, 235, 0.7)'
            }
        ]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});