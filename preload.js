const { contextBridge } = require('electron');
const timetabling = require('bindings')('timetabling');
const { Console, count } = require('console');
const fs = require('fs')


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


const registerSubjectTeacher = (dataFromApp, classID, itemID) =>{
  var teachersID = []
  console.log("o que chegou")
  console.log(dataFromApp)
  
  var instanceData = fs.readFileSync('./packages/app/src/dataexample.json', 'utf-8')
  const instance = JSON.parse(instanceData)
  //change name of the teachers per the id of the teachers
  for(var i = 0; i < dataFromApp.length; ++i){
    for(var j = 0; j < instance.teachers.length; ++j){
      if(instance.teachers[j].name == dataFromApp[i]){
        teachersID.push(instance.teachers[j].id)
      }
    }
  }
  console.log(teachersID)

  for(var i = 0; i < instance.classes.length; ++i){
    if(instance.classes[i].id == classID){
      for(var j = 0; j < instance.classes[i].subjects.length; ++j){
        if(instance.classes[i].subjects[j].id == itemID){
          instance.classes[i].subjects[j].teachers = teachersID
        }
      }
    }
  }

  fs.writeFileSync('./packages/app/src/dataexample.json', JSON.stringify(instance, null, 2), 'utf-8')
  
}

const registerRoomsCategories = (dataFromApp) =>{
 
  var isRegistered = false

  var instanceData = fs.readFileSync('./packages/app/src/dataexample.json', 'utf-8')
  const instance = JSON.parse(instanceData)

  //verify if it is already registered
  for(var i = 0; i < instance.rooms_category.length; ++i){
    if(instance.rooms_category[i] == dataFromApp){
      isRegistered = true
    }
  }
  if(!isRegistered){
    instance.rooms_category.push(dataFromApp)
    fs.writeFileSync('./packages/app/src/dataexample.json', JSON.stringify(instance, null, 2), 'utf-8')
  }else{
    isRegistered = true
  }
  return isRegistered
}

const registerRooms = (dataFromApp) =>{

  var isRegistered = false

  console.log(dataFromApp)
  var instanceData = fs.readFileSync('./packages/app/src/dataexample.json', 'utf-8')
  const instance = JSON.parse(instanceData)
  //verify if it is already registered
  for(var i = 0; i < instance.rooms.length; ++i){
    if(JSON.parse(dataFromApp).name == instance.rooms[i].name){
      isRegistered = true
    }
  }
  if(!isRegistered){
    instance.rooms.push(JSON.parse(dataFromApp))
    fs.writeFileSync('./packages/app/src/dataexample.json', JSON.stringify(instance, null, 3), 'utf-8')
  }

  return isRegistered
}

const registerTeachers = (dataFromApp) =>{
  var isRegistered = false
 
  var instanceData = fs.readFileSync('./packages/app/src/dataexample.json', 'utf-8')

  const instance = JSON.parse(instanceData)
  //verify if there's some teacher registered with the same name
  for(var i = 0; i < instance.teachers.length; ++i){
    if(JSON.parse(dataFromApp).name == instance.teachers[i].name){
      isRegistered = true;
    }
  }
  if(!isRegistered){
    instance.teachers.push(JSON.parse(dataFromApp))
    fs.writeFileSync('./packages/app/src/dataexample.json', JSON.stringify(instance, null, 3), 'utf-8')
  }

  return isRegistered
}

const registerSubjects = (dataFromApp, idClass) =>{

  var isRegistered = false

  console.log(dataFromApp)
  var instanceData = fs.readFileSync('./packages/app/src/dataexample.json', 'utf-8')
  const instance = JSON.parse(instanceData)
  //verify if it is already registered
  for(var i = 0; i < instance.classes.length; ++i){
    if(instance.classes[i].id == idClass){
      for(var j = 0; j < instance.classes[i].subjects.length; ++j){
        if(instance.classes[i].subjects[j].name == JSON.parse(dataFromApp).name){
          isRegistered = true
        }
      }
    }
    
  }
  if(!isRegistered){
    instance.classes[idClass].subjects.push(JSON.parse(dataFromApp))
    fs.writeFileSync('./packages/app/src/dataexample.json', JSON.stringify(instance, null, 3), 'utf-8')
  }
  return isRegistered
}


