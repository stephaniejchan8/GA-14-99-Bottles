// Declare JS variable for DOM ul with id lyrics
const lyrics = document.querySelector('#lyrics');

// Create loop to count down from 99 to 0
for (let i = 99; i >= 0; i--) {
  // Different lyrics for zero bottles
  if (i !== 0) {
    // Creates a variable of element li
    const line = document.createElement('li');
    // Add text to created li with numbers based on loop iteration
    line.textContent = `${i} bottles of beer on the wall, ${i} bottles of beer. Take one down, pass it around, ${i - 1} bottles of beer on the wall.`;
    // Add li to lyrics ul
    lyrics.appendChild(line);
  } else { // similar process for zero bottles with different lyrics
    const line = document.createElement('li');
    line.textContent = "No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall...";
    lyrics.appendChild(line);
  }
}