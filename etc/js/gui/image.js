Image2D.prototype = new Object2D();
Image2D.prototype.constructor=Image2D;
function Image2D(x, y, w, h){
  Object2D.apply(this, [x, y, '#ffffff', w, h]);
  this.img;
  this.loaded = false;
  
  this.render = function(ctx){
    if(this.loaded){
      ctx.drawImage(this.img, this.x(), this.y(), this.sx(), this.sy());
    }
  }
}
