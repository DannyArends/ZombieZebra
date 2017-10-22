Manufacturing.prototype = new Object2D();
Manufacturing.prototype.constructor = Manufacturing;
function Manufacturing(x, y){
  Object2D.apply(this, [x, y, '#000000']);

  this.children.push(new Building(x, y +  10, "Hand-cranked bending apparatus", 
                     "Tiresome, but less so than using only your fingers, produces", 1.50,        8, true));
  this.children.push(new Building(x, y +  70, "Sweatshop",
                     "Low wages, little ethics. But it speeds things up, produces", 20.00,       30, true));
  this.children.push(new Building(x, y + 130, "Paper clip thingamabob",
                     "It's a whatchamacallit machine, produces",                    299.95,     150, true));
  this.children.push(new Building(x, y + 190, "Wire looping factory",
                     "A serious choice for quantity AND quality, produces",        7500.00,    1750, true));
  this.children.push(new Building(x, y + 250, "Industrial steel-to-paperclip",
                     "Amazing yield of paper clips from iron ore., produces",    125000.00,   11000, true));
  this.children.push(new Building(x, y + 310, "Clippy 'Clipping' Ramirez",
                     "The ultimate choice for bending paper clips, produces",    999999.95,   50000, true));
  this.children.push(new Building(x, y + 370, "Bending unit 22",
                     "The one and only, produces",                              4300000.00,  100000, true));

  this.update = function(t){}

  this.getProduction = function(){
    prod = 0;
    for(var i = 0; i < this.children.length; i++){ 
      prod += (this.children[i].owned * this.children[i].production);
    }
    return prod;
  }

  this.render = function(ctx){
    ctx.font = engine.headersize() + 'px ' + engine.font();
    ctx.fillStyle = '#000000';
    ctx.fillText('Manufacturing', this.x(), this.y()+5);
    this.renderChildren(ctx);
  }
}

