const { contextBridge } = require('electron');
const fs = require('fs');
const timetabling = require('bindings')('timetabling');

// Exemplo no arquivo preload.js
const salvarArquivo = (data) => {
    try {
      fs.writeFile('./packages/app/src/data.json', data, 'utf-8', (err) => err && console.error(err));
    }catch (e) {
      console.log(e);
    }
};

let json = fs.readFileSync("C:\\Users\\andre\\Workspace\\projects\\educational-timetabling\\example.json", 'utf-8');
let problem = JSON.parse(json);

console.log("My input:");
console.log(problem);

console.log("My solution:");
console.log(timetabling.solve(problem, 'mip'));

// Expor a função no objeto window
contextBridge.exposeInMainWorld('salvarArquivo', salvarArquivo);

  
