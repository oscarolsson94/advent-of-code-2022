let maxCalories = 0;
let currentInventory = 0;

const rows = INPUT_STRING.split(/\r?\n/);

for(row of rows){
  if(row === ""){
    if(currentInventory > maxCalories){
      maxCalories = currentInventory;
    }
    currentInventory = 0;
  } else {
   currentInventory += Number(row)
  }
}

return maxCalories;