const registerClasses = (dataFromApp) =>{
  var isRegistered = false

  console.log(dataFromApp)
  var instanceData = fs.readFileSync('./packages/app/src/dataexample.json', 'utf-8')
  const instance = JSON.parse(instanceData)
  
  //verify if it is already registered
  for(var i = 0; i < instance.classes.length; ++i){
    if(instance.classes[i].name == JSON.parse(dataFromApp).name){
      isRegistered = true
    }
  }

  if(!isRegistered){
    instance.classes.push(JSON.parse(dataFromApp))
    fs.writeFileSync('./packages/app/src/dataexample.json', JSON.stringify(instance, null, 3), 'utf-8')
  }

  return isRegistered
}

//Updates

const updateClassName = (dataFromApp) =>{
  var isRegistered = false
  var isOther = false
  var isTheSame = false

  var instanceData = fs.readFileSync('./packages/app/src/dataexample.json', 'utf-8')
  const instance = JSON.parse(instanceData)
  console.log(instance)
  for(let i = 0; i < instance.classes.length; i++){
    if(instance.classes[i].name == JSON.parse(dataFromApp).name){
      isRegistered = true
      console.log("ESTÁ REGISTRADO")
    }
    if(instance.classes[i].id == JSON.parse(dataFromApp).id){
      if(instance.classes[i].name == JSON.parse(dataFromApp).name){
        isTheSame = true
      }
      instance.classes[i].name = JSON.parse(dataFromApp).name
    }
  }
  if(!isTheSame && isRegistered){
    isOther = true
    console.log("É OUTRO")
  }else{
    fs.writeFileSync('./packages/app/src/dataexample.json', JSON.stringify(instance, null, 3), 'utf-8')
  }
  return isOther
}


const updateSubjects = (dataFromApp, idClass) =>{

  var isRegistered = false
  var isOther = false
  var isTheSame = false

  var instanceData = fs.readFileSync('./packages/app/src/dataexample.json', 'utf-8')
  const instance = JSON.parse(instanceData)

  for(let i = 0; i < instance.classes.length; i++){
    if(instance.classes[i].id == idClass){
      for(let j = 0 ; j < instance.classes[i].subjects.length; j++){
        if(instance.classes[i].subjects[j].name == JSON.parse(dataFromApp).name){
          isRegistered = true
        }
      
        if(instance.classes[i].subjects[j].id == JSON.parse(dataFromApp).id){
          console.log(JSON.parse(dataFromApp).name)
          console.log(instance.classes[i].subjects[j].name)
          if(instance.classes[i].subjects[j].name == JSON.parse(dataFromApp).name){
            isTheSame = true
          }

          instance.classes[i].subjects[j].id = JSON.parse(dataFromApp).id;
          instance.classes[i].subjects[j].name = JSON.parse(dataFromApp).name;
          instance.classes[i].subjects[j].acronym = JSON.parse(dataFromApp).acronym;
          instance.classes[i].subjects[j].events = JSON.parse(dataFromApp).events;
          instance.classes[i].subjects[j].divided = JSON.parse(dataFromApp).divided;
          instance.classes[i].subjects[j].subgroups = JSON.parse(dataFromApp).subgroups;
          instance.classes[i].subjects[j].rooms = JSON.parse(dataFromApp).rooms;
          instance.classes[i].subjects[j].antiSubjects = JSON.parse(dataFromApp).antiSubjects;

          //diminui tamanho de array de professores

          let differenceLenghtTeachers = instance.classes[i].subjects[j].teachers.length - instance.classes[i].subjects[j].events
          if(differenceLenghtTeachers > 0){
              console.log("DIFERENÇA")
              for(var k = 0; k < differenceLenghtTeachers; ++k){
                instance.classes[i].subjects[j].teachers.pop()
              }
          }
        }
      }
      //instance.classes[i].subjects[JSON.parse(dataFromApp).id] = JSON.parse(dataFromApp)
    }
  }


  if(!isTheSame && isRegistered){
    isOther = true
    console.log("É DIFERENTE")
  }else{
    fs.writeFileSync('./packages/app/src/dataexample.json', JSON.stringify(instance, null, 3), 'utf-8')
  }
  return isOther
}


