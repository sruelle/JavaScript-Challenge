// from data.js
var tableData = data;
var tbody = d3.select('tbody');
var input = d3.selectAll('input')

buildTable(tableData);
input.on('change', handleChange);


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

var filteredData=tableData;

function handleChange() {
    var key = d3.select(this).property('id');
    var value = d3.select(this).property('value');

    filteredData = filteredData.filter(row => row[key] === value);
    buildTable(filteredData);
}


