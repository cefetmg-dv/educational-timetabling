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

const atualizarListaDeCategoriasDeSalas = (dataFromApp) =>{
  console.log(dataFromApp)
  var instanceData = fs.readFileSync('./packages/app/src/dataexample.json', 'utf-8')
  console.log(typeof(instanceData))
  const instance = JSON.parse(instanceData)
  console.log(typeof(instance))
  instance.rooms_category.push(dataFromApp)
  fs.writeFileSync('./packages/app/src/dataexample.json', JSON.stringify(instance, null, 2), 'utf-8')
}

const atualizarListaDeSalas = (dataFromApp) =>{
  
}

// Expor a função no objeto window
contextBridge.exposeInMainWorld('salvarArquivo', salvarArquivo);
contextBridge.exposeInMainWorld('buscarArquivo', buscarArquivo);
contextBridge.exposeInMainWorld('atualizarListaDeCategoriasDeSalas', atualizarListaDeCategoriasDeSalas);

  
