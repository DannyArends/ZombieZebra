Distribution.prototype = new Object2D();
Distribution.prototype.constructor = Distribution;
function Distribution(x, y){
  Object2D.apply(this, [x, y, '#000000']);

  this.children.push(new Building(x, y +  10, "Neighbourhood kid",
                    "Some punk-ass kid from the block, sells",      2.75,    10, false));
  this.children.push(new Building(x, y +  70, "Call centre employee",
                     "A student chewing bubble gum, sells",         32.50,    50, false));
  this.children.push(new Building(x, y +  130, "Traveling salesman",
                    "Kind of a professional, sells",              375.50,   300, false));
  this.children.push(new Building(x, y +  190, "Paper clip road show",
                    "A trailer that sells paper clips, sells",   2649.99,  2000, false));
  this.children.push(new Building(x, y +  250, "Sales unit 500",
                    "Some automation goes a long way, sells",   27500,    12500, false));
  this.children.push(new Building(x, y +  310, "Maffia marketing agency",
                    "Sleazy marketeers, scamming your grandparents, sells",   2950000,    49500, false));

  this.update = function(t){}

  this.getSales = function(){
    sales = 0;
    for(var i = 0; i < this.children.length; i++){ 
      sales += (this.children[i].owned * this.children[i].number);
    }
    return sales;
  }

  this.render = function(ctx){
    ctx.font      = '16px Georgia';
    ctx.fillStyle = '#000000';
    ctx.fillText('Distribution', this.x(), this.y()+5);
    this.renderChildren(ctx);
  }
}

