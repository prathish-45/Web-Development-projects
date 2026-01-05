document.addEventListener("DOMContentLoaded", () => {
    const textElement = document.getElementById('typing-text');
    const typeList = ["Prathish", "Developer", "Engineer"];
    const typingSpeed = 150;
    const erasingSpeed = 100;
    const delayBetweenWords = 1500; // Pause after a word is typed

    let wordIndex = 0; // To keep track of which word we are on
    let charIndex = 0; // To keep track of the character in that word

    function type() {
        if (charIndex < typeList[wordIndex].length) {
            textElement.textContent += typeList[wordIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingSpeed);
        } else {
            // Finished typing the word, wait then start erasing
            setTimeout(erase, delayBetweenWords);
        }
    }

    function erase() {
        if (charIndex > 0) {
            const currentWord = typeList[wordIndex];
            textElement.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, erasingSpeed);
        } else {
            wordIndex = (wordIndex + 1) % typeList.length; // Use modulo to loop back to the start
            setTimeout(type, typingSpeed);
        }
    }

    type();
});