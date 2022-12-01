let currentInventory = 0;
const elfContainers = []

const rows = INPUT_STRING.split(/\r?\n/);

for(row of rows){
  if(row === ""){
    elfContainers.push(currentInventory)
    currentInventory = 0;
  } else {
   currentInventory += Number(row)
  }
}

const [first, second, third] = elfContainers.sort((a,b) => b-a)

console.log(first + second + third) 
