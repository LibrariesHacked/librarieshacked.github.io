jQuery(function () {
    Papa.parse('https://raw.githubusercontent.com/LibrariesHacked/librarieshacked-web/master/data/UK_Catalogues_Security.csv', {
        download: true,
        complete: function (results) {
            var dataSet = results.data.slice(1);
            jQuery('#tblcatalogues').DataTable({
                data: dataSet,
                columns: [
                    { title: "Library service", data: 0 },
                    { title: "Uses HTTPS", data: 2 },
                    { title: "Issues?", data: 3 },
                    { title: "Domain", data: 1 }
                ],
                responsive: true
            });
        }
    });
});