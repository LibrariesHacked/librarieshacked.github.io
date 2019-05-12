$(function () {
    Papa.parse('https://raw.githubusercontent.com/LibrariesHacked/mobilelibraries-data/master/organisations_scotland.csv', {
        download: true,
        complete: function (results) {
            var dataSet = results.data.slice(1);
            $('#tblscottishmobiles').DataTable({
                paging: false,
                info: false,
                lengthChange: false,
                searching: false,
                data: dataSet,
                columns: [
                    { title: 'Service', data: 0 },
                    { title: 'Pass', data: 8 },
                    {
                        title: 'Website',
                        data: 9,
                        render: function (data, type, row) {
                            return '<a title="Website link" href="' + data + '" target="_blank">Website link</a>';
                        }
                    }
                ],
                responsive: true
            });
        }
    });
});