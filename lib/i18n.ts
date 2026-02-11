import { Language } from './translations';

/**
 * 从路径中提取语言代码
 * @param pathname - 当前路径，如 '/zh/docs' 或 '/download'（英文不带前缀）
 * @returns 语言代码 'zh' 或 'en'，默认为 'en'
 */
export function getLangFromPath(pathname: string): Language {
  const segments = pathname.split('/').filter(Boolean);
  const firstSegment = segments[0];
  
  // 如果第一个段是 'zh'，则为中文
  if (firstSegment === 'zh') {
    return 'zh';
  }
  
  // 其他情况默认为英文（英文路径不带前缀）
  return 'en';
}

/**
 * 获取不带语言前缀的路径
 * @param pathname - 当前路径，如 '/zh/docs' 或 '/download'
 * @returns 不带语言前缀的路径，如 '/docs' 或 '/download'
 */
export function getPathWithoutLang(pathname: string): string {
  const segments = pathname.split('/').filter(Boolean);
  
  // 如果第一个段是 'zh'，移除它
  if (segments[0] === 'zh') {
    return '/' + segments.slice(1).join('/');
  }
  
  // 其他情况（英文路径不带前缀）直接返回
  return pathname || '/';
}

/**
 * 为路径添加语言前缀
 * @param path - 路径，如 '/docs' 或 '/download'
 * @param lang - 语言代码
 * @returns 带语言前缀的路径，如 '/zh/docs' 或 '/download'（英文主页为 '/'）
 */
export function addLangToPath(path: string, lang: Language): string {
  const cleanPath = path.startsWith('/') ? path : '/' + path;
  const pathWithoutLang = getPathWithoutLang(cleanPath);
  
  // 主页：英文为 '/'，中文为 '/zh'
  if (pathWithoutLang === '/') {
    return lang === 'en' ? '/' : `/${lang}`;
  }
  
  // 其他页面：英文不加前缀（如 '/docs'），中文加前缀（如 '/zh/docs'）
  return lang === 'en' ? pathWithoutLang : `/${lang}${pathWithoutLang}`;
}
