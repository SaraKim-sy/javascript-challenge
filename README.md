# JavaScript and DOM Manipulation

Find the completed UFO Sightings website here: [UFO Sightings](https://sarakim-sy.github.io/javascript-challenge/)

## Background

This project is to write code that will create a table dynamically based upon a [dataset](UFO-level-1/static/js/data.js). It will also allow the users to filter the table data for specific values using JavaScript, HTML, and CSS, and D3.js on the web pages.


### Level 1: Automatic Table and Date Search

* You can find it in the UFO-level-1 folder.

* A basic HTML web page was created - [index.html](UFO-level-1/index.html)

* Using the UFO dataset provided in the form of an array of JavaScript objects, code that appends a table to the web page and then adds new rows of data for each UFO sighting was written.

  * columns are: `date/time`, `city`, `state`, `country`, `shape`, and `comment`

* Used a date form in the HTML document and wrote JavaScript code that listens for events and searches through the `date/time` column to find rows that match user input.

* 'No Data Found' message will appear when there is no data found for the search criteria

### Level 2: Multiple Search Categories

* You can find it in the UFO-level-2 folder.

* Using multiple `input` tags and/or select dropdowns, wrote JavaScript code so the user can to set multiple filters and search for UFO sightings using the following criteria based on the table columns:

  1. `date/time`
  2. `city`
  3. `state`
  4. `country`
  5. `shape`
  
 * 'No Data Found' message will appear when there is no data found for the search criteria

- - -

### Dataset

* [UFO Sightings Data](static/js/data.js)


### Technologies
This project was created with:
* JavaScript
* HTML/CSS
* D3.js
