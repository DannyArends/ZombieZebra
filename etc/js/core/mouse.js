function ClickRect(x, y, sx, sy, onClick){
  this.x = x;
  this.y = y;
  this.mx = x+sx;
  this.my = y+sy;
  this.onClick = onClick;
}

function Mouse(){
  this.x=0; this.y=0;
  this.monitored = [];

  this.update = function(e){
    if(e){
      this.x=e.pageX; 
      this.y=e.pageY;
    }
  }
  
  this.down = function(e, scene){ this.update(e);
    for(var i = 0; i < this.monitored.length; i++){
      var obj = this.monitored[i];
      if(this.x > obj.x && this.x < obj.mx){
        if(this.y > obj.y && this.y < obj.my){
          obj.onClick();
        }
      }
    }
  }

  this.up = function(e, scene){ this.update(e);
//    console.log(" Mouse Up: " + this.x + "," + this.y);
  }

  this.clear = function(){
    this.monitored = [];
  }

  this.monitorObj = function(obj, onClick){
    this.monitor(obj.x(), obj.y(), obj.sx(), obj.sy(), onClick);
  }

  this.monitor = function(x, y, sx, sy, onClick){
    //console.log("Monitor Coords: "+x+" "+y+" "+sx+" "+sy)
    this.monitored.push(new ClickRect(x, y, sx, sy, onClick));
  }
}


