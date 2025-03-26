import React from 'react';
import Link from 'next/link';
import { games } from '@/lib/games';
import type { Game } from '@/lib/games';
import StarRating from '@/components/StarRating';
import GameEmbed from '@/components/GameEmbed';
import { notFound } from 'next/navigation';

interface GameParams {
  id: string;
}

interface GameTips {
  issues: string[];
  scoring: string[];
  tips: string[];
}

// Game detail page
export default function GamePage({ params }: { params: GameParams }) {
  const gameId = params.id;
  const gameData = games.find(g => g.id === gameId);
  
  // If the game is not found, show not found message
  if (!gameData) {
    return notFound();
  }
  
  // Function to get game tips based on categories or gameId
  const getGameTips = (categories: string[]): GameTips => {
    // 针对特定游戏的规则与提示
    // 根据游戏ID提供特定内容
    if (gameId === 'monster-survivors') {
      return {
        issues: [
          "The difficulty increases significantly over time, making survival progressively harder",
          "Managing your position on the screen becomes challenging when many enemies surround you",
          "Some enemy types are faster or have special abilities that make them particularly dangerous",
          "Limited upgrade options per level can make build planning difficult"
        ],
        scoring: [
          "Score points for each enemy defeated, with larger or more dangerous enemies worth more points",
          "Survive longer to earn exponentially higher scores",
          "Collect all gems dropped by enemies to maximize score multipliers",
          "Complete achievement milestones for bonus score rewards"
        ],
        tips: [
          "Prioritize movement speed upgrades early to help with dodging enemies",
          "Focus on a few complementary weapons rather than spreading upgrades too thin",
          "Move in circular patterns to group enemies together for area damage attacks",
          "When overwhelmed, use the edges of the map strategically to funnel enemies into a manageable group",
          "Pay attention to the cooldown times of your abilities and plan your movements accordingly"
        ]
      };
    } else if (gameId === 'find-it') {
      return {
        issues: [
          "Some objects are very well hidden or blend into the background",
          "Time limits on certain levels create pressure that can lead to mistakes",
          "Hidden objects sometimes appear smaller or in unexpected orientations",
          "Limited hints available per level means careful usage is necessary"
        ],
        scoring: [
          "Earn points for each object found, with faster finds worth more points",
          "Complete levels under the target time for time bonus multipliers",
          "Using fewer hints preserves your score multiplier",
          "Chain consecutive quick finds for combo bonuses"
        ],
        tips: [
          "Scan the scene methodically from left to right, top to bottom",
          "Look for objects in places that make logical sense (books on shelves, cups on tables)",
          "Check shadows, reflections, and background patterns for cleverly hidden items",
          "Use hints strategically on the most difficult items or when you're running out of time",
          "When stuck, try unfocusing your eyes or looking at the scene from a different angle"
        ]
      };
    } else if (gameId === 'tile-match') {
      return {
        issues: [
          "Tiles can only be connected if the path has three or fewer turns",
          "Later levels have complex layouts that make finding valid connections challenging",
          "Time limits on certain game modes add pressure to find matches quickly",
          "Some tiles may be blocked or require special conditions to match"
        ],
        scoring: [
          "Points awarded for each successful match, with quicker matches worth more",
          "Matching special tiles or power-ups provides bonus points",
          "Chain multiple matches in quick succession for combo multipliers",
          "Complete levels with remaining time for time bonus points"
        ],
        tips: [
          "Focus on clearing tiles from the edges and corners first to open up the board",
          "Look for matches that will unblock key tiles or open paths for future matches",
          "When multiple matches are available, prioritize those that will create better connections for remaining tiles",
          "Use hints when you're stuck, but save them for truly difficult situations",
          "In timed modes, quickly scan for obvious matches first before focusing on harder connections"
        ]
      };
    } else if (gameId === 'voxel-world') {
      return {
        issues: [
          "Resource management becomes challenging in survival mode",
          "Building complex structures requires planning and precision",
          "Night cycles introduce dangerous enemies that can destroy your creations",
          "Large worlds can be disorienting without proper navigation tools"
        ],
        scoring: [
          "Creative mode has no scoring system, focusing instead on building freedom",
          "Survival mode awards points for days survived, resources gathered, and structures built",
          "Exploration achievements unlock for discovering new biomes and rare resources",
          "Combat scoring based on enemy types defeated and defense success"
        ],
        tips: [
          "Always carry torches or light sources to illuminate your path and prevent monster spawns",
          "Build a secure shelter before the first night cycle begins",
          "Create landmarks or use natural features to help with navigation",
          "Focus on gathering essential resources (wood, stone, food) early in survival mode",
          "For large building projects, plan on paper or create a small-scale model first"
        ]
      };
    } else if (gameId === 'crazy-moto-racing') {
      return {
        issues: [
          "Controlling motorcycles at high speeds requires precision and quick reflexes",
          "Performing stunts while maintaining race position is challenging",
          "Various track surfaces (dirt, asphalt, sand) affect handling differently",
          "Weather conditions like rain or fog can reduce visibility and traction"
        ],
        scoring: [
          "Finish position in races determines primary score (1st place earns maximum points)",
          "Performing stunts and tricks during races provides bonus points",
          "Clean racing (avoiding crashes or going off-track) maintains a score multiplier",
          "Time trials award points based on completion time compared to target times"
        ],
        tips: [
          "Master the brake-drift technique for taking sharp turns without losing much speed",
          "Use nitro boosts strategically, saving them for straightaways or after turns",
          "Perform basic stunts during small jumps and save complex stunts for bigger air time",
          "Study track layouts to anticipate turns and jumps for optimal racing lines",
          "Upgrade acceleration and handling before top speed for better overall performance"
        ]
      };
    } else if (gameId === 'monster-truck-booster') {
      return {
        issues: [
          "Physics-based controls require practice to master truck balance",
          "Some obstacles and jumps need precise approach speed and angle",
          "Fuel management adds strategic depth but can limit long runs",
          "Larger trucks offer more power but can be harder to control precisely"
        ],
        scoring: [
          "Complete missions and challenges for primary point rewards",
          "Perform flips, rolls, and stunts for bonus points (more complex stunts = higher scores)",
          "Distance traveled in endless mode contributes to overall score",
          "Collecting coins and power-ups throughout levels adds to point total"
        ],
        tips: [
          "Balance throttle control to prevent wheelies that slow you down",
          "Use the back-flip technique to clear large gaps (accelerate up ramps, then pull back)",
          "Focus on upgrading suspension first for better landing control and jump recovery",
          "Maintain momentum through hill climbs by approaching with sufficient speed",
          "In mission mode, scout the level first to understand objectives before going for speed runs"
        ]
      };
    } else if (gameId === 'fnf-funk-3d') {
      return {
        issues: [
          "Timing is crucial - the 3D perspective can make note timing judgment more challenging",
          "More complex songs have overlapping arrow patterns that require quick reflexes",
          "Some special notes have unique mechanics that differ from standard gameplay",
          "Performance anxiety can impact timing - staying calm is essential"
        ],
        scoring: [
          "Perfect hits award maximum points per note",
          "Consecutive perfect hits build combo multipliers for higher scores",
          "Missing notes breaks your combo and reduces health",
          "Song completion percentage and accuracy determine final rating"
        ],
        tips: [
          "Focus on the arrows at their hit point rather than when they first appear",
          "Practice difficult sections in slower modes before attempting at full speed",
          "Use visual cues in addition to audio - don't rely solely on the beat",
          "For long note holds, concentrate on the release timing as well as the initial press",
          "Start with easier songs and gradually work up to more complex ones"
        ]
      };
    } else if (gameId === 'urban-sniper') {
      return {
        issues: [
          "Wind effects can dramatically alter bullet trajectory at long distances",
          "Target movement patterns become less predictable in later missions",
          "Limited ammunition requires careful shot planning",
          "Time-sensitive missions create pressure that can affect aim precision"
        ],
        scoring: [
          "Headshots award maximum points per target",
          "Bonus points for long-distance shots based on range",
          "Completing objectives within target time limits provides time bonus multipliers",
          "Mission completion without alerts or civilian casualties earns stealth bonuses"
        ],
        tips: [
          "Use the breathing control feature (hold shift) just before taking crucial shots",
          "Account for bullet drop at extreme distances by aiming slightly above the target",
          "Learn to read the wind indicator and adjust your aim accordingly",
          "Scout the entire area before taking your first shot to plan the optimal sequence",
          "For moving targets, aim slightly ahead of their movement (lead the target)"
        ]
      };
    } else if (gameId === 'owl-and-rabbit-fashion') {
      return {
        issues: [
          "Some clothing combinations may clash or not fit the desired style theme",
          "Limited inventory space in early gameplay restricts outfit possibilities",
          "Seasonal challenges require specific item types that may be difficult to obtain",
          "Some accessories have placement limitations with certain hairstyles"
        ],
        scoring: [
          "Matching themed outfits according to event requirements earns style points",
          "Complementary color schemes and accessory pairings provide harmony bonuses",
          "Unique combinations that still work well together earn creativity points",
          "Completing collection sets unlocks bonus points and special items"
        ],
        tips: [
          "Start with a focal piece (like a distinctive dress or top) and build around it",
          "Consider the character's coloring when selecting outfits - contrast often works well",
          "Save your favorite combinations as templates for future modifications",
          "Participate in daily challenges to earn rare items that expand your styling options",
          "Experiment with unexpected combinations - sometimes surprising pairings create the best looks"
        ]
      };
    } else if (gameId === 'draw-the-bird-path') {
      return {
        issues: [
          "Drawing paths too close to obstacles can result in birds hitting them during flight",
          "Wind currents and gravity affect the bird's trajectory beyond your drawn path",
          "Limited ink in some levels restricts the length of paths you can draw",
          "Timing challenges require precise path drawing to avoid moving hazards"
        ],
        scoring: [
          "Collect all stars along the journey for maximum level score",
          "Efficient paths that use minimal ink earn efficiency bonuses",
          "Quick level completion awards time bonus points",
          "Guiding multiple birds safely with a single path provides multiplier bonuses"
        ],
        tips: [
          "Draw smooth, curved paths rather than sharp angles for more predictable flight",
          "Use gravity to your advantage - let birds fall naturally when possible to conserve ink",
          "For moving obstacles, draw paths that account for their movement timing",
          "In levels with multiple birds, look for opportunities to create a single path that works for all",
          "When ink is limited, focus on creating the safest path rather than collecting every star"
        ]
      };
    } else if (gameId === 'mini-shooters') {
      return {
        issues: [
          "Fast-paced gameplay requires quick reflexes and situational awareness",
          "Some weapons have significant recoil that affects aim during rapid firing",
          "Map control becomes challenging when multiple opponents attack from different angles",
          "Limited ammo for special weapons necessitates careful resource management"
        ],
        scoring: [
          "Eliminating opponents awards points based on weapon used and distance",
          "Headshots and special eliminations provide bonus points",
          "Objective completion (capturing points, flag returns, etc.) offers substantial score rewards",
          "Consecutive eliminations without dying builds killstreak multipliers"
        ],
        tips: [
          "Learn each map's power-up spawn locations and time your movement to secure them",
          "Switch weapons according to engagement distance - shotguns for close range, rifles for distance",
          "Use the mini-map to track enemy movements and plan your approach",
          "Move unpredictably with jumps and direction changes to make yourself harder to hit",
          "In team modes, stay close to teammates for mutual support rather than rushing alone"
        ]
      };
    } else if (gameId === 'marco') {
      return {
        issues: [
          "Enemies attack in complex patterns that can be difficult to predict",
          "Limited ammunition for special weapons requires strategic usage",
          "Some boss fights have specific weak points that must be targeted",
          "Platforming sections require precise timing and jump control"
        ],
        scoring: [
          "Defeating enemies awards points based on enemy type and difficulty",
          "Collecting coins and treasures throughout levels adds to your score",
          "Completing levels quickly earns time bonus points",
          "Finishing levels with high health remaining provides survival bonuses"
        ],
        tips: [
          "Conserve special weapon ammunition for tough enemy clusters or boss fights",
          "Look for hidden areas by shooting suspicious walls or jumping to seemingly inaccessible places",
          "Learn enemy attack patterns to predict when it's safe to advance or attack",
          "Use elevation advantages by climbing to higher ground when possible",
          "In boss fights, focus on dodging first and attack only when there's a clear opening"
        ]
      };
    } else if (gameId === 'princesses-prom-night') {
      return {
        issues: [
          "Coordinating colors and styles across makeup, dress, and accessories can be challenging",
          "Some princess characters have specific style preferences that limit effective combinations",
          "Timed challenges require quick decision-making without sacrificing style quality",
          "Certain premium items need to be unlocked through gameplay achievements"
        ],
        scoring: [
          "Creating harmonious color schemes across the entire outfit earns style points",
          "Matching accessories with dress themes provides bonus points",
          "Selecting makeup that complements the princess's features adds beauty score",
          "Completing themed looks that match the prom's specific style earns event bonuses"
        ],
        tips: [
          "Start with the dress as the foundation and build the rest of the look around it",
          "Consider each princess's coloring (hair, skin tone, eye color) when selecting makeup",
          "Use the preview feature to test combinations before finalizing your choices",
          "For elegant looks, limit the color palette to 2-3 complementary colors",
          "Add one statement piece (like a dramatic necklace or tiara) as a focal point"
        ]
      };
    } else if (gameId === 'endless-siege') {
      return {
        issues: [
          "Different enemy types require specific tower counters for maximum effectiveness",
          "Resource management becomes critical in later waves with more powerful enemies",
          "Tower placement is permanent in most levels, requiring careful planning",
          "Fast enemies can slip through defenses if path coverage has gaps"
        ],
        scoring: [
          "Successfully defending against wave attacks earns survival points",
          "Efficiently eliminating enemies (using minimal resources) provides economy bonuses",
          "Building diversity and strategic tower combinations award strategy points",
          "Reaching milestone waves unlocks achievement score bonuses"
        ],
        tips: [
          "Focus on chokepoints where multiple paths converge for maximum tower efficiency",
          "Diversify your defenses to counter different enemy types (air, armored, fast)",
          "Upgrade existing towers strategically rather than always building new ones",
          "Use slowdown towers near the entrance to give damage towers more time to attack",
          "Save special abilities for emergency situations when enemies are about to break through"
        ]
      };
    } else if (gameId === 'battleship-war') {
      return {
        issues: [
          "Optimal ship placement strategies balance concealment with offensive positioning",
          "Random elements in opponent shooting patterns can sometimes overcome careful planning",
          "Time pressure in speed battle mode can lead to hasty decision making",
          "Campaign missions feature enemy AI with increasingly sophisticated tactics"
        ],
        scoring: [
          "Successfully sinking enemy ships awards points based on ship size",
          "Quick victories earn time bonus multipliers",
          "Minimizing hits on your own fleet provides survival score bonuses",
          "Completing special objectives in campaign mode offers mission achievement points"
        ],
        tips: [
          "Avoid placing ships in predictable patterns or straight lines",
          "After scoring a hit, try shots in all four directions to find the ship's orientation",
          "Place your largest ships (carriers, battleships) in less obvious positions",
          "Use the edges of the board strategically - many players avoid placing ships there",
          "In campaign mode, study the mission briefing carefully for hints about enemy fleet composition"
        ]
      };
    } else if (gameId === 'bloons-tower-defense-3') {
      return {
        issues: [
          "Different bloon types require specific tower types for efficient popping",
          "Limited space and resources force strategic choices about tower placement and upgrades",
          "Later rounds feature overwhelming numbers and special bloon types that can overwhelm unprepared defenses",
          "Some maps have multiple paths, making complete coverage challenging"
        ],
        scoring: [
          "Successfully completing rounds increases your score based on difficulty",
          "Popping bloons awards points based on bloon type and layer",
          "Maintaining lives until the end provides survival bonuses",
          "Using minimal resources while still succeeding earns efficiency points"
        ],
        tips: [
          "Place towers with larger attack radiuses near track intersections or loops",
          "Prioritize income-generating banana farms early for long-term resource advantage",
          "For lead bloons, ensure you have towers with lead-popping capabilities (bombs, wizards)",
          "Use 0-3 or 0-4 dart monkeys near the track entrance for cost-effective early defense",
          "Don't underestimate support towers like ice monkeys that can slow bloon progression"
        ]
      };
    } else if (gameId === 'angela-all-season-fashion') {
      return {
        issues: [
          "Each season requires different clothing strategies, making full wardrobe management important",
          "Special event challenges have strict time limits for styling completion",
          "Balancing fashion trends with Angela's personal style can be challenging",
          "Some rare seasonal items are only available during limited-time events"
        ],
        scoring: [
          "Creating seasonally appropriate outfits earns basic style points",
          "Matching accessories with the main outfit provides harmony bonuses",
          "Following current fashion trends in your designs offers trendsetter points",
          "Completing themed photoshoots with perfect styling earns photography score multipliers"
        ],
        tips: [
          "Build a versatile base wardrobe with items that can transition between seasons",
          "For winter looks, focus on layering pieces that create both warmth and style",
          "Summer outfits should balance vibrant colors with lightweight fabrics",
          "Save successful seasonal looks as templates to modify for future events",
          "Participate in daily styling challenges to expand your seasonal collection with rare items"
        ]
      };
    } else if (gameId === 'bandits-multiplayer-pvp') {
      return {
        issues: [
          "Balancing aggressive play with tactical positioning can be challenging",
          "Different terrain types affect movement speed and visibility",
          "Team coordination requires effective communication and role assignment",
          "Weapon recoil patterns take practice to master for accurate shooting"
        ],
        scoring: [
          "Eliminating enemy players awards points based on weapon used and distance",
          "Completing mode-specific objectives (capturing gold, controlling territories) provides primary score",
          "Assisting teammates in eliminations earns support points",
          "Survival time without dying contributes to streak bonuses"
        ],
        tips: [
          "Learn maps thoroughly to utilize cover positions and ambush points effectively",
          "Choose your character class based on team needs and your preferred playstyle",
          "In team modes, designate roles (defender, flanker, sniper) for more effective coordination",
          "Practice weapon control by firing in short bursts rather than continuous spray",
          "Use the terrain to your advantage - high ground provides better visibility and shooting angles"
        ]
      };
    } else if (gameId === 'stunt-simulator-multiplayer') {
      return {
        issues: [
          "Physics-based stunt mechanics require precise timing and vehicle control",
          "Different vehicles have unique handling characteristics that affect stunt execution",
          "Landing stunts successfully demands proper angle adjustment mid-air",
          "Creating original stunts that impress judges requires creativity and technical skill"
        ],
        scoring: [
          "Successful stunt execution awards base points according to difficulty",
          "Style elements (clean landing, maintaining speed) provide multipliers",
          "Originality in custom stunt creation earns innovation bonuses",
          "Chaining multiple stunts together without stopping builds combo scores"
        ],
        tips: [
          "Master the basics (jumps, flips, spins) before attempting complex combination stunts",
          "Use the practice mode to perfect your timing without competition pressure",
          "For motorcycles, balance is crucial - learn to control your bike's orientation in the air",
          "When creating custom stunts, focus on both visual impressiveness and technical difficulty",
          "Study other players' successful stunts to learn new techniques and combinations"
        ]
      };
    } else if (gameId === 'iconic-celebrity-look') {
      return {
        issues: [
          "Recreating celebrity features requires attention to subtle details in makeup application",
          "Some iconic looks require specific items that must be unlocked through gameplay",
          "Balancing faithful recreation with personal creative touches can be challenging",
          "Fashion trends change rapidly, requiring constant adaptation of styling techniques"
        ],
        scoring: [
          "Accuracy in recreating the celebrity's signature look earns authenticity points",
          "Creative adaptations that still capture the essence of the original style receive innovation bonuses",
          "Attention to detailed elements (accessories, makeup, hair) provides precision score",
          "Community ratings of your completed looks contribute to popularity multipliers"
        ],
        tips: [
          "Study reference photos carefully, paying attention to color palettes and proportions",
          "Focus on one standout feature (bold lips, dramatic eyes) as the anchor for the look",
          "Use the layering tools for makeup to build depth and dimension gradually",
          "For red carpet recreations, the hairstyle is often as important as the outfit itself",
          "Share your best looks in community challenges to gain feedback and inspiration"
        ]
      };
    } else if (gameId === 'burnout-racers') {
      return {
        issues: [
          "Balancing speed with control becomes increasingly difficult on complex tracks",
          "Damage accumulation affects vehicle handling and performance",
          "Risk assessment for stunts and aggressive driving requires split-second decisions",
          "Traffic and obstacle patterns vary between races, requiring adaptability"
        ],
        scoring: [
          "Race position determines base points (1st place earning maximum)",
          "Performing stunts, drifts, and near-misses builds boost multipliers",
          "Causing spectacular crashes in crash mode awards points based on damage value",
          "Beating rival racers with style bonuses (overtaking while drifting, etc.) provides rivalry points"
        ],
        tips: [
          "Master the drift boost technique - start a drift early into corners and maintain it for boost rewards",
          "Learn track shortcuts but assess risk vs. reward before attempting them at high speeds",
          "In crash events, aim for vehicles that will create chain reaction crashes for maximum points",
          "Use your boost strategically - save it for straightaways where you can maximize speed gains",
          "When heavily damaged, adjust your driving style to compensate for compromised handling"
        ]
      };
    } else if (gameId === '4-winds') {
      // ... existing code ...
    }

    // For default case
    return {
      issues: [
        "Controls may require some practice to master",
        "Some levels increase in difficulty quickly",
        "Watch out for time limits on certain challenges",
        "Make sure to save your progress regularly",
        "Special items and power-ups can help in difficult sections"
      ],
      scoring: [
        "Base points: Core gameplay achievements",
        "Combo multipliers: Consecutive successful actions",
        "Level completion: Time and performance bonuses",
        "Collection completeness: Finding all items",
        "Challenge modes: Special scoring rules"
      ],
      tips: [
        "Start with tutorial levels to learn the basics",
        "Practice makes perfect - replay levels to improve",
        "Explore all areas thoroughly for hidden bonuses",
        "Use power-ups strategically at difficult points",
        "Learn from failures and adapt your strategy",
        "Take your time to plan before acting quickly"
      ]
    };
  };
  
  // Get similar games based on categories
  const getSimilarGames = (currentGame: Game): Game[] => {
    // Find games that share at least one category with the current game
    return games
      .filter(game => 
        game.id !== currentGame.id && // Exclude current game
        game.categories.some(category => 
          currentGame.categories.includes(category)
        )
      )
      .sort((a, b) => {
        // Count shared categories to prioritize games with more category matches
        const aSharedCategories = a.categories.filter(c => currentGame.categories.includes(c)).length;
        const bSharedCategories = b.categories.filter(c => currentGame.categories.includes(c)).length;
        
        // Sort first by number of shared categories, then by rating
        if (bSharedCategories !== aSharedCategories) {
          return bSharedCategories - aSharedCategories;
        }
        return b.rating - a.rating;
      })
      .slice(0, 4); // Get top 4 similar games
  };
  
  const similarGames = getSimilarGames(gameData);
  
  // Get appropriate game tips based on categories
  const gameTips = getGameTips(gameData.categories);
  
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation bar */}
      <header className="bg-black border-b border-gray-800 py-4 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">
            <span className="text-amber-500">Online</span>
            <span className="text-white">Games.wiki</span>
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-amber-500 transition-colors">Home</Link>
            <Link href="/games" className="hover:text-amber-500 transition-colors">All Games</Link>
            <Link href="/categories" className="hover:text-amber-500 transition-colors">Categories</Link>
            <Link href="/leaderboard" className="hover:text-amber-500 transition-colors">Leaderboard</Link>
            <Link href="/about" className="hover:text-amber-500 transition-colors">About Us</Link>
          </nav>
        </div>
      </header>
      
      <main className="container mx-auto py-8 px-4">
        {/* Game title and information */}
        <div className="mb-4">
          <h1 className="text-3xl font-bold">{gameData.title}</h1>
          <div className="flex items-center gap-3 mt-2">
            <div className="flex items-center">
              <span className="text-amber-500 mr-1">★</span>
              <span>{gameData.rating.toFixed(1)}</span>
            </div>
            {gameData.categories.map((category) => (
              <span key={category} className="bg-gray-800 text-white text-xs px-3 py-1 rounded-full">
                {category}
              </span>
            ))}
            <span className="text-gray-400">{gameData.playCount.toLocaleString()} players online</span>
          </div>
        </div>
      
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Left side game area */}
          <div className="lg:col-span-3">
            {/* Game area */}
            <div className="relative bg-purple-900 rounded-lg overflow-hidden mb-6">
              <div className="w-full" style={{ position: 'relative', height: '75vh', overflow: 'hidden' }}>
                <GameEmbed 
                  gameUrl={gameData.url}
                  title={gameData.title}
                />
              </div>
            </div>

            {/* Game description */}
            <div>
              <h2 className="text-2xl font-bold mb-3 uppercase">{gameData.title.toUpperCase()}</h2>
              <p className="text-gray-300 mb-6">
                {gameData.description}
              </p>
            </div>
          </div>
          
          {/* Right side game information */}
          <div>
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-6 mb-6">
              <h2 className="text-xl font-bold mb-4">Game Statistics</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Rating:</span>
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span key={star} className={star <= Math.round(gameData.rating) ? 'text-amber-500' : 'text-gray-600'}>★</span>
                    ))}
                    <span className="ml-2 text-white">{gameData.rating.toFixed(1)}</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Players:</span>
                  <span className="text-white">{gameData.playCount.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Difficulty:</span>
                  <span className="text-amber-500">Easy to Hard</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Released:</span>
                  <span className="text-white">2023</span>
                </div>
              </div>
            </div>
            
            {/* Similar games */}
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-6 mb-6">
              <h2 className="text-xl font-bold mb-4">Similar Games</h2>
              {similarGames.slice(0, 3).map(game => (
                <Link href={`/games/${game.id}`} key={game.id} className="flex items-center gap-3 bg-gray-700/50 rounded-lg p-2 mb-2 hover:bg-gray-700">
                  <img src={game.imageUrl} alt={game.title} className="w-12 h-12 rounded object-cover" />
                  <div>
                    <div className="font-medium text-white">{game.title}</div>
                    <div className="text-sm text-amber-500">★ {game.rating.toFixed(1)}</div>
                  </div>
                </Link>
              ))}
            </div>
            
            {/* Share game */}
            <div className="bg-amber-500 text-black rounded-lg p-6">
              <h2 className="text-xl font-bold mb-2">Share This Game</h2>
              <p className="mb-4 text-sm">Share this fun game with your friends!</p>
              <div className="flex justify-center gap-4">
                <button className="p-2 bg-white rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#1DA1F2"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                </button>
                <button className="p-2 bg-white rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#4267B2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </button>
                <button className="p-2 bg-white rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#E4405F"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Game guide and tips */}
        <div className="mt-8">
          <div className="bg-gray-900 rounded-lg p-6 mb-6">
            <div className="flex items-center mb-4">
              <span className="bg-red-500 text-white w-7 h-7 rounded-full flex items-center justify-center mr-2 text-sm">N</span>
              <h2 className="text-xl font-bold inline-block">Game Tips</h2>
            </div>
            <ul className="list-disc pl-5 text-gray-300 space-y-2">
              {gameTips.issues.map((issue, index) => (
                <li key={index}>{issue}</li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-900 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">Scoring System:</h2>
              <ul className="list-disc pl-5 text-gray-300 space-y-2">
                {gameTips.scoring.map((score, index) => (
                  <li key={index}>{score}</li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-900 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">Tips & Strategies</h2>
              <ul className="list-disc pl-5 text-gray-300 space-y-2">
                {gameTips.tips.map((tip, index) => (
                  <li key={index}>{tip}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Similar Games */}
        <section className="py-16 px-4 bg-gray-900">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-6">Similar Games</h2>
            <p className="text-gray-300 mb-6">
              If you like {gameData.title}, you might also enjoy these similar games.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {similarGames.map((game) => (
                <Link key={game.id} href={`/games/${game.id}`}>
                  <div className="bg-gray-800 rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="h-48 relative">
                      <img
                        src={game.imageUrl}
                        alt={game.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
                      <div className="absolute bottom-0 left-0 p-4">
                        <div className="flex items-center text-amber-400 mb-1">
                          <span className="mr-1">★</span>
                          <span>{game.rating.toFixed(1)}</span>
                          <span className="text-gray-300 text-xs ml-2">
                            {game.playCount.toLocaleString()} plays
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-lg mb-2">{game.title}</h3>
                      <div className="flex flex-wrap gap-1 mb-3">
                        {game.categories.slice(0, 3).map((category) => (
                          <span
                            key={category}
                            className="inline-block rounded-full bg-amber-600/60 px-2 py-0.5 text-xs"
                          >
                            {category}
                          </span>
                        ))}
                      </div>
                      <p className="text-gray-400 text-sm line-clamp-2">
                        {game.description.slice(0, 100)}...
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <footer className="mt-16 py-8 border-t border-gray-800">
        <div className="container mx-auto text-center text-gray-400 text-sm">
          <p>© 2024 OnlineGames.wiki - All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
} 