Game.prototype = new Object2D();
Game.prototype.constructor = Game;
function Game(name, x, y, sx, sy){
  Object2D.apply(this, [x, y, '#000000', sx, sy]);
  console.log("Starting game: " + name);
  this.children.push(new Inventory(x, y));
  this.children.push(new Manufacturing(x + 195, y));
  this.children.push(new Distribution( x + 590,  y));
}

