
function updateDictList() // introduce in lista cuvintele din categoria selectata
{
   // controalele de selectie a catagoriei de cuvinte
   var rFall = document.getElementById("filter_all");
   var rFn = document.getElementById("filter_nouns");
   var rFadj = document.getElementById("filter_adjectives");
   var sFnrule = document.getElementById("filter_n_rule");
   var sFadjrule = document.getElementById("filter_adj_rule");
   // controlul-lista in care se introduc cuvintele din categoria selectata 
   var sDictList = document.getElementById("DictList"); 

   var word; // memoreaza cuvintele din categoria selectata
   var words = new Array();
   var nwords = 0;

   if (rFall.checked)
   {
      for (word in dictionary)   
         words[nwords++] = word.toString();
   }
   else if (rFn.checked)
   {
      var tmp = sFnrule.options[sFnrule.selectedIndex].value;
      if (tmp == "all")
      {
         for (word in dictionary)
            if (dictionary[word]["pos"] == "n") words[nwords++] = word.toString();
      }
      else
      {
         var eidx = tmp.indexOf("e");
         if (eidx < 0)
         {
            for (word in dictionary)
               if ((dictionary[word]["pos"] == "n") && (dictionary[word]["rule"] == tmp) && !("except" in dictionary[word])) words[nwords++] = word.toString();
         }
         else
         {
            for (word in dictionary)
               if ((dictionary[word]["pos"] == "n") && (dictionary[word]["rule"] == tmp.substring(0, eidx)) && ("except" in dictionary[word])) words[nwords++] = word.toString();
         }
      }
   }
   else if (rFadj.checked)
   {
      var tmp = sFadjrule.options[sFadjrule.selectedIndex].value;
      if (tmp == "all")
      {
         for (word in dictionary)
            if (dictionary[word]["pos"] == "adj") words[nwords++] = word.toString();
      }
      else
      {
         var eidx = tmp.indexOf("e");
         if (eidx < 0)
         {
            for (word in dictionary)
               if ((dictionary[word]["pos"] == "adj") && (dictionary[word]["rule"] == tmp) && !("except" in dictionary[word])) words[nwords++] = word.toString();
         }
         else
         {
            for (word in dictionary)
               if ((dictionary[word]["pos"] == "adj") && (dictionary[word]["rule"] == tmp.substring(0, eidx)) && ("except" in dictionary[word])) words[nwords++] = word.toString();
         }
      }
   }
   words.sort(); // Metoda de sortare a obiectului Array
   var oOption;
   for (var i = 0; i < nwords; i++) {
     oOption = document.createElement("option"); // se creaza un element al listei care va contine un cuvant
     oOption.text = words[i];
     oOption.value = words[i];
     sDictList.options[i] = oOption;
   }
   sDictList.length = nwords;

   locateinDictList(); 
}


function locateinDictList() // cautarea unui cuvant in lista;
                            // apelata dupa tastarea in caseta text "look for"
                            // a unui caracter prin apasarea si eliberarea imediata a unei taste
                            // sau a mai multor caractere prin eliberarea unei taste dupa ce a fost tinuta apasata 
{
   var itSearchw = document.getElementById("searchw");
   var searchw = itSearchw.value; // textul din caseta
   var sDictList = document.getElementById("DictList");

   searchw.toLowerCase();
   var i = 0;
   while((i < sDictList.length) && (searchw > sDictList.options[i].value)) i++; // cautarea in lista a primului cuvant potrivit 
   if (i < sDictList.length)
     sDictList.selectedIndex = i;
   else 
     sDictList.selectedIndex = 0;
}

function changeFilter(x) // apelata cand este selectat un buton de optiune (radio)
{
   var sFnrule = document.getElementById("filter_n_rule");
   var sFadjrule = document.getElementById("filter_adj_rule");

   switch (x)
   {
      case 1 : sFnrule.setAttribute("disabled", "true"); sFadjrule.setAttribute("disabled", "true"); break;
      case 2 : sFnrule.removeAttribute("disabled"); sFadjrule.setAttribute("disabled", "true"); break;
      case 3 : sFnrule.setAttribute("disabled", "true");; sFadjrule.removeAttribute("disabled"); break;
   }
   updateDictList(); // actualizarea listei de cuvinte
}

function swapImage(x) // comutarea intre doua surse ale unei imagini
{
   var tmp = x.src.toString();
   if (tmp.indexOf("closed_book") >= 0)
      tmp = tmp.replace(/closed_book/, "open_book"); // prima sursa
   else if (tmp.indexOf("open_book") >= 0)
      tmp = tmp.replace(/open_book/, "closed_book"); // a doua sursa
   x.src = tmp;
}

function toggle(x) // comutarea stilului de afisare a fiilor unui nod
{
   for (var i = 2; i <= x.parentNode.childNodes.length-1; i++)
   {
      x.parentNode.childNodes[i].style.display == "block" ? x.parentNode.childNodes[i].style.display = "none" : x.parentNode.childNodes[i].style.display = "block";
   }
}

function respond(event)  // functie necesara pentru browser-ul IE
{
   swapImage(window.event.srcElement);  
   toggle(window.event.srcElement);
}

function crossSetonClick(obj) // setarea manipulatorului evenimentului onclick pentru un obiect
{
   if (navigator.appName == "Microsoft Internet Explorer")
      obj.onclick = respond;
   else
      obj.setAttribute("onclick", "swapImage(this); toggle(this)");
}

