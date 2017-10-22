Text.prototype = new Object2D();
Text.prototype.constructor = Text;
function Text(x, y, text, color, font, size = 12) {
  Object2D.apply(this, [x, y, color]);
  this.text   = text;
  this.font   = engine.font(); if(font)  this.font  = font;
  this.psize  = engine.fontsize(); if(size)  this.psize = size;

  this.loc[1] += (this.psize); // Correct the initial offset

  this.center = function(w, h){
    this.loc[0] += (w/2) - (this.text.length * (this.psize/4)); // Center
    if(h) this.loc[1] += ((h-2) - this.psize)/2;
  }

  this.render = function(ctx) {
    ctx.fillStyle = this.color;
    ctx.font = this.psize + "px " + this.font;
    ctx.fillText(this.text, this.x(), this.y());
  }
}

function rendertext(ctx, txt, val, x, y, p = 0, prefix = '') {
  ctx.fillText(txt, x, y);
  ctx.fillText(prefix  + numToFP(val, p), x + 100, y);
}

function numToFP(val, minFD, maxFD) {
  if(!minFD) minFD = 0;
  if(!maxFD) maxFD = minFD;
  return(val.toLocaleString(undefined,{ minimumFractionDigits: minFD, maximumFractionDigits: maxFD }));
}
