Game.prototype = new Object2D();
Game.prototype.constructor = Game;
function Game(name, x, y, sx, sy){
  Object2D.apply(this, [x, y, '#000000', sx, sy]);
  console.log("Starting game: " + name);

  this.inventory = new Inventory(x, y);
  this.manufacturing = new Manufacturing(x + 195, y);
  this.distribution = new Distribution( x + 590,  y);

  this.children.push(this.inventory);
  this.children.push(this.manufacturing);
  this.children.push(this.distribution);
}

