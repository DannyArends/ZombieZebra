Square.prototype = new Object2D();
Square.prototype.constructor = Square;
function Square(x, y, w, h, color){
  Object2D.apply(this, [x, y, color, w, h]);

  this.render = function(ctx){
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x(), this.y(), this.sx(), this.sy());
  }
}

