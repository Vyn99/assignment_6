
let root = document.getElementById("root");

let textarea = document.createElement("textarea");
textarea.id = "myTextarea";

let button = document.createElement("button");
button.innerHTML = "Submit";
button.id = "myButton";

let table = document.createElement("table");
table.id = "myTable";

root.appendChild(textarea);
root.appendChild(button);
root.appendChild(table);

document.getElementById("myButton").addEventListener("click", function() {
    
    let text = document.getElementById("myTextarea").value;

    let words = text.split(/\s+/);

    let frequency = {};

    for (var i = 0; i < words.length; i++) {

        let word = words[i];

        if (frequency[word]) {

            frequency[word]++;
            console.log(frequency);

        } else {

            frequency[word] = 1;
            console.log(frequency);

        }

    }

    let data = Object.keys(frequency).map(function(key) {

        return {result: key, frequency: frequency[key]};

    });

    data.sort(function(a, b) {

        if(b.frequency === a.frequency){

            return a.result < b.result ? 1 : -1;

        }
        return b.frequency - a.frequency;

    });

    data = data.slice(0, 5);

    let table = document.getElementById("myTable");

    table.innerHTML = "";

    let headRow = document.createElement("tr");
    let headCell1 = document.createElement("th");
    let headCell2 = document.createElement("th");
    headCell1.innerHTML = "Word Name";
    headCell2.innerHTML = "Word Frequency";
    headRow.appendChild(headCell1);
    headRow.appendChild(headCell2);
    table.appendChild(headRow);

    for (var i = 0; i < data.length; i++) {

        let row = document.createElement("tr");
        let cell1 = document.createElement("td");
        let cell2 = document.createElement("td");

        cell1.innerHTML = data[i].result;
        cell2.innerHTML = data[i].frequency;

        row.appendChild(cell1);
        row.appendChild(cell2);
        table.appendChild(row);

    }
});
