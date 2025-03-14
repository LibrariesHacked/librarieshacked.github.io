$(function () {
  Papa.parse(
    'https://raw.githubusercontent.com/LibrariesHacked/librarieshacked-web/main/data/UK_Catalogues_Security.csv',
    {
      download: true,
      complete: function (results) {
        var dataSet = results.data.slice(1)
        $('#tblcatalogues').DataTable({
          pagingType: 'simple',
          info: false,
          lengthChange: false,
          searching: false,
          data: dataSet,
          columns: [
            { title: 'Library service', data: 0 },
            { title: 'Uses HTTPS', data: 2 },
            { title: 'Issues', data: 3 },
            { title: 'Domain', data: 1 }
          ],
          responsive: true
        })
      }
    }
  )
})
