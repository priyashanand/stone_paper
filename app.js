const clickButton = document.getElementById('clickButton');
    const clickCountSpan = document.getElementById('clickCount');
    let clickCount = 0;

    clickButton.addEventListener('click', () => {
      clickCount++; // Increment the click count
      clickCountSpan.textContent = clickCount; // Update the counter display
    });