const messages = [
    "May 2026 bring peace, success, and happiness into your life ✨",
    "New year, new goals, new achievements 🚀",
    "Let go of the past and welcome a brighter future 🌟",
    "2026 is your year to shine and grow 💫",
    "Dream big, work hard, and stay kind ❤️"
];

let index = 0;
const messageEl = document.getElementById("message");

function changeMessage() {
    index = (index + 1) % messages.length;
    messageEl.textContent = messages[index];
}

// initial message
messageEl.textContent = messages[0];

// Countdown to 2026
function updateCountdown() {
    const newYear = new Date("January 1, 2026 00:00:00").getTime();
    const now = new Date().getTime();
    const diff = newYear - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
}

setInterval(updateCountdown, 1000);
updateCountdown();
