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

displaySouvenirs(souvenirs);