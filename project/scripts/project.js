/* Array containing information about 
the restaurants */
const restaurants = [
    {
        restName: "Docking Bay 7 Food and Cargo",
        type: "Quick Service",
        cuisine: "American",
        priceRange: "$15 - $34.99",
        menuItem: "Smoked Kaadu Pork Ribs",
        imageUrl: "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/630/354/75/dam/disneyland/dining/disneyland/docking-bay-7-food-and-cargo/docking-bay-guests-food-16x9.jpg?1749147800055"
    },
    {
        restName: "Kat Saka's Kettle",
        type: "Snack",
        cuisine: "American",
        priceRange: "$14.99 and under",
        menuItem: "Outpost Popcorn Mix",
        imageUrl: "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/630/354/75/dam/disney-world/dining/hollywood-studios/kat-sakas-kettle/kat-saka-order-16x9.jpg?1699632473517"
    },
    {
        restName: "Milk Stand",
        type: "Snack",
        cuisine: "American",
        priceRange: "$14.99 and under",
        menuItem: "Blue Milk",
        imageUrl: "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/630/354/75/dam/disneyland/destinations/disneyland/star-wars-galaxys-edge/photography/milk-stand-16x9.jpg?1708570888453"
    },
    {
        restName: "Oga's Cantina",
        type: "Casual Dining",
        cuisine: "Bar-Lounge",
        priceRange: "$15 - $34.99",
        menuItem: "Jedi Mind Trick",
        imageUrl: "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/630/354/75/dam/disney-world/dining/hollywood-studios/ogas-cantina/cantina-drinks-16x9.jpg?1699632464866"
    },
    {
        restName: "Ronto Roasters",
        type: "Quick Service",
        cuisine: "American",
        priceRange: "$14.99 and under",
        menuItem: "Ronto Wrap",
        imageUrl: "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/630/354/75/dam/disney-world/dining/hollywood-studios/ronto-roasters/rontos-roasters-spit-16x9.jpg?1699632414992"
    }
]

/* Array containing information about 
the rides */
const rides = [
    {
        rideName: "Millenium Falcon: Smugglers Run",
        minHeight: "38\" (97cm)",
        description: "Crew the Millennium Falcon on a smuggling mission for Hondo Ohnaka",
        imageUrl: "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/630/354/75/dam/disney-world/attractions/hollywood-studios/millennium-falcon-smugglers-run/smugglers-run-night-16x9.jpg?1775554215391"
    },
    {
        rideName: "Star Tours - The Adventures Continue",
        minHeight: "40\" (102cm)",
        description: "Tour iconic Star Wars locations with familiar characters",
        imageUrl: "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/630/354/75/dam/wdpro-assets/gallery/attractions/hollywood-studios/star-tours-the-adventure-continues/star-tours-gallery06.jpg?1712584920948"
    },
    {
        rideName: "Star Wars: Rise of the Resistance",
        minHeight: "40\" (102cm)",
        description: "Join the Resistance, battle the First Order, and escape the clutches of Kylo Ren",
        imageUrl: "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/630/354/75/dam/disney-world/attractions/hollywood-studios/star-wars-rise-of-the-resistance/star-wars-rise-of-the-resistance-hangar-16x9.jpg?1775555142360"
    }
]

