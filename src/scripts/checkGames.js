// Script to check game data validity
const fs = require('fs');
const path = require('path');

// Read game data file
const gamesFilePath = path.join(__dirname, '..', 'lib', 'games.ts');
const gamesFileContent = fs.readFileSync(gamesFilePath, 'utf8');

// Extract games array data
const gamesArrayMatch = gamesFileContent.match(/export const games: Game\[\] = \[([\s\S]*?)\];/);
if (!gamesArrayMatch) {
  console.error('Failed to extract games array');
  process.exit(1);
}

const gamesArrayString = gamesArrayMatch[1];

// Parse game data
const gameEntries = [];
let currentGame = '';
let braceCount = 0;
let inGame = false;

for (const line of gamesArrayString.split('\n')) {
  if (line.includes('{')) {
    inGame = true;
    braceCount++;
  }
  
  if (inGame) {
    currentGame += line + '\n';
  }
  
  if (line.includes('}')) {
    braceCount--;
    if (braceCount === 0 && inGame) {
      gameEntries.push(currentGame);
      currentGame = '';
      inGame = false;
    }
  }
}

// Check each game's properties
const gameProblems = [];

for (const gameEntry of gameEntries) {
  const idMatch = gameEntry.match(/id:\s*['"]([^'"]+)['"]/);
  const urlMatch = gameEntry.match(/url:\s*['"]([^'"]+)['"]/);
  const imageUrlMatch = gameEntry.match(/imageUrl:\s*['"]([^'"]+)['"]/);
  
  if (!idMatch || !urlMatch || !imageUrlMatch) {
    gameProblems.push({
      game: gameEntry.slice(0, 50) + '...',
      problem: 'Missing required field'
    });
    continue;
  }
  
  const id = idMatch[1];
  const url = urlMatch[1];
  const imageUrl = imageUrlMatch[1];
  
  if (!url.startsWith('http')) {
    gameProblems.push({
      id,
      problem: 'Invalid URL format',
      url
    });
  }
  
  if (!imageUrl.startsWith('/')) {
    gameProblems.push({
      id,
      problem: 'Invalid image URL format',
      imageUrl
    });
  }
  
  // Check if image file exists
  const imagePath = path.join(__dirname, '..', '..', 'public', imageUrl);
  if (!fs.existsSync(imagePath)) {
    gameProblems.push({
      id,
      problem: 'Image file does not exist',
      imageUrl,
      imagePath
    });
  } else {
    // Check image file size
    const stats = fs.statSync(imagePath);
    if (stats.size === 0) {
      gameProblems.push({
        id,
        problem: 'Image file is empty',
        imageUrl,
        imagePath
      });
    }
  }
}

// Print results
console.log(`Total games: ${gameEntries.length}`);
console.log(`Games with problems: ${gameProblems.length}`);

if (gameProblems.length > 0) {
  console.log('\nGame problems:');
  console.table(gameProblems);
} 