$(function () {
  const cNeed = document.getElementById('canNeed');

  if (cNeed) {
    new Chart(cNeed, {
      type: 'doughnut',
      data: {
        labels: ['Yes', 'No'],
        datasets: [{
          label: '% of Votes',
          data: [97, 3]
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      }
    });
  }
});