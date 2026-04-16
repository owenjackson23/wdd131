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

// Create ride cards
function displayRides(rides) {
    const rideCards = document.querySelector('.rideCards');

    rideCards.innerHTML = '';
    rides.forEach(ride => {
        const card = document.createElement('article');
        card.classList.add('card');

        card.innerHTML = `
            <h2>${ride.rideName}</h2>
            <p><strong>Height Requirement:</strong> ${ride.minHeight}</p>
            <p><strong>Description:</strong> ${ride.description}</p>
            <img src="${ride.imageUrl}" alt="${ride.rideName} image" loading="lazy" width="300">
            `;

        rideCards.appendChild(card);
    });
}

displayRides(rides);