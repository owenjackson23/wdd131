
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
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Columbia River Washington",
        location: "Richland, Washington, United States",
        dedicated: "2001, November, 18",
        area: 16880,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/columbia-river-washington-temple/columbia-river-washington-temple-60808-thumb.jpg"
    },
    {
        templeName: "Gilbert Arizona",
        location: "Gilbert, Arizona, United States",
        dedicated: "2014, March, 2",
        area: 85326,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/gilbert-arizona-temple/gilbert-arizona-temple-3802-main.jpg"
    },
    {
        templeName: "Provo City Center",
        location: "Provo, Utah, United States",
        dedicated: "2016, March, 20",
        area: 85084,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/provo-city-center-temple/provo-city-center-temple-3390-thumb.jpg"
    }
];

const headerNav = document.querySelector('.navigation');
const hamButton = document.querySelector('#menu');

const homeLink = document.querySelector('#home');
const oldLink = document.querySelector('#old');
const newLink = document.querySelector('#new');
const largeLink = document.querySelector('#large');
const smallLink = document.querySelector('#small');
const pageTitle = document.querySelector('.pageTitle');

// Toggle the navigation menu when the hamburger button is clicked
hamButton.addEventListener('click', () => {
    headerNav.classList.toggle('show');
    hamButton.classList.toggle('show');
});

homeLink.addEventListener('click', () => {
    pageTitle.innerHTML = "All Temples";
    displayTemples(temples);
});

oldLink.addEventListener('click', () => {
    pageTitle.innerHTML = "Old Temples";
    displayTemples(filterOldTemples(temples));
});

newLink.addEventListener('click', () => {
    pageTitle.innerHTML = "New Temples";
    displayTemples(filterNewTemples(temples));
});

largeLink.addEventListener('click', () => {
    pageTitle.innerHTML = "Large Temples";
    displayTemples(filterLargeTemples(temples));
});

smallLink.addEventListener('click', () => {
    pageTitle.innerHTML = "Small Temples";
    displayTemples(filterSmallTemples(temples));
});

// Create temple cards
function displayTemples(temples) {
    const templeCards = document.querySelector('.templeCards');

    templeCards.innerHTML = '';
    temples.forEach(temple => {
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
            <h2>${temple.templeName}</h2>
            <p><strong>Location:</strong> ${temple.location}</p>
            <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
            <p><strong>Area:</strong> ${temple.area} sq ft</p>
            <img src="${temple.imageUrl}" alt="${temple.templeName} temple image" loading="lazy">
            `;

        templeCards.appendChild(card);
    });
}

// Creates a new array of temples dedicated before 1900
function filterOldTemples(temples) {
    const oldTemples = temples.filter(temple => {
        const dedicatedDate = parseInt(temple.dedicated.split(',')[0]);
        return dedicatedDate < 1900;
    });
    return oldTemples;
}

// Creates a new array of temples dedicated after 2000
function filterNewTemples(temples) {
    const newTemples = temples.filter(temple => {
        const dedicatedDate = parseInt(temple.dedicated.split(',')[0]);
        return dedicatedDate > 2000;
    });
    return newTemples;
}

// Creates a new array of temples with an area greater than 90,000 sq ft
function filterLargeTemples(temples) {
    const largeTemples = temples.filter(temple => {
        const area = temple.area;
        return area > 90000;
    });
    return largeTemples;
}

// Creates a new array of temples with an area less than 10,000 sq ft
function filterSmallTemples(temples) {
    const smallTemples = temples.filter(temple => {
        const area = temple.area;
        return area < 10000;
    });
    return smallTemples;
}

// Display all temples
displayTemples(temples);