const guests = [
    {
        name: "Emily Johnson",
        table: 12
    },
    {
        name: "Michael Johnson",
        table: 12
    },
    {
        name: "Sarah Williams",
        table: 7
    },
    {
        name: "James Williams",
        table: 7
    },
    {
        name: "Olivia Chen",
        table: 19
    }
];


function findTable() {

    const input = document
        .getElementById("nameInput")
        .value
        .trim()
        .toLowerCase();

    const results = document.getElementById("results");

    if (input === "") {

        results.innerHTML = `
            <p class="error">
                Please enter your name.
            </p>
        `;

        return;
    }

    const matches = guests.filter(guest =>
        guest.name.toLowerCase().includes(input)
    );


    if (matches.length === 0) {

        results.innerHTML = `
            <p class="error">
                We couldn't find that name.<br>
                Please try again.
            </p>
        `;

        return;
    }


    if (matches.length === 1) {

        const guest = matches[0];

        results.innerHTML = `
            <p class="result-name">
                ${guest.name}
            </p>

            <p class="table-label">
                Your reception table
            </p>

            <p class="table-number">
                ${guest.table}
            </p>
        `;

        return;
    }


    let list = "";

    matches.forEach((guest, index) => {

        list += `
            <button
                onclick="showTable(${index})"
                class="name-option"
            >
                ${guest.name}
            </button>
        `;

    });


    window.currentMatches = matches;

    results.innerHTML = `
        <p class="result-name">
            We found multiple names:
        </p>

        <div class="search-area">
            ${list}
        </div>
    `;
}


function showTable(index) {

    const guest = window.currentMatches[index];

    const results = document.getElementById("results");

    results.innerHTML = `
        <p class="result-name">
            ${guest.name}
        </p>

        <p class="table-label">
            Your reception table
        </p>

        <p class="table-number">
            ${guest.table}
        </p>
    `;
}


document.getElementById("nameInput").addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        findTable();
    }

});