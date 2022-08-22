const feedDisplay = document.querySelector(`.table`);
const btnIPO = document.querySelector(`.IPO`);

const url = `https://stocks-sample-api.herokuapp.com/tickers`;
let search = document.querySelector(`#proba`);

const stocks = [];
let prefsList = [];

// When the user scrolls the page, execute myFunction
window.onscroll = function() {
    myFunction();
};

// Get the header
var header = document.getElementById("sticky2");

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
// SORTIN ON CLICK //
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
//---------------------------------------------------------------------------------------------------------------//

//----------------------------------FETCHING RESULTS-------------------------------------------------------------//
let counter = ``;

fetch(url)
    .then((response) => response.json())
    .then((data) =>
        data.data.values.forEach((prefs) => {
            stocks.push(data.data.values);
            //  console.log(prefs[33]);

            //searching by stock type //

            if (prefs[33] === `preferred stock`) {
                prefsList.push(prefs);
            }

            counter++;
            const table = `
           
            <table class="styled-table">
            <tbody>
                <tr>
                    <td >${counter}</td>
                    <td>${prefs[0]}</td>
                    <td>${prefs[1]}</td>
                    <td>${prefs[2]}</td>
                    <td>${prefs[3]}</td>
                    <td>${prefs[4]}</td>
                    <td>${prefs[5]}</td>
                    <td>${prefs[6]}</td>
                    <td>${prefs[7]}</td>
                    <td>${prefs[8]}</td>
                    <td>${prefs[9]}</td>
                    <td>${prefs[10]}</td>
                    <td>${prefs[11]}</td>
                    <td>${prefs[12]}</td>
                    <td>${prefs[13]}</td>
                    <td>${prefs[14]}</td>
                    <td>${prefs[15]}</td>
                    <td>${prefs[16]}</td>
                    <td>${prefs[17]}</td>
                    <td>${prefs[18]}</td>
                    <td>${prefs[19]}</td>
                    <td>${prefs[20]}</td>
                    <td>${prefs[21]}</td>
                    <td>${prefs[22]}</td>
                    <td>${prefs[23]}</td>
                    <td>${prefs[24]}</td>
                    <td>${prefs[25]}</td>
                    <td>${prefs[26]}</td>
                    <td>${prefs[28]}</td>
                    <td>${prefs[29]}</td>
                    <td>${prefs[30]}</td>
                    <td>${prefs[31]}</td>
                    <td>${prefs[32]}</td>
                    <td>${prefs[33]}</td>
                    <td>${prefs[34]}</td>
                </tr>
            </tbody>
        </table>`;
            feedDisplay.insertAdjacentHTML(`beforeend`, table);
        })
    );
//----------------------------------------Buton click  hendling-----------------------------------------------------------//
search.addEventListener(`click`, function() {
    let counter = 0;

    //to hide the old list//
    let prefs = document.querySelector(`#myTable2`);
    prefs.classList = `hiden`;
    //---------to show the new list-------//
    let prefsTable = document.querySelector(`#selectMe`);
    prefsTable.classList = `styled-table`;
    prefsList.forEach((prefs) => {
        counter++;
        const tablePrefs = `           
    <table class="styled-table">
    <tbody>
        <tr>
            <td>${counter}</td>
            <td>${prefs[0]}</td>
            <td>${prefs[1]}</td>
            <td>${prefs[2]}</td>
            <td>${prefs[3]}</td>
            <td>${prefs[4]}</td>
            <td>${prefs[5]}</td>
            <td>${prefs[6]}</td>
            <td>${prefs[7]}</td>
            <td>${prefs[8]}</td>
            <td>${prefs[9]}</td>
            <td>${prefs[10]}</td>
            <td>${prefs[11]}</td>
            <td>${prefs[12]}</td>
            <td>${prefs[13]}</td>
            <td>${prefs[14]}</td>
            <td>${prefs[15]}</td>
            <td>${prefs[16]}</td>
            <td>${prefs[17]}</td>
            <td>${prefs[18]}</td>
            <td>${prefs[19]}</td>
            <td>${prefs[20]}</td>
            <td>${prefs[21]}</td>
            <td>${prefs[22]}</td>
            <td>${prefs[23]}</td>
            <td>${prefs[24]}</td>
            <td>${prefs[25]}</td>
            <td>${prefs[26]}</td>
            <td>${prefs[28]}</td>
            <td>${prefs[29]}</td>
            <td>${prefs[30]}</td>
            <td>${prefs[31]}</td>
            <td>${prefs[32]}</td>
            <td>${prefs[33]}</td>
            <td>${prefs[34]}</td>
        </tr>
    </tbody>
</table>`;
        prefs.classList = `styled-table`;
        prefsTable.insertAdjacentHTML(`beforeend`, tablePrefs);
    });
});

//Get the button