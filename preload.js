const { contextBridge } = require('electron')
var fs = require('fs')

const searchFile = () => {
  var instance = fs.readFileSync('./packages/app/src/dataexample.json', 'utf-8');
  return instance;
}

//Registers

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

//Updates

const updateClassName = (dataFromApp) =>{
  console.log(dataFromApp)
  var instanceData = fs.readFileSync('./packages/app/src/dataexample.json', 'utf-8')
  const instance = JSON.parse(instanceData)
  console.log(instance)
  for(let i = 0; i< instance.classes.length; i++){
    console.log(instance.classes[i])
    if(instance.classes[i].id == JSON.parse(dataFromApp).id){
      instance.classes[i].name = JSON.parse(dataFromApp).name
    }
  }
  fs.writeFileSync('./packages/app/src/dataexample.json', JSON.stringify(instance, null, 3), 'utf-8')
}

const updateClassSubjects = (dataFromApp, idClass) =>{
  console.log(dataFromApp)
  var instanceData = fs.readFileSync('./packages/app/src/dataexample.json', 'utf-8')
  const instance = JSON.parse(instanceData)
  for(let i = 0; i < instance.classes.length; i++){
    console.log(instance.classes[i])
    if(instance.classes[i].id == parseInt(idClass)){
      instance.classes[i].subjects.push(JSON.parse(dataFromApp))
    }
  }
  fs.writeFileSync('./packages/app/src/dataexample.json', JSON.stringify(instance, null, 3), 'utf-8')
}

const updateTeacher = (dataFromApp) =>{
  console.log(dataFromApp)
  var instanceData = fs.readFileSync('./packages/app/src/dataexample.json', 'utf-8')
  const instance = JSON.parse(instanceData)
  for(let i = 0; i < instance.teachers.length; i++){
    console.log(instance.teachers[i])
    if(instance.teachers[i].id == parseInt(JSON.parse(dataFromApp).id)){
      instance.teachers[i].name = JSON.parse(dataFromApp).name
      instance.teachers[i].unavailability = JSON.parse(dataFromApp).unavailability
      instance.teachers[i].preferences = JSON.parse(dataFromApp).preferences
    }
  }
  fs.writeFileSync('./packages/app/src/dataexample.json', JSON.stringify(instance, null, 3), 'utf-8')
}

const updateRoom = (dataFromApp) =>{
  console.log(dataFromApp)
  var instanceData = fs.readFileSync('./packages/app/src/dataexample.json', 'utf-8')
  const instance = JSON.parse(instanceData)
  for(let i = 0; i < instance.rooms.length; i++){
    console.log(instance.rooms[i])
    if(instance.rooms[i].id == parseInt(JSON.parse(dataFromApp).id)){
      instance.rooms[i].name = JSON.parse(dataFromApp).name
      instance.rooms[i].category = JSON.parse(dataFromApp).category
      instance.rooms[i].unavailability = JSON.parse(dataFromApp).unavailability
    }
  }
  fs.writeFileSync('./packages/app/src/dataexample.json', JSON.stringify(instance, null, 3), 'utf-8')
}

//Deletes

const removeTeacher = (dataFromApp) =>{
  console.log(dataFromApp)
  var instanceData = fs.readFileSync('./packages/app/src/dataexample.json', 'utf-8')
  const instance = JSON.parse(instanceData)
  instance.teachers = instance.teachers.filter(obj => obj.id !== dataFromApp)
  fs.writeFileSync('./packages/app/src/dataexample.json', JSON.stringify(instance, null, 3), 'utf-8')
} 

const removeGrid = (dataFromApp) =>{
  console.log(dataFromApp)
  var instanceData = fs.readFileSync('./packages/app/src/dataexample.json', 'utf-8')
  const instance = JSON.parse(instanceData)
  instance.timeslots = instance.timeslots.filter(obj => obj.id !== dataFromApp)
  fs.writeFileSync('./packages/app/src/dataexample.json', JSON.stringify(instance, null, 3), 'utf-8')
}

const removeClass = (dataFromApp) =>{
  console.log(dataFromApp)
  var instanceData = fs.readFileSync('./packages/app/src/dataexample.json', 'utf-8')
  const instance = JSON.parse(instanceData)
  instance.classes = instance.classes.filter(obj => obj.id !== dataFromApp)
  fs.writeFileSync('./packages/app/src/dataexample.json', JSON.stringify(instance, null, 3), 'utf-8')
}

const removeRoom = (dataFromApp) =>{
  console.log(dataFromApp)
  var instanceData = fs.readFileSync('./packages/app/src/dataexample.json', 'utf-8')
  const instance = JSON.parse(instanceData)
  instance.rooms = instance.rooms.filter(obj => obj.id !== dataFromApp)
  fs.writeFileSync('./packages/app/src/dataexample.json', JSON.stringify(instance, null, 3), 'utf-8')
}

const removeRoomCategory = (dataFromApp)=>{
  console.log(dataFromApp)
  var instanceData = fs.readFileSync('./packages/app/src/dataexample.json', 'utf-8')
  const instance = JSON.parse(instanceData)
  instance.roomsCategory = instance.roomsCategory.filter(obj => obj.id !== dataFromApp)
  fs.writeFileSync('./packages/app/src/dataexample.json', JSON.stringify(instance, null, 3), 'utf-8')
}

const removeClassSubject = (dataFromApp)=>{

}


// show functions to window object

//search
contextBridge.exposeInMainWorld('searchFile', searchFile)

//registers
contextBridge.exposeInMainWorld('registerRoomsCategories', registerRoomsCategories)
contextBridge.exposeInMainWorld('registerRooms', registerRooms);
contextBridge.exposeInMainWorld('registerTeachers', registerTeachers)
contextBridge.exposeInMainWorld('registerSubjects', registerSubjects)
contextBridge.exposeInMainWorld('registerClasses', registerClasses)

//updates
contextBridge.exposeInMainWorld('updateClassName', updateClassName)
contextBridge.exposeInMainWorld('updateClassSubjects', updateClassSubjects)
contextBridge.exposeInMainWorld('updateTeacher', updateTeacher)
contextBridge.exposeInMainWorld('updateRoom', updateRoom)

//deletes
contextBridge.exposeInMainWorld('removeTeacher', removeTeacher)
contextBridge.exposeInMainWorld('removeGrid', removeGrid)
contextBridge.exposeInMainWorld('removeClass', removeClass)
contextBridge.exposeInMainWorld('removeRoom', removeRoom)
contextBridge.exposeInMainWorld('removeRoomCategory', removeRoomCategory)
contextBridge.exposeInMainWorld('removeClassSubject', removeClassSubject)
  
