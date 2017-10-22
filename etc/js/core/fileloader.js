function FileLoader(){
  this.allfiles    = [];
  this.reader      = null;

  this.loadImage = function(location, x, y, w, h){
    var myimage = new Image2D(x+1, y+1, w, h);
    var image = new Image();
    image.onload = onImageLoaded(myimage, image);
    image.src = location;
    return myimage;
  }
}

function onImageLoaded(myimage, image){ 
  return function(e){
    if(e.target.height != 0){
      console.log(" Image loaded: " + image.src);
      myimage.img    = image;
      myimage.loaded = true;
    }else{
      console.log(" Image loading failed: " + image.src);
    }
  }
}

