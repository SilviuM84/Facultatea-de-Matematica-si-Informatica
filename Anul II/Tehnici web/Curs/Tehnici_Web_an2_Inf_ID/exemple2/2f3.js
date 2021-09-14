function f(i) {
  var s=document.getElementById("sel") // lista dropdown
  var u=s.options[i-1].innerHTML; // optiunea selectata
  document.getElementById("anc").href=u;  // legatura ancorei
}