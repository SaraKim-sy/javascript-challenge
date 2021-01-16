# JavaScript and DOM Manipulation

Find the completed UFO Sightings website here: [UFO Sightings](https://sarakim-sy.github.io/javascript-challenge/)

## Background

WAKE UP SHEEPLE! The extra-terrestrial menace has come to Earth and we here at `ALIENS-R-REAL` have collected all of the eye-witness reports we could to prove it! All we need to do now is put this information online for the world to see and then the matter will finally be put to rest.

There is just one tiny problem though... our collection is too large to search through manually. Even our most dedicated followers are complaining that they are having trouble locating specific reports in this mess.

This project is to write code that will create a table dynamically based upon a [dataset](UFO-level-1/static/js/data.js). It will also allow the users to filter the table data for specific values using JavaScript, HTML, and CSS, and D3.js on our web pages.


### Level 1: Automatic Table and Date Search

* You can find it in the UFO-level-1 folder.

* A basic HTML web page was created - [index.html](UFO-level-1/index.html)

* Using the UFO dataset provided in the form of an array of JavaScript objects, code that appends a table to the web page and then adds new rows of data for each UFO sighting was written.

  * columns are: `date/time`, `city`, `state`, `country`, `shape`, and `comment`

* Used a date form in the HTML document and wrote JavaScript code that listens for events and searches through the `date/time` column to find rows that match user input.

### Level 2: Multiple Search Categories

* You can find it in the UFO-level-2 folder.

* Using multiple `input` tags and/or select dropdowns, wrote JavaScript code so the user can to set multiple filters and search for UFO sightings using the following criteria based on the table columns:

  1. `date/time`
  2. `city`
  3. `state`
  4. `country`
  5. `shape`

- - -

### Dataset

* [UFO Sightings Data](static/js/data.js)
