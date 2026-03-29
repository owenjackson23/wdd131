// Date and Time
const year = document.querySelector('#currentyear');
const lastMod = document.querySelector('#lastModified');

const today = new Date();

year.innerHTML = today.getFullYear();
lastMod.innerHTML = document.lastModified

// Data
const area = document.querySelector('#area');
const popl = document.querySelector('#population');
const capl = document.querySelector('#capital');
const langs = document.querySelector('#languages');
const curr = document.querySelector('#currency');
const timeZ = document.querySelector('#timeZone');
const areaCode = document.querySelector('#areaCode');
const netTLD = document.querySelector('#internetTLD');

area.innerHTML = 42;
popl.innerHTML = 159000;
capl.innerHTML = "Magic Kingdom";
langs.innerHTML = "English";
curr.innerHTML = "USD";
timeZ.innerHTML = "Eastern Time";
areaCode.innerHTML = "+1(407)";
netTLD.innerHTML = ".us";

// Weather
const temp = document.querySelector('#temperature');
const cond = document.querySelector('#conditions');
const windSpeed = document.querySelector('#wind');
const windChill = document.querySelector('#windChill')

temp.innerHTML = 84;
cond.innerHTML = "Scattered clouds";
windSpeed.innerHTML = 13.67;

function calculateWindChill(temp, windSpeed) {
    if (temp > 50 || windSpeed <= 3) {
        return temp;
    }

    let chill = 35.74 + (0.6215 * temp);
    chill = chill - 35.75 * Math.pow(windSpeed, 0.16);
    chill += 0.4275 * temp * Math.pow(windSpeed, 0.16);

    return Math.round(chill);
}

windChill.innerHTML = calculateWindChill(temp.innerHTML, windSpeed.innerHTML);