// from data.js
var tableData = data;

var	tbody = d3.select('tbody');

function populateTable(tableContent) {
    tableContent.forEach((record) => {
      var oneNewRow = tbody.append('tr');
      Object.entries(record).forEach(([key, value]) => {
        var cell = oneNewRow.append('td');
        cell.text(value);
      });
    });
}
//
populateTable(tableData);


//
var button = d3.select("#filter-btn");
button.on("click", function() {

  // Select the date input element and get the raw HTML node
  var inputDateElement = d3.select("#datetime");

  // Select the city input element and get the raw HTML node
  var inputCityElement = d3.select("#city");

  // Get the date value property of the input element
  var inputDateValue = inputDateElement.property("value");

  // Get the value property of the input element
  var inputCityValue = inputCityElement.property("value");


  console.log(tableData.length);

  //Filter only the date
  var filteredDate = tableData.filter(record => record.datetime === inputDateValue);
  //Filter only the city
  var filteredCity = tableData.filter(record => record.city === inputCityValue);
  //Filter by both City and Date
  var filteredData = tableData.filter((record => record.datetime === inputDateValue) &&
                                      (record => record.city === inputCityValue)
                                     );

  console.log(filteredData);


  tbody.html("");
  populateTable(filteredData);


});

var resetButton = d3.select("#unfilter-btn");
resetButton.on("click", function() {
  tbody.html("");
  populateTable(tableData);
});
