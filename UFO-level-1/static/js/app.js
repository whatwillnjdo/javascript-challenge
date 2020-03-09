// from data.js
var tableData = data;

var	tbody = d3.select('tbody');

console.log(tableData);

//
tableData.forEach((record) => {
  var oneNewRow = tbody.append('tr');
  Object.entries(record).forEach(([key, value]) => {
    var cell = oneNewRow.append('td');
    cell.text(value);
  });
});

//
var button = d3.select("#filter-btn");

button.on("click", function() {

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");


  console.log(inputValue);

  var filteredData = tableData.filter(record => record.datetime === inputValue);

  console.log(filteredData);

  tbody.html("");

  filteredData.forEach((record) => {
    var oneNewRow = tbody.append('tr');
    Object.entries(record).forEach(([key, value]) => {
      var cell = oneNewRow.append('td');
      cell.text(value);
    });
  });

});
