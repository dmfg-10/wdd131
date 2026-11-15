

const windSpeed = 5;
const temperature = 20;
const windChillData = document.querySelector("#windChill");

function calculateWindChill(temperature, windSpeed) {
    return 13.12 + 0.6215 * temperature - 11.37 * (windSpeed ** 0.16) + 0.3965 * temperature * (windSpeed ** 0.16);
}

if (temperature <= 10 && windSpeed > 4.8) {
    const windChill = calculateWindChill(temperature, windSpeed);
    windChillData.textContent = windChill.toFixed(1) + " °C";
} else {
    windChillData.textContent = "N/A";
}

document.getElementById("modifiedDate").textContent = document.lastModified;
document.getElementById("currentyear").textContent = new Date().getFullYear();

