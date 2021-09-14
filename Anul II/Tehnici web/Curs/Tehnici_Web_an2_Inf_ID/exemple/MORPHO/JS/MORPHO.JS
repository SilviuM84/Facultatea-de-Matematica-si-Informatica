

function noun_form(word, art, no, gramcase) // intoarce o forma morfologica pentru un substantiv
{
   var wform = "";
   var root = dictionary[word]["root"];
   var rule = dictionary[word]["rule"];
   var except= "";
   if ("except" in dictionary[word]) except = dictionary[word]["except"];

   switch (rule)
   {
      case "1" : 
                 if (art == "definite")
                 {
                   if (no == "sg")
                   {
                     if ((gramcase == "N") || (gramcase == "AC")) wform = root + "ul";
                     if ((gramcase == "G") || (gramcase == "D")) wform = root + "ului";
                   }
                   else if (no == "pl")
                   {
                     if ((gramcase == "N") || (gramcase == "AC")) wform = root + "ii";
                     if ((gramcase == "G") || (gramcase == "D")) wform = root + "ilor";
                   }
                 }
                 else if (art == "nondefinite")
                 {
                   if (no == "sg")
                   {
                     if ((gramcase == "N") || (gramcase == "AC")) wform = root;
                     if ((gramcase == "G") || (gramcase == "D")) wform = root;
                   }
                   else if (no == "pl")
                   {
                     if ((gramcase == "N") || (gramcase == "AC")) wform = root + "i";
                     if ((gramcase == "G") || (gramcase == "D")) wform = root + "i";
                   }
                 }
                 break;
      case "2" : 
                 if (art == "definite")
                 {
                   if (no == "sg")
                   {
                     if ((gramcase == "N") || (gramcase == "AC")) wform = root + "ele";
                     if ((gramcase == "G") || (gramcase == "D")) wform = root + "elui";
                   }
                   else if (no == "pl")
                   {
                     if ((gramcase == "N") || (gramcase == "AC")) wform = root + "ii";
                     if ((gramcase == "G") || (gramcase == "D")) wform = root + "ilor";
                   }
                 }
                 else if (art == "nondefinite")
                 {
                   if (no == "sg")
                   {
                     if ((gramcase == "N") || (gramcase == "AC")) wform = root + "e";
                     if ((gramcase == "G") || (gramcase == "D")) wform = root + "e";
                   }
                   else if (no == "pl")
                   {
                     if ((gramcase == "N") || (gramcase == "AC")) wform = root + "i";
                     if ((gramcase == "G") || (gramcase == "D")) wform = root + "i";
                   }
                 }
                 break;
      case "3" : 
                 if (art == "definite")
                 {
                   if (no == "sg")
                   {
                     if ((gramcase == "N") || (gramcase == "AC")) wform = root + "ul";
                     if ((gramcase == "G") || (gramcase == "D")) wform = root + "ului";
                   }
                   else if (no == "pl")
                   {
                     if ((gramcase == "N") || (gramcase == "AC")) wform = root + "urile";
                     if ((gramcase == "G") || (gramcase == "D")) wform = root + "urilor";
                   }
                 }
                 else if (art == "nondefinite")
                 {
                   if (no == "sg")
                   {
                     if ((gramcase == "N") || (gramcase == "AC")) wform = root;
                     if ((gramcase == "G") || (gramcase == "D")) wform = root;
                   }
                   else if (no == "pl")
                   {
                     if ((gramcase == "N") || (gramcase == "AC")) wform = root + "uri";
                     if ((gramcase == "G") || (gramcase == "D")) wform = root + "uri";
                   }
                 }
                 break;
      case "4" : 
                 switch (except)
                 {
                    case "1" : 
                               if (no == "pl")
                               {
                                  var oidx = root.lastIndexOf("o");
                                  if (oidx >= 0) root = root.substring(0, oidx) + "oa" + root.substring(oidx + 1);
                               }
                               break;
                 }
                 if (art == "definite")
                 {
                   if (no == "sg")
                   {
                     if ((gramcase == "N") || (gramcase == "AC")) wform = root + "ul";
                     if ((gramcase == "G") || (gramcase == "D")) wform = root + "ului";
                   }
                   else if (no == "pl")
                   {
                     if ((gramcase == "N") || (gramcase == "AC")) wform = root + "ele";
                     if ((gramcase == "G") || (gramcase == "D")) wform = root + "elor";
                   }
                 }
                 else if (art == "nondefinite")
                 {
                   if (no == "sg")
                   {
                     if ((gramcase == "N") || (gramcase == "AC")) wform = root;
                     if ((gramcase == "G") || (gramcase == "D")) wform = root;
                   }
                   else if (no == "pl")
                   {
                     if ((gramcase == "N") || (gramcase == "AC")) wform = root + "e";
                     if ((gramcase == "G") || (gramcase == "D")) wform = root + "e";
                   }
                 }
                 break;
      case "5" : 
                 if (art == "definite")
                 {
                   if (no == "sg")
                   {
                     if ((gramcase == "N") || (gramcase == "AC")) wform = root + "ul";
                     if ((gramcase == "G") || (gramcase == "D")) wform = root + "ului";
                   }
                   else if (no == "pl")
                   {
                     if ((gramcase == "N") || (gramcase == "AC")) wform = root + "ile";
                     if ((gramcase == "G") || (gramcase == "D")) wform = root + "ilor";
                   }
                 }
                 else if (art == "nondefinite")
                 {
                   if (no == "sg")
                   {
                     if ((gramcase == "N") || (gramcase == "AC")) wform = root + "u";
                     if ((gramcase == "G") || (gramcase == "D")) wform = root + "u";
                   }
                   else if (no == "pl")
                   {
                     if ((gramcase == "N") || (gramcase == "AC")) wform = root + "i";
                     if ((gramcase == "G") || (gramcase == "D")) wform = root + "i";
                   }
                 }
                 break;
      case "6" : 
                 if (art == "definite")
                 {
                   if (no == "sg")
                   {
                     if ((gramcase == "N") || (gramcase == "AC")) wform = root + "ele";
                     if ((gramcase == "G") || (gramcase == "D")) wform = root + "elui";
                   }
                   else if (no == "pl")
                   {
                     if ((gramcase == "N") || (gramcase == "AC")) wform = root + "ele";
                     if ((gramcase == "G") || (gramcase == "D")) wform = root + "elor";
                   }
                 }
                 else if (art == "nondefinite")
                 {
                   if (no == "sg")
                   {
                     if ((gramcase == "N") || (gramcase == "AC")) wform = root + "e";
                     if ((gramcase == "G") || (gramcase == "D")) wform = root + "e";
                   }
                   else if (no == "pl")
                   {
                     if ((gramcase == "N") || (gramcase == "AC")) wform = root + "e";
                     if ((gramcase == "G") || (gramcase == "D")) wform = root + "e";
                   }
                 }
                 break;
      case "7" : 
                 switch (except)
                 {
                    case "1" : 
                               if ((no == "pl") || (gramcase == "G") || (gramcase == "D"))
                               {
                                  var aidx = root.lastIndexOf("a");
                                  if (aidx >= 0) root = root.substring(0, aidx) + "\u0103" + root.substring(aidx + 1);
                               }
                               break;
                 }
                 if (art == "definite")
                 {
                   if (no == "sg")
                   {
                     if ((gramcase == "N") || (gramcase == "AC")) wform = root + "ea";
                     if ((gramcase == "G") || (gramcase == "D")) wform = root + "ii";
                   }
                   else if (no == "pl")
                   {
                     if ((gramcase == "N") || (gramcase == "AC")) wform = root + "ile";
                     if ((gramcase == "G") || (gramcase == "D")) wform = root + "ilor";
                   }
                 }
                 else if (art == "nondefinite")
                 {
                   if (no == "sg")
                   {
                     if ((gramcase == "N") || (gramcase == "AC")) wform = root + "e";
                     if ((gramcase == "G") || (gramcase == "D")) wform = root + "i";
                   }
                   else if (no == "pl")
                   {
                     if ((gramcase == "N") || (gramcase == "AC")) wform = root + "i";
                     if ((gramcase == "G") || (gramcase == "D")) wform = root + "i";
                   }
                 }
                 break;
      case "8" : 
                 if (art == "definite")
                 {
                   if (no == "sg")
                   {
                     if ((gramcase == "N") || (gramcase == "AC")) wform = root + "a";
                     if ((gramcase == "G") || (gramcase == "D")) wform = root + "ei";
                   }
                   else if (no == "pl")
                   {
                     if ((gramcase == "N") || (gramcase == "AC")) wform = root + "ile";
                     if ((gramcase == "G") || (gramcase == "D")) wform = root + "ilor";
                   }
                 }
                 else if (art == "nondefinite")
                 {
                   if (no == "sg")
                   {
                     if ((gramcase == "N") || (gramcase == "AC")) wform = root + "e";
                     if ((gramcase == "G") || (gramcase == "D")) wform = root + "i";
                   }
                   else if (no == "pl")
                   {
                     if ((gramcase == "N") || (gramcase == "AC")) wform = root + "i";
                     if ((gramcase == "G") || (gramcase == "D")) wform = root + "i";
                   }
                 }
                 break;
      case "9" : 
                 switch (except)
                 {
                    case "1" : 
                               if ((no == "pl") || (gramcase == "G") || (gramcase == "D"))
			       {
			          var eaidx = root.lastIndexOf("ea");
                                  if (eaidx >= 0) root = root.substring(0, eaidx) + "e" + root.substring(eaidx + 2);
                               }
                               break;
                 }
                 if (art == "definite")
                 {
                   if (no == "sg")
                   {
                     if ((gramcase == "N") || (gramcase == "AC")) wform = root + "a";
                     if ((gramcase == "G") || (gramcase == "D")) wform = root + "ei";
                   }
                   else if (no == "pl")
                   {
                     if ((gramcase == "N") || (gramcase == "AC")) wform = root + "ele";
                     if ((gramcase == "G") || (gramcase == "D")) wform = root + "elor";
                   }
                 }
                 else if (art == "nondefinite")
                 {
                   if (no == "sg")
                   {
                     if ((gramcase == "N") || (gramcase == "AC")) wform = root + "\u0103";
                     if ((gramcase == "G") || (gramcase == "D")) wform = root + "e";
                   }
                   else if (no == "pl")
                   {
                     if ((gramcase == "N") || (gramcase == "AC")) wform = root + "e";
                     if ((gramcase == "G") || (gramcase == "D")) wform = root + "e";
                   }
                 }
                 break;
      case "10" : 
                 if (art == "definite")
                 {
                   if (no == "sg")
                   {
                     if ((gramcase == "N") || (gramcase == "AC")) wform = root + "a";
                     if ((gramcase == "G") || (gramcase == "D")) wform = root + "ii";
                   }
                   else if (no == "pl")
                   {
                     if ((gramcase == "N") || (gramcase == "AC")) wform = root + "ile";
                     if ((gramcase == "G") || (gramcase == "D")) wform = root + "ilor";
                   }
                 }
                 else if (art == "nondefinite")
                 {
                   if (no == "sg")
                   {
                     if ((gramcase == "N") || (gramcase == "AC")) wform = root + "\u0103";
                     if ((gramcase == "G") || (gramcase == "D")) wform = root + "i";
                   }
                   else if (no == "pl")
                   {
                     if ((gramcase == "N") || (gramcase == "AC")) wform = root + "i";
                     if ((gramcase == "G") || (gramcase == "D")) wform = root + "i";
                   }
                 }
                 break;
   }
   return wform;
}

