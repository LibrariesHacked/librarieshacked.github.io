$(function () {
  const cNeed = document.getElementById('canNeed');
  const cEventType = document.getElementById('canEventType');

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

  if (cEventType) {
    new Chart(cEventType, {
      type: 'bar',
      data: {
        labels: ['Online community', 'Regular meetup group', 'Conference', 'Unconference', 'Training'],
        datasets: [{
          label: '% of Respondents',
          data: [97, 57, 41, 54, 51]
        }]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
      }
    });
  }
});