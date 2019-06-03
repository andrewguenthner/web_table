function drawTable(tableData) { 
    // Draws a table based on an input data object.
    // Collect all keys in tableData into a set called colNames, to use as column names.

    // Add only keys that match the following RegExp, for letters/numbers/spaces in English
    // in order to prevent behavior such as inadvertently adding code to the page
    const allowedRegExp = /[\w\s\d]+/;
    let colNames = new Set();
    tableData.forEach((item) => Object.keys(item).forEach((keyName) => {
            console.log(allowedRegExp.test(keyName));
            if (allowedRegExp.test(keyName)) {
            colNames.add(keyName)}
            }));

    // Create table object
    let tableTag = d3.select("#table-area").append("table");
    tableTag.attr("class", "table");
    // #main-table will be used to reference this table later
    tableTag.attr("id", "main-table");
    // Cretae table head
    let tableHeadTag = tableTag.append("thead");
    let tableHeadRowTag = tableHeadTag.append("tr");
    colNames.forEach((colName) => { tableHeadRowTag.append("th")
                                                    .attr("scope","col")
                                                    .text(colName)
                                    });
    // Fill in the body
    let tableBodyTag = tableTag.append("tbody");
    tableData.forEach( (row) => {
        tableBodyTag.append("tr");
        colNames.forEach((keyToMatch) => tableBodyTag.append("td").text(row[keyToMatch]))
    })
};


// Copy data array -- data defined in data.js
let dataForTable = data;
drawTable(dataForTable);

let submitFilter = d3.select("#filter-btn");

submitFilter.on("click", () => {
    d3.event.preventDefault();
    d3.select("#main-table").remove();
    let inputDateEntry = d3.select("#datetime").property("value");

    if (inputDateEntry) {
        let inputDate = new Date(inputDateEntry);
        dataForTable = data.filter( function (tableRow) {
            let dateToCheck = new Date(tableRow.datetime);
            return (dateToCheck.getTime() == inputDate.getTime())
            });
        }
    else {
        dataForTable = data
        };

    drawTable(dataForTable);
});
