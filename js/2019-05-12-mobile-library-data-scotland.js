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
                    { title: 'Pass', data: 8 }
                ],
                responsive: true
            });
        }
    });
});