function showinf() // se creaza elementele care contin imagini si texte 
                   // care dau informatii despre cuvantul selectat
{
   var artSpan, noSpan, nacSpan, gdSpan, genSpan, formSpan, tSpan, newText, newImg;
   var infSpan = document.getElementById("inf"); 
   var sDictList = document.getElementById("DictList");
   var word = sDictList.options[sDictList.selectedIndex].value; // cuvantul selectat in lista

   var n = infSpan.childNodes.length;
   for (var i = n - 1; i >= 0; i--)   // stergerea informatiilor anterioare
      infSpan.removeChild(infSpan.childNodes[i]);
// se afiseaza informatiile pentru cuvantul selectat
// prin crearea dinamica a unor arborescente care au ca noduri 
// elemente imagine si texte nou create 
// pentru imagini se asociaza handler-e pentru evenimentul onclick cu functia crossSetonClick()
   if (dictionary[word]["pos"] == "n") // afisarea informatiilor pentru un substantiv
   {
      newImg = document.createElement("img"); // crearea unui element imagine
      newImg.src = "images/closed_book.gif";
      newImg.style.marginRight = "10px";
      newImg.style.cursor = "pointer";
      crossSetonClick(newImg); // evenimentul onclick pentru imaginea creata
      // crearea unui nod text
      newText = document.createTextNode(" forme cu articol hot\u0103r\u00E2t");
      artSpan = document.createElement("span");
      artSpan.style.fontSize = "10pt";
      artSpan.style.display = "block";
      artSpan.style.position = "relative";
      artSpan.appendChild(newImg);
      artSpan.appendChild(newText);
      newImg = document.createElement("img"); 
      newImg.src = "images/closed_book.gif";
      newImg.style.marginRight = "10px";
      newImg.style.cursor = "pointer";
      crossSetonClick(newImg);
      newText = document.createTextNode(" sg.");
      noSpan = document.createElement("span");
      noSpan.style.left = "20px";
      noSpan.style.display = "none";
      noSpan.style.position = "relative";
      noSpan.appendChild(newImg);
      noSpan.appendChild(newText);
      newImg = document.createElement("img"); 
      newImg.src = "images/closed_book.gif";
      newImg.style.marginRight = "10px";
      newImg.style.cursor = "pointer";
      crossSetonClick(newImg);
      newText = document.createTextNode(" N + AC");
      nacSpan = document.createElement("span");
      nacSpan.style.left = "20px";
      nacSpan.style.display = "none";
      nacSpan.style.position = "relative";
      nacSpan.appendChild(newImg);
      nacSpan.appendChild(newText);
      newImg = document.createElement("img"); 
      newImg.src = "images/null_book.gif";
      newImg.style.marginRight = "10px";
      newImg.style.cursor = "auto";
      newText = document.createTextNode(" " + noun_form(word, "definite", "sg", "N"));
      formSpan = document.createElement("span");
      formSpan.style.display = "none";
      formSpan.style.position = "relative";
      formSpan.appendChild(newImg);
      formSpan.appendChild(newText);
      nacSpan.appendChild(formSpan);
      noSpan.appendChild(nacSpan);
      newImg = document.createElement("img");
      newImg.src = "images/closed_book.gif";
      newImg.style.marginRight = "10px";
      newImg.style.cursor = "pointer";
      crossSetonClick(newImg); 
      newText = document.createTextNode(" G + D");
      gdSpan = document.createElement("span");
      gdSpan.style.left = "20px";
      gdSpan.style.display = "none";
      gdSpan.style.position = "relative";
      gdSpan.appendChild(newImg);
      gdSpan.appendChild(newText);
      newImg = document.createElement("img"); 
      newImg.src = "images/null_book.gif";
      newImg.style.marginRight = "10px";
      newImg.style.cursor = "auto";
      newText = document.createTextNode(" " + noun_form(word, "definite", "sg", "G"));
      formSpan = document.createElement("span");
      formSpan.style.display = "none";
      formSpan.style.position = "relative";
      formSpan.appendChild(newImg);
      formSpan.appendChild(newText);
      gdSpan.appendChild(formSpan);
      noSpan.appendChild(gdSpan);
      artSpan.appendChild(noSpan);
      newImg = document.createElement("img"); 
      newImg.src = "images/closed_book.gif";
      newImg.style.marginRight = "10px";
      newImg.style.cursor = "pointer";
      crossSetonClick(newImg);
      newText = document.createTextNode(" pl.");
      noSpan = document.createElement("span");
      noSpan.style.left = "20px";
      noSpan.style.display = "none";
      noSpan.style.position = "relative";
      noSpan.appendChild(newImg);
      noSpan.appendChild(newText);
      newImg = document.createElement("img"); 
      newImg.src = "images/closed_book.gif";
      newImg.style.marginRight = "10px";
      newImg.style.cursor = "pointer";
      crossSetonClick(newImg);
      newText = document.createTextNode(" N + AC");
      nacSpan = document.createElement("span");
      nacSpan.style.left = "20px";
      nacSpan.style.display = "none";
      nacSpan.style.position = "relative";
      nacSpan.appendChild(newImg);
      nacSpan.appendChild(newText);
      newImg = document.createElement("img"); 
      newImg.src = "images/null_book.gif";
      newImg.style.marginRight = "10px";
      newImg.style.cursor = "auto";
      newText = document.createTextNode(" " + noun_form(word, "definite", "pl", "N"));
      formSpan = document.createElement("span");
      formSpan.style.display = "none";
      formSpan.style.position = "relative";
      formSpan.appendChild(newImg);
      formSpan.appendChild(newText);
      nacSpan.appendChild(formSpan);
      noSpan.appendChild(nacSpan);
      newImg = document.createElement("img"); 
      newImg.src = "images/closed_book.gif";
      newImg.style.marginRight = "10px";
      newImg.style.cursor = "pointer";
      crossSetonClick(newImg);
      newText = document.createTextNode(" G + D");
      gdSpan = document.createElement("span");
      gdSpan.style.left = "20px";
      gdSpan.style.display = "none";
      gdSpan.style.position = "relative";
      gdSpan.appendChild(newImg);
      gdSpan.appendChild(newText);
      newImg = document.createElement("img"); 
      newImg.src = "images/null_book.gif";
      newImg.style.marginRight = "10px";
      newImg.style.cursor = "auto";
      newText = document.createTextNode(" " + noun_form(word, "definite", "pl", "G"));
      formSpan = document.createElement("span");
      formSpan.style.display = "none";
      formSpan.style.position = "relative";
      formSpan.appendChild(newImg);
      formSpan.appendChild(newText);
      gdSpan.appendChild(formSpan);
      noSpan.appendChild(gdSpan);
      artSpan.appendChild(noSpan);
      infSpan.appendChild(artSpan);

      newImg = document.createElement("img");
      newImg.src = "images/closed_book.gif";
      newImg.style.marginRight = "10px"
      newImg.style.cursor = "pointer";
      crossSetonClick(newImg);
      newText = document.createTextNode(" forme cu articol nehot\u0103r\u00E2t");
      artSpan = document.createElement("span");
      artSpan.style.fontSize = "10pt";
      artSpan.style.display = "block";
      artSpan.style.position = "relative";
      artSpan.appendChild(newImg);
      artSpan.appendChild(newText);
      newImg = document.createElement("img");
      newImg.src = "images/closed_book.gif";
      newImg.style.marginRight = "10px";
      newImg.style.cursor = "pointer";
      crossSetonClick(newImg);
      newText = document.createTextNode(" sg.");
      noSpan = document.createElement("span");
      noSpan.style.left = "20px";
      noSpan.style.display = "none";
      noSpan.style.position = "relative";
      noSpan.appendChild(newImg);
      noSpan.appendChild(newText);
      newImg = document.createElement("img");
      newImg.src = "images/closed_book.gif";
      newImg.style.marginRight = "10px";
      newImg.style.cursor = "pointer";
      crossSetonClick(newImg);
      newText = document.createTextNode(" N + AC");
      nacSpan = document.createElement("span");
      nacSpan.style.left = "20px";
      nacSpan.style.display = "none";
      nacSpan.style.position = "relative";
      nacSpan.appendChild(newImg);
      nacSpan.appendChild(newText);
      newImg = document.createElement("img");
      newImg.src = "images/null_book.gif";
      newImg.style.marginRight = "10px";
      newImg.style.cursor = "auto";
      newText = document.createTextNode(" " + noun_form(word, "nondefinite", "sg", "N"));
      formSpan = document.createElement("span");
      formSpan.style.display = "none";
      formSpan.style.position = "relative";
      formSpan.appendChild(newImg);
      formSpan.appendChild(newText);
      nacSpan.appendChild(formSpan);
      noSpan.appendChild(nacSpan);
      newImg = document.createElement("img");
      newImg.src = "images/closed_book.gif";
      newImg.style.marginRight = "10px";
      newImg.style.cursor = "pointer";
      crossSetonClick(newImg);
      newText = document.createTextNode(" G + D");
      gdSpan = document.createElement("span");
      gdSpan.style.left = "20px";
      gdSpan.style.display = "none";
      gdSpan.style.position = "relative";
      gdSpan.appendChild(newImg);
      gdSpan.appendChild(newText);
      newImg = document.createElement("img");
      newImg.src = "images/null_book.gif";
      newImg.style.marginRight = "10px";
      newImg.style.cursor = "auto";
      newText = document.createTextNode(" " + noun_form(word, "nondefinite", "sg", "G"));
      formSpan = document.createElement("span");
      formSpan.style.display = "none";
      formSpan.style.position = "relative";
      formSpan.appendChild(newImg);
      formSpan.appendChild(newText);
      gdSpan.appendChild(formSpan);
      noSpan.appendChild(gdSpan);
      artSpan.appendChild(noSpan);
      newImg = document.createElement("img");
      newImg.src = "images/closed_book.gif";
      newImg.style.marginRight = "10px";
      newImg.style.cursor = "pointer";
      crossSetonClick(newImg);
      newText = document.createTextNode(" pl.");
      noSpan = document.createElement("span");
      noSpan.style.left = "20px";
      noSpan.style.display = "none";
      noSpan.style.position = "relative";
      noSpan.appendChild(newImg);
      noSpan.appendChild(newText);
      newImg = document.createElement("img");
      newImg.src = "images/closed_book.gif";
      newImg.style.marginRight = "10px";
      newImg.style.cursor = "pointer";
      crossSetonClick(newImg);
      newText = document.createTextNode(" N + AC");
      nacSpan = document.createElement("span");
      nacSpan.style.left = "20px";
      nacSpan.style.display = "none";
      nacSpan.style.position = "relative";
      nacSpan.appendChild(newImg);
      nacSpan.appendChild(newText);
      newImg = document.createElement("img");
      newImg.src = "images/null_book.gif";
      newImg.style.marginRight = "10px";
      newImg.style.cursor = "auto";
      newText = document.createTextNode(" " + noun_form(word, "nondefinite", "pl", "N"));
      formSpan = document.createElement("span");
      formSpan.style.display = "none";
      formSpan.style.position = "relative";
      formSpan.appendChild(newImg);
      formSpan.appendChild(newText);
      nacSpan.appendChild(formSpan);
      noSpan.appendChild(nacSpan);
      newImg = document.createElement("img");
      newImg.src = "images/closed_book.gif";
      newImg.style.marginRight = "10px";
      newImg.style.cursor = "pointer";
      crossSetonClick(newImg);
      newText = document.createTextNode(" G + D");
      gdSpan = document.createElement("span");
      gdSpan.style.left = "20px";
      gdSpan.style.display = "none";
      gdSpan.style.position = "relative";
      gdSpan.appendChild(newImg);
      gdSpan.appendChild(newText);
      newImg = document.createElement("img");
      newImg.src = "images/null_book.gif";
      newImg.style.marginRight = "10px";
      newImg.style.cursor = "auto";
      newText = document.createTextNode(" " + noun_form(word, "nondefinite", "pl", "G"));
      formSpan = document.createElement("span");
      formSpan.style.display = "none";
      formSpan.style.position = "relative";
      formSpan.appendChild(newImg);
      formSpan.appendChild(newText);
      gdSpan.appendChild(formSpan);
      noSpan.appendChild(gdSpan);
      artSpan.appendChild(noSpan);
      infSpan.appendChild(artSpan);
   }
   else  if (dictionary[word]["pos"] == "adj") // afisarea informatiilor pentru un adjectiv

   {
      newImg = document.createElement("img"); // crearea unui element imagine
      newImg.src = "images/null_book.gif";
      newImg.style.marginRight = "10px";
      newImg.style.cursor = "auto";
      // crearea unui nod text
      newText = document.createTextNode("forme cu articol nehot\u0103r\u00E2t cu adjectiv aflat \u00EEnainte de sau dup\u0103 substantiv");
      tSpan = document.createElement("span");
      tSpan.style.fontSize = "10pt";
      tSpan.style.display = "block";
      tSpan.style.position = "relative";
      tSpan.appendChild(newImg);
      tSpan.appendChild(newText);
      infSpan.appendChild(tSpan);
      newImg = document.createElement("img"); // crearea unui element imagine
      newImg.src = "images/closed_book.gif";
      newImg.style.marginRight = "10px";
      newImg.style.cursor = "pointer";
      crossSetonClick(newImg); // evenimentul onclick pentru imaginea creata
      // crearea unui nod text
      newText = document.createTextNode(" + forme cu articol hot\u0103r\u00E2t cu adjectiv aflat dup\u0103 substantiv");
      artSpan = document.createElement("span");
      artSpan.style.fontSize = "10pt";
      artSpan.style.display = "block";
      artSpan.style.position = "relative";
      artSpan.appendChild(newImg);
      artSpan.appendChild(newText);
      newImg = document.createElement("img");
      newImg.src = "images/closed_book.gif";
      newImg.style.marginRight = "10px";
      newImg.style.cursor = "pointer";
      crossSetonClick(newImg);
      newText = document.createTextNode(" Masculin");
      genSpan = document.createElement("span");
      genSpan.style.left = "20px";
      genSpan.style.display = "none";
      genSpan.style.position = "relative";
      genSpan.appendChild(newImg);
      genSpan.appendChild(newText);
      newImg = document.createElement("img");
      newImg.src = "images/closed_book.gif";
      newImg.style.marginRight = "10px";
      newImg.style.cursor = "pointer";
      crossSetonClick(newImg);
      newText = document.createTextNode(" sg.");
      noSpan = document.createElement("span");
      noSpan.style.left = "20px";
      noSpan.style.display = "none";
      noSpan.style.position = "relative";
      noSpan.appendChild(newImg);
      noSpan.appendChild(newText);
      newImg = document.createElement("img");
      newImg.src = "images/closed_book.gif";
      newImg.style.marginRight = "10px";
      newImg.style.cursor = "pointer";
      crossSetonClick(newImg);
      newText = document.createTextNode(" N + AC");
      nacSpan = document.createElement("span");
      nacSpan.style.left = "20px";
      nacSpan.style.display = "none";
      nacSpan.style.position = "relative";
      nacSpan.appendChild(newImg);
      nacSpan.appendChild(newText);
      newImg = document.createElement("img");
      newImg.src = "images/null_book.gif";
      newImg.style.marginRight = "10px";
      newImg.style.cursor = "auto";
      newText = document.createTextNode(" " + adj_form(word, "nondefinite", "masculine", "sg", "N"));
      formSpan = document.createElement("span");
      formSpan.style.display = "none";
      formSpan.style.position = "relative";
      formSpan.appendChild(newImg);
      formSpan.appendChild(newText);
      nacSpan.appendChild(formSpan);
      noSpan.appendChild(nacSpan);
      newImg = document.createElement("img");
      newImg.src = "images/closed_book.gif";
      newImg.style.marginRight = "10px";
      newImg.style.cursor = "pointer";
      crossSetonClick(newImg);
      newText = document.createTextNode(" G + D");
      gdSpan = document.createElement("span");
      gdSpan.style.left = "20px";
      gdSpan.style.display = "none";
      gdSpan.style.position = "relative";
      gdSpan.appendChild(newImg);
      gdSpan.appendChild(newText);
      newImg = document.createElement("img");
      newImg.src = "images/null_book.gif";
      newImg.style.marginRight = "10px";
      newImg.style.cursor = "auto";
      newText = document.createTextNode(" " + adj_form(word, "nondefinite", "masculine", "sg", "G"));
      formSpan = document.createElement("span");
      formSpan.style.display = "none";
      formSpan.style.position = "relative";
      formSpan.appendChild(newImg);
      formSpan.appendChild(newText);
      gdSpan.appendChild(formSpan);
      noSpan.appendChild(gdSpan);
      genSpan.appendChild(noSpan);
      newImg = document.createElement("img");
      newImg.src = "images/closed_book.gif";
      newImg.style.marginRight = "10px";
      newImg.style.cursor = "pointer";
      crossSetonClick(newImg);
      newText = document.createTextNode(" pl.");
      noSpan = document.createElement("span");
      noSpan.style.left = "20px";
      noSpan.style.display = "none";
      noSpan.style.position = "relative";
      noSpan.appendChild(newImg);
      noSpan.appendChild(newText);
      newImg = document.createElement("img");
      newImg.src = "images/closed_book.gif";
      newImg.style.marginRight = "10px";
      newImg.style.cursor = "pointer";
      crossSetonClick(newImg);
      newText = document.createTextNode(" N + AC");
      nacSpan = document.createElement("span");
      nacSpan.style.left = "20px";
      nacSpan.style.display = "none";
      nacSpan.style.position = "relative";
      nacSpan.appendChild(newImg);
      nacSpan.appendChild(newText);
      newImg = document.createElement("img");
      newImg.src = "images/null_book.gif";
      newImg.style.marginRight = "10px";
      newImg.style.cursor = "auto";
      newText = document.createTextNode(" " + adj_form(word, "nondefinite", "masculine", "pl", "N"));
      formSpan = document.createElement("span");
      formSpan.style.display = "none";
      formSpan.style.position = "relative";
      formSpan.appendChild(newImg);
      formSpan.appendChild(newText);
      nacSpan.appendChild(formSpan);
      noSpan.appendChild(nacSpan);
      newImg = document.createElement("img");
      newImg.src = "images/closed_book.gif";
      newImg.style.marginRight = "10px";
      newImg.style.cursor = "pointer";
      crossSetonClick(newImg);
      newText = document.createTextNode(" G + D");
      gdSpan = document.createElement("span");
      gdSpan.style.left = "20px";
      gdSpan.style.display = "none";
      gdSpan.style.position = "relative";
      gdSpan.appendChild(newImg);
      gdSpan.appendChild(newText);
      newImg = document.createElement("img");
      newImg.src = "images/null_book.gif";
      newImg.style.marginRight = "10px";
      newImg.style.cursor = "auto";
      newText = document.createTextNode(" " + adj_form(word, "nondefinite", "masculine", "pl", "G"));
      formSpan = document.createElement("span");
      formSpan.style.display = "none";
      formSpan.style.position = "relative";
      formSpan.appendChild(newImg);
      formSpan.appendChild(newText);
      gdSpan.appendChild(formSpan);
      noSpan.appendChild(gdSpan);
      genSpan.appendChild(noSpan);
      artSpan.appendChild(genSpan);
      newImg = document.createElement("img");
      newImg.src = "images/closed_book.gif";
      newImg.style.marginRight = "10px";
      newImg.style.cursor = "pointer";
      crossSetonClick(newImg);
      newText = document.createTextNode(" Feminin");
      genSpan = document.createElement("span");
      genSpan.style.left = "20px";
      genSpan.style.display = "none";
      genSpan.style.position = "relative";
      genSpan.appendChild(newImg);
      genSpan.appendChild(newText);
      newImg = document.createElement("img");
      newImg.src = "images/closed_book.gif";
      newImg.style.marginRight = "10px";
      newImg.style.cursor = "pointer";
      crossSetonClick(newImg);
      newText = document.createTextNode(" sg.");
      noSpan = document.createElement("span");
      noSpan.style.left = "20px";
      noSpan.style.display = "none";
      noSpan.style.position = "relative";
      noSpan.appendChild(newImg);
      noSpan.appendChild(newText);
      newImg = document.createElement("img");
      newImg.src = "images/closed_book.gif";
      newImg.style.marginRight = "10px";
      newImg.style.cursor = "pointer";
      crossSetonClick(newImg);
      newText = document.createTextNode(" N + AC");
      nacSpan = document.createElement("span");
      nacSpan.style.left = "20px";
      nacSpan.style.display = "none";
      nacSpan.style.position = "relative";
      nacSpan.appendChild(newImg);
      nacSpan.appendChild(newText);
      newImg = document.createElement("img");
      newImg.src = "images/null_book.gif";
      newImg.style.marginRight = "10px";
      newImg.style.cursor = "auto";
      newText = document.createTextNode(" " + adj_form(word, "nondefinite", "feminine", "sg", "N"));
      formSpan = document.createElement("span");
      formSpan.style.display = "none";
      formSpan.style.position = "relative";
      formSpan.appendChild(newImg);
      formSpan.appendChild(newText);
      nacSpan.appendChild(formSpan);
      noSpan.appendChild(nacSpan);
      newImg = document.createElement("img");
      newImg.src = "images/closed_book.gif";
      newImg.style.marginRight = "10px";
      newImg.style.cursor = "pointer";
      crossSetonClick(newImg);
      newText = document.createTextNode(" G + D");
      gdSpan = document.createElement("span");
      gdSpan.style.left = "20px";
      gdSpan.style.display = "none";
      gdSpan.style.position = "relative";
      gdSpan.appendChild(newImg);
      gdSpan.appendChild(newText);
      newImg = document.createElement("img");
      newImg.src = "images/null_book.gif";
      newImg.style.marginRight = "10px";
      newImg.style.cursor = "auto";
      newText = document.createTextNode(" " + adj_form(word, "nondefinite", "feminine", "sg", "G"));
      formSpan = document.createElement("span");
      formSpan.style.display = "none";
      formSpan.style.position = "relative";
      formSpan.appendChild(newImg);
      formSpan.appendChild(newText);
      gdSpan.appendChild(formSpan);
      noSpan.appendChild(gdSpan);
      genSpan.appendChild(noSpan);
      newImg = document.createElement("img");
      newImg.src = "images/closed_book.gif";
      newImg.style.marginRight = "10px";
      newImg.style.cursor = "pointer";
      crossSetonClick(newImg);
      newText = document.createTextNode(" pl.");
      noSpan = document.createElement("span");
      noSpan.style.left = "20px";
      noSpan.style.display = "none";
      noSpan.style.position = "relative";
      noSpan.appendChild(newImg);
      noSpan.appendChild(newText);
      newImg = document.createElement("img");
      newImg.src = "images/closed_book.gif";
      newImg.style.marginRight = "10px";
      newImg.style.cursor = "pointer";
      crossSetonClick(newImg);
      newText = document.createTextNode(" N + AC");
      nacSpan = document.createElement("span");
      nacSpan.style.left = "20px";
      nacSpan.style.display = "none";
      nacSpan.style.position = "relative";
      nacSpan.appendChild(newImg);
      nacSpan.appendChild(newText);
      newImg = document.createElement("img");
      newImg.src = "images/null_book.gif";
      newImg.style.marginRight = "10px";
      newImg.style.cursor = "auto";
      newText = document.createTextNode(" " + adj_form(word, "nondefinite", "feminine", "pl", "N"));
      formSpan = document.createElement("span");
      formSpan.style.display = "none";
      formSpan.style.position = "relative";
      formSpan.appendChild(newImg);
      formSpan.appendChild(newText);
      nacSpan.appendChild(formSpan);
      noSpan.appendChild(nacSpan);
      newImg = document.createElement("img");
      newImg.src = "images/closed_book.gif";
      newImg.style.marginRight = "10px";
      newImg.style.cursor = "pointer";
      crossSetonClick(newImg);
      newText = document.createTextNode(" G + D");
      gdSpan = document.createElement("span");
      gdSpan.style.left = "20px";
      gdSpan.style.display = "none";
      gdSpan.style.position = "relative";
      gdSpan.appendChild(newImg);
      gdSpan.appendChild(newText);
      newImg = document.createElement("img");
      newImg.src = "images/null_book.gif";
      newImg.style.marginRight = "10px";
      newImg.style.cursor = "auto";
      newText = document.createTextNode(" " + adj_form(word, "nondefinite", "feminine", "pl", "G"));
      formSpan = document.createElement("span");
      formSpan.style.display = "none";
      formSpan.style.position = "relative";
      formSpan.appendChild(newImg);
      formSpan.appendChild(newText);
      gdSpan.appendChild(formSpan);
      noSpan.appendChild(gdSpan);
      genSpan.appendChild(noSpan);
      artSpan.appendChild(genSpan);
      infSpan.appendChild(artSpan);
      newImg = document.createElement("img");
      newImg.src = "images/closed_book.gif";
      newImg.style.marginRight = "10px";
      newImg.style.cursor = "pointer";
      crossSetonClick(newImg);
      newText = document.createTextNode("forme cu articol hot\u0103r\u00E2t cu adjectiv aflat \u00EEnainte de substantiv");
      artSpan = document.createElement("span");
      artSpan.style.fontSize = "10pt";
      artSpan.style.display = "block";
      artSpan.style.position = "relative";
      artSpan.appendChild(newImg);
      artSpan.appendChild(newText);
      newImg = document.createElement("img");
      newImg.src = "images/closed_book.gif";
      newImg.style.marginRight = "10px";
      newImg.style.cursor = "pointer";
      crossSetonClick(newImg);
      newText = document.createTextNode(" Masculin");
      genSpan = document.createElement("span");
      genSpan.style.left = "20px";
      genSpan.style.display = "none";
      genSpan.style.position = "relative";
      genSpan.appendChild(newImg);
      genSpan.appendChild(newText);
      newImg = document.createElement("img");
      newImg.src = "images/closed_book.gif";
      newImg.style.marginRight = "10px";
      newImg.style.cursor = "pointer";
      crossSetonClick(newImg);
      newText = document.createTextNode(" sg.");
      noSpan = document.createElement("span");
      noSpan.style.left = "20px";
      noSpan.style.display = "none";
      noSpan.style.position = "relative";
      noSpan.appendChild(newImg);
      noSpan.appendChild(newText);
      newImg = document.createElement("img");
      newImg.src = "images/closed_book.gif";
      newImg.style.marginRight = "10px";
      newImg.style.cursor = "pointer";
      crossSetonClick(newImg);
      newText = document.createTextNode(" N + AC");
      nacSpan = document.createElement("span");
      nacSpan.style.left = "20px";
      nacSpan.style.display = "none";
      nacSpan.style.position = "relative";
      nacSpan.appendChild(newImg);
      nacSpan.appendChild(newText);
      newImg = document.createElement("img");
      newImg.src = "images/null_book.gif";
      newImg.style.marginRight = "10px";
      newImg.style.cursor = "auto";
      newText = document.createTextNode(" " + adj_form(word, "definite", "masculine", "sg", "N"));
      formSpan = document.createElement("span");
      formSpan.style.display = "none";
      formSpan.style.position = "relative";
      formSpan.appendChild(newImg);
      formSpan.appendChild(newText);
      nacSpan.appendChild(formSpan);
      noSpan.appendChild(nacSpan);
      newImg = document.createElement("img");
      newImg.src = "images/closed_book.gif";
      newImg.style.marginRight = "10px";
      newImg.style.cursor = "pointer";
      crossSetonClick(newImg);
      newText = document.createTextNode(" G + D");
      gdSpan = document.createElement("span");
      gdSpan.style.left = "20px";
      gdSpan.style.display = "none";
      gdSpan.style.position = "relative";
      gdSpan.appendChild(newImg);
      gdSpan.appendChild(newText);
      newImg = document.createElement("img");
      newImg.src = "images/null_book.gif";
      newImg.style.marginRight = "10px";
      newImg.style.cursor = "auto";
      newText = document.createTextNode(" " + adj_form(word, "definite", "masculine", "sg", "G"));
      formSpan = document.createElement("span");
      formSpan.style.display = "none";
      formSpan.style.position = "relative";
      formSpan.appendChild(newImg);
      formSpan.appendChild(newText);
      gdSpan.appendChild(formSpan);
      noSpan.appendChild(gdSpan);
      genSpan.appendChild(noSpan);
      newImg = document.createElement("img");
      newImg.src = "images/closed_book.gif";
      newImg.style.marginRight = "10px";
      newImg.style.cursor = "pointer";
      crossSetonClick(newImg);
      newText = document.createTextNode(" pl.");
      noSpan = document.createElement("span");
      noSpan.style.left = "20px";
      noSpan.style.display = "none";
      noSpan.style.position = "relative";
      noSpan.appendChild(newImg);
      noSpan.appendChild(newText);
      newImg = document.createElement("img");
      newImg.src = "images/closed_book.gif";
      newImg.style.marginRight = "10px";
      newImg.style.cursor = "pointer";
      crossSetonClick(newImg);
      newText = document.createTextNode(" N + AC");
      nacSpan = document.createElement("span");
      nacSpan.style.left = "20px";
      nacSpan.style.display = "none";
      nacSpan.style.position = "relative";
      nacSpan.appendChild(newImg);
      nacSpan.appendChild(newText);
      newImg = document.createElement("img");
      newImg.src = "images/null_book.gif";
      newImg.style.marginRight = "10px";
      newImg.style.cursor = "auto";
      newText = document.createTextNode(" " + adj_form(word, "definite", "masculine", "pl", "N"));
      formSpan = document.createElement("span");
      formSpan.style.display = "none";
      formSpan.style.position = "relative";
      formSpan.appendChild(newImg);
      formSpan.appendChild(newText);
      nacSpan.appendChild(formSpan);
      noSpan.appendChild(nacSpan);
      newImg = document.createElement("img");
      newImg.src = "images/closed_book.gif";
      newImg.style.marginRight = "10px";
      newImg.style.cursor = "pointer";
      crossSetonClick(newImg);
      newText = document.createTextNode(" G + D");
      gdSpan = document.createElement("span");
      gdSpan.style.left = "20px";
      gdSpan.style.display = "none";
      gdSpan.style.position = "relative";
      gdSpan.appendChild(newImg);
      gdSpan.appendChild(newText);
      newImg = document.createElement("img");
      newImg.src = "images/null_book.gif";
      newImg.style.marginRight = "10px";
      newImg.style.cursor = "auto";
      newText = document.createTextNode(" " + adj_form(word, "definite", "masculine", "pl", "G"));
      formSpan = document.createElement("span");
      formSpan.style.display = "none";
      formSpan.style.position = "relative";
      formSpan.appendChild(newImg);
      formSpan.appendChild(newText);
      gdSpan.appendChild(formSpan);
      noSpan.appendChild(gdSpan);
      genSpan.appendChild(noSpan);
      artSpan.appendChild(genSpan);
      newImg = document.createElement("img");
      newImg.src = "images/closed_book.gif";
      newImg.style.marginRight = "10px";
      newImg.style.cursor = "pointer";
      crossSetonClick(newImg);
      newText = document.createTextNode(" Feminin");
      genSpan = document.createElement("span");
      genSpan.style.left = "20px";
      genSpan.style.display = "none";
      genSpan.style.position = "relative";
      genSpan.appendChild(newImg);
      genSpan.appendChild(newText);
      newImg = document.createElement("img");
      newImg.src = "images/closed_book.gif";
      newImg.style.marginRight = "10px";
      newImg.style.cursor = "pointer";
      crossSetonClick(newImg);
      newText = document.createTextNode(" sg.");
      noSpan = document.createElement("span");
      noSpan.style.left = "20px";
      noSpan.style.display = "none";
      noSpan.style.position = "relative";
      noSpan.appendChild(newImg);
      noSpan.appendChild(newText);
      newImg = document.createElement("img");
      newImg.src = "images/closed_book.gif";
      newImg.style.marginRight = "10px";
      newImg.style.cursor = "pointer";
      crossSetonClick(newImg);
      newText = document.createTextNode(" N + AC");
      nacSpan = document.createElement("span");
      nacSpan.style.left = "20px";
      nacSpan.style.display = "none";
      nacSpan.style.position = "relative";
      nacSpan.appendChild(newImg);
      nacSpan.appendChild(newText);
      newImg = document.createElement("img");
      newImg.src = "images/null_book.gif";
      newImg.style.marginRight = "10px";
      newImg.style.cursor = "auto";
      newText = document.createTextNode(" " + adj_form(word, "definite", "feminine", "sg", "N"));
      formSpan = document.createElement("span");
      formSpan.style.display = "none";
      formSpan.style.position = "relative";
      formSpan.appendChild(newImg);
      formSpan.appendChild(newText);
      nacSpan.appendChild(formSpan);
      noSpan.appendChild(nacSpan);
      newImg = document.createElement("img");
      newImg.src = "images/closed_book.gif";
      newImg.style.marginRight = "10px";
      newImg.style.cursor = "pointer";
      crossSetonClick(newImg);
      newText = document.createTextNode(" G + D");
      gdSpan = document.createElement("span");
      gdSpan.style.left = "20px";
      gdSpan.style.display = "none";
      gdSpan.style.position = "relative";
      gdSpan.appendChild(newImg);
      gdSpan.appendChild(newText);
      newImg = document.createElement("img");
      newImg.src = "images/null_book.gif";
      newImg.style.marginRight = "10px";
      newImg.style.cursor = "auto";
      newText = document.createTextNode(" " + adj_form(word, "definite", "feminine", "sg", "G"));
      formSpan = document.createElement("span");
      formSpan.style.display = "none";
      formSpan.style.position = "relative";
      formSpan.appendChild(newImg);
      formSpan.appendChild(newText);
      gdSpan.appendChild(formSpan);
      noSpan.appendChild(gdSpan);
      genSpan.appendChild(noSpan);
      newImg = document.createElement("img");
      newImg.src = "images/closed_book.gif";
      newImg.style.marginRight = "10px";
      newImg.style.cursor = "pointer";
      crossSetonClick(newImg);
      newText = document.createTextNode(" pl.");
      noSpan = document.createElement("span");
      noSpan.style.left = "20px";
      noSpan.style.display = "none";
      noSpan.style.position = "relative";
      noSpan.appendChild(newImg);
      noSpan.appendChild(newText);
      newImg = document.createElement("img");
      newImg.src = "images/closed_book.gif";
      newImg.style.marginRight = "10px";
      newImg.style.cursor = "pointer";
      crossSetonClick(newImg);
      newText = document.createTextNode(" N + AC");
      nacSpan = document.createElement("span");
      nacSpan.style.left = "20px";
      nacSpan.style.display = "none";
      nacSpan.style.position = "relative";
      nacSpan.appendChild(newImg);
      nacSpan.appendChild(newText);
      newImg = document.createElement("img");
      newImg.src = "images/null_book.gif";
      newImg.style.marginRight = "10px";
      newImg.style.cursor = "auto";
      newText = document.createTextNode(" " + adj_form(word, "definite", "feminine", "pl", "N"));
      formSpan = document.createElement("span");
      formSpan.style.display = "none";
      formSpan.style.position = "relative";
      formSpan.appendChild(newImg);
      formSpan.appendChild(newText);
      nacSpan.appendChild(formSpan);
      noSpan.appendChild(nacSpan);
      newImg = document.createElement("img");
      newImg.src = "images/closed_book.gif";
      newImg.style.marginRight = "10px";
      newImg.style.cursor = "pointer";
      crossSetonClick(newImg);
      newText = document.createTextNode(" G + D");
      gdSpan = document.createElement("span");
      gdSpan.style.left = "20px";
      gdSpan.style.display = "none";
      gdSpan.style.position = "relative";
      gdSpan.appendChild(newImg);
      gdSpan.appendChild(newText);
      newImg = document.createElement("img");
      newImg.src = "images/null_book.gif";
      newImg.style.marginRight = "10px";
      newImg.style.cursor = "auto";
      newText = document.createTextNode(" " + adj_form(word, "definite", "feminine", "pl", "G"));
      formSpan = document.createElement("span");
      formSpan.style.display = "none";
      formSpan.style.position = "relative";
      formSpan.appendChild(newImg);
      formSpan.appendChild(newText);
      gdSpan.appendChild(formSpan);
      noSpan.appendChild(gdSpan);
      genSpan.appendChild(noSpan);
      artSpan.appendChild(genSpan);
      infSpan.appendChild(artSpan);
   }
   infSpan.style.display = "block";
}


