function onBend(inv){ return function(){ 
    inv.paperclips += 25; 
} }

function onSell(inv){ return function(){ 
  if(inv.paperclips >= 10){
    inv.paperclips  -= 10;
    inv.money       += (inv.price*10);
  }
} }


Inventory.prototype = new Object2D();
Inventory.prototype.constructor = Inventory;
function Inventory(x, y) {
  Object2D.apply(this, [x, y, '#000000']);
  this.money      = 0;
  this.paperclips = 0;
  this.timeplayed = 0;
  this.price      = 0.005;
  this.earned     = 0;
  this.tp         = +new Date();

  this.update = function(t) {
    var tn = +new Date();
    if (tn-this.tp > 950) {
      this.timeplayed++;
      var produced = this.production();
      this.paperclips += produced;
      var sold = this.canSell();
      this.paperclips -= sold;
      this.earned = sold * this.price;
      this.money += this.earned;
      this.save();
      this.tp = tn;
    }
  }

  this.save = function(){
    if(localStorage){
      localStorage.setItem("p.money", this.money);
      localStorage.setItem("p.paperclips", this.paperclips);
      localStorage.setItem("p.timeplayed", this.timeplayed);
    }
  }

  this.load = function(){
    if(localStorage){
      this.money      = parseFloat(localStorage.getItem("p.money"));
      this.paperclips =   parseInt(localStorage.getItem("p.paperclips"));
      this.timeplayed =   parseInt(localStorage.getItem("p.timeplayed"));
      console.log("Data loaded from local storage");
    }
    if(!this.money)      this.money = 0;
    if(!this.paperclips) this.paperclips = 0;
    if(!this.timeplayed) this.timeplayed = 0;
  }

  this.load();

  this.production = function(){ return engine.scene.getManufacturing().getProduction(); }
  this.distribution = function(){ return engine.scene.getDistribution().getSales(); }
  this.income = function(){ return this.earned; }

  this.canSell = function(){
    var psales = this.distribution();
    return((psales > this.paperclips)? this.paperclips : psales);
  }

  this.bendbtn = new Button(this.x()+4, this.y()+120, 
                     "Bend paper clips", 150, 30, '#000000', '#AADDAA',onBend(this));
  this.sellbtn = new Button(this.x()+4, this.y()+160, 
                     "Sell a box",       150, 30, '#000000', '#FFFFFF', onSell(this));

  this.children.push(this.bendbtn);
  this.children.push(this.sellbtn);

  this.monitor = function(mouse){
    for(var i = 0; i < this.children.length; i++){
      mouse.monitorObj(this.children[i], genClick(this.children[i]));
    }
  }

  this.render = function(ctx){
    ctx.font = engine.headersize() + 'px ' + engine.font();
    ctx.fillStyle = '#000000';
    ctx.fillText('Inventory', this.x(), this.y()+5);

    ctx.font      = engine.fontsize() + 'px ' + engine.font();
    ctx.fillStyle = '#000000';
    rendertext(ctx, 'Seconds:',       this.timeplayed,      this.x(), this.y() +  28);
    rendertext(ctx, 'Paper clips:',   this.paperclips,      this.x(), this.y() +  44);
    rendertext(ctx, 'Production:',    this.production(),    this.x(), this.y() +  60);
    rendertext(ctx, 'Distribution:',  this.distribution(),  this.x(), this.y() +  76);
    rendertext(ctx, 'Income:',        this.income(),        this.x(), this.y() +  92, 2, '€ ');
    rendertext(ctx, 'Cash:',          this.money,           this.x(), this.y() + 108, 2, '€ ');
    this.sellbtn.setBgColor((this.paperclips >= 10)? '#AADDAA' : '#DDAAAA');
    this.renderChildren(ctx);
  }
}

