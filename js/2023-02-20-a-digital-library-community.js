$(function () {
  const cNeed = document.getElementById('canNeed');

  if (cNeed) {
    new Chart(cNeed, {
      type: 'doughnut',
      data: {
        labels: ['Yes', 'No'],
        datasets: [{
          label: '% of Votes',
          data: [97, 3],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
});