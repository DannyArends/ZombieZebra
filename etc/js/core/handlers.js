function resize(e){
  console.log(" resize()");
  engine.ctx.canvas.width = window.innerWidth;
  engine.ctx.canvas.height = window.innerHeight;
  engine.resize(window.innerWidth, window.innerHeight);
}

function onmousedown(mouse){ return function(e){ mouse.down(e); } }
function onmouseup(mouse){ return function(e){ mouse.up(e); } }

function buyBuilding(building){ return function(){ 
  if(engine.scene.getInventory().money >= building.buyCost()){
    engine.scene.getInventory().money -= building.buyCost();
    building.owned++;
    building.save();
  }else{
    console.log("Not enough money to buy: " + building.text);
  }
} }

function sellBuilding(building){ return function(){ 
  console.log("Sell Building");
  if(building.owned > 0){
    building.owned--;
    engine.scene.getInventory().money += building.buyCost();
    building.save();
  }else{
    console.log("No such building to sell: " + building.text);
  }
} }

