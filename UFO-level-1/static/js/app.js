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

  // Select the state input element and get the raw HTML node
  var inputStateElement = d3.select("#state");

  // Get the date value property of the input element
  var inputDateValue = inputDateElement.property("value");

  // Get the value property of the input element
  var inputCityValue = inputCityElement.property("value");

  // Get the value property of the input element
  var inputStateValue = inputStateElement.property("value");


  //Filter only the date
  var filteredDate = tableData.filter(record => record.datetime === inputDateValue);
  //Filter only the city
  var filteredCity = tableData.filter(record => record.city === inputCityValue);
  //Filter only the state
  var filteredState = tableData.filter(record => record.state === inputStateValue);

  if(inputDateValue.length !== 0 && inputCityValue.length !== 0 && inputStateValue.length !== 0){
    var filteredData = (filteredDate && filteredCity && filteredState);
    tbody.html("");
    populateTable(filteredData);
  }
  else if(inputDateValue.length !== 0 && inputCityValue.length == 0 && inputStateValue.length == 0){
    tbody.html("");
    populateTable(filteredDate);
  }
  else if(inputDateValue.length !== 0 && inputCityValue.length !== 0 && inputStateValue.length == 0){
    var filteredData = (filteredDate && filteredCity)
    tbody.html("");
    populateTable(filteredData);
  }
  else if(inputDateValue.length !== 0 && inputCityValue.length == 0 && inputStateValue.length !== 0){
    var filteredData = (filteredDate && filteredState)
    tbody.html("");
    populateTable(filteredData);
  }
  else if(inputDateValue.length == 0 && inputCityValue.length !== 0 && inputStateValue.length !== 0){
    var filteredData = (filteredCity && filteredState)
    tbody.html("");
    populateTable(filteredData);
  }
  else if(inputDateValue.length == 0 && inputCityValue.length !== 0 && inputStateValue.length == 0){
    tbody.html("");
    populateTable(filteredCity);
  }
  else if(inputDateValue.length == 0 && inputCityValue.length == 0 && inputStateValue.length !== 0){
    tbody.html("");
    populateTable(filteredState);
  }
  else {
    tbody.html("");
    tbody.append("tr").append("td").text("Invalid Filters !! Reset and try again.");
  }

});

var resetButton = d3.select("#unfilter-btn");
resetButton.on("click", function() {
  tbody.html("");
  populateTable(tableData);
});
