// to-do
const { contextBridge } = require('electron')
var fs = require('fs')


// Exemplo no arquivo preload.js
const salvarArquivo = (data) => {
    try {
      fs.writeFile('./packages/app/src/data.json', data, 'utf-8');
    } catch (e) {
      console.log(e);
    }
};
  
// Expor a função no objeto window
contextBridge.exposeInMainWorld('salvarArquivo', salvarArquivo);
  
