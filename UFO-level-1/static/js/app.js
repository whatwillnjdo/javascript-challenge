// from data.js
var tableData = data;

var	tbody = d3.select('tbody');

tableData.forEach((record) => {
  var oneNewRow = tbody.append('tr');
  Object.entries(record).forEach(([key, value]) => {
    var cell = oneNewRow.append('td');
    cell.text(value);
  });  
});
