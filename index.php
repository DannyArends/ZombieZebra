<?php
  include 'api/danode.php';
  
  echo 'HTTP/1.1 200 OK',"\n";
  echo 'Server: DaNode/0.0.1 (Universal)',"\n";
  echo 'X-Powered-By: DMD 2.60 and PHP',"\n";
  echo 'Content-Type: text/html; charset=UTF-8',"\n";
  echo 'Connection: close',"\n\n";
?>
<!DOCTYPE html>
<html dir='ltr' lang='en'>
<head>
  <meta charset="UTF-8">
  <style  type='text/css' media='screen'> @import "etc/css/style.css";</style>
  <meta name="author" content="Zombie Zebra - Info@zombiezebra.nl">
  <title>Zombie Zebra, innovation in web application</title>
  <meta name='description'  content= "Zombie Zebra - Innovation in web application, meeting your requirements">
  <meta name='keywords'     content= "Zombie Zebra, Online Games, HTML5, javascript, web application, innovation">

  <script type='text/javascript'></script>
  <script type='text/javascript' src='//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js'></script>
  <script type='text/javascript' src='etc/js/include.js'></script>
  <script type='text/javascript' src='etc/js/engine.js'> </script>

  <meta name="google-site-verification" content="DRGLryc3qdAjskDiTgqW0qmYEC6gkSVHREIk9n8WXLs" />
</head>
<body onload="setTimeout(function() {init();}, 100);">
  <canvas id="mycanvas" class="mycanvas">
  Your browser does not support the HTML5 canvas.
  </canvas>
</body>
</html>

