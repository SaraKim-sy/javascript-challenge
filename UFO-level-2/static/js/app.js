// Assign the data from `data.js` to a descriptive variable
var tableData = data;

// Get a reference to the table body
let tbody = d3.select("tbody");

// let updateTable = (someData) => {
//     tbody.html("");

//     someData.forEach( (ufoSighting) => {
//         // Use d3 to append one table row `tr` for each ufoSighting object
//         let row = tbody.append("tr");
//         // Use `Object.entries` and d3 to append 1 cell and update value per each ufoSighting value
//         Object.entries(ufoSighting).forEach( ([key, value]) => row.append("td").text(value) )
//     });
// };

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

// Multiple Search Categories
// Using multiple input tags and/or select dropdowns, write JavaScript code so the user can to set multiple filters 
// and search for UFO sightings using the following criteria based on the table columns: date/time, city, state, country, shape

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

// Select the button
let filterButton = d3.select("#filter-btn");

// Create an event handler function
function filterTable() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // To get the new table with filtered data, clear the table
    tbody.html("");

    // Select the input element and get the raw HTML nodes
    // Get the value property of the input elements and the selected dropdown elemments
    let dateInput = d3.select("#datetime").property("value");
    let cityInput = d3.select("#cityinput").property("value");
    let stateSelected = selectState.property("value");
    let countrySelected = selectCountry.property("value");
    let shapeSelected = selectShape.property("value");


    // Filter Data

    let filteredData = tableData;

    if (dateInput != "") {
        filteredData = filteredData.filter(d => d.datetime == dateInput);
    }

    if (cityInput != "") {
        filteredData = filteredData.filter(d => d.city == cityInput);
    }

    if (stateSelected != "") {
        filteredData = filteredData.filter(d => d.state == stateSelected);
    }

    if (countrySelected != "") {
        filteredData = filteredData.filter(d => d.country == countrySelected);
    }

    if (shapeSelected != "") {
        filteredData = filteredData.filter(d => d.shpae == shapeSelected);
    }

    // Message if there is no data found for the search criteria
    if (filteredData.length == 0) {
        tbody.append("tr").append("td").text("No UFO Sighting Data Found for the Search Criteria Entered/Selected!").attr("colspan", "7").style("text-align", "center");
    }
    else {
        // If there is data for the search criteria, update the table
        updateTable(filteredData);
    }
}

// Create an event handler
filterButton.on("click", filterTable);
