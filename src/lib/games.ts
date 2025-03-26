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
    imageUrl: '/images/games/uploads/Red-and-Green-2.jpg',
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
    description: 'Test your survival skills in a challenging open-world island environment. After being stranded on a mysterious island, gather resources, craft tools and weapons, build shelter, hunt for food, and defend yourself against wildlife and environmental threats. Explore diverse biomes, discover hidden locations, and unravel the island\'s mysteries as you struggle to survive. With its day-night cycle, realistic survival mechanics, and environmental storytelling, Survival Island delivers an immersive survival experience that will test your resourcefulness and persistence.',
    imageUrl: '/images/games/uploads/Survival-Island.jpg',
    categories: ['Survival', 'Open World', 'Adventure'],
    rating: 4.8,
    playCount: 315760,
    url: 'https://www.onlinegames.io/games/2023/unity2/survival-island/index.html'
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
    description: 'Exercise your mechanical aptitude in this unique physics-based puzzle game. Connect nuts and bolts of various shapes and sizes to create functional mechanisms that solve each level\'s objective. Progress through increasingly complex mechanical challenges that require creative thinking and spatial reasoning. With its realistic physics simulation, intuitive controls, and gradually increasing difficulty, Nuts and Bolts Puzzle offers a satisfying brain-teasing experience for puzzle enthusiasts who enjoy engineering and mechanical challenges.',
    imageUrl: '/images/games/uploads/Nuts-and-Bolts-Puzzle.jpg',
    categories: ['Puzzle', 'Physics', 'Mechanical'],
    rating: 4.7,
    playCount: 254780,
    url: 'https://www.onlinegames.io/games/2021/unity/nuts-and-bolts-puzzle/index.html'
  },
  {
    id: 'drift-king',
    title: 'Drift King',
    description: 'Become the ultimate drift master in this high-octane racing experience. Master the art of controlled sliding through challenging tracks, earn points for style and precision, and unlock new vehicles and customization options. With realistic physics, detailed car handling mechanics, and various track environments, Drift King delivers an authentic drifting experience that will satisfy both casual players and hardcore racing enthusiasts.',
    imageUrl: '/images/games/uploads/Drift-King.jpg',
    categories: ['Racing', 'Drift', 'Sports'],
    rating: 4.9,
    playCount: 342870,
    url: 'https://www.onlinegames.io/games/2024/unity/drift-king/index.html'
  },
  {
    id: 'love-tester',
    title: 'Love Tester',
    description: 'Find out your romantic compatibility in this fun and lighthearted love calculator game. Enter your name and your crush\'s name to receive a compatibility percentage and personalized message about your potential relationship. Try different combinations, share results with friends, and enjoy the playful predictions about your love life. With its charming graphics, entertaining responses, and social sharing features, Love Tester delivers a delightful casual experience perfect for curious romantics and friendly gatherings.',
    imageUrl: '/images/games/uploads/Love-Tester.jpg',
    categories: ['Casual', 'Romance', 'Social'],
    rating: 4.6,
    playCount: 287560,
    url: 'https://www.onlinegames.io/games/2023/htm5/love-tester/index.html'
  },
  {
    id: 'masked-special-forces',
    title: 'Masked Special Forces',
    description: 'Lead an elite tactical unit in high-stakes counter-terrorism operations around the world. Take command of a specialized squad as you plan and execute dangerous missions involving hostage rescue, intelligence gathering, and neutralizing threats. Customize your operatives with various weapons, equipment, and special abilities to tackle different tactical situations. With its strategic gameplay, realistic military scenarios, and diverse mission objectives, Masked Special Forces delivers an intense tactical experience that rewards careful planning and precise execution.',
    imageUrl: '/images/games/uploads/Masked-Special-Forces.jpg',
    categories: ['Action', 'Shooter', 'Tactical'],
    rating: 4.8,
    playCount: 324780,
    url: 'https://www.onlinegames.io/games/2024/code/masked-special-forces/index.html'
  },
  {
    id: 'tank-arena',
    title: 'Tank Arena',
    description: 'Command powerful battle tanks in this explosive multiplayer combat game. Choose from various tank classes - from agile light tanks to devastating heavy tanks - each with unique weapons and abilities. Engage in team-based battles across diverse arenas, capturing control points and eliminating enemy vehicles. Upgrade your tanks, unlock new weapons, and customize your loadout to suit your combat style. With its tactical gameplay, destructible environments, and competitive multiplayer matches, Tank Arena delivers an action-packed experience that combines strategy and firepower.',
    imageUrl: '/images/games/uploads/Tank-Arena.jpg',
    categories: ['Action', 'Vehicle Combat', 'Multiplayer'],
    rating: 4.8,
    playCount: 345670,
    url: 'https://www.onlinegames.io/games/2022/unity/tank-arena/index.html'
  },
  {
    id: 'kings-io',
    title: 'Kings io',
    description: 'Claim your throne in this multiplayer medieval battle royale. Control your royal character as you collect gems to grow your power, eliminate other players, and become the most powerful ruler in the arena. Use special abilities, form temporary alliances, and employ tactical maneuvers to outlast your opponents. With its accessible controls, quick matches, and competitive gameplay, Kings io offers an addictive .io experience with a medieval kingdom twist that will keep you coming back for "just one more match."',
    imageUrl: '/images/games/uploads/Kings-io.jpg',
    categories: ['Multiplayer', 'Battle Royale', 'Medieval'],
    rating: 4.7,
    playCount: 378650,
    url: 'https://www.onlinegames.io/games/2023/unity/kings-io/index.html'
  },
  {
    id: 'squid-race-simulator',
    title: 'Squid Race Simulator',
    description: 'Take part in intense elimination races inspired by popular survival game shows. Compete against dozens of other players across unique obstacle courses where only the quickest and most agile contestants will survive. Navigate treacherous platforms, avoid deadly traps, and outmaneuver your opponents to reach the finish line. With its colorful visuals, physics-based gameplay, and increasingly challenging race tracks, Squid Race Simulator delivers a thrilling multiplayer experience that tests your reflexes and split-second decision making.',
    imageUrl: '/images/games/uploads/Squid-Race-Simulator.jpg',
    categories: ['Racing', 'Obstacle Course', 'Multiplayer'],
    rating: 4.7,
    playCount: 345780,
    url: 'https://www.onlinegames.io/games/2023/unity/squid-race-simulator/index.html'
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
    description: 'Take control of unique monster characters in this roguelike survival game. Choose from a variety of monsters - each with distinct abilities and playstyles - as you battle against endless waves of hunters trying to eliminate your kind. Collect experience to level up, select powerful upgrades, and survive as long as possible against increasingly difficult opponents. With its pixel art style, diverse monster types, and addictive progression system, Monster Survivors offers a compelling roguelike experience with a monstrous twist.',
    imageUrl: '/images/games/uploads/Monster-Survivors.jpg',
    categories: ['Roguelike', 'Survival', 'Action'],
    rating: 4.8,
    playCount: 325670,
    url: 'https://www.onlinegames.io/games/2024/code/monster-survivors/index.html'
  },
  {
    id: 'find-it',
    title: 'Find It',
    description: 'Test your observation skills in this challenging hidden object game. Search for specific items cleverly concealed within detailed scenes across various themes and locations. Complete timed challenges, solve visual puzzles, and train your eye for detail as you progress through hundreds of levels. With its beautiful hand-drawn artwork, diverse environments, and progressively challenging objectives, Find It offers a relaxing yet engaging experience that will sharpen your attention to detail and visual perception.',
    imageUrl: '/images/games/uploads/Find-It.jpg',
    categories: ['Hidden Object', 'Puzzle', 'Observation'],
    rating: 4.7,
    playCount: 287650,
    url: 'https://www.onlinegames.io/games/2023/htm/find-it/index.html'
  },
  {
    id: 'tile-match',
    title: 'Tile Match',
    description: 'Test your memory and pattern recognition in this elegant tile-matching puzzle game. Flip colorful tiles to find matching pairs and clear the board within the time limit. Progress through various themes with increasingly complex layouts and special tile types that add new challenges. With its clean design, soothing soundtrack, and gradually increasing difficulty, Tile Match offers a relaxing yet mentally stimulating experience perfect for short gaming sessions or lengthy puzzle-solving marathons.',
    imageUrl: '/images/games/uploads/Tile-Match.jpg',
    categories: ['Puzzle', 'Memory', 'Matching'],
    rating: 4.6,
    playCount: 276540,
    url: 'https://www.onlinegames.io/games/2023/html/tile-match/index.html'
  },
  {
    id: 'voxel-world',
    title: 'Voxel World',
    description: 'Explore a boundless voxel universe where creativity knows no limits. Mine resources, craft tools, build structures, and survive in a procedurally generated world full of adventures and dangers. Create anything from simple shelters to elaborate castles, or dive into caves to discover rare materials and mysterious creatures. With its endless possibilities, multiplayer capabilities, and regular content updates, Voxel World offers an immersive sandbox experience that rewards exploration, creativity, and survival skills.',
    imageUrl: '/images/games/uploads/Voxel-World.jpg',
    categories: ['Sandbox', 'Building', 'Adventure'],
    rating: 4.9,
    playCount: 425780,
    url: 'https://www.onlinegames.io/games/2023/unity/voxel-world/index.html'
  },
  {
    id: 'crazy-moto-racing',
    title: 'Crazy Moto Racing',
    description: 'Experience heart-pumping motorcycle racing with an extreme twist. Race at breakneck speeds through dangerous tracks filled with ramps, loops, and obstacles that defy physics and common sense. Perform spectacular stunts to earn boost and overtake opponents while navigating through increasingly hazardous environments. With its arcade-style controls, exaggerated physics, and adrenaline-fueled races, Crazy Moto Racing delivers a high-octane experience that prioritizes fun over realism.',
    imageUrl: '/images/games/uploads/Crazy-Moto-Racing.jpg',
    categories: ['Racing', 'Motorcycle', 'Stunt'],
    rating: 4.7,
    playCount: 336780,
    url: 'https://www.onlinegames.io/games/2022/unity/crazy-moto-racing/index.html'
  },
  {
    id: 'monster-truck-booster',
    title: 'Monster Truck Booster',
    description: 'Take control of massive monster trucks in this physics-based driving game. Power through obstacle courses, perform incredible jumps, and crush everything in your path as you drive overpowered vehicles with exaggerated suspension and power. Complete stunt challenges, race against time, and unlock bigger, more outrageous trucks with unique abilities. With its realistic physics engine, destructible environments, and increasingly challenging tracks, Monster Truck Booster offers an exhilarating driving experience that celebrates the over-the-top nature of monster truck events.',
    imageUrl: '/images/games/uploads/Monster-Truck-Booster.jpg',
    categories: ['Driving', 'Monster Trucks', 'Stunts'],
    rating: 4.8,
    playCount: 315670,
    url: 'https://www.onlinegames.io/games/2024/unity/monster-truck-booster/index.html'
  },
  {
    id: 'fnf-funk-3d',
    title: 'FNF Funk 3D',
    description: 'Experience the popular rhythm game in exciting 3D with this fan-made tribute. Match arrow keys to the beat in musical battles against colorful opponents. Face increasingly challenging song patterns, discover new tracks, and showcase your rhythm skills through progressively difficult weeks of content. With its vibrant 3D visuals, catchy original songs, and addictive rhythm gameplay, FNF Funk 3D offers a fresh perspective on the beloved indie music game that will test your timing and coordination.',
    imageUrl: '/images/games/uploads/FNF-Funk-3D.jpg',
    categories: ['Rhythm', 'Music', '3D'],
    rating: 4.8,
    playCount: 358740,
    url: 'https://www.onlinegames.io/games/2022/htm5/fnf-funk-3d/index.html'
  },
  {
    id: 'urban-sniper',
    title: 'Urban Sniper',
    description: 'Take on the role of an elite marksman in this precise shooting simulation set in urban environments. Complete various missions requiring surgical accuracy, timing, and tactical decision-making as you eliminate high-value targets from strategic vantage points. Account for distance, wind, and moving targets while remaining undetected. With its realistic ballistics, detailed urban settings, and increasingly complex mission objectives, Urban Sniper delivers an intense experience that focuses on the calculating, methodical aspects of precision shooting.',
    imageUrl: '/images/games/uploads/Urban-Sniper.jpg',
    categories: ['Shooting', 'Simulation', 'Tactical'],
    rating: 4.7,
    playCount: 315680,
    url: 'https://www.onlinegames.io/games/2022/unity/urban-sniper/index.html'
  },
  {
    id: 'owl-and-rabbit-fashion',
    title: 'Owl and Rabbit Fashion',
    description: 'Style adorable animal characters in this charming fashion game featuring an owl and rabbit duo. Dress these cute woodland friends in hundreds of fashionable outfits, accessories, and costumes for various occasions and themed events. Create perfect looks for seasonal activities, special celebrations, and everyday adventures. With its enchanting animal characters, extensive wardrobe selection, and delightful animations, Owl and Rabbit Fashion offers a wholesome dress-up experience that celebrates creativity and animal charm.',
    imageUrl: '/images/games/uploads/Owl-and-Rabbit-Fashion.jpg',
    categories: ['Fashion', 'Dress Up', 'Animals', 'Kids'],
    rating: 4.6,
    playCount: 245670,
    url: 'https://www.onlinegames.io/games/2024/jul/owl-and-rabbit-fashion/index.html'
  },
  {
    id: 'mini-shooters',
    title: 'Mini Shooters',
    description: 'Command tiny but mighty soldiers in this action-packed top-down shooter. Control your miniature hero through fast-paced missions filled with enemies, obstacles, and objectives. Choose from various character classes with unique weapons and abilities, and team up with friends in cooperative gameplay modes. With its charming miniature aesthetics, accessible controls, and frantic combat scenarios, Mini Shooters delivers a bite-sized shooting experience that packs a surprising tactical depth into its diminutive package.',
    imageUrl: '/images/games/uploads/Mini-Shooters.jpg',
    categories: ['Action', 'Shooter', 'Top-Down'],
    rating: 4.7,
    playCount: 287650,
    url: 'https://www.onlinegames.io/games/2023/htm5/mini-shooters/index.html'
  },
  {
    id: 'marco',
    title: 'Marco',
    description: 'Embark on a nostalgic run-and-gun adventure inspired by classic arcade shooters. Take control of Marco, a lone soldier on a mission to rescue hostages and defeat an evil military organization. Fight through diverse environments, collect weapon upgrades, and face challenging boss battles. With its retro pixel art style, responsive controls, and action-packed gameplay, Marco delivers a perfect homage to the golden age of arcade shooters that will appeal to both veteran gamers and newcomers to the genre.',
    imageUrl: '/images/games/uploads/Marco.jpg',
    categories: ['Action', 'Run and Gun', 'Arcade'],
    rating: 4.8,
    playCount: 267540,
    url: 'https://www.onlinegames.io/games/2022/html/marco/index.html'
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
    description: 'Defend your stronghold against never-ending waves of enemies in this compelling tower defense game. Build and upgrade various defensive structures, deploy special abilities, and manage resources efficiently to repel increasingly powerful attackers. Develop your strategy as you face diverse enemy types that require different counter measures. With its balanced progression system, diverse defensive options, and perpetually escalating challenge, Endless Siege offers a strategic experience that tests your planning and adaptation skills through an unlimited number of increasingly difficult waves.',
    imageUrl: '/images/games/uploads/Endless-Siege.jpg',
    categories: ['Strategy', 'Tower Defense', 'Endless'],
    rating: 4.7,
    playCount: 298760,
    url: 'https://www.onlinegames.io/games/2021/html5/endless-siege/index.html'
  },
  {
    id: 'battleship-war',
    title: 'Battleship War',
    description: 'Experience the classic board game of naval strategy in this digital adaptation. Place your fleet on the grid and take turns firing at your opponent\'s hidden ships in exciting turn-based battles. Play against challenging AI opponents or real players in online matches. With its faithful recreation of the beloved tabletop game, clean interface, and both casual and ranked competitive modes, Battleship War delivers an authentic battleship experience that combines luck, strategy, and deductive reasoning.',
    imageUrl: '/images/games/uploads/Battleship-War.jpg',
    categories: ['Strategy', 'Board Game', 'Naval', 'Classic'],
    rating: 4.7,
    playCount: 234560,
    url: 'https://www.onlinegames.io/games/2023/code/battleship-war/index.html'
  },
  {
    id: 'bloons-tower-defense-3',
    title: 'Bloons Tower Defense 3',
    description: 'Pop your way through increasingly challenging waves of balloons in this beloved tower defense game. Place various monkey towers along the path, each with unique abilities to pop different types of bloons. Upgrade your defenses, manage your resources, and deploy special abilities at critical moments to prevent bloons from reaching the exit. With its colorful graphics, diverse monkey types, and progressively complex challenges, Bloons Tower Defense 3 offers an addictive and strategic experience that has captivated players for years.',
    imageUrl: '/images/games/uploads/Bloons-Tower-Defense-3.jpg',
    categories: ['Strategy', 'Tower Defense', 'Arcade'],
    rating: 4.9,
    playCount: 386750,
    url: 'https://www.onlinegames.io/games/2024/flash/bloons-tower-defense-3/index.html'
  },
  {
    id: 'angela-all-season-fashion',
    title: 'Angela All Season Fashion',
    description: 'Join the stylish cat Angela in this fabulous fashion game featuring outfits for every season. Dress Angela in trendy clothes for spring, summer, autumn, and winter, selecting from hundreds of fashion items including tops, bottoms, accessories, and hairstyles. Create the perfect look for various themed events and photoshoots throughout the year. With its charming character animations, extensive wardrobe options, and seasonal fashion challenges, Angela All Season Fashion delivers a delightful dress-up experience that celebrates style across all seasons.',
    imageUrl: '/images/games/uploads/Angela-All-Season-Fashion.jpg',
    categories: ['Casual', 'Fashion', 'Dress Up', 'Kids'],
    rating: 4.6,
    playCount: 276540,
    url: 'https://www.onlinegames.io/games/2024/jul/angela-all-season-fashion/index.html'
  },
  {
    id: 'bandits-multiplayer-pvp',
    title: 'Bandits Multiplayer PvP',
    description: 'Battle against other players in this action-packed multiplayer shooter set in a wild west environment. Choose your bandit character, equip powerful weapons, and compete in various game modes including deathmatch, capture the gold, and territory control. Master different character abilities, team up with friends, and climb the global leaderboards to establish your reputation. With its detailed western environments, responsive gunplay, and competitive gameplay, Bandits Multiplayer PvP offers an exciting online shooting experience with a unique frontier twist.',
    imageUrl: '/images/games/uploads/Bandits-Multiplayer-PvP.jpg',
    categories: ['Action', 'Shooter', 'Multiplayer', 'Western'],
    rating: 4.8,
    playCount: 307850,
    url: 'https://www.onlinegames.io/games/2021/unity2/bandits-multiplayer-pvp/index.html'
  },
  {
    id: 'stunt-simulator-multiplayer',
    title: 'Stunt Simulator Multiplayer',
    description: 'Perform incredible vehicle stunts and compete against other players in this adrenaline-fueled multiplayer stunt game. Drive a variety of vehicles including cars, motorcycles, and monster trucks across elaborate stunt parks filled with jumps, loops, and obstacles. Create custom stunts, challenge friends to beat your scores, and participate in community stunt competitions. With its realistic physics engine, diverse vehicles with unique handling, and extensive customization options, Stunt Simulator Multiplayer delivers an exciting playground for stunt enthusiasts to showcase their most impressive tricks.',
    imageUrl: '/images/games/uploads/Stunt-Simulator-Multiplayer.jpg',
    categories: ['Racing', 'Simulation', 'Multiplayer', 'Stunts'],
    rating: 4.7,
    playCount: 289760,
    url: 'https://www.onlinegames.io/games/2021/unity/stunt-simulator-multiplayer/index.html'
  },
  {
    id: 'iconic-celebrity-look',
    title: 'Iconic Celebrity Look',
    description: 'Channel your inner stylist and recreate famous celebrity looks in this glamorous fashion and makeup game. Study iconic celebrity outfits and then use your creativity to recreate or reimagine these styles with an extensive collection of clothing, makeup, and accessories. Participate in themed fashion challenges inspired by red carpet events, music videos, and movie premieres. With its stunning graphics, detailed cosmetic tools, and celebrity-inspired themes, Iconic Celebrity Look offers a premium fashion experience for players who appreciate glamour and high-end style.',
    imageUrl: '/images/games/uploads/Iconic-Celebrity-Look.jpg',
    categories: ['Fashion', 'Celebrity', 'Dress Up', 'Makeup'],
    rating: 4.7,
    playCount: 267840,
    url: 'https://www.onlinegames.io/games/2024/jul/iconic-celebrity-look/index.html'
  },
  {
    id: 'burnout-racers',
    title: 'Burnout Racers',
    description: 'Push your driving skills to the extreme in this high-speed racing game focused on dangerous stunts and spectacular crashes. Compete in various race modes including circuit races, elimination events, and crash challenges where destruction is the goal. Perform daring drifts, jumps, and near-misses to build your boost meter and achieve incredible speeds. With its detailed damage modeling, impressive crash physics, and adrenaline-pumping gameplay, Burnout Racers delivers an intense racing experience that rewards both skillful driving and spectacular risk-taking.',
    imageUrl: '/images/games/uploads/Burnout-Racers.jpg',
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
  const isDevelopment = process.env.NODE_ENV === 'development';
  // Vercel部署URL
  const vercelUrl = 'https://onlinegames-rho.vercel.app';

  return games.map(game => {
    // 如果图片URL已经是完整URL，保持不变
    if (game.imageUrl.startsWith('http')) {
      return game;
    }
    
    // 相对路径处理
    const imageUrl = game.imageUrl.startsWith('/') 
      ? game.imageUrl 
      : `/${game.imageUrl}`;
    
    // 本地环境使用相对路径，生产环境使用完整URL
    return {
      ...game,
      imageUrl: isDevelopment ? imageUrl : `${vercelUrl}${imageUrl}`
    };
  });
}

// 更新这个函数以处理游戏URL
export function getGameImageUrl(relativePath: string): string {
  const isDevelopment = process.env.NODE_ENV === 'development';
  
  // 如果已经是完整URL，直接返回
  if (relativePath.startsWith('http')) {
    return relativePath;
  }
  
  // 处理文件名大小写问题
  const fileName = relativePath.split('/').pop() || '';
  const directory = relativePath.substring(0, relativePath.lastIndexOf('/') + 1);
  
  // 将第一个字母大写，其余保持不变
  const correctedFileName = fileName.split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('-');
  
  const correctedPath = directory + correctedFileName;
  
  // 本地开发环境使用相对路径
  if (isDevelopment) {
    return correctedPath;
  }
  
  // 生产环境使用完整URL
  return `https://onlinegames-rho.vercel.app${correctedPath}`;
} 