const updateTeacher = (dataFromApp) =>{

  console.log("dados vindos do app")
  console.log(JSON.parse(dataFromApp))

  var isRegistered = false
  var isOther = false
  var isTheSame = false

  var instanceData = fs.readFileSync('./packages/app/src/dataexample.json', 'utf-8')
  const instance = JSON.parse(instanceData)
  for(let i = 0; i < instance.teachers.length; i++){
    if(instance.teachers[i].name == JSON.parse(dataFromApp).name){
      isRegistered = true
    }

    if(instance.teachers[i].id == parseInt(JSON.parse(dataFromApp).id)){
      if(instance.teachers[i].name == JSON.parse(dataFromApp).name){
        console.log("NOME DA INSTANCIA")
        console.log(instance.teachers[i].name)
        console.log(JSON.parse(dataFromApp).name)
        isTheSame = true  
      }
      instance.teachers[i].name = JSON.parse(dataFromApp).name
      instance.teachers[i].unavailability = JSON.parse(dataFromApp).unavailability
      instance.teachers[i].preferences = JSON.parse(dataFromApp).preferences
    }
  }
  
  if(!isTheSame && isRegistered){
    isOther = true
  }else{
    console.log("é O MESMO NOME!")
    fs.writeFileSync('./packages/app/src/dataexample.json', JSON.stringify(instance, null, 3), 'utf-8')
  }
  return isOther
}

const updateRoom = (dataFromApp) =>{

  var isRegistered = false
  var isOther = false
  var isTheSame = false
  
  console.log(dataFromApp)
  var instanceData = fs.readFileSync('./packages/app/src/dataexample.json', 'utf-8')
  const instance = JSON.parse(instanceData)
  for(let i = 0; i < instance.rooms.length; i++){
    if(JSON.parse(dataFromApp).name == instance.rooms[i].name){
      isRegistered = true
    }
    if(instance.rooms[i].id == parseInt(JSON.parse(dataFromApp).id)){
      if(JSON.parse(dataFromApp).name == instance.rooms[i].name){
        isTheSame = true
      }
      instance.rooms[i].name = JSON.parse(dataFromApp).name
      instance.rooms[i].category = JSON.parse(dataFromApp).category
      instance.rooms[i].unavailability = JSON.parse(dataFromApp).unavailability
    }
  }
  if(!isTheSame && isRegistered){
    isOther = true
  }else{
    fs.writeFileSync('./packages/app/src/dataexample.json', JSON.stringify(instance, null, 3), 'utf-8')
  }
  return isOther  
}

const updateRoomsCategory = (dataFromApp, item) =>{

  var isRegistered = false
  var isTheSame = false
  var isOther = false

  var instanceData = fs.readFileSync('./packages/app/src/dataexample.json', 'utf-8')
  const instance = JSON.parse(instanceData)
  for(let i = 0; i < instance.rooms_category.length; i++){
    if(dataFromApp == instance.rooms_category[i]){
      isRegistered = true
    }
    if(instance.rooms_category[i] == item){
      if(instance.rooms_category[i] == dataFromApp){
        isTheSame = true
      }
      instance.rooms_category[i] = dataFromApp
    }
  }

  //altera nome da categoria na sala que ela estiver cadastrada
  for(var i = 0; i < instance.rooms.length; ++i){
    if(instance.rooms[i].category == item){
      instance.rooms[i].category = dataFromApp
    }
  }

  if(!isTheSame && isRegistered){
    isOther = true
  }else{
    fs.writeFileSync('./packages/app/src/dataexample.json', JSON.stringify(instance, null, 3), 'utf-8')
  }
  return isOther
}

