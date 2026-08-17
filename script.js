const guests = [
    // TABLE 1
    {
        name: "Laj Teev Her",
        table: 1
    },
    {
        name: "Chia Her",
        table: 1
    },
    {
        name: "Elvin Her",
        table: 1
    },
    {
        name: "Cheyenne Her",
        table: 1
    },
    {
        name: "Grandma Her",
        table: 1
    },
    {
        name: "Kou Vang",
        table: 1
    },
    {
        name: "Carol Vang",
        table: 1
    },
    {
        name: "Fue Vang",
        table: 1
    },
    {
        name: "Sierra Allen",
        table: 1
    },
    {
        name: "Tobie Vang",
        table: 1
    },

    // TABLE 2
    {
        name: "Sam Her",
        table: 2
    },
    {
        name: "Aimee Her",
        table: 2
    },
    {
        name: "Nora Her",
        table: 2
    },
    {
        name: "Caroline Her",
        table: 2
    },
    {
        name: "Chu Yang",
        table: 2
    },
    {
        name: "Emily Yang",
        table: 2
    },
    {
        name: "Ever Yang",
        table: 2
    },
    {
        name: "Haisley Yang",
        table: 2
    },
    {
        name: "Nathan Her",
        table: 2
    },
    {
        name: "Jasmine Her",
        table: 2
    },
    {
        name: "Tobie Her",
        table: 2
    },

    // TABLE 3
    {
        name: "Puj Van",
        table: 3
    },
    {
        name: "Yaum Vang",
        table: 3
    },
    {
        name: "Sing Vang",
        table: 3
    },
    {
        name: "Malee Vang",
        table: 3
    },
    {
        name: "Lilly Xu",
        table: 3
    },
    {
        name: "Victor Xu",
        table: 3
    },
    {
        name: "Jaza Xiong",
        table: 3
    },
    {
        name: "Alex Xiong",
        table: 3
    },
    {
        name: "Amaya Vang",
        table: 3
    },
    {
        name: "Nick Vang",
        table: 3
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
