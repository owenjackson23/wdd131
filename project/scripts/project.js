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

// Create temple cards
function displayFood(restaurants) {
    const foodCards = document.querySelector('.foodCards');

    foodCards.innerHTML = '';
    restaurants.forEach(restaurant => {
        const card = document.createElement('article');
        card.classList.add('card');

        card.innerHTML = `
            <h2>${restaurant.restName}</h2>
            <p><strong>Type: </strong> ${restaurant.type}</p>
            <p><strong>Cuisine:</strong> ${restaurant.cuisine}</p>
            <p><strong>Price Range:</strong> ${restaurant.priceRange}</p>
            <p><strong>Popular Menu Item:</strong> ${restaurant.menuItem}</p>
            <img src="${restaurant.imageUrl}" alt="${restaurant.restName} image" loading="lazy" width="300">
            `;

        foodCards.appendChild(card);
    });
}

displayFood(restaurants);