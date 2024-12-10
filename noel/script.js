const emojis = ['🎄', '❄️', '🎅', '✨', '🎁', '🦌']; 
const emojiContainer = document.querySelector('.emoji-container');


function createEmoji() {
  const emoji = document.createElement('div');
  emoji.classList.add('emoji');
  emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
  emoji.style.left = `${Math.random() * 100}vw`; 
  emoji.style.top = `${Math.random() * 100}vh`; 
  emoji.style.fontSize = `${Math.random() * 2 + 1.5}rem`;
  emojiContainer.appendChild(emoji);


  setTimeout(() => {
    emoji.remove();
  }, 5000);
}


setInterval(createEmoji, 500);


function downloadFile() {
  const link = document.createElement('a');
  link.href = 'Weihnachten.pdf'; 
  link.download = 'Weihnachten.pdf'; 
  link.click();
}
