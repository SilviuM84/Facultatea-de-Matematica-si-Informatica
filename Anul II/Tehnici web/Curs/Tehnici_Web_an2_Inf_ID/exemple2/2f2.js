function f(i) {
  var u=prompt("Scrieti o adresa URL","im.gif");
  if(u) document.getElementById("a"+i).href=u;   // legatura ancorei de langa butonul apasat  
}