// player_gen.js
// Loads your existing JSON into a global variable

// If your JSON file is called data.json and is in the same folder:
let data = null;

fetch('data.json')
  .then(res => res.json())
  .then(json => {
    data = json;
  })
  .catch(err => console.error("Error loading JSON:", err));
