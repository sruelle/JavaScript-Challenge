// from data.js
var tableData = data;
var tbody = d3.select('tbody');

buildTable(tableData);

d3.selectAll('#filter-btn').on('click', handleClick);

function buildTable(data) {
    tbody.html("");

    data.forEach(dataRow => {
        var row = tbody.append('tr');

        Object.values(dataRow).forEach(val => {
            var cell = row.append('td');
            cell.text(val);
        });
    });
}

function handleClick() {
    var date = d3.select('#datetime').property('value');
    let filteredData = tableData;

    if(date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    };
    buildTable(filteredData);
}


