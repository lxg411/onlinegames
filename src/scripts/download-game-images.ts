const fs = require('fs');
const path = require('path');
const axios = require('axios');
const { games } = require('../lib/games');

const IMAGES_DIR = path.join(process.cwd(), 'public/images/games/uploads');

// 创建目录（如果不存在）
if (!fs.existsSync(IMAGES_DIR)) {
  fs.mkdirSync(IMAGES_DIR, { recursive: true });
}

// 检查每个游戏是否有对应的图片，如果没有则创建一个默认的占位图片
async function ensureGameImages() {
  console.log('正在检查游戏图片...');
  
  // 获取当前已有的图片文件列表
  const existingImages = fs.readdirSync(IMAGES_DIR);
  
  for (const game of games) {
    const imageFileName = game.id + '.jpg';
    const imagePath = path.join(IMAGES_DIR, imageFileName);
    
    // 检查图片是否已存在
    if (!existingImages.includes(imageFileName)) {
      console.log(`正在创建图片: ${imageFileName}...`);
      
      try {
        // 在这里可以添加从远程服务器下载图片的逻辑
        // 例如: await downloadImage(game.id, imagePath);
        
        // 如果没有远程图片，则复制一个占位图片
        const placeholderPath = path.join(process.cwd(), 'public/images/games/placeholder-game.jpg');
        if (fs.existsSync(placeholderPath)) {
          fs.copyFileSync(placeholderPath, imagePath);
          console.log(`已创建占位图片: ${imageFileName}`);
        } else {
          console.warn(`警告: 占位图片不存在，无法为 ${game.id} 创建图片`);
        }
      } catch (error) {
        console.error(`为游戏 ${game.id} 创建图片时出错:`, error);
      }
    }
  }
  
  console.log('所有游戏图片检查完成!');
}

// 执行主函数
ensureGameImages().catch(console.error); 