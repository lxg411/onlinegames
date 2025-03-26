import { ImageLoaderProps } from 'next/image';

// 定义图片加载处理函数
export default function customImageLoader({ src, width, quality }: ImageLoaderProps): string {
  // 处理不同类型的图片URL
  
  // 如果是完整URL（以http开头），直接返回
  if (src.startsWith('http')) {
    return src;
  }
  
  // 如果是相对路径（以/images开头），构建完整路径
  if (src.startsWith('/images')) {
    // 开发环境和生产环境使用相同的路径处理
    return `${process.env.NEXT_PUBLIC_BASE_URL || ''}${src}?w=${width}&q=${quality || 75}`;
  }
  
  // 对于占位图片的处理
  if (src.includes('placeholder') || src.includes('unsplash')) {
    return src;
  }
  
  // 默认返回原始src
  return src;
}

// 图片加载失败时的回退处理
export function getImageFallback(originalSrc: string): string {
  // 如果无法加载原始图片，提供一个替代图片
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