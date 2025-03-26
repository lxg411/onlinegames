import { ImageLoaderProps } from 'next/image';

// 检查是否在本地开发环境
const isDevelopment = process.env.NODE_ENV === 'development';
// 部署URL
const deploymentUrl = 'https://onlinegames-rho.vercel.app';

// 定义图片加载处理函数
export default function customImageLoader({ src, width, quality }: ImageLoaderProps): string {
  // 调试信息
  if (isDevelopment) {
    console.log("Loading image:", src);
  }
  
  // 完整的外部URL，直接返回
  if (src.startsWith('http')) {
    return src;
  }
  
  // 处理文件名大小写问题
  if (src.includes('/images/games/uploads/')) {
    const pathParts = src.split('/');
    const fileName = pathParts[pathParts.length - 1];
    const dirPath = pathParts.slice(0, pathParts.length - 1).join('/');
    
    // 将文件名中的每个单词首字母大写
    const correctedFileName = fileName
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join('-');
    
    // 构建新路径
    src = `${dirPath}/${correctedFileName}`;
  }
  
  // 如果是本地开发环境，返回相对路径
  if (isDevelopment) {
    return src;
  }
  
  // 相对路径处理
  if (src.startsWith('/')) {
    return `${deploymentUrl}${src}`;
  }
  
  // 为其他路径添加斜杠
  return `${deploymentUrl}/${src}`;
}

// 获取完整的图片URL
export function getFullImageUrl(relativePath: string): string {
  // 如果已经是完整URL，直接返回
  if (relativePath.startsWith('http')) {
    return relativePath;
  }
  
  // 处理文件名大小写问题
  if (relativePath.includes('/images/games/uploads/')) {
    const pathParts = relativePath.split('/');
    const fileName = pathParts[pathParts.length - 1];
    const dirPath = pathParts.slice(0, pathParts.length - 1).join('/');
    
    // 将文件名中的每个单词首字母大写
    const correctedFileName = fileName
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join('-');
    
    // 构建新路径
    relativePath = `${dirPath}/${correctedFileName}`;
  }
  
  // 在开发环境下返回相对路径
  if (isDevelopment) {
    return relativePath.startsWith('/') ? relativePath : `/${relativePath}`;
  }
  
  // 标准化路径
  const normalizedPath = relativePath.startsWith('/') ? relativePath : `/${relativePath}`;
  
  // 返回完整URL
  return `${deploymentUrl}${normalizedPath}`;
}

// 图片加载失败时的回退处理
export function getImageFallback(): string {
  if (isDevelopment) {
    return `/images/placeholder.jpg`;
  }
  return `${deploymentUrl}/images/placeholder.jpg`;
}

// 检查图片URL有效性的辅助函数
export async function isImageValid(url: string): Promise<boolean> {
  if (!url || url.startsWith('data:')) return true;
  
  try {
    const response = await fetch(url, { method: 'HEAD', mode: 'no-cors' });
    return response.ok;
  } catch (error) {
    console.error(`Error checking image URL: ${url}`, error);
    return false;
  }
} 