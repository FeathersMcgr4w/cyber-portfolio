function toggleDropdown(id) {
    var content = document.getElementById(id);
    content.style.display = content.style.display === "none" || content.style.display === "" ? "block" : "none";
}

// typing effect
const words = ["RED TEAM", "ETHICAL HACKING", "OSINT", "PENTESTING"];
const typingContainer = document.getElementById("typing-container");
let wordIndex = 0;
let charIndex = 0;
const typingSpeed = 150; // Speed of typing in ms per character
const pauseBetweenWords = 2000; // Pause before showing the next word in ms

function typeWord() {
    if (charIndex < words[wordIndex].length) {
        typingContainer.textContent += words[wordIndex][charIndex];
        charIndex++;
        setTimeout(typeWord, typingSpeed);
    } else {
        setTimeout(deleteWord, pauseBetweenWords);
    }
}

function deleteWord() {
    if (charIndex > 0) {
        typingContainer.textContent = words[wordIndex].slice(0, charIndex - 1);
        charIndex--;
        setTimeout(deleteWord, typingSpeed);
    } else {
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(typeWord, typingSpeed);
    }
}

// Start the typing effect
typeWord();