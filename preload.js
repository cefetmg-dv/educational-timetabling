const { Console } = require('console');
const { contextBridge } = require('electron')
var fs = require('fs')

const searchFile = () => {
  var instance = fs.readFileSync('./packages/app/src/dataexample.json', 'utf-8');
  return instance;
}

//Registers

const registerTimeslot = (dataFromApp) =>{
  console.log(dataFromApp)
  var instanceData = fs.readFileSync('./packages/app/src/dataexample.json', 'utf-8')
  const instance = JSON.parse(instanceData)
  instance.timeslots.push(JSON.parse(dataFromApp))
  fs.writeFileSync('./packages/app/src/dataexample.json', JSON.stringify(instance, null, 2), 'utf-8')
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

const registerSubjects = (dataFromApp, idClass) =>{
  console.log(dataFromApp)
  var instanceData = fs.readFileSync('./packages/app/src/dataexample.json', 'utf-8')
  const instance = JSON.parse(instanceData)
  instance.classes[idClass].subjects.push(JSON.parse(dataFromApp))
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


const updateSubjects = (dataFromApp, idClass) =>{
  var instanceData = fs.readFileSync('./packages/app/src/dataexample.json', 'utf-8')
  const instance = JSON.parse(instanceData)
  console.log(dataFromApp)
  console.log(idClass)
  for(let i = 0; i < instance.classes.length; i++){
    if(instance.classes[i].id == idClass){
      for(let j = 0 ; j < instance.classes[i].subjects.length; j++){
        console.log("INSTANCE")
        console.log(instance.classes[i].subjects[j])
        console.log("DATA FROM APP")
        console.log(JSON.parse(dataFromApp).id)
        if(instance.classes[i].subjects[j].id == JSON.parse(dataFromApp).id){
          console.log("DEU")
          instance.classes[i].subjects[j].id = JSON.parse(dataFromApp).id;
          instance.classes[i].subjects[j].name = JSON.parse(dataFromApp).name;
          instance.classes[i].subjects[j].acronym = JSON.parse(dataFromApp).acronym;
          instance.classes[i].subjects[j].events = JSON.parse(dataFromApp).events;
          instance.classes[i].subjects[j].divided = JSON.parse(dataFromApp).divided;
          instance.classes[i].subjects[j].subgroups = JSON.parse(dataFromApp).subgroups;
          instance.classes[i].subjects[j].rooms = JSON.parse(dataFromApp).rooms;
        }
      }
      //instance.classes[i].subjects[JSON.parse(dataFromApp).id] = JSON.parse(dataFromApp)
    }
  }
  fs.writeFileSync('./packages/app/src/dataexample.json', JSON.stringify(instance, null, 3), 'utf-8')
}


const updateTeacher = (dataFromApp) =>{
  var instanceData = fs.readFileSync('./packages/app/src/dataexample.json', 'utf-8')
  const instance = JSON.parse(instanceData)
  for(let i = 0; i < instance.teachers.length; i++){
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

const updateRoomsCategory = (dataFromApp, item) =>{
  console.log(dataFromApp)
  //console.log(itemID)
  var instanceData = fs.readFileSync('./packages/app/src/dataexample.json', 'utf-8')
  const instance = JSON.parse(instanceData)
  for(let i = 0; i < instance.rooms_category.length; i++){
    if(instance.rooms_category[i] == item){
      instance.rooms_category[i] = dataFromApp
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
  instance.rooms_category = instance.rooms_category.filter(obj => obj !== dataFromApp)
  fs.writeFileSync('./packages/app/src/dataexample.json', JSON.stringify(instance, null, 3), 'utf-8')
}

const removeSubjects = (idSubject, idClass)=>{
  console.log(idClass)
  console.log(idSubject)
  var instanceData = fs.readFileSync('./packages/app/src/dataexample.json', 'utf-8')
  const instance = JSON.parse(instanceData)
  instance.classes[idClass].subjects = instance.classes[idClass].subjects.filter(obj => obj.id != idSubject)
  fs.writeFileSync('./packages/app/src/dataexample.json', JSON.stringify(instance, null, 3), 'utf-8')
}


// show functions to window object

//search
contextBridge.exposeInMainWorld('searchFile', searchFile)

//registers
contextBridge.exposeInMainWorld('registerTimeslot', registerTimeslot)
contextBridge.exposeInMainWorld('registerRoomsCategories', registerRoomsCategories)
contextBridge.exposeInMainWorld('registerRooms', registerRooms);
contextBridge.exposeInMainWorld('registerTeachers', registerTeachers)
contextBridge.exposeInMainWorld('registerSubjects', registerSubjects)
contextBridge.exposeInMainWorld('registerClasses', registerClasses)

//updates
contextBridge.exposeInMainWorld('updateClassName', updateClassName)
contextBridge.exposeInMainWorld('updateSubjects', updateSubjects)
contextBridge.exposeInMainWorld('updateTeacher', updateTeacher)
contextBridge.exposeInMainWorld('updateRoom', updateRoom)
contextBridge.exposeInMainWorld('updateRoomsCategory', updateRoomsCategory)

//deletes
contextBridge.exposeInMainWorld('removeTeacher', removeTeacher)
contextBridge.exposeInMainWorld('removeGrid', removeGrid)
contextBridge.exposeInMainWorld('removeClass', removeClass)
contextBridge.exposeInMainWorld('removeRoom', removeRoom)
contextBridge.exposeInMainWorld('removeRoomCategory', removeRoomCategory)
contextBridge.exposeInMainWorld('removeSubjects', removeSubjects)
  
