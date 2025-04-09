export function calcReadTime(text: string){
    const textContent = text || '';
    const wordsPerMinute = 225;
    const textLength = textContent.trim().split(/\s+/).length;
    return Math.ceil(textLength / wordsPerMinute);
}