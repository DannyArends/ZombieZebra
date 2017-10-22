function gBC(scene){ return function(text){
  scene.switchPage(text);
} }

function genClick(btn){ return function(){ 
  console.log("Obj2D: " + btn.text.text);
  if(btn.onClick) btn.onClick(btn.text.text);
} }

function mainLayout(children, scene){
  children.push(scene.bg);
  children.push(scene.display);
  children.push(scene.text);
  children.push(new   Text( 520,   0, ".nl", '#000000', engine.font(), 75));
  children.push(new   Text( 18,   0, "Zombie Zebra", '#FFFFFF', engine.font(), 75));
  children.push(new Button( 18, 125, "Zombie Zebra", 150, 20, '#330000', '#FFFFFF', gBC(scene)));
  children.push(new Button( 18, 150, "Blog", 150, 20, '#330000', '#FFFFFF', gBC(scene)));
  children.push(new Button( 18, 175, "Paper clip clicker", 150, 20, '#330000', '#FFFFFF', gBC(scene)));
  children.push(new Button( 18, 200, "About", 150, 20, '#330000', '#FFFFFF', gBC(scene)));
  children.push(new Button( 18, 225, "Contact", 150, 20, '#330000', '#FFFFFF', gBC(scene)));
}

function openPage(scene, page){
  var text;
  switch(page){
    case "Zombie Zebra":
      scene.children.push(new Page("index", 190, 160));
      break;
    case "About":
      scene.children.push(new Page("about", 190, 160));
      break;
    case "Blog":
      scene.children.push(new Page("blog", 190, 160));
      break;
    case "Contact":
      scene.children.push(new Page("contact", 190, 160));
      break;
    case "Paper clip clicker":
      scene.cGame = new Game("pcc",   190, 160);
      scene.children.push(scene.cGame);
      break;
    default:
      scene.children.push(new Page("notfound", 190, 160));
      break;
  }
}

Scene.prototype = new Object2D();
Scene.prototype.constructor = Scene;
function Scene(mouse) {
  Object2D.apply(this, [0, 0, '#EF0000', window.innerWidth, window.innerHeight]);
  this.mouse   = mouse;
  this.files   = new FileLoader();
  this.cGame   = null;

  this.init = function(){
    this.display = new Square(160, 95, window.innerWidth - 170, window.innerHeight - 95, 'rgba(233,233,233,0.95)');
    this.bg      = this.files.loadImage('etc/img/bg.png', 0, 0, window.innerWidth, window.innerHeight);
    this.text    = new Text( 190, 115, "Zombie Zebra", '#000000', 'Arial', 20);
    this.switchPage("Zombie Zebra");
  }

  this.update = function(t) {
    if(this.cGame) this.cGame.update(t);
  }

  this.getCurrentGame    = function(){ if(this.cGame) return this.cGame; }
  this.getInventory      = function(){ if(this.cGame) return this.cGame.inventory; }
  this.getManufacturing  = function(){ if(this.cGame) return this.cGame.manufacturing; }
  this.getDistribution   = function(){ if(this.cGame) return this.cGame.distribution; }

  this.switchPage = function(page){
    this.children = [];
    this.text.text = page;
    mainLayout(this.children, this);
    openPage(this, page);
    this.monitor();
  }

  this.resize = function(x, y){
    this.size[0] = x; this.size[1] = y;
    this.display.size[0] = x  - 170; this.display.size[1] = y - 95;
    this.bg.size[0] = x; this.bg.size[1] = y;
  }

  this.monitor = function(){
    mouse.clear();
    for(var i = 2; i < this.children.length; i++){ // Start from 1, to ignore the display square at [0]
      mouse.monitorObj(this.children[i], genClick(this.children[i]));
    }
    if(this.cGame) this.cGame.monitor(mouse);
  }

  this.render = function(ctx){
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x(), this.y(), this.sx(), this.sy());
    this.renderChildren(ctx);
  }
}

