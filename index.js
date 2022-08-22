const feedDisplay = document.querySelector(`.table`);
const btnIPO = document.querySelector(`.IPO`);

const url = `https://stocks-sample-api.herokuapp.com/tickers`;

const stocks = [];

// When the user scrolls the page, execute myFunction
window.onscroll = function() {
    myFunction();
};

// Get the header
var header = document.getElementById("sticky2");
console.log(header);

// Get the offset position of the navbarr
var sticky = header.offsetTop;
var one = 1;
// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

function sortTable(n) {
    var table,
        rows,
        switching,
        i,
        x,
        y,
        shouldSwitch,
        dir,
        switchcount = 0;
    table = document.getElementById("myTable2");
    switching = true;
    // Set the sorting direction to ascending:
    dir = "asc";
    /* Make a loop that will continue until
                                                                                                                  no switching has been done: */
    while (switching) {
        // Start by saying: no switching is done:
        switching = false;
        rows = table.rows;
        /* Loop through all table rows (except the
                                                                                                                                                                                                                                  first, which contains table headers): */
        for (i = 1; i < rows.length - 1; i++) {
            // Start by saying there should be no switching:
            shouldSwitch = false;
            /* Get the two elements you want to compare,
                                                                                                                                                                                                                                                                                                                                                  one from current row and one from the next: */
            x = rows[i].getElementsByTagName("TD")[n];
            y = rows[i + 1].getElementsByTagName("TD")[n];
            /* Check if the two rows should switch place,
                                                                                                                                                                                                                                                                                                                                                  based on the direction, asc or desc: */
            if (dir == "asc") {
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                    // If so, mark as a switch and break the loop:
                    shouldSwitch = true;
                    break;
                }
            } else if (dir == "desc") {
                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                    // If so, mark as a switch and break the loop:
                    shouldSwitch = true;
                    break;
                }
            }
        }
        if (shouldSwitch) {
            /* If a switch has been marked, make the switch
                                                                                                                                                                                                                                                                                                                                                  and mark that a switch has been done: */
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            // Each time a switch is done, increase this count by 1:
            switchcount++;
        } else {
            /* If no switching has been done AND the direction is "asc",
                                                                                                                                                                                                                                                                                                                                                  set the direction to "desc" and run the while loop again. */
            if (switchcount == 0 && dir == "asc") {
                dir = "desc";
                switching = true;
            }
        }
    }
}
sortTable();
let counter = 0;
fetch(url)
    .then((response) => response.json())
    .then((data) =>
        data.data.values.forEach((article) => {
            stocks.push(data.data.values);
            // if (article[17] === `#N/A`) {
            //     return;
            // }
            console.log(article[0]);
            console.log(article[17]);
            counter++;

            const table = `
           
            <table class="styled-table">
            <tbody>
                <tr>
                    <td >${counter}</td>
                    <td>${article[0]}</td>
                    <td>${article[1]}</td>
                    <td>${article[2]}</td>
                    <td>${article[3]}</td>
                    <td>${article[4]}</td>
                    <td>${article[5]}</td>
                    <td>${article[6]}</td>
                    <td>${article[7]}</td>
                    <td>${article[8]}</td>
                    <td>${article[9]}</td>
                    <td>${article[10]}</td>
                    <td>${article[11]}</td>
                    <td>${article[12]}</td>
                    <td>${article[13]}</td>
                    <td>${article[14]}</td>
                    <td>${article[15]}</td>
                    <td>${article[16]}</td>
                    <td>${article[17]}</td>
                    <td>${article[18]}</td>
                    <td>${article[19]}</td>
                    <td>${article[20]}</td>
                    <td>${article[21]}</td>
                    <td>${article[22]}</td>
                    <td>${article[23]}</td>
                    <td>${article[24]}</td>
                    <td>${article[25]}</td>
                    <td>${article[26]}</td>
                    <td>${article[28]}</td>
                    <td>${article[29]}</td>
                    <td>${article[30]}</td>
                    <td>${article[31]}</td>
                    <td>${article[32]}</td>
                    <td>${article[33]}</td>
                    <td>${article[34]}</td>
                    
                    

                </tr>
            </tbody>
        </table>`;
            //console.log(article.media[0][`media-metadata`][2].url)
            // console.log(article);
            feedDisplay.insertAdjacentHTML(`beforeend`, table);
        })
    );

//     <tr class="active-row">
//     <td>Melissa</td>
//     <td>5150</td>
// </tr>