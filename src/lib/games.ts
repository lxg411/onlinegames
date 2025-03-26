import { getFullImageUrl } from '@/lib/imageLoader';

export interface Game {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  categories: string[];
  rating: number;
  playCount: number;
  url: string;
}

export const games: Game[] = [
  {
    id: 'red-and-green-2',
    title: 'Red and Green 2',
    description: 'Join the adorable red and green creatures in this exciting sequel! Red and Green 2 brings more challenging levels, new abilities, and colorful puzzles to solve. Control these cute alien-like characters as they work together to overcome obstacles, avoid traps, and reunite after being separated. With improved graphics, intuitive controls, and clever level design, this action-packed adventure will test your problem-solving skills and coordination. Help the red and green friends navigate through an alien world filled with surprises and fun challenges!',
    imageUrl: '/images/games/uploads/red-and-green-2.jpg',
    categories: ['Action', 'Puzzle', 'Adventure'],
    rating: 4.7,
    playCount: 237450,
    url: 'https://cdn.htmlgames.com/RedAndGreen2/'
  },
  {
    id: '4-winds',
    title: '4 Winds',
    description: 'Challenge your mind with 4 Winds puzzles! This engaging brain teaser requires strategic thinking and careful planning as you solve complex puzzles based on the four cardinal directions. Arrange tiles correctly to create harmonious patterns and advance through increasingly difficult levels. With its elegant design, intuitive controls, and progressive challenge, 4 Winds offers a meditative yet stimulating experience that will keep puzzle enthusiasts engaged for hours.',
    imageUrl: '/images/games/uploads/4-winds.jpg',
    categories: ['Puzzle', 'Strategy', 'Brain Games'],
    rating: 4.8,
    playCount: 215670,
    url: 'https://cdn.htmlgames.com/4Winds/'
  },
  {
    id: 'atlantis-gem',
    title: 'Atlantis Gem',
    description: 'Dive into the lost city of Atlantis in this underwater match-3 adventure. Remove beautiful Atlantis jewels by creating matches of three or more identical gems, triggering spectacular cascade effects and powerful combinations. With its stunning underwater visuals, engaging gameplay mechanics, and progressively challenging levels, Atlantis Gem offers a polished match-3 experience that will transport you to the mysterious depths of the legendary sunken civilization.',
    imageUrl: '/images/games/uploads/atlantis-gem.jpg',
    categories: ['Puzzle', 'Match 3', 'Adventure'],
    rating: 4.8,
    playCount: 297540,
    url: 'https://cdn.htmlgames.com/AtlantisGem/'
  },
  {
    id: 'medieval-defense',
    title: 'Medieval Defense',
    description: 'Defend your medieval fortress against waves of determined invaders in this strategic tower defense game. Place various defensive structures strategically along enemy paths, upgrade your defenses, and manage your resources wisely to repel increasingly powerful enemy units. With its medieval setting, diverse enemy types, and escalating challenge, Medieval Defense offers a compelling strategy experience that will test your tactical thinking and resource management skills.',
    imageUrl: '/images/games/uploads/medieval-defense.jpg',
    categories: ['Strategy', 'Tower Defense', 'Medieval'],
    rating: 4.7,
    playCount: 256980,
    url: 'https://cdn.htmlgames.com/MedievalDefense/'
  },
  {
    id: 'clock-solitaire',
    title: 'Clock Solitaire',
    description: 'Experience a unique twist on traditional solitaire with this clock-based card game. Arrange all cards clockwise according to their values, placing them strategically to complete the circular pattern. With its relaxing gameplay, clean design, and strategic depth, Clock Solitaire offers a refreshing take on the classic card game that will challenge your planning skills and provide hours of engaging entertainment for solitaire enthusiasts.',
    imageUrl: '/images/games/uploads/clock-solitaire.jpg',
    categories: ['Card Games', 'Solitaire', 'Strategy'],
    rating: 4.6,
    playCount: 257830,
    url: 'https://cdn.htmlgames.com/ClockSolitaire/'
  },
  {
    id: 'nonogram-saga',
    title: 'Nonogram Saga',
    description: 'Solve picture logic puzzles in this extensive collection of nonograms (also known as picross or griddlers). Use the numerical clues to determine which cells should be filled in to reveal a hidden picture. With thousands of puzzles ranging from simple 5×5 grids to complex 20×20 challenges, multiple themes, and helpful features for beginners and experts alike, Nonogram Saga offers a perfect blend of logical deduction and artistic discovery that will keep your mind engaged for hours.',
    imageUrl: '/images/games/uploads/nonogram-saga.jpg',
    categories: ['Puzzle', 'Logic', 'Picture'],
    rating: 4.9,
    playCount: 304280,
    url: 'https://cdn.htmlgames.com/NonogramSaga/'
  },
  {
    id: 'slide-wood',
    title: 'Slide Wood',
    description: 'Test your spatial reasoning in this addictive sliding block puzzle game. Slide wooden blocks into place to create horizontal lines and clear the playing field. With increasingly complex arrangements, limited moves, and strategic challenges, Slide Wood offers a brain-teasing experience that combines the simplicity of sliding mechanics with the depth of strategic puzzle solving. The natural wood aesthetics and satisfying sliding animations create a relaxing yet mentally stimulating gaming experience.',
    imageUrl: '/images/games/uploads/slide-wood.jpg',
    categories: ['Puzzle', 'Strategy', 'Sliding'],
    rating: 4.7,
    playCount: 247650,
    url: 'https://cdn.htmlgames.com/SlideWood/'
  },
  {
    id: 'mahjong-collection',
    title: 'Mahjong Collection',
    description: 'Enjoy a comprehensive collection of Mahjong solitaire layouts in this elegant tile-matching game. Match and remove identical tile pairs from the board, working through various beautiful arrangements of increasing complexity. With its relaxing soundtrack, diverse themes, and hundreds of levels, Mahjong Collection offers hours of brain-teasing entertainment for Mahjong enthusiasts of all skill levels.',
    imageUrl: '/images/games/uploads/mahjong-collection.jpg',
    categories: ['Puzzle', 'Mahjong', 'Relaxing'],
    rating: 4.7,
    playCount: 278450,
    url: 'https://cdn.htmlgames.com/MahjongCollection/'
  },
  {
    id: 'achilles-solitaire',
    title: 'Achilles Solitaire',
    description: 'Challenge yourself with this unique variant of solitaire inspired by Greek mythology. Your goal is to remove all cards by matching pairs that add up to a specific value, strategically clearing the board while managing limited moves. With its mythological theme, elegant design, and strategic depth, Achilles Solitaire offers a fresh take on classic card games that will test your planning skills and mathematical thinking in increasingly challenging levels.',
    imageUrl: '/images/games/uploads/achilles-solitaire.jpg',
    categories: ['Card Games', 'Solitaire', 'Strategy'],
    rating: 4.7,
    playCount: 236970,
    url: 'https://cdn.htmlgames.com/AchillesSolitaire/'
  },
  {
    id: 'gem-challenge',
    title: 'Gem Challenge',
    description: 'Test your reflexes and attention in this fast-paced gem matching game. Click as quickly as possible on the indicated gems as they appear on screen, racing against the clock to achieve high scores. With increasing difficulty, special challenges, and time bonuses, Gem Challenge offers an adrenaline-pumping experience that will sharpen your focus and reaction time while providing colorful, gem-filled entertainment.',
    imageUrl: '/images/games/uploads/gem-challenge.jpg',
    categories: ['Action', 'Reflex', 'Time Management'],
    rating: 4.5,
    playCount: 245780,
    url: 'https://cdn.htmlgames.com/GemChallenge/'
  },
  {
    id: 'mahjongg-pyramids',
    title: 'Mahjongg Pyramids',
    description: 'Take on a unique twist of the classic Mahjong Solitaire with pyramid-shaped layouts. Remove matching tile pairs as you work your way from the top of the pyramid to the bottom, with each level presenting more complex arrangements. With its Egyptian theme, beautiful artwork, and progressively challenging designs, Mahjongg Pyramids offers a fresh perspective on the timeless matching game that will keep you engaged for hours.',
    imageUrl: '/images/games/uploads/mahjongg-pyramids.jpg',
    categories: ['Puzzle', 'Mahjong', 'Matching'],
    rating: 4.7,
    playCount: 267890,
    url: 'https://cdn.htmlgames.com/MahjonggPyramids/'
  },
  {
    id: 'bottle-shooter',
    title: 'Bottle Shooter',
    description: 'Test your aim and precision in this thrilling bottle shooting gallery game. Take perfect shots to shatter bottles of various sizes and positions, earning points and unlocking new challenges. With realistic physics, satisfying bottle-breaking effects, and progressively difficult arrangements, Bottle Shooter offers an engaging target practice experience that will sharpen your shooting skills and provide hours of entertaining gameplay.',
    imageUrl: '/images/games/uploads/bottle-shooter.jpg',
    categories: ['Action', 'Shooting', 'Skill'],
    rating: 4.5,
    playCount: 252340,
    url: 'https://cdn.htmlgames.com/BottleShooter/'
  },
  {
    id: 'daily-2-queens',
    title: 'Daily 2 Queens',
    description: 'Challenge your chess strategy skills with this unique daily puzzle game. Every day, solve two new puzzles where you must place two queens on a chess board so they cannot attack each other while meeting special positioning requirements. With its elegant design, varying difficulty levels, and daily refresh of content, Daily 2 Queens offers a quick yet mentally stimulating exercise that will enhance your understanding of chess piece movements and spatial reasoning.',
    imageUrl: '/images/games/uploads/daily-2-queens.jpg',
    categories: ['Puzzle', 'Chess', 'Daily Challenge'],
    rating: 4.8,
    playCount: 218970,
    url: 'https://cdn.htmlgames.com/Daily2Queens/'
  },
  {
    id: 'jewels-of-the-medici',
    title: 'Jewels of the Medici',
    description: 'Travel back to Renaissance Italy in this historically-themed match-3 game. Align jewels once treasured by the powerful Medici family, creating matches of three or more identical gems to clear the board and advance through 200 challenging levels. With its beautiful historical aesthetics, engaging storyline, and progressive difficulty, Jewels of the Medici offers a polished match-3 experience that combines addictive gameplay with a touch of Italian Renaissance splendor.',
    imageUrl: '/images/games/uploads/jewels-of-the-medici.jpg',
    categories: ['Puzzle', 'Match 3', 'Historical'],
    rating: 4.7,
    playCount: 267830,
    url: 'https://cdn.htmlgames.com/JewelsOfTheMedici/'
  },
  {
    id: 'frozen-freecell',
    title: 'Frozen Freecell',
    description: 'Experience the classic Freecell solitaire game with a chilling winter theme. This unique variant increases difficulty with each level by reducing the number of freecells available, requiring more strategic planning and foresight. With its beautiful winter visuals, smooth card animations, and progressively challenging gameplay, Frozen Freecell offers a fresh take on the beloved card game that will test even the most experienced solitaire players.',
    imageUrl: '/images/games/uploads/frozen-freecell.jpg',
    categories: ['Card Games', 'Solitaire', 'Winter'],
    rating: 4.6,
    playCount: 242570,
    url: 'https://cdn.htmlgames.com/FrozenFreecell/'
  },
  {
    id: 'super-car-driving',
    title: 'Super Car Driving',
    description: 'Experience the thrill of driving high-performance supercars in this realistic racing simulator. Take control of exotic vehicles as you navigate through challenging tracks with stunning environments. Test your driving skills across various weather conditions and race against time to set new records. With advanced physics, realistic car handling, and detailed vehicle models, Super Car Driving offers an immersive racing experience for both casual players and enthusiasts alike.',
    imageUrl: '/images/games/uploads/super-car-driving.jpg',
    categories: ['Racing', 'Simulation', 'Sports'],
    rating: 4.9,
    playCount: 395680,
    url: 'https://cloud.onlinegames.io/games/2024/unity2/super-car-driving/index-og.html'
  },
  {
    id: 'highway-traffic',
    title: 'Highway Traffic',
    description: 'Navigate through busy highways and test your driving skills in this intense traffic simulation game. Control your vehicle as you weave through congested roads, avoid crashes, and reach your destination safely. With realistic traffic patterns, multiple vehicle types, and increasingly challenging levels, Highway Traffic offers an adrenaline-pumping experience that will keep you on the edge of your seat. Perfect your timing and spatial awareness to become a master of the highway!',
    imageUrl: '/images/games/uploads/highway-traffic.jpg',
    categories: ['Driving', 'Simulation', 'Traffic'],
    rating: 4.8,
    playCount: 342650,
    url: 'https://www.onlinegames.io/games/2022/unity/highway-traffic/index.html'
  },
  {
    id: 'drift-hunters-pro',
    title: 'Drift Hunters Pro',
    description: 'Master the art of drifting in this professional-grade driving simulator. Choose from a garage full of customizable cars and take them to various tracks designed specifically for perfect drifting. Earn points for maintaining your drift angle, speed, and duration to unlock new vehicles and upgrades. With its realistic physics engine, detailed car models, and challenging gameplay, Drift Hunters Pro offers the ultimate drifting experience for motorsport enthusiasts and casual gamers alike.',
    imageUrl: '/images/games/uploads/drift-hunters-pro.jpg',
    categories: ['Racing', 'Drift', 'Simulation'],
    rating: 4.9,
    playCount: 315780,
    url: 'https://www.onlinegames.io/games/2023/unity/drift-hunters-pro/index.html'
  },
  {
    id: 'hexa-merge',
    title: 'Hexa Merge',
    description: 'Test your strategic thinking in this addictive merge puzzle game. Combine identical hexagonal tiles to create higher-value tiles, managing your limited board space efficiently. Plan your moves carefully to avoid running out of space while aiming for the highest possible tile value. With its clean design, satisfying merging mechanics, and escalating challenge, Hexa Merge offers a brain-teasing experience that will keep you engaged for hours.',
    imageUrl: '/images/games/uploads/hexa-merge.jpg',
    categories: ['Puzzle', 'Merge', 'Strategy'],
    rating: 4.7,
    playCount: 258740,
    url: 'https://cdn.htmlgames.com/HexaMerge/'
  },
  {
    id: 'ancient-mahjong',
    title: 'Ancient Mahjong',
    description: 'Experience the classic tile-matching game with an ancient civilization theme. Find and match identical tile pairs to remove them from the board, working your way through beautifully designed layouts inspired by ancient cultures. With traditional Mahjong Solitaire rules, atmospheric visuals, and hundreds of challenging layouts, Ancient Mahjong offers a relaxing yet engaging experience that tests your observation skills and strategic thinking.',
    imageUrl: '/images/games/uploads/ancient-mahjong.jpg',
    categories: ['Puzzle', 'Mahjong', 'Strategy'],
    rating: 4.8,
    playCount: 285640,
    url: 'https://cdn.htmlgames.com/AncientMahjong/'
  },
  {
    id: 'pyramid-mahjong',
    title: 'Pyramid Mahjong',
    description: 'Take on a unique twist of the classic Mahjong Solitaire with pyramid-shaped layouts. Remove matching tile pairs as you work your way from the top of the pyramid to the bottom, with each level presenting more complex arrangements. With its Egyptian theme, beautiful artwork, and progressively challenging designs, Pyramid Mahjong offers a fresh perspective on the timeless matching game that will keep you engaged for hours.',
    imageUrl: '/images/games/uploads/pyramid-mahjong.jpg',
    categories: ['Puzzle', 'Mahjong', 'Matching'],
    rating: 4.7,
    playCount: 267890,
    url: 'https://cdn.htmlgames.com/MahjonggPyramids/'
  },
  {
    id: 'ninja-breakout',
    title: 'Ninja Breakout',
    description: 'Take control of a ninja-themed ball in this exciting breakout arcade game. Destroy blocks, collect power-ups, and clear levels with your bouncing ninja. With its unique Japanese aesthetic, special abilities, and increasingly complex level designs, Ninja Breakout offers a fresh take on the classic brick-breaking formula that will keep you coming back for more.',
    imageUrl: '/images/games/uploads/ninja-breakout.jpg',
    categories: ['Arcade', 'Breakout', 'Action'],
    rating: 4.7,
    playCount: 267890,
    url: 'https://cdn.htmlgames.com/NinjaBreakout/'
  },
  {
    id: 'find-the-odd-one-out',
    title: 'Find the Odd One Out',
    description: 'Challenge your observation skills in this brain-teasing puzzle game. Identify the object that differs from the others in each level, with increasingly subtle differences as you progress. With hundreds of diverse puzzles, multiple difficulty modes, and a variety of themes, Find the Odd One Out offers a perfect mental workout that will sharpen your attention to detail and visual discrimination abilities.',
    imageUrl: '/images/games/uploads/find-the-odd-one-out.jpg',
    categories: ['Puzzle', 'Observation', 'Brain Teaser'],
    rating: 4.7,
    playCount: 276530,
    url: 'https://cdn.htmlgames.com/FindTheOddOneOut/'
  },
  {
    id: 'monkey-connect',
    title: 'Monkey Connect',
    description: 'Connect matching monkey tiles in this charming Mahjong Connect variant. Create paths between identical tiles to remove them from the board, but ensure the path has no more than two turns. With its cute monkey theme, colorful visuals, and progressively challenging layouts, Monkey Connect offers a fresh twist on the connect-style puzzle games that will entertain players of all ages.',
    imageUrl: '/images/games/uploads/monkey-connect.jpg',
    categories: ['Puzzle', 'Connect', 'Mahjong'],
    rating: 4.7,
    playCount: 272540,
    url: 'https://cdn.htmlgames.com/MonkeyConnect/'
  },
  {
    id: 'balloon-maze',
    title: 'Balloon Maze',
    description: 'Navigate through challenging mazes and pop all the balloons in this colorful puzzle game. Plan your route carefully to ensure you can reach every balloon without getting stuck. With increasingly complex maze designs, special balloon types, and strategic depth, Balloon Maze offers an engaging brain teaser that combines path-finding logic with satisfying balloon-popping action.',
    imageUrl: '/images/games/uploads/balloon-maze.jpg',
    categories: ['Puzzle', 'Maze', 'Strategy'],
    rating: 4.6,
    playCount: 252470,
    url: 'https://cdn.htmlgames.com/BalloonMaze/'
  },
  {
    id: 'music-mahjong',
    title: 'Music Mahjong',
    description: 'Enjoy a harmonious blend of music and puzzle-solving in this melody-themed Mahjong experience. Match musical instrument tiles, notes, and famous composer portraits as you clear beautifully arranged boards. With its rich musical soundtrack, visually appealing music-themed tiles, and progressively challenging layouts, Music Mahjong offers a uniquely creative twist on the classic matching game that will delight both music lovers and puzzle enthusiasts.',
    imageUrl: '/images/games/uploads/music-mahjong.jpg',
    categories: ['Puzzle', 'Mahjong', 'Music'],
    rating: 4.7,
    playCount: 192480,
    url: 'https://cdn.htmlgames.com/MusicMahjong/'
  },
  {
    id: 'mysterious-pirate-jewels-3',
    title: 'Mysterious Pirate Jewels 3',
    description: 'Set sail for adventure in this exciting third installment of the popular match-3 series. Remove colored backgrounds by matching jewels in increasingly challenging pirate-themed levels. With 45 new stages, enhanced power-ups, and more intricate puzzle designs, this sequel builds upon the beloved mechanics while adding fresh challenges. The rich pirate aesthetics, engaging storyline, and strategic depth make this the most polished entry in the series, perfect for match-3 enthusiasts seeking their next treasure hunt.',
    imageUrl: '/images/games/uploads/mysterious-pirate-jewels-3.jpg',
    categories: ['Puzzle', 'Match 3', 'Pirate'],
    rating: 4.8,
    playCount: 245780,
    url: 'https://cdn.htmlgames.com/MysteriousPirateJewels3/'
  },
  {
    id: 'christmas-tree-solitaire',
    title: 'Christmas Tree Solitaire',
    description: 'Celebrate the holiday season with this festive pyramid solitaire variant. Remove pairs of cards that sum to 13 from a Christmas tree formation, using strategy and careful planning to clear the entire holiday-themed layout. With its cheerful Christmas visuals, merry soundtrack, and seasonal card designs, Christmas Tree Solitaire offers the perfect blend of traditional card gameplay and holiday spirit that will delight players looking for some seasonal gaming entertainment.',
    imageUrl: '/images/games/uploads/christmas-tree-solitaire.jpg',
    categories: ['Card Games', 'Solitaire', 'Christmas'],
    rating: 4.7,
    playCount: 198760,
    url: 'https://cdn.htmlgames.com/ChristmasTreeSolitaire/'
  },
  {
    id: 'dots-and-boxes',
    title: 'Dots and Boxes',
    description: 'Master the classic pen-and-paper game in this digital adaptation of Dots and Boxes. Take turns with an AI opponent or friend to connect dots and complete boxes, strategically planning your moves to claim more squares than your opponent. With multiple grid sizes, difficulty levels, and visual themes, this version offers endless replayability. The clean interface, satisfying box-claiming animations, and strategic depth make this a perfect digital version of the timeless strategy game that has entertained generations.',
    imageUrl: '/images/games/uploads/dots-and-boxes.jpg',
    categories: ['Strategy', 'Board Game', 'Classic'],
    rating: 4.6,
    playCount: 178950,
    url: 'https://cdn.htmlgames.com/DotsAndBoxes/'
  },
  {
    id: 'survival-island',
    title: 'Survival Island',
    description: 'Test your survival skills in this immersive island adventure. Gather resources, craft tools, build shelter, and defend yourself against various challenges while exploring a mysterious island. With dynamic weather systems, day-night cycles, and a complex crafting system, Survival Island offers an engaging survival experience that will test your resource management and adaptation skills. The beautiful environment, realistic survival mechanics, and endless possibilities for exploration make this game a must-play for survival genre enthusiasts.',
    imageUrl: '/images/games/uploads/survival-island.jpg',
    categories: ['Survival', 'Adventure', 'Action'],
    rating: 4.8,
    playCount: 287650,
    url: 'https://cloud.onlinegames.io/games/2024/unity2/survival-island/index-og.html'
  },
  {
    id: 'mahjong-master',
    title: 'Mahjong',
    description: 'Experience the timeless charm of Mahjong in this beautifully crafted digital version. Match identical tiles to clear the board while planning your moves carefully to avoid getting stuck. With multiple layout designs, stunning tile sets, and progressive difficulty levels, this Mahjong game offers both relaxation and strategic challenge. The clean interface, helpful hints system, and atmospheric background music create the perfect environment for both newcomers and experienced Mahjong players.',
    imageUrl: '/images/games/uploads/mahjong-master.jpg',
    categories: ['Puzzle', 'Strategy', 'Brain Games'],
    rating: 4.7,
    playCount: 245780,
    url: 'https://cloud.onlinegames.io/games/2025/unity/mahjong/index-og.html'
  },
  {
    id: 'nuts-and-bolts-puzzle',
    title: 'Nuts and Bolts Puzzle',
    description: 'Challenge your mechanical thinking in this unique puzzle game that combines physics with problem-solving. Connect various nuts, bolts, and mechanical parts to create working mechanisms that solve increasingly complex challenges. With its innovative gameplay mechanics, realistic physics engine, and progressively challenging levels, Nuts and Bolts Puzzle offers an engaging experience that will test your logical thinking and spatial reasoning abilities.',
    imageUrl: '/images/games/uploads/nuts-and-bolts-puzzle.jpg',
    categories: ['Puzzle', 'Logic', 'Brain Games'],
    rating: 4.6,
    playCount: 198540,
    url: 'https://cloud.onlinegames.io/games/2025/unity/nuts-and-bolts-puzzle/index-og.html'
  },
  {
    id: 'drift-king',
    title: 'Drift King',
    description: 'Become the ultimate drift master in this high-octane racing experience. Master the art of controlled sliding through challenging tracks, earn points for style and precision, and unlock new vehicles and customization options. With realistic physics, detailed car handling mechanics, and various track environments, Drift King delivers an authentic drifting experience that will satisfy both casual players and hardcore racing enthusiasts.',
    imageUrl: '/images/games/uploads/drift-king.jpg',
    categories: ['Racing', 'Drift', 'Sports'],
    rating: 4.9,
    playCount: 342870,
    url: 'https://www.onlinegames.io/games/2024/unity/drift-king/index.html'
  },
  {
    id: 'love-tester',
    title: 'Love Tester',
    description: 'Discover the fun and lighthearted side of compatibility testing in this entertaining casual game. Input names, answer quirky questions, and watch as the love meter determines compatibility scores with amusing results. With its charming graphics, humorous predictions, and social sharing features, Love Tester provides endless entertainment for friends and couples looking for a fun way to test their compatibility.',
    imageUrl: '/images/games/uploads/love-tester.jpg',
    categories: ['Casual', 'Entertainment', 'Social'],
    rating: 4.5,
    playCount: 276540,
    url: 'https://www.onlinegames.io/games/2021/3/love-tester/index.html'
  },
  {
    id: 'masked-special-forces',
    title: 'Masked Special Forces',
    description: 'Lead an elite team of special forces operators in this intense tactical action game. Complete challenging missions, utilize advanced weaponry, and coordinate strategic attacks while maintaining stealth when necessary. With its realistic combat mechanics, variety of mission types, and extensive arsenal of weapons and equipment, Masked Special Forces delivers an immersive military combat experience that will test your tactical decision-making and combat skills.',
    imageUrl: '/images/games/uploads/masked-special-forces.jpg',
    categories: ['Action', 'Shooter', 'Strategy'],
    rating: 4.8,
    playCount: 315670,
    url: 'https://www.onlinegames.io/games/2022/unity2/masked-special-forces/index.html'
  },
  {
    id: 'tank-arena',
    title: 'Tank Arena',
    description: 'Command powerful tanks in intense arena battles against other players or AI opponents. Strategically maneuver your tank, aim your shots carefully, and use the environment for cover while engaging in explosive combat. With multiple tank classes, various battle arenas, and upgradeable weapons systems, Tank Arena offers an action-packed experience that combines tactical thinking with fast-paced tank warfare.',
    imageUrl: '/images/games/uploads/tank-arena.jpg',
    categories: ['Action', 'Battle', 'Strategy'],
    rating: 4.7,
    playCount: 289450,
    url: 'https://cloud.onlinegames.io/games/2025/construct/293/tank-arena/index-og.html'
  },
  {
    id: 'kings-io',
    title: 'Kings io',
    description: 'Battle for supremacy in this multiplayer strategy game where you play as a king expanding your territory. Collect resources, build your army, and conquer neighboring territories while defending your own kingdom. With real-time strategy elements, multiple unit types, and dynamic player interactions, Kings io offers an engaging multiplayer experience that will test your strategic thinking and kingdom management skills.',
    imageUrl: '/images/games/uploads/kings-io.jpg',
    categories: ['Multiplayer', 'Strategy', 'Action'],
    rating: 4.8,
    playCount: 298760,
    url: 'https://cloud.onlinegames.io/games/2025/construct/208/kings-io/index-og.html'
  },
  {
    id: 'squid-race-simulator',
    title: 'Squid Race Simulator',
    description: 'Experience the quirky fun of controlling a squid in this unique racing simulator. Navigate through underwater courses, use your tentacles to grab and swing past obstacles, and compete against other players in hilarious aquatic races. With its physics-based gameplay, various race tracks, and charming underwater environments, Squid Race Simulator delivers a refreshingly different take on the racing genre that will keep you entertained for hours.',
    imageUrl: '/images/games/uploads/squid-race-simulator.jpg',
    categories: ['Racing', 'Casual', 'Entertainment'],
    rating: 4.6,
    playCount: 245890,
    url: 'https://www.onlinegames.io/games/2021/unity3/squid-race-simulator/index.html'
  },
  {
    id: 'sparta-hoppers',
    title: 'SpartaHoppers',
    description: 'Join the epic adventure of Spartan warriors in this action-packed platformer. Jump, dodge, and fight your way through ancient Greek-inspired levels filled with challenges and enemies. With its unique combination of classic platforming mechanics and Spartan warfare elements, SpartaHoppers offers an exciting gaming experience that will test your reflexes and timing while immersing you in a world of ancient Greek mythology.',
    imageUrl: '/images/games/uploads/sparta-hoppers.jpg',
    categories: ['Action', 'Arcade', 'Platform'],
    rating: 4.7,
    playCount: 234560,
    url: 'https://cloud.onlinegames.io/games/2025/construct/227/spartahoppers/index-og.html'
  },
  {
    id: 'monster-survivors',
    title: 'Monster Survivors',
    description: 'Fight your way through endless waves of monsters in this charming roguelike survival game. Play as a tiny but powerful wizard who must survive against increasingly challenging hordes of creatures. Collect experience points to level up and gain new abilities, manage your resources wisely, and see how long you can survive. With its adorable art style, strategic gameplay, and progressive difficulty, Monster Survivors offers a delightful yet challenging experience for players of all skill levels.',
    imageUrl: '/images/games/uploads/monster-survivors.jpg',
    categories: ['Survival', 'Action', 'Roguelike', 'Strategy'],
    rating: 4.8,
    playCount: 274890,
    url: 'https://cloud.onlinegames.io/games/2025/unity/monster-survivors/index-og.html'
  },
  {
    id: 'find-it',
    title: 'Find It',
    description: 'Sharpen your observation skills in this delightful hidden object game. Search for cleverly concealed items in beautifully illustrated scenes ranging from cozy bedrooms to bustling cityscapes. With multiple difficulty levels, timed challenges, and hint systems, Find It offers a relaxing yet engaging experience that will test your attention to detail. The charming art style and progressive difficulty make this game perfect for casual players looking for a brain-teasing adventure.',
    imageUrl: '/images/games/uploads/find-it.jpg',
    categories: ['Puzzle', 'Hidden Object', 'Brain Games'],
    rating: 4.7,
    playCount: 213560,
    url: 'https://cloud.onlinegames.io/games/2025/unity/find-it/index-og.html'
  },
  {
    id: 'tile-match',
    title: 'Tile Match',
    description: 'Connect matching tiles in this addictive puzzle game that combines elements of Mahjong and Match-3. Clear the board by finding identical pairs of symbols, but be strategic as tiles can only be selected if they can be connected with three or fewer line segments. With hundreds of challenging levels, special power-ups, and various themed tile sets, Tile Match offers endless entertainment for puzzle enthusiasts. The soothing soundtrack and satisfying matching mechanics make this a perfect game for relaxation and mental stimulation.',
    imageUrl: '/images/games/uploads/tile-match.jpg',
    categories: ['Puzzle', 'Matching', 'Strategy'],
    rating: 4.6,
    playCount: 237640,
    url: 'https://cloud.onlinegames.io/games/2025/unity/tile-match/index-og.html'
  },
  {
    id: 'voxel-world',
    title: 'Voxel World',
    description: 'Explore and shape a stunning blocky universe in this creative sandbox adventure. Build impressive structures, mine resources, craft tools, and survive in a procedurally generated world full of surprises. With its charming voxel graphics, intuitive building mechanics, and vast exploration possibilities, Voxel World offers limitless creativity and adventure. Day and night cycles, various biomes, and occasional monster appearances keep the gameplay fresh and exciting, making this a must-play for fans of building and exploration games.',
    imageUrl: '/images/games/uploads/voxel-world.jpg',
    categories: ['Sandbox', 'Adventure', 'Building', 'Survival'],
    rating: 4.9,
    playCount: 298750,
    url: 'https://cloud.onlinegames.io/games/2025/unity/voxel-world/index-og.html'
  },
  {
    id: 'crazy-moto-racing',
    title: 'Crazy Moto Racing',
    description: 'Experience high-octane motorcycle racing action with extreme stunts and adrenaline-pumping speeds. Race through diverse tracks ranging from urban environments to off-road desert courses, performing wild jumps and daring maneuvers. Unlock and upgrade a variety of motorcycles, each with unique handling and performance characteristics. With its realistic physics, stunning visual effects, and competitive gameplay, Crazy Moto Racing delivers the ultimate motorcycle racing experience that will test your reflexes and racing skills.',
    imageUrl: '/images/games/uploads/crazy-moto-racing.jpg',
    categories: ['Racing', 'Sports', 'Action'],
    rating: 4.8,
    playCount: 286430,
    url: 'https://cloud.onlinegames.io/games/2022/unity3/crazy-moto-racing/index-og.html'
  },
  {
    id: 'monster-truck-booster',
    title: 'Monster Truck Booster',
    description: "Take control of powerful monster trucks in this physics-based driving adventure. Navigate challenging terrains, perform incredible jumps, and overcome obstacles using your monster truck's massive wheels and powerful engine. Complete missions, unlock new vehicles, and customize your trucks with various upgrades and visual enhancements. With its vibrant graphics, realistic physics engine, and progressively challenging levels, Monster Truck Booster offers an exciting driving experience that blends arcade fun with strategic gameplay.",
    imageUrl: '/images/games/uploads/monster-truck-booster.jpg',
    categories: ['Racing', 'Driving', 'Adventure'],
    rating: 4.7,
    playCount: 253870,
    url: 'https://cloud.onlinegames.io/games/2024/construct/223/monster-truck-booster/index-og.html'
  },
  {
    id: 'fnf-funk-3d',
    title: 'FNF Funk 3D',
    description: 'Experience the popular rhythm game in an immersive 3D environment. FNF Funk 3D takes the classic Friday Night Funkin\' gameplay to a new dimension with enhanced visuals and expanded song selection. Hit the correct notes in time with the music as you battle opponents in musical showdowns. With its charming characters, catchy tunes, and increasingly challenging rhythm patterns, this game offers an engaging experience for both newcomers and veterans of rhythm games. The 3D perspective adds depth to the familiar gameplay while maintaining the quirky charm of the original.',
    imageUrl: '/images/games/uploads/fnf-funk-3d.jpg',
    categories: ['Rhythm', 'Music', 'Action'],
    rating: 4.8,
    playCount: 278650,
    url: 'https://www.onlinegames.io/games/2022/unity/fnf-funk-3d/index.html'
  },
  {
    id: 'urban-sniper',
    title: 'Urban Sniper',
    description: 'Take on the role of an elite tactical sniper in this intense precision shooting game. Deploy to various urban environments and complete high-stakes missions requiring perfect aim and timing. Analyze wind direction, distance, and target movement before taking your shot. With realistic ballistics, detailed weapon customization, and a variety of challenging scenarios, Urban Sniper delivers a tense and immersive sniping experience. Each mission presents unique objectives and complications that will test both your patience and precision under pressure.',
    imageUrl: '/images/games/uploads/urban-sniper.jpg',
    categories: ['Action', 'Shooter', 'Strategy', 'Simulation'],
    rating: 4.9,
    playCount: 315780,
    url: 'https://www.onlinegames.io/games/2022/unity2/urban-sniper/index.html'
  },
  {
    id: 'owl-and-rabbit-fashion',
    title: 'Owl and Rabbit Fashion',
    description: 'Express your creativity in this charming animal dress-up game featuring adorable owl and rabbit characters. Choose from hundreds of fashion items including clothes, accessories, hairstyles, and backgrounds to create the perfect look. Each season brings new themed collections to explore, from summer beachwear to cozy winter outfits. With its cute art style, intuitive controls, and endless customization options, Owl and Rabbit Fashion offers a relaxing and creative experience that appeals to fashion enthusiasts of all ages.',
    imageUrl: '/images/games/uploads/owl-and-rabbit-fashion.jpg',
    categories: ['Casual', 'Fashion', 'Design', 'Kids'],
    rating: 4.6,
    playCount: 245790,
    url: 'https://www.onlinegames.io/games/2021/2/owl-and-rabbit-fashion/index.html'
  },
  {
    id: 'draw-the-bird-path',
    title: 'Draw the Bird Path',
    description: 'Help cute birds find their way home in this clever physics-based puzzle game. Draw flight paths with your finger or mouse to guide birds safely past obstacles and reach their nests. Each level presents unique challenges including wind currents, predators, and moving hazards that affect your drawn paths. With its intuitive drawing mechanics, charming bird characters, and increasingly complex level design, Draw the Bird Path combines creative problem-solving with delightful bird-themed gameplay that will keep you engaged through hundreds of progressively challenging levels.',
    imageUrl: '/images/games/uploads/draw-the-bird-path.jpg',
    categories: ['Puzzle', 'Physics', 'Strategy', 'Drawing'],
    rating: 4.7,
    playCount: 237680,
    url: 'https://www.onlinegames.io/games/2022/construct/147/draw-the-bird-path/index.html'
  },
  {
    id: 'mini-shooters',
    title: 'Mini Shooters',
    description: 'Join the action in this fast-paced multiplayer shooter featuring adorable mini characters with serious firepower. Battle against friends or online opponents in various colorful arenas filled with power-ups, weapons, and strategic cover positions. Choose from different character classes with unique abilities and customize your loadout to suit your playstyle. With its accessible controls, quick-match gameplay, and progression system for unlocking new content, Mini Shooters delivers an enjoyable shooting experience that balances casual fun with competitive depth.',
    imageUrl: '/images/games/uploads/mini-shooters.jpg',
    categories: ['Action', 'Shooter', 'Multiplayer', 'Arcade'],
    rating: 4.8,
    playCount: 298760,
    url: 'https://www.onlinegames.io/games/2021/5/mini-shooters/index.html'
  },
  {
    id: 'marco',
    title: 'Marco',
    description: 'Embark on an action-packed adventure inspired by classic arcade shooters. Play as Marco, a skilled soldier fighting through enemy territory to complete crucial missions. Navigate through diverse landscapes, collect powerful weapons, and face off against challenging bosses. With its retro pixel art style, responsive controls, and adrenaline-pumping gameplay, Marco delivers a nostalgic yet fresh take on run-and-gun action that will appeal to fans of classic arcade games and newcomers alike.',
    imageUrl: '/images/games/uploads/marco.jpg',
    categories: ['Action', 'Arcade', 'Shooter', 'Retro'],
    rating: 4.7,
    playCount: 267590,
    url: 'https://www.onlinegames.io/games/2023/unity/marco/index.html'
  },
  {
    id: 'princesses-prom-night',
    title: 'Princesses Prom Night',
    description: 'Help your favorite princesses prepare for the most magical night of the year in this delightful dress-up and makeover game. Style hair, apply makeup, choose stunning gowns, and accessorize to create the perfect prom look for each princess. With dozens of customization options, themed outfits, and special effects, Princesses Prom Night offers endless creative possibilities. The beautiful artwork, intuitive design interface, and attention to fashion details make this an enchanting experience for anyone who enjoys fashion design and princess-themed games.',
    imageUrl: '/images/games/uploads/princesses-prom-night.jpg',
    categories: ['Casual', 'Fashion', 'Dress Up', 'Girls'],
    rating: 4.6,
    playCount: 286470,
    url: 'https://www.onlinegames.io/games/2021/3/princesses-prom-night/index.html'
  },
  {
    id: 'endless-siege',
    title: 'Endless Siege',
    description: 'Defend your fortress against relentless waves of enemies in this captivating tower defense game. Strategically place various towers with unique abilities and upgrade paths to hold back the advancing hordes. Research new technologies, unlock special abilities, and adapt your strategy as enemy types evolve with each wave. With its polished visuals, deep strategic gameplay, and satisfying progression system, Endless Siege offers a compelling tower defense experience with virtually limitless challenges for strategy enthusiasts.',
    imageUrl: '/images/games/uploads/endless-siege.jpg',
    categories: ['Strategy', 'Tower Defense', 'Action'],
    rating: 4.8,
    playCount: 257830,
    url: 'https://www.onlinegames.io/games/2024/more/endless-siege/index.html'
  },
  {
    id: 'battleship-war',
    title: 'Battleship War',
    description: 'Command your naval fleet in this modernized version of the classic battleship game. Place your ships strategically on the grid and take turns firing at your opponent\'s hidden vessels. This enhanced version features realistic ship models, explosive visual effects, and multiple game modes including classic play, speed battles, and campaign missions. With its intuitive controls, tactical depth, and perfect balance of luck and strategy, Battleship War offers an engaging digital adaptation of the timeless naval warfare game.',
    imageUrl: '/images/games/uploads/battleship-war.jpg',
    categories: ['Strategy', 'Board Game', 'Naval', 'Classic'],
    rating: 4.7,
    playCount: 234560,
    url: 'https://www.onlinegames.io/games/2023/code/battleship-war/index.html'
  },
  {
    id: 'bloons-tower-defense-3',
    title: 'Bloons Tower Defense 3',
    description: 'Pop your way through increasingly challenging waves of balloons in this beloved tower defense game. Place various monkey towers along the path, each with unique abilities to pop different types of bloons. Upgrade your defenses, manage your resources, and deploy special abilities at critical moments to prevent bloons from reaching the exit. With its colorful graphics, diverse monkey types, and progressively complex challenges, Bloons Tower Defense 3 offers an addictive and strategic experience that has captivated players for years.',
    imageUrl: '/images/games/uploads/bloons-tower-defense-3.jpg',
    categories: ['Strategy', 'Tower Defense', 'Arcade'],
    rating: 4.9,
    playCount: 386750,
    url: 'https://www.onlinegames.io/games/2024/flash/bloons-tower-defense-3/index.html'
  },
  {
    id: 'angela-all-season-fashion',
    title: 'Angela All Season Fashion',
    description: 'Join the stylish cat Angela in this fabulous fashion game featuring outfits for every season. Dress Angela in trendy clothes for spring, summer, autumn, and winter, selecting from hundreds of fashion items including tops, bottoms, accessories, and hairstyles. Create the perfect look for various themed events and photoshoots throughout the year. With its charming character animations, extensive wardrobe options, and seasonal fashion challenges, Angela All Season Fashion delivers a delightful dress-up experience that celebrates style across all seasons.',
    imageUrl: '/images/games/uploads/angela-all-season-fashion.jpg',
    categories: ['Casual', 'Fashion', 'Dress Up', 'Kids'],
    rating: 4.6,
    playCount: 276540,
    url: 'https://www.onlinegames.io/games/2024/jul/angela-all-season-fashion/index.html'
  },
  {
    id: 'bandits-multiplayer-pvp',
    title: 'Bandits Multiplayer PvP',
    description: 'Battle against other players in this action-packed multiplayer shooter set in a wild west environment. Choose your bandit character, equip powerful weapons, and compete in various game modes including deathmatch, capture the gold, and territory control. Master different character abilities, team up with friends, and climb the global leaderboards to establish your reputation. With its detailed western environments, responsive gunplay, and competitive gameplay, Bandits Multiplayer PvP offers an exciting online shooting experience with a unique frontier twist.',
    imageUrl: '/images/games/uploads/bandits-multiplayer-pvp.jpg',
    categories: ['Action', 'Shooter', 'Multiplayer', 'Western'],
    rating: 4.8,
    playCount: 307850,
    url: 'https://www.onlinegames.io/games/2021/unity2/bandits-multiplayer-pvp/index.html'
  },
  {
    id: 'stunt-simulator-multiplayer',
    title: 'Stunt Simulator Multiplayer',
    description: 'Perform incredible vehicle stunts and compete against other players in this adrenaline-fueled multiplayer stunt game. Drive a variety of vehicles including cars, motorcycles, and monster trucks across elaborate stunt parks filled with jumps, loops, and obstacles. Create custom stunts, challenge friends to beat your scores, and participate in community stunt competitions. With its realistic physics engine, diverse vehicles with unique handling, and extensive customization options, Stunt Simulator Multiplayer delivers an exciting playground for stunt enthusiasts to showcase their most impressive tricks.',
    imageUrl: '/images/games/uploads/stunt-simulator-multiplayer.jpg',
    categories: ['Racing', 'Simulation', 'Multiplayer', 'Stunts'],
    rating: 4.7,
    playCount: 289760,
    url: 'https://www.onlinegames.io/games/2021/unity/stunt-simulator-multiplayer/index.html'
  },
  {
    id: 'iconic-celebrity-look',
    title: 'Iconic Celebrity Look',
    description: 'Channel your inner stylist and recreate famous celebrity looks in this glamorous fashion and makeup game. Study iconic celebrity outfits and then use your creativity to recreate or reimagine these styles with an extensive collection of clothing, makeup, and accessories. Participate in themed fashion challenges inspired by red carpet events, music videos, and movie premieres. With its stunning graphics, detailed cosmetic tools, and celebrity-inspired themes, Iconic Celebrity Look offers a premium fashion experience for players who appreciate glamour and high-end style.',
    imageUrl: '/images/games/uploads/iconic-celebrity-look.jpg',
    categories: ['Fashion', 'Celebrity', 'Dress Up', 'Makeup'],
    rating: 4.7,
    playCount: 267840,
    url: 'https://www.onlinegames.io/games/2024/jul/iconic-celebrity-look/index.html'
  },
  {
    id: 'burnout-racers',
    title: 'Burnout Racers',
    description: 'Push your driving skills to the extreme in this high-speed racing game focused on dangerous stunts and spectacular crashes. Compete in various race modes including circuit races, elimination events, and crash challenges where destruction is the goal. Perform daring drifts, jumps, and near-misses to build your boost meter and achieve incredible speeds. With its detailed damage modeling, impressive crash physics, and adrenaline-pumping gameplay, Burnout Racers delivers an intense racing experience that rewards both skillful driving and spectacular risk-taking.',
    imageUrl: '/images/games/uploads/burnout-racers.jpg',
    categories: ['Racing', 'Action', 'Driving', 'Arcade'],
    rating: 4.8,
    playCount: 315780,
    url: 'https://www.onlinegames.io/games/2024/unity/burnout-racers/index.html'
  }
]; 

// Helper function: Validate game URLs
export const validateGameUrls = () => {
  return games.map(game => {
    return {
      id: game.id,
      url: game.url,
      valid: Boolean(game.url && (game.url.startsWith('http') || game.url.startsWith('/games/iframe'))),
      imageValid: Boolean(game.imageUrl && game.imageUrl.startsWith('/'))
    };
  });
};

// Get valid games data
export function getValidGames(): Game[] {
  // 检查是否在本地开发环境
  const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

  return games.map(game => {
    // 如果已经是绝对URL，或者是在开发环境中，保持原样
    if (game.imageUrl.startsWith('http') || isDevelopment) {
      return game;
    }
    
    // 生产环境中，为相对路径添加基础URL
    return {
      ...game,
      imageUrl: `https://onlinegames-rho.vercel.app${game.imageUrl}`
    };
  });
} 