/* Array containing information about 
the souvenirs */
const souvenirs = [
    {
        souvName: "Kyber Crystal",
        price: "$24.99",
        location: "Dok-Ondar's Den of Antiquities",
        imageUrl: "https://cdn-ssl.s7.shopdisney.com/is/image/DisneyShopping/1814047620051?fmt=webp&qlt=70&wid=1088&hei=1088"
    },
    {
        souvName: "Collectible Lightsaber Hilt",
        price: "$169.99",
        location: "Dok-Ondar's Den of Antiquities",
        imageUrl: "https://cdn-ssl.s7.shopdisney.com/is/image/DisneyShopping/1814047620100?fmt=webp&qlt=70&wid=1564&hei=1564"
    },
    {
        souvName: "Jedi/Sith Holocron",
        price: "$59.99",
        location: "Dok-Ondar's Den of Antiquities",
        imageUrl: "https://cdn-ssl.s7.shopdisney.com/is/image/DisneyShopping/1814047620045-3?fmt=webp&qlt=70&wid=1088&hei=1088"
    },
    {
        souvName: "Custom Droid",
        price: "$129.99",
        location: "Droid Depot",
        imageUrl: "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/630/354/75/vision-dam/digital/parks-platform/parks-global-assets/disney-world/shopping/droid-depot/0430ZM_01375AS_JRoh-2-16x9.jpg?2024-08-13T19:07:27+00:00"
    },
    {
        souvName: "Custom Lightsaber",
        price: "$129.99",
        location: "Savi's Workshop",
        imageUrl: "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/630/354/75/dam/disney-world/shops/hollywood-studios/savis-workshop-handbuilt-lightsabers/guests-raised-lightsabers-16x9.jpg?1699632796821"
    }
]

const currentPage = window.location.pathname;
const headerNav = document.querySelector('.navigation');
const hamButton = document.querySelector('#menu');

// Toggle the navigation menu when the hamburger button is clicked
hamButton.addEventListener('click', () => {
    headerNav.classList.toggle('show');
    hamButton.classList.toggle('show');
});

// Create food cards
function displayFood(restaurants) {
    const foodCards = document.querySelector('.foodCards');

    foodCards.innerHTML = '';
    restaurants.forEach(restaurant => {
        const card = document.createElement('article');
        card.classList.add('card');

        card.innerHTML = `
            <h2>${restaurant.restName}</h2>
            <img src="${restaurant.imageUrl}" alt="${restaurant.restName} image" loading="lazy" width="300">
            <p><strong>Type:</strong> ${restaurant.type}</p>
            <p><strong>Cuisine:</strong> ${restaurant.cuisine}</p>
            <p><strong>Price Range:</strong> ${restaurant.priceRange}</p>
            <p><strong>Popular Menu Item:</strong> ${restaurant.menuItem}</p>
            `;

        foodCards.appendChild(card);
    });
}

// Create ride cards
function displayRides(rides) {
    const rideCards = document.querySelector('.rideCards');

    rideCards.innerHTML = '';
    rides.forEach(ride => {
        const card = document.createElement('article');
        card.classList.add('card');

        card.innerHTML = `
            <h2>${ride.rideName}</h2>
            <img src="${ride.imageUrl}" alt="${ride.rideName} image" loading="lazy" width="300">
            <p><strong>Height Requirement:</strong> ${ride.minHeight}</p>
            <p><strong>Description:</strong> ${ride.description}</p>
            `;

        rideCards.appendChild(card);
    });
}

// Create souvenir cards
function displaySouvenirs(souvenirs) {
    const souvCards = document.querySelector('.souvCards');

    souvCards.innerHTML = '';
    souvenirs.forEach(souvenir => {
        const card = document.createElement('article');
        card.classList.add('card');

        card.innerHTML = `
            <h2>${souvenir.souvName}</h2>
            <img src="${souvenir.imageUrl}" alt="${souvenir.souvName} image" loading="lazy" width="300">
            <p><strong>Price:</strong> ${souvenir.price}</p>
            <p><strong>Location:</strong> ${souvenir.location}</p>
            `;

        souvCards.appendChild(card);
    });
}

function displayContent(currentPage) {
    if (currentPage.endsWith("/rides.html")) {
        displayRides(rides);
    }
    else if (currentPage.endsWith("/souvenirs.html")) {
        displaySouvenirs(souvenirs);
    }
    else if (currentPage.endsWith("/food.html")) {
        displayFood(restaurants);
    }
    else {
        console.log("You are on the home page");
    }
}

displayContent(currentPage);