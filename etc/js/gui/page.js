function gFL(page){ return function(e){
  if(e){ console.log(e.length + " bytes of data received from server");
    var res = e.split("\n");
    for(var i = 0;i < res.length; i++){
      page.children.push(new   Text( page.x(),   page.y()+(14*i), res[i], '#000000', 'Avant Garde', 14));
    }
  }else{ console.log(" ERROR: Failed to retrieve data"); }
} }

function fromServer(id, callback, dataType){
  $.ajax(id, {
      type    : 'GET',
      dataType: 'json' | dataType,
      success : function(data){ if (callback) callback(data); },
      error   : function(){ if(callback) callback(); }
  });
}

Page.prototype = new Object2D();
Page.prototype.constructor = Page;
function Page(name, x, y, sx, sy){
  Object2D.apply(this, [x, y, '#000000', sx, sy]);
  this.url = "/pages/" + name + ".txt";
  console.log("Loading page: " + this.url);
  fromServer(this.url, gFL(this));
}

