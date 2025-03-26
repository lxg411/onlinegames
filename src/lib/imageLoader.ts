import { ImageLoaderProps } from 'next/image';

// 检查是否在本地开发环境
const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

// 定义图片加载处理函数
export default function customImageLoader({ src, width, quality }: ImageLoaderProps): string {
  // 用于调试图片加载问题
  console.log("Loading image:", src);
  
  // 如果是完整URL（以http开头），直接返回
  if (src.startsWith('http')) {
    return src;
  }
  
  // 如果是本地开发环境，使用相对路径
  if (isDevelopment) {
    return src;
  }
  
  // 如果是相对路径（以/images开头）
  if (src.startsWith('/images')) {
    // 在Vercel上，需要确保路径正确
    const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
      ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
      : process.env.NEXT_PUBLIC_BASE_URL || '';
      
    // 防止在URL中出现双斜杠
    const cleanSrc = src.startsWith('/') ? src : `/${src}`;
    
    // 返回完整URL
    return `${baseUrl}${cleanSrc}`;
  }
  
  // 对于占位图片的处理
  if (src.includes('placeholder') || src.includes('unsplash')) {
    return src;
  }
  
  // 默认返回原始src
  return src;
}

// 获取完整的图片URL
export function getFullImageUrl(relativePath: string): string {
  // 如果已经是完整URL，直接返回
  if (relativePath.startsWith('http')) {
    return relativePath;
  }
  
  // 在开发环境下返回相对路径
  if (isDevelopment) {
    return relativePath;
  }
  
  // 确保路径开头有斜杠
  const normalizedPath = relativePath.startsWith('/') ? relativePath : `/${relativePath}`;
  
  // 使用环境变量或默认值
  const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    : process.env.NEXT_PUBLIC_BASE_URL || '';
    
  return `${baseUrl}${normalizedPath}`;
}

// 图片加载失败时的回退处理
export function getImageFallback(originalSrc: string): string {
  // 提供一个默认的回退图片
  return `/images/placeholder.jpg`;
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