console.log("Engine v 0.0");

function Engine(){
  this.canvas;
  this.ctx;
  this.interval       = 200;
  this.mouse          = new Mouse();
  this.scene          = new Scene(this.mouse);
  this.tp             = +new Date();

  this.init = function(){
    this.canvas = document.getElementById('mycanvas');
    this.ctx = this.canvas.getContext('2d');
    this.ctx.canvas.width = window.innerWidth;
    this.ctx.canvas.height = window.innerHeight;
    engine.canvas.onmousedown = onmousedown(this.mouse);
    engine.canvas.onmouseup = onmouseup(this.mouse);
    this.scene.init();
  }

  this.resize = function(x, y){ 
    if(this.scene){ this.scene.resize(x, y); }
  }

  this.render = function(){
    var tn = +new Date();
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    this.scene.render(this.ctx);
    this.scene.update((tn-this.tp));
    this.tp = tn;
  }

  this.font = function() { return("Arial"); }
  this.headersize = function() { return(16); }
  this.fontsize = function() { return(12); }
}

var engine;

function init(){
  console.log('Initializing engine()');
  engine = new Engine();
  engine.init();
  window.onresize = resize;
  window.setInterval('engine.render()',  engine.interval);
}

