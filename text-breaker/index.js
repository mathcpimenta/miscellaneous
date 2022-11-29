// wirte a function that receives text: string, limit: number and count how many letter we'd have and break it into a new line after 80 without break any word


function emailFormatter(text, limit) {
    if(typeof text === 'number' || typeof limit !== 'number') return "ERROR - Incorrect Input";
    
    if(text.length <= limit) return text.toString();
    
    let result = '';
    const words = text.split(' ')
    let line = ''
  
    for (let i = 0; i < words.length; i++) {
      if(line.length + words[i].length <= limit) {
        line += words[i] + ' ';
      } else {
        result += line.trim() + '\n'
        line = words[i] + ' '
      }
    }
  
    const finalText = result += line
  
    return finalText.trim()
  }