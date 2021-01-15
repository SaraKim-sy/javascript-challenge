// Assign the data from `data.js` to a descriptive variable
var tableData = data;

// Get a reference to the table body
let tbody = d3.select("tbody");

// Function to update the table displayed
function updateTable(someData) {
    // To get the new table, clear the table
    tbody.html("");

    someData.forEach((ufoSighting) => {
        // Use d3 to append one table row `tr` for each ufoSighting object
        let row = tbody.append("tr");
        // Use `Object.entries` and d3 to append 1 cell and update value per each ufoSighting value
        Object.entries(ufoSighting).forEach(([key, value]) => row.append("td").text(value));
    });
}

// The entire table to be displayed in the fist page
updateTable(tableData);


// Use a date form in your HTML document and write JavaScript code 
// that will listen for events and search through the date/time column
// to find rows that match user input.

// Select the button
let filterButton = d3.select("#filter-btn");

// Create an event handler function
function filterTable() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // To get the new table with filtered data, clear the table
    tbody.html("");

    // Select the input element and get the raw HTML nodes
    let inputElement = d3.select("#datetime");
    
    // Get the value property of the input element
    let inputValue = inputElement.property("value");

    let filteredData = tableData.filter(ufoSighting => ufoSighting.datetime === inputValue);

    // Check (console.log filteredData)
    // console.log(filteredData);

    // Message if there is no data found for the search criteria
    if (filteredData.length == 0) {
        tbody.append("tr").append("td").text("No UFO Sighting Data Found for the Date Entered!").attr("colspan", "7").style("text-align", "center");
    }

    else {
    // update the table with filtered data
    updateTable(filteredData);
    };
}

// Create an event handler
filterButton.on("click", filterTable);
