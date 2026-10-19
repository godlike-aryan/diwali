let isLit = false;

function lightDiya() {
    const flame = document.getElementById('flame');
    const text = document.getElementById('diya-text');
    
    isLit = !isLit;
    if (isLit) {
        flame.classList.remove('off');
        text.innerText = "✨ Diya is Lit! Happy Diwali! ✨";
    } else {
        flame.classList.add('off');
        text.innerText = "Click the Diya to Light It!";
    }
}

function generateWish() {
    const name = document.getElementById('senderName').value.trim();
    const output = document.getElementById('personalizedGreeting');
    
    if (name) {
        output.innerText = `Warmest Diwali wishes to you and your family, sent with love from ${name}! 🪔🎆`;
    } else {
        output.innerText = "Please enter your name first!";
    }
}

// Optional: Click anywhere to trigger a celebratory console log or simple particle effect
document.addEventListener('click', (e) => {
    // You can add firework canvas trigger logic here
});