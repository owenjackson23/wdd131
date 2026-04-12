let reviewCount = localStorage.getItem("reviewCount");

if (reviewCount === null) {
    reviewCount = 0;
}

reviewCount = Number(reviewCount) + 1;

localStorage.setItem("reviewCount", reviewCount);

document.getElementById("reviewCount").innerHTML = reviewCount;