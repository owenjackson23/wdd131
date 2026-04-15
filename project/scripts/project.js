const restaurants = [
    {
        restName: "Docking Bay 7 Food and Cargo",
        type: "Quick Service",
        cuisine: "American",
        priceRange: "$15 - $34.99",
        menuItem: "Smoked Kaadu Pork Ribs",
        imageUrl: ""
    },
    {
        restName: "Kat Saka's Kettle",
        type: "Snack",
        cuisine: "American",
        priceRange: "$14.99 and under",
        menuItem: "Outpost Popcorn Mix",
        imageUrl: ""
    },
    {
        restName: "Milk Stand",
        type: "Snack",
        cuisine: "American",
        priceRange: "$14.99 and under",
        menuItem: "Blue Milk",
        imageUrl: ""
    },
    {
        restName: "Oga's Cantina",
        type: "Casual Dining",
        cuisine: "Bar-Lounge",
        priceRange: "$15 - $34.99",
        menuItem: "Jedi Mind Trick",
        imageUrl: ""
    },
    {
        restName: "Ronto Roasters",
        type: "Quick Service",
        cuisine: "American",
        priceRange: "$14.99 and under",
        menuItem: "Ronto Wrap",
        imageUrl: ""
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
            <p><strong>Menu Item:</strong> ${restaurant.menuItem}</p>
            <img src="${restaurant.imageUrl}" alt="${restaurant.restName} image" loading="lazy">
            `;

        foodCards.appendChild(card);
    });
}

displayFood(restaurants);