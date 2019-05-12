$(function () {
    Papa.parse('https://raw.githubusercontent.com/LibrariesHacked/mobilelibraries-data/master/organisations_scotland.csv', {
        download: true,
        complete: function (results) {
            var dataSet = results.data.slice(1);
            $('#tblscottishmobiles').DataTable({
                pagingType: 'simple',
                info: false,
                lengthChange: false,
                searching: false,
                data: dataSet,
                columns: [
                    { title: 'Service', data: 0 },
                    { title: 'HTML', data: 1 },
                    { title: 'Map', data: 2 },
                    { title: 'PDF', data: 3 },
                    { title: 'Colour for meaning', data: 4 },
                    { title: 'Information missing', data: 5 },
                    { title: 'Accessibility statement', data: 6 },
                    { title: 'Notes', data: 7 }
                ],
                responsive: true
            });
        }
    });
});