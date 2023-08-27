const { contextBridge } = require('electron')
var fs = require('fs')

//REESCREVER ISSO COM APENAS UMA FUNÇÃO DE ATUALIZAR

const searchFile = () => {
  var instance = fs.readFileSync('./packages/app/src/dataexample.json', 'utf-8');
  return instance;
}

const registerRoomsCategories = (dataFromApp) =>{
  console.log(dataFromApp)
  var instanceData = fs.readFileSync('./packages/app/src/dataexample.json', 'utf-8')
  const instance = JSON.parse(instanceData)
  instance.rooms_category.push(dataFromApp)
  fs.writeFileSync('./packages/app/src/dataexample.json', JSON.stringify(instance, null, 2), 'utf-8')
}

const registerRooms = (dataFromApp) =>{
  console.log(dataFromApp)
  var instanceData = fs.readFileSync('./packages/app/src/dataexample.json', 'utf-8')
  const instance = JSON.parse(instanceData)
  instance.rooms.push(JSON.parse(dataFromApp))
  fs.writeFileSync('./packages/app/src/dataexample.json', JSON.stringify(instance, null, 3), 'utf-8')
}

const registerTeachers = (dataFromApp) =>{
  console.log(dataFromApp)
  var instanceData = fs.readFileSync('./packages/app/src/dataexample.json', 'utf-8')
  const instance = JSON.parse(instanceData)
  instance.teachers.push(JSON.parse(dataFromApp))
  fs.writeFileSync('./packages/app/src/dataexample.json', JSON.stringify(instance, null, 3), 'utf-8')
}

const registerSubjects = (dataFromApp) =>{
  console.log(dataFromApp)
  var instanceData = fs.readFileSync('./packages/app/src/dataexample.json', 'utf-8')
  const instance = JSON.parse(instanceData)
  instance.classes.subjects.push(JSON.parse(dataFromApp))
  fs.writeFileSync('./packages/app/src/dataexample.json', JSON.stringify(instance, null, 3), 'utf-8')
}

const registerClasses = (dataFromApp) =>{
  console.log(dataFromApp)
  var instanceData = fs.readFileSync('./packages/app/src/dataexample.json', 'utf-8')
  const instance = JSON.parse(instanceData)
  instance.classes.push(JSON.parse(dataFromApp))
  fs.writeFileSync('./packages/app/src/dataexample.json', JSON.stringify(instance, null, 3), 'utf-8')
}

// Expor a função no objeto window
contextBridge.exposeInMainWorld('searchFile', searchFile);
contextBridge.exposeInMainWorld('registerRoomsCategories', registerRoomsCategories);
contextBridge.exposeInMainWorld('registerRooms', registerRooms);
contextBridge.exposeInMainWorld('registerTeachers', registerTeachers);
contextBridge.exposeInMainWorld('registerSubjects', registerSubjects);
contextBridge.exposeInMainWorld('registerClasses', registerClasses);


  
