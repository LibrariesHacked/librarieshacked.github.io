$(function () {
  const cNeed = document.getElementById('canNeed')
  const cEventType = document.getElementById('canEventType')
  const cTopics = document.getElementById('canTopics')
  const cParticipation = document.getElementById('canParticipation')
  const cSector = document.getElementById('canSector')

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
          'Websites and catalogues',
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

  if (cParticipation) {
    new Chart(cParticipation, {
      type: 'doughnut',
      data: {
        labels: ['In-person', 'Online', 'Hybrid'],
        datasets: [
          {
            label: '% of Votes',
            data: [14, 27, 59]
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    })
  }

  if (cSector) {
    new Chart(cSector, {
      type: 'doughnut',
      data: {
        labels: [
          'Public',
          'School',
          'Higher education',
          'Further education',
          'Prison',
          'Health',
          'National',
          'Special',
          'Other'
        ],
        datasets: [
          {
            label: '% of Votes',
            data: [53, 0, 11, 8, 0, 3, 3, 3, 21]
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    })
  }
})
