const { contextBridge } = require('electron')
var fs = require('fs')

// Exemplo no arquivo preload.js
const salvarArquivo = (data) => {
    try {
      fs.writeFile('./packages/app/src/data.json', JSON.stringify(data), 'utf-8');
    }catch (e) {
      console.log(e);
    }
};


const salvarPalavra = (palavra) => {
  try{
    fs.writeFile('./packages/app/src/data.json', palavra, (err) => err && console.error(err))
  }
  catch(e){
    console.log(e)
  }
}
  
// Expor a função no objeto window
contextBridge.exposeInMainWorld('salvarArquivo', salvarArquivo);
contextBridge.exposeInMainWorld('salvarPalavra', salvarPalavra)
  
