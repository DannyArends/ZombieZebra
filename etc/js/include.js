function include(filename) {
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

