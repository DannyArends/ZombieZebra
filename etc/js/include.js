function include(filename){
	var head = document.getElementsByTagName('head')[0];	
	script = document.createElement('script');
	script.src = filename;
	script.type = 'text/javascript';
	head.appendChild(script)
}

include("etc/js/game/achievements.js");
include("etc/js/game/building.js");
include("etc/js/game/distribution.js");
include("etc/js/game/manufacturing.js");
include("etc/js/game/options.js");
include("etc/js/game/upgrades.js");

include("etc/js/core/handlers.js");
include("etc/js/core/mouse.js");
include("etc/js/core/fileloader.js");

include("etc/js/inventory.js");

include("etc/js/gui/object2d.js");
include("etc/js/gui/text.js");
include("etc/js/gui/square.js");
include("etc/js/gui/image.js");
include("etc/js/gui/button.js");
include("etc/js/gui/page.js");
include("etc/js/gui/game.js");

include("etc/js/scene.js");


(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-22162565-2', 'zombiezebra.nl');
ga('send', 'pageview');

