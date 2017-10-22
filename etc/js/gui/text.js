Text.prototype = new Object2D();
Text.prototype.constructor = Text;
function Text(x, y, text, color, font, size){
  Object2D.apply(this, [x, y, color]);
  this.text   = text;
  this.font   = 'Avant Garde'; if(font)  this.font  = font;
  this.psize  = 13;            if(size)  this.psize = size;

  this.loc[1] += (this.psize); // Correct the initial offset

  this.center = function(w, h){
    this.loc[0] += (w/2) - (this.text.length * (this.psize/4)); // Center
    if(h) this.loc[1] += ((h-2) - this.psize)/2;
  }

  this.render = function(ctx){
    ctx.fillStyle = this.color;
    ctx.font = this.psize + "px " + this.font;
    ctx.fillText(this.text, this.x(), this.y());
  }
}