function adj_form(word, art, gen, no, gramcase) // intoarce o forma morfologica pentru un adjectiv
{
   var wform = "";
   var root = dictionary[word]["root"];
   var rule = dictionary[word]["rule"];
   var except= "";
   if ("except" in dictionary[word]) except = dictionary[word]["except"];

   switch (rule)
   {
      case "1" : 
                 if ((gen == "masculine") && (no == "pl"))
                 {
                    if (root.charAt(root.length - 1) == "t") root = root.substring(0, root.length - 1) + "\u0163";
                    if (root.charAt(root.length - 1) == "s") root = root.substring(0, root.length - 1) + "\u015F";
                    if (root.charAt(root.length - 1) == "d") root = root.substring(0, root.length - 1) + "z";
                 }
                 switch (except)
                 {
                    case "1" : 
                               if (gen == "feminine")
                               {
                                  var oidx = root.lastIndexOf("o");
                                  if (oidx >= 0) root = root.substring(0, oidx) + "oa" + root.substring(oidx + 1);
                               }
                               break;
                    case "2" : 
                               if (no == "pl")
                               {
                                  var aidx = root.lastIndexOf("\u0103");
                                  if (aidx >= 0) root = root.substring(0, aidx) + "e" + root.substring(aidx + 1);
                               }
                               break;
                 }
                 if (art == "definite")
                 {
                   if (gen == "masculine")
                   {
                     if (no == "sg")
                     {
                       if ((gramcase == "N") || (gramcase == "AC")) wform = root + "ul";
                       if ((gramcase == "G") || (gramcase == "D")) wform = root + "ului";
                     }
                     else if (no == "pl")
                     {
                       if ((gramcase == "N") || (gramcase == "AC")) wform = root + "ii";
                       if ((gramcase == "G") || (gramcase == "D")) wform = root + "ilor";
                     }
                   }
                   else if (gen == "feminine")
                   {
                     if (no == "sg")
                     {
                       if ((gramcase == "N") || (gramcase == "AC")) wform = root + "a";
                       if ((gramcase == "G") || (gramcase == "D")) wform = root + "ei";
                     }
                     else if (no == "pl")
                     {
                       if ((gramcase == "N") || (gramcase == "AC")) wform = root + "ele";
                       if ((gramcase == "G") || (gramcase == "D")) wform = root + "elor";
                     }
                   }
                 }
                 else if (art == "nondefinite")
                 {
                   if (gen == "masculine")
                   {
                     if (no == "sg")
                     {
                       if ((gramcase == "N") || (gramcase == "AC")) wform = root;
                       if ((gramcase == "G") || (gramcase == "D")) wform = root;
                     }
                     else if (no == "pl")
                     {
                       if ((gramcase == "N") || (gramcase == "AC")) wform = root + "i";
                       if ((gramcase == "G") || (gramcase == "D")) wform = root + "i";
                     }
                   }
                   else if (gen == "feminine")
                   {
                     if (no == "sg")
                     {
                       if ((gramcase == "N") || (gramcase == "AC")) wform = root + "\u0103";
                       if ((gramcase == "G") || (gramcase == "D")) wform = root + "e";
                     }
                     else if (no == "pl")
                     {
                       if ((gramcase == "N") || (gramcase == "AC")) wform = root + "e";
                       if ((gramcase == "G") || (gramcase == "D")) wform = root + "e";
                     }
                   }
                 }
                 break;
      case "2" : 
                 if (art == "definite")
                 {
                   if (gen == "masculine")
                   {
                     if (no == "sg")
                     {
                       if ((gramcase == "N") || (gramcase == "AC")) wform = root + "ul";
                       if ((gramcase == "G") || (gramcase == "D")) wform = root + "ului";
                     }
                     else if (no == "pl")
                     {
                       if ((gramcase == "N") || (gramcase == "AC")) wform = root + "ii";
                       if ((gramcase == "G") || (gramcase == "D")) wform = root + "ilor";
                     }
                   }
                   else if (gen == "feminine")
                   {
                     if (no == "sg")
                     {
                       if ((gramcase == "N") || (gramcase == "AC")) wform = root + "a";
                       if ((gramcase == "G") || (gramcase == "D")) wform = root + "ei";
                     }
                     else if (no == "pl")
                     {
                       if ((gramcase == "N") || (gramcase == "AC")) wform = root + "ele";
                       if ((gramcase == "G") || (gramcase == "D")) wform = root + "elor";
                     }
                   }
                 }
                 else if (art == "nondefinite")
                 {
                   if (gen == "masculine")
                   {
                     if (no == "sg")
                     {
                       if ((gramcase == "N") || (gramcase == "AC")) wform = root + "u";
                       if ((gramcase == "G") || (gramcase == "D")) wform = root + "u";
                     }
                     else if (no == "pl")
                     {
                       if ((gramcase == "N") || (gramcase == "AC")) wform = root + "i";
                       if ((gramcase == "G") || (gramcase == "D")) wform = root + "i";
                     }
                   }
                   else if (gen == "feminine")
                   {
                     if (no == "sg")
                     {
                       if ((gramcase == "N") || (gramcase == "AC")) wform = root + "\u0103";
                       if ((gramcase == "G") || (gramcase == "D")) wform = root + "e";
                     }
                     else if (no == "pl")
                     {
                       if ((gramcase == "N") || (gramcase == "AC")) wform = root + "e";
                       if ((gramcase == "G") || (gramcase == "D")) wform = root + "e";
                     }
                   }
                 }
                 break;
      case "3" : 
                 if (gen == "feminine")
                 {
                    var oidx = root.lastIndexOf("o");
                    if (oidx >= 0) root = root.substring(0, oidx) + "oa" + root.substring(oidx + 1);
                 }
                 if (art == "definite")
                 {
                   if (gen == "masculine")
                   {
                     if (no == "sg")
                     {
                       if ((gramcase == "N") || (gramcase == "AC")) wform = root + "ul";
                       if ((gramcase == "G") || (gramcase == "D")) wform = root + "ului";
                     }
                     else if (no == "pl")
                     {
                       if ((gramcase == "N") || (gramcase == "AC")) wform = root + "ii";
                       if ((gramcase == "G") || (gramcase == "D")) wform = root + "ilor";
                     }
                   }
                   else if (gen == "feminine")
                   {
                     if (no == "sg")
                     {
                       if ((gramcase == "N") || (gramcase == "AC")) wform = root + "ea";
                       if ((gramcase == "G") || (gramcase == "D")) wform = root + "ei";
                     }
                     else if (no == "pl")
                     {
                       if ((gramcase == "N") || (gramcase == "AC")) wform = root + "ele";
                       if ((gramcase == "G") || (gramcase == "D")) wform = root + "elor";
                     }
                   }
                 }
                 else if (art == "nondefinite")
                 {
                   if (gen == "masculine")
                   {
                     if (no == "sg")
                     {
                       if ((gramcase == "N") || (gramcase == "AC")) wform = root;
                       if ((gramcase == "G") || (gramcase == "D")) wform = root;
                     }
                     else if (no == "pl")
                     {
                       if ((gramcase == "N") || (gramcase == "AC")) wform = root + "i";
                       if ((gramcase == "G") || (gramcase == "D")) wform = root + "i";
                     }
                   }
                   else if (gen == "feminine")
                   {
                     if (no == "sg")
                     {
                       if ((gramcase == "N") || (gramcase == "AC")) wform = root + "e";
                       if ((gramcase == "G") || (gramcase == "D")) wform = root + "e";
                     }
                     else if (no == "pl")
                     {
                       if ((gramcase == "N") || (gramcase == "AC")) wform = root + "e";
                       if ((gramcase == "G") || (gramcase == "D")) wform = root + "e";
                     }
                   }
                 }
                 break;
      case "4" : 
                 if (art == "definite")
                 {
                   if (gen == "masculine")
                   {
                     if (no == "sg")
                     {
                       if ((gramcase == "N") || (gramcase == "AC")) wform = root + "ul";
                       if ((gramcase == "G") || (gramcase == "D")) wform = root + "ului";
                     }
                     else if (no == "pl")
                     {
                       if ((gramcase == "N") || (gramcase == "AC")) wform = root + "ii";
                       if ((gramcase == "G") || (gramcase == "D")) wform = root + "ilor";
                     }
                   }
                   else if (gen == "feminine")
                   {
                     if (no == "sg")
                     {
                       if ((gramcase == "N") || (gramcase == "AC")) wform = root + "a";
                       if ((gramcase == "G") || (gramcase == "D")) wform = root + "ei";
                     }
                     else if (no == "pl")
                     {
                       if ((gramcase == "N") || (gramcase == "AC")) wform = root + "ile";
                       if ((gramcase == "G") || (gramcase == "D")) wform = root + "ilor";
                     }
                   }
                 }
                 else if (art == "nondefinite")
                 {
                   if (gen == "masculine")
                   {
                     if (no == "sg")
                     {
                       if ((gramcase == "N") || (gramcase == "AC")) wform = root + "u";
                       if ((gramcase == "G") || (gramcase == "D")) wform = root + "u";
                     }
                     else if (no == "pl")
                     {
                       if ((gramcase == "N") || (gramcase == "AC")) wform = root + "i";
                       if ((gramcase == "G") || (gramcase == "D")) wform = root + "i";
                     }
                   }
                   else if (gen == "feminine")
                   {
                     if (no == "sg")
                     {
                       if ((gramcase == "N") || (gramcase == "AC")) wform = root + "e";
                       if ((gramcase == "G") || (gramcase == "D")) wform = root + "i";
                     }
                     else if (no == "pl")
                     {
                       if ((gramcase == "N") || (gramcase == "AC")) wform = root + "i";
                       if ((gramcase == "G") || (gramcase == "D")) wform = root + "i";
                     }
                   }
                 }
                 break;
      case "5" : 
                 switch (except)
                 {
                    case "1" : 
                               if ((gen == "feminine") && (no == "sg") && ((gramcase == "N") || (gramcase == "AC")))
                               {
                                  var eidx = root.lastIndexOf("e");
                                  if (eidx >= 0) root = root.substring(0, eidx) + "ea" + root.substring(eidx + 1);
                               }
                               break;
                 }

                 if (art == "definite")
                 {
                   if (gen == "masculine")
                   {
                     if (no == "sg")
                     {
                       if ((gramcase == "N") || (gramcase == "AC")) wform = root + "ul";
                       if ((gramcase == "G") || (gramcase == "D")) wform = root + "ului";
                     }
                     else if (no == "pl")
                     {
                       if ((gramcase == "N") || (gramcase == "AC")) wform = root + "ii";
                       if ((gramcase == "G") || (gramcase == "D")) wform = root + "ilor";
                     }
                   }
                   else if (gen == "feminine")
                   {
                     if (no == "sg")
                     {
                       if ((gramcase == "N") || (gramcase == "AC")) wform = root + "a";
                       if ((gramcase == "G") || (gramcase == "D")) wform = root + "ii";
                     }
                     else if (no == "pl")
                     {
                       if ((gramcase == "N") || (gramcase == "AC")) wform = root + "ile";
                       if ((gramcase == "G") || (gramcase == "D")) wform = root + "ilor";
                     }
                   }
                 }
                 else if (art == "nondefinite")
                 {
                   if (gen == "masculine")
                   {
                     if (no == "sg")
                     {
                       if ((gramcase == "N") || (gramcase == "AC")) wform = root;
                       if ((gramcase == "G") || (gramcase == "D")) wform = root;
                     }
                     else if (no == "pl")
                     {
                       if ((gramcase == "N") || (gramcase == "AC")) wform = root + "i";
                       if ((gramcase == "G") || (gramcase == "D")) wform = root + "i";
                     }
                   }
                   else if (gen == "feminine")
                   {
                     if (no == "sg")
                     {
                       if ((gramcase == "N") || (gramcase == "AC")) wform = root + "\u0103";
                       if ((gramcase == "G") || (gramcase == "D")) wform = root + "i";
                     }
                     else if (no == "pl")
                     {
                       if ((gramcase == "N") || (gramcase == "AC")) wform = root + "i";
                       if ((gramcase == "G") || (gramcase == "D")) wform = root + "i";
                     }
                   }
                 }
                 break;
      case "6" : 
                 if (art == "definite")
                 {
                   if (gen == "masculine")
                   {
                     if (no == "sg")
                     {
                       if ((gramcase == "N") || (gramcase == "AC")) wform = root + "ele";
                       if ((gramcase == "G") || (gramcase == "D")) wform = root + "elui";
                     }
                     else if (no == "pl")
                     {
                       if ((gramcase == "N") || (gramcase == "AC")) wform = root + "ii";
                       if ((gramcase == "G") || (gramcase == "D")) wform = root + "ilor";
                     }
                   }
                   else if (gen == "feminine")
                   {
                     if (no == "sg")
                     {
                       if ((gramcase == "N") || (gramcase == "AC")) wform = root + "ea";
                       if ((gramcase == "G") || (gramcase == "D")) wform = root + "ii";
                     }
                     else if (no == "pl")
                     {
                       if ((gramcase == "N") || (gramcase == "AC")) wform = root + "ile";
                       if ((gramcase == "G") || (gramcase == "D")) wform = root + "ilor";
                     }
                   }
                 }
                 else if (art == "nondefinite")
                 {
                   if (gen == "masculine")
                   {
                     if (no == "sg")
                     {
                       if ((gramcase == "N") || (gramcase == "AC")) wform = root + "e";
                       if ((gramcase == "G") || (gramcase == "D")) wform = root + "e";
                     }
                     else if (no == "pl")
                     {
                       if ((gramcase == "N") || (gramcase == "AC")) wform = root + "i";
                       if ((gramcase == "G") || (gramcase == "D")) wform = root + "i";
                     }
                   }
                   else if (gen == "feminine")
                   {
                     if (no == "sg")
                     {
                       if ((gramcase == "N") || (gramcase == "AC")) wform = root + "e";
                       if ((gramcase == "G") || (gramcase == "D")) wform = root + "i";
                     }
                     else if (no == "pl")
                     {
                       if ((gramcase == "N") || (gramcase == "AC")) wform = root + "i";
                       if ((gramcase == "G") || (gramcase == "D")) wform = root + "i";
                     }
                   }
                 }
                 break;
      case "7" : 
                 wform = root;
                 break;
   }
   return wform;
}