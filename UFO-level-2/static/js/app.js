// Assign the data from `data.js` to a descriptive variable
var tableData = data;

// Get a reference to the table body
let tbody = d3.select("tbody");

// The entire table to be displayed in the fist page
tableData.forEach( (ufoSighting) => {
    // Use d3 to append one table row `tr` for each ufoSighting object
    let row = tbody.append("tr");
    // Use `Object.entries` and d3 to append 1 cell per each ufoSighting value
    Object.entries(ufoSighting).forEach( ([key, value]) => {
        let cell = row.append("td");        
        // Use d3 to update each cell's text with ufoSighting values
        cell.text(value);
    });
});

// Populate dropdowns selections

// List of cities, states, countries, shape (only unique values)
let cities = Array.from(new Set(tableData.map(ufoSighting => ufoSighting.city)));
let states = Array.from(new Set(tableData.map(ufoSighting => ufoSighting.state)));
let countries = Array.from(new Set(tableData.map(ufoSighting => ufoSighting.country)));
let shapes = Array.from(new Set(tableData.map(ufoSighting => ufoSighting.shape)));

let selectState = d3.select("#select-state");
let selectCountry = d3.select("#select-country");
let selectShape = d3.select("#select-shape");

states.forEach( state => selectState.append("option").text(state) );
countries.forEach( country => selectCountry.append("option").text(country) );
shapes.forEach( shape => selectShape.append("option").text(shape) );



console.log(states);

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

    filteredData.forEach( (FilteredUfoSighting) => {

        // Use d3 to append one table row `tr` for each filtered ufoSighting object
        let row = tbody.append("tr");
    
        // Use `Object.entries` and d3 to append 1 cell per each ufoSighting value
        Object.entries(FilteredUfoSighting).forEach( ([key, value]) => {
            let cell = row.append("td");
            
            // Use d3 to update each cell's text with ufoSighting values
            cell.text(value);
        });
    });
}

// Create an event handler
filterButton.on("click", filterTable);