//Deletes

const removeTeacher = (dataFromApp) =>{
  console.log(dataFromApp)
  var instanceData = fs.readFileSync('./packages/app/src/dataexample.json', 'utf-8')
  const instance = JSON.parse(instanceData)
  instance.teachers = instance.teachers.filter(obj => obj.id !== dataFromApp)

  //reorganiza ids dos professores
  for(var i = 0; i < instance.teachers.length; ++i){
    if(instance.teachers[i].id > dataFromApp){
      instance.teachers[i].id --
    }
  }

  //remove e atualiza associação de professores a disciplinas
  for(var i = 0; i < instance.classes.length; ++i){
    for(var j = 0; j < instance.classes[i].subjects.length; ++j){
      instance.classes[i].subjects[j].teachers = instance.classes[i].subjects[j].teachers.filter(obj => obj !== dataFromApp)
      for(var k = 0; k < instance.classes[i].subjects[j].teachers.length; ++k){
        if(instance.classes[i].subjects[j].teachers[k] > dataFromApp)
        instance.classes[i].subjects[j].teachers[k] --
      }
    }
  }


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



  //reorganiza ids dos professores
  for(var i = 0; i < instance.classes.length; ++i){
    if(instance.classes[i].id > dataFromApp){
      instance.classes[i].id --
    }
  }

  fs.writeFileSync('./packages/app/src/dataexample.json', JSON.stringify(instance, null, 3), 'utf-8')

}

const removeRoom = (dataFromApp) =>{
  console.log(dataFromApp)
  var instanceData = fs.readFileSync('./packages/app/src/dataexample.json', 'utf-8')
  const instance = JSON.parse(instanceData)
  instance.rooms = instance.rooms.filter(obj => obj.id !== dataFromApp)


  //reorganiza ids das salas
  for(var i = 0; i < instance.rooms.length; ++i){
    if(instance.rooms[i].id > dataFromApp){
      instance.rooms[i].id --
    }
  }

  //remove e atualiza associações
  for(var i = 0; i < instance.classes.length; ++i){
    for(var j = 0; j < instance.classes[i].subjects.length; ++j){
      instance.classes[i].subjects[j].rooms = instance.classes[i].subjects[j].rooms.filter(obj => obj !== dataFromApp)
      for(var k = 0; k < instance.classes[i].subjects[j].rooms.length; ++k){
        if(instance.classes[i].subjects[j].rooms[k] > dataFromApp){
          instance.classes[i].subjects[j].rooms[k] --
        }
      }
    }
  }


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

  //reorganiza ids das matérias
  for(var i = 0; i < instance.classes[idClass].subjects.length; ++i){
    if(instance.classes[idClass].subjects[i].id > idSubject){
      instance.classes[idClass].subjects[i].id --
    }
  }

  
  //remove e atualiza associações
  for(var i = 0; i < instance.classes[idClass].subjects.length; ++i){

      instance.classes[idClass].subjects[i].antiSubjects = instance.classes[idClass].subjects[i].antiSubjects.filter(obj => obj != idSubject)
      for(var k = 0; k < instance.classes[idClass].subjects[i].antiSubjects.length; ++k){
        if(instance.classes[idClass].subjects[i].antiSubjects[k] > idSubject){
          instance.classes[idClass].subjects[i].antiSubjects[k] --
        }
      }
    }
  



  fs.writeFileSync('./packages/app/src/dataexample.json', JSON.stringify(instance, null, 3), 'utf-8')

}

