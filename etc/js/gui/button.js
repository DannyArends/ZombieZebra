Button.prototype = new Object2D();
Button.prototype.constructor = Button;
function Button(x, y, text, w, h, color, bgcolor, onClick){
  Object2D.apply(this, [x, y, color, w, h]);

  this.text     = new Text(x, y, text, color);
  this.onClick  = onClick;

  this.text.center(w, h); // Center

  this.setBgColor = function(color){
    this.children[1].color = color;
  }

  this.children.push(new Square(x-1, y-1, w+2, h+2, '#CCCCCC'));
  this.children.push(new Square(x+1, y+1, w-2, h-2, bgcolor));
  this.children.push(this.text);
}

