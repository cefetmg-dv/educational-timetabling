const { contextBridge } = require('electron')
var fs = require('fs')

const salvarArquivo = (data) => {
    try {
      fs.writeFile('./packages/app/src/data.json', data, 'utf-8', (err) => err && console.error(err));
    }catch (e) {
      console.log(e);
    }
};

const buscarArquivo = () => {
  var instance = fs.readFileSync('./packages/app/src/dataexample.json', 'utf-8');
  return instance;
}

// Expor a função no objeto window
contextBridge.exposeInMainWorld('salvarArquivo', salvarArquivo);
contextBridge.exposeInMainWorld('buscarArquivo', buscarArquivo);

  
