Building.prototype = new Object2D();
Building.prototype.constructor = Building;
function Building(x, y, text, descr, cost, production, source = true){
  Object2D.apply(this, [x, y]);
  this.text = text;
  this.descr = descr;
  this.basecost = cost;
  this.production = production;
  this.owned = 0;
  this.sink = !source;

  this.canBuy = function(){ return(engine.scene.getInventory().money >= this.buyCost()); }
  this.bgColor = function(){ if(this.canBuy()){ return('#DDDDDD'); }else{ return('#AAAAAA'); } }
  this.bColor = function(){ if(this.canBuy()){ return('#AADDAA'); }else{ return('#DDAAAA'); } }
  this.sColor = function(){ if(this.owned == 0){ return('#DDAAAA'); }else{ return('#AADDAA'); } }

  this.load = function(){ // console.log("Loading: " + this.text);
    if(localStorage) {
      this.owned = parseInt(localStorage.getItem(this.text));
      if(!this.owned) this.owned = 0;
    }
  }

  this.load();

  this.save = function(){
    if(localStorage){
      localStorage.setItem(this.text, this.owned);
    }
  }
  
  this.reset = function(){ localStorage.setItem(this.text, 0); this.load(); }

  this.buyCost = function(){ return(this.basecost * Math.pow(1.15, this.owned)); }

  this.buybtn = new Button(this.x(), this.y()+36, 
                           "Buy", 150, 16, '#000000', '#AADDAA',
                           buyBuilding(this));
  this.sellbtn = new Button(this.x()+190, this.y()+36, 
                           "Sell", 150, 16, '#000000', '#FFFFFF', 
                            sellBuilding(this));

  this.children.push(this.buybtn);
  this.children.push(this.sellbtn);

  this.monitor = function(mouse) {
    for(var i = 0; i < this.children.length; i++){
      mouse.monitorObj(this.children[i], genClick(this.children[i]));
    }
  }

  this.render = function(ctx) {
    ctx.fillStyle = this.bgColor();
    ctx.fillRect(this.x(), this.y(), 340, 50);
    ctx.fillStyle = this.color;
    ctx.font = engine.headersize() + 'px ' + engine.font();
    ctx.fillText("" + this.owned, this.x()+346, this.y()+32);


    ctx.font = engine.fontsize() + "px " + engine.font();
    ctx.fillText(this.text, this.x()+4, this.y()+18);
    ctx.fillText("€ " + numToFP(this.buyCost(), 2), this.x()+250, this.y()+18);
    ctx.font = "10px " + engine.font();
    ctx.fillText(this.descr + " " + numToFP(this.production, 0) + " a sec", this.x()+4, this.y()+32);

    this.buybtn.setBgColor(this.bColor());
    this.sellbtn.setBgColor(this.sColor());
    this.renderChildren(ctx);
 }
}
