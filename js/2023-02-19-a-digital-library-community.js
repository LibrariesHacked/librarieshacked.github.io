$(function () {
  const cNeed = document.getElementById('canNeed')
  const cEventType = document.getElementById('canEventType')
  const cTopics = document.getElementById('canTopics')

  if (cNeed) {
    new Chart(cNeed, {
      type: 'doughnut',
      data: {
        labels: ['Yes', 'No'],
        datasets: [
          {
            label: '% of Votes',
            data: [97, 3]
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    })
  }

  if (cEventType) {
    new Chart(cEventType, {
      type: 'bar',
      data: {
        labels: [
          'Online community',
          'Regular meetup group',
          'Conference',
          'Unconference',
          'Training'
        ],
        datasets: [
          {
            label: '% of Respondents',
            data: [97, 57, 41, 54, 51]
          }
        ]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false
      }
    })
  }

  if (cTopics) {
    new Chart(cTopics, {
      type: 'bar',
      data: {
        labels: [
          'Website and catalogues',
          'Digital transformation',
          'User experience',
          'Web deveopment',
          'Library management systems',
          'Accessibility',
          'Data',
          'Open knowledge',
          'Digital marketing',
          'Library metadata',
          'Hardware'
        ],
        datasets: [
          {
            label: '% of Respondents',
            data: [65, 65, 68, 43, 38, 46, 76, 68, 30, 49, 38]
          }
        ]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false
      }
    })
  }
})
