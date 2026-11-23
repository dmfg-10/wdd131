
/* ---------- FOOTER ---------- */

document.getElementById("currentyear").textContent =
    new Date().getFullYear();

document.getElementById("modifiedDate").textContent =
    document.lastModified;


/* ---------- NAVIGATION MENU ---------- */

const menuButton = document.querySelector("#menu-button");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");

    const isOpen = navigation.classList.contains("open");

    menuButton.textContent = isOpen ? "✕" : "☰";

    menuButton.setAttribute("aria-expanded", isOpen);

    menuButton.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );
});


/* ---------- TEMPLE DATA ---------- */

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/yigo-guam-temple/yigo-guam-temple-26495-main.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/washington-d.c.-temple/washington-d.c.-temple-14992-main.jpg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/lima-peru-temple/lima-peru-temple-12721-main.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/mexico-city-mexico-temple/mexico-city-mexico-temple-4060-main.jpg"
    },
    {
        templeName: "Bogotá Colombia",
        location: "Bogotá, Colombia",
        dedicated: "2000, November, 19",
        area: 116642,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/bogota-colombia-temple/bogota-colombia-temple-7733-main.jpg"
    },
    {
        templeName: "Torreon Mexico",
        location: "Torreon, Mexico",
        dedicated: "2026, November, 22",
        area: 10000,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/torreon-mexico-temple/torreon-mexico-temple-75751-main.jpg"
    },
    {
        templeName: "Natal Brazil",
        location: "Natal, Brazil",
        dedicated: "Under construction",
        area: 8000,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/natal-brazil-temple/natal-brazil-temple-45005-main.jpg"
    }
];


/* ---------- TEMPLE CONTAINER ---------- */

const templesContainer = document.querySelector("#temples-container");


/* ---------- CREATE TEMPLE CARDS ---------- */

function createTempleCard(temple) {

    const card = document.createElement("section");

    const name = document.createElement("h2");
    const location = document.createElement("p");
    const dedicated = document.createElement("p");
    const area = document.createElement("p");
    const image = document.createElement("img");

    name.textContent = temple.templeName;

    location.textContent = `Location: ${temple.location}`;

    dedicated.textContent = `Dedicated: ${temple.dedicated}`;

    area.textContent = `Area: ${temple.area.toLocaleString()} sq ft`;

    image.setAttribute("src", temple.imageUrl);
    image.setAttribute("alt", `${temple.templeName} Temple`);
    image.setAttribute("loading", "lazy");

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedicated);
    card.appendChild(area);
    card.appendChild(image);

    return card;
}


/* ---------- DISPLAY TEMPLES ---------- */

function displayTemples(templeList) {

    templesContainer.innerHTML = "";

    templeList.forEach((temple) => {
        const card = createTempleCard(temple);
        templesContainer.appendChild(card);
    });
}


/* ---------- FILTER TEMPLES ---------- */

function filterTemples(filter) {

    let filteredTemples = [];

    switch (filter) {

        case "old":
            filteredTemples = temples.filter((temple) => {
                const year = Number(temple.dedicated.substring(0, 4));
                return year < 1900;
            });
            break;

        case "new":
            filteredTemples = temples.filter((temple) => {
                const year = Number(temple.dedicated.substring(0, 4));
                return year > 2000;
            });
            break;

        case "large":
            filteredTemples = temples.filter((temple) => {
                return temple.area > 90000;
            });
            break;

        case "small":
            filteredTemples = temples.filter((temple) => {
                return temple.area < 10000;
            });
            break;

        default:
            filteredTemples = temples;
    }

    displayTemples(filteredTemples);
}


/* ---------- NAVIGATION FILTER EVENTS ---------- */

const filterLinks = document.querySelectorAll(".navigation a");

filterLinks.forEach((link) => {

    link.addEventListener("click", (event) => {

        event.preventDefault();

        const filter = link.dataset.filter;

        filterTemples(filter);

        // Close mobile menu after selecting a filter
        navigation.classList.remove("open");

        menuButton.textContent = "☰";
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Open navigation menu");

    });

});


/* ---------- INITIAL DISPLAY ---------- */

// Display all temples when the page loads
displayTemples(temples);
