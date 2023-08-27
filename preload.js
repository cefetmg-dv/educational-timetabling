const { contextBridge } = require('electron')
var fs = require('fs')


const buscarArquivo = () => {
  var instance = fs.readFileSync('./packages/app/src/dataexample.json', 'utf-8');
  return instance;
}

const atualizarListaDeCategoriasDeSalas = (dataFromApp) =>{
  console.log(dataFromApp)
  var instanceData = fs.readFileSync('./packages/app/src/dataexample.json', 'utf-8')
  const instance = JSON.parse(instanceData)
  instance.rooms_category.push(dataFromApp)
  fs.writeFileSync('./packages/app/src/dataexample.json', JSON.stringify(instance, null, 2), 'utf-8')
}

const atualizarListaDeSalas = (dataFromApp) =>{
  console.log(dataFromApp)
  var instanceData = fs.readFileSync('./packages/app/src/dataexample.json', 'utf-8')
  const instance = JSON.parse(instanceData)
  instance.rooms.push(JSON.parse(dataFromApp))
  fs.writeFileSync('./packages/app/src/dataexample.json', JSON.stringify(instance, null, 3), 'utf-8')
}

// Expor a função no objeto window
contextBridge.exposeInMainWorld('buscarArquivo', buscarArquivo);
contextBridge.exposeInMainWorld('atualizarListaDeCategoriasDeSalas', atualizarListaDeCategoriasDeSalas);
contextBridge.exposeInMainWorld('atualizarListaDeSalas', atualizarListaDeSalas);

  
