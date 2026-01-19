/**
 * 获取指定目录下的所有图片文件
 * 注意：在生产环境中，这需要后端API支持或构建时预生成
 */
export const getImagesFromPath = async (basePath: string): Promise<string[]> => {
  // 在开发环境中，Vite 可以处理静态资源
  // 在生产环境中，需要确保图片路径正确
  
  // 这里返回一个示例路径数组
  // 实际应用中，应该从后端API获取或使用构建时生成的配置
  return [];
};

/**
 * 根据文件名生成产品名称
 */
export const getProductNameFromFileName = (fileName: string): string => {
  // 移除文件扩展名
  const nameWithoutExt = fileName.replace(/\.(jpg|jpeg|png|JPG|JPEG|PNG)$/i, '');
  
  // 移除数字后缀（如 "1", "2"）
  const nameWithoutNumbers = nameWithoutExt.replace(/\s*\(\d+\)\s*$/, '').replace(/\s+\d+$/, '');
  
  // 将下划线和连字符替换为空格
  const formattedName = nameWithoutNumbers
    .replace(/[_-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  
  // 首字母大写
  return formattedName
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
};

/**
 * 从完整路径中提取图片文件名并格式化为可读名称
 */
export const getImageNameFromPath = (path: string): string => {
  const segments = path.split('/');
  const fileName = segments[segments.length - 1] || path;
  return getProductNameFromFileName(fileName);
};