//Solution

const generateSolution = () => {

  var instanceData = fs.readFileSync('./packages/app/src/dataexample.json', 'utf-8')
  const instance = JSON.parse(instanceData)
  //create events

  instance.events = []
  var event = {}
  var eventID = 0
  for(var i = 0; i < instance.classes.length; ++i){
    
    for(var j = 0; j < instance.classes[i].subjects.length; ++j){
    
      for(var k = 0; k < instance.classes[i].subjects[j].events; k++){

        event = {
          id : eventID,
          class: instance.classes[i].id,
          subject: instance.classes[i].subjects[j].id,
          subgroup: instance.classes[i].subjects[j].subgroups,
          teacher: instance.classes[i].subjects[j].teachers[k],
        }


        if(instance.classes[i].subjects[j].teachers.length == 0){
          return 'disciplineWithoutProfessor'
        }else if(instance.classes[i].subjects[j].rooms.length == 0){
          return 'disciplineWithoutRoom'
        }else if(instance.classes[i].subjects[j].events != instance.classes[i].subjects[j].teachers.length){
          return 'disciplineWithoutProfessor'
        }

        instance.events.push(event)
        eventID++
      }
    }
  }
  


  fs.writeFileSync('./packages/app/src/dataexample.json', JSON.stringify(instance, null, 3), 'utf-8')


  
  let json = fs.readFileSync('./packages/app/src/dataexample.json', 'utf-8')
  //let json = fs.readFileSync('./packages/app/src/dataexample.json', 'utf-8');
  let problem = JSON.parse(json);
  console.log("My input:")
  console.log(problem)
  console.log("My solution:")
  var solution = timetabling.solve(problem, 'mip')
  console.log(solution)
  console.log(JSON.stringify(solution))
  return JSON.stringify(solution)
}

const generateSolutionSA = () => {

  var instanceData = fs.readFileSync('./packages/app/src/dataexample.json', 'utf-8')
  const instance = JSON.parse(instanceData)
  //create events

  instance.events = []
  var event = {}
  var eventID = 0
  for(var i = 0; i < instance.classes.length; ++i){
    
    for(var j = 0; j < instance.classes[i].subjects.length; ++j){
    
      for(var k = 0; k < instance.classes[i].subjects[j].events; k++){

        event = {
          id : eventID,
          class: instance.classes[i].id,
          subject: instance.classes[i].subjects[j].id,
          subgroup: instance.classes[i].subjects[j].subgroups,
          teacher: instance.classes[i].subjects[j].teachers[k],
        }


        if(instance.classes[i].subjects[j].teachers.length == 0){
          return 'disciplineWithoutProfessor'
        }else if(instance.classes[i].subjects[j].rooms.length == 0){
          return 'disciplineWithoutRoom'
        }else if(instance.classes[i].subjects[j].events != instance.classes[i].subjects[j].teachers.length){
          return 'disciplineWithoutProfessor'
        }

        instance.events.push(event)
        eventID++
      }
    }
  }
  
  fs.writeFileSync('./packages/app/src/dataexample.json', JSON.stringify(instance, null, 3), 'utf-8')


  let json = fs.readFileSync('./packages/app/src/dataexample.json', 'utf-8')
  //let json = fs.readFileSync('./packages/app/src/dataexample.json', 'utf-8');
  let problem = JSON.parse(json);
  console.log("My input:")
  console.log(problem)
  console.log("My solution:")
  var solution = timetabling.solve(problem, 'sa')
  console.log(solution)
  console.log(JSON.stringify(solution))
  return JSON.stringify(solution)

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
contextBridge.exposeInMainWorld('registerSubjectTeacher', registerSubjectTeacher)

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
  
//solution
contextBridge.exposeInMainWorld('generateSolution', generateSolution)
contextBridge.exposeInMainWorld('generateSolutionSA', generateSolutionSA)