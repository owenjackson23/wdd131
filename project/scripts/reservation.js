let reservation = localStorage.getItem("reservation");

if (reservation === "38862") {
    reservation = "custom droid";
}
else if (reservation === "61941") {
    reservation = "custom lightsaber";
}
else {
    reservation = "RESERVATION NOT FOUND"
}

localStorage.setItem("reservation", reservation);

document.getElementById("reservation").innerHTML = reservation;