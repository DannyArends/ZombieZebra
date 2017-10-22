// Class of object 2D
//x,y : Location from top left in pixels
//c   : Color
//w,h : Width and height in pixels
function Object2D(x, y, c, w, h){
  this.loc       = [0,0];
  this.size      = [0,0];
  this.color     = '#000000';
  this.children  = [];

  if(x) this.loc[0]   = x;
  if(y) this.loc[1]   = y;
  if(w) this.size[0]  = w;
  if(h) this.size[1]  = h;
  if(c) this.color    = c;

  this.x  = function(){ return  this.loc[0]; }  // X oofset in pixels to top left
  this.y  = function(){ return  this.loc[1]; }  // Y offset in pixels to top left
  this.sx = function(){ return this.size[0]; }  // 'Width' in pixels to this.x()
  this.sy = function(){ return this.size[1]; }  // 'Height' in pixels to this.y()

  // Render all children to canvas context
  this.renderChildren = function(ctx){
    for(var i = 0; i < this.children.length; i++){
      this.children[i].render(ctx);
    }
  }

  // Render all children to canvas context
  this.updateChildren = function(t){
    for(var i = 0; i < this.children.length; i++){
      this.children[i].update(t);
    }
  }

  this.monitor = function(mouse){
    for(var i = 0; i < this.children.length; i++){ this.children[i].monitor(mouse); }
  }

  // Defaults to updating all children on the canvas context
  this.update = function(t){ this.updateChildren(t); }

  // Defaults to rendering all children on the canvas context
  this.render = function(ctx){ this.renderChildren(ctx);}
}

