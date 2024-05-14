// Get the root div
var root = document.getElementById("root");

// Create a new textarea element
var textarea = document.createElement("textarea");
textarea.id = "myTextarea";

// Create a new submit button
var button = document.createElement("button");
button.innerHTML = "Submit";
button.id = "myButton";

// Create a new table
var table = document.createElement("table");
table.id = "myTable";

// Append the textarea and the button to the root div
root.appendChild(textarea);
root.appendChild(button);
root.appendChild(table);

// Add an event listener to the button
document.getElementById("myButton").addEventListener("click", function() {
    // Get the text from the textarea
    var text = document.getElementById("myTextarea").value;

    // Split the text into words
    var words = text.split(' ');

    // Create an object to store the frequency of each word
    var frequency = {};

    // Iterate over the words
    for (var i = 0; i < words.length; i++) {
        var word = words[i];
        if (frequency[word]) {
            frequency[word]++;
        } else {
            frequency[word] = 1;
        }
    }

    // Convert the frequency object to an array of objects
    var data = Object.keys(frequency).map(function(key) {
        return {result: key, frequency: frequency[key]};
    });

    // Sort the data array by frequency in descending order
    data.sort(function(a, b) {
        return b.frequency - a.frequency;
    });

    // Limit the data array to the top 5 results
    data = data.slice(0, 5);

    // Get the table
    var table = document.getElementById("myTable");

    // Clear out the existing table data
    table.innerHTML = "";

    // Create a header row
    var headRow = document.createElement("tr");
    var headCell1 = document.createElement("th");
    var headCell2 = document.createElement("th");
    headCell1.innerHTML = "Word Name";
    headCell2.innerHTML = "Word Frequency";
    headRow.appendChild(headCell1);
    headRow.appendChild(headCell2);
    table.appendChild(headRow);

    // Add the new data to the table
    for (var i = 0; i < data.length; i++) {
        var row = document.createElement("tr");
        var cell1 = document.createElement("td");
        var cell2 = document.createElement("td");
        cell1.innerHTML = data[i].result;
        cell2.innerHTML = data[i].frequency;
        row.appendChild(cell1);
        row.appendChild(cell2);
        table.appendChild(row);
    }
});

/*
// Add an event listener to the button
document.getElementById("myButton").addEventListener("click", function() {
    // Get the text from the textarea
    var text = document.getElementById("myTextarea").value;

    // Split the text into words
    var words = text.split(' ');

    // Create an object to store the frequency of each word
    var frequency = {};

    // Iterate over the words
    for (var i = 0; i < words.length; i++) {
        var word = words[i];
        if (frequency[word]) {
            frequency[word]++;
            console.log(frequency);
        } else {
            frequency[word] = 1;
            console.log(frequency);
        }
    }

    // Convert the frequency object to an array of objects
    var data = Object.keys(frequency).map(function(key) {
        return {result: key, frequency: frequency[key]};
    });

    // Sort the data array by frequency in descending order
    data.sort(function(a, b) {
        return b.frequency - a.frequency;
    });

    // Limit the data array to the top 5 results
    data = data.slice(0, 5);

    // Get the table
    var table = document.getElementById("myTable");

    // Clear out the existing table data
    table.innerHTML = "";

    // Add the new data to the table
    for (var i = 0; i < data.length; i++) {
        var row = document.createElement("tr");
        var cell1 = document.createElement("td");
        var cell2 = document.createElement("td");
        cell1.innerHTML = data[i].result;
        cell2.innerHTML = data[i].frequency;
        row.appendChild(cell1);
        row.appendChild(cell2);
        table.appendChild(row);
    }
});
*/
/* Add an event listener to the button
document.getElementById("myButton").addEventListener("click", function() {
    // Get the text from the textarea
    var text = document.getElementById("myTextarea").value;

    // Here you would process the text and get the top 5 results and their frequencies
    // For now, let's just create some dummy data
    var data = [
        {result: "Result 1", frequency: 5},
        {result: "Result 2", frequency: 4},
        {result: "Result 3", frequency: 3},
        {result: "Result 4", frequency: 2},
        {result: "Result 5", frequency: 1}
    ];

    // Get the table
    var table = document.getElementById("myTable");

    // Clear out the existing table data
    table.innerHTML = "";

    // Add the new data to the table
    for (var i = 0; i < data.length; i++) {
        var row = document.createElement("tr");
        var cell1 = document.createElement("td");
        var cell2 = document.createElement("td");
        cell1.innerHTML = data[i].result;
        cell2.innerHTML = data[i].frequency;
        row.appendChild(cell1);
        row.appendChild(cell2);
        table.appendChild(row);
    }
});
*/