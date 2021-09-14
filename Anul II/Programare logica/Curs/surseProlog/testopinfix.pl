:- op(500,xfy,este).

ana este inginer.
dan este agricultor.
ion este florar.
ana este adult este responsabil :- write('*').
(ana este adult) este responsabil :- write('#').
ana este (adult este responsabil) :- write('!').

/* Interogati:
?- Cine este Ce este Cum.
si cereti toate solutiile, cu ";"/"Next". Observati ca parantezarea implicita pentru "ana este adult este responsabil"
este "ana este (adult este responsabil)", pentru ca tipul de operator binar infixat "xfy" specifica faptul ca operandul
drept trebuie sa aiba precedenta mai mica decat a operatorului, astfel ca operandul drept nu poate avea acelasi operator
ca operator dominant daca nu e incadrat intre paranteze, ceea ce face un operator de tip "xfy" asociativ la stanga.
Un operator de tip "xfx" este neasociativ, astfel ca, pentru urmatoarea declaratie, urmatoarea scriere fara paranteze
produce eroare, intrucat Prologul nu stie la care dintre parantezarile "(ana are mere) are frunze" si
"ana are (mere are frunze)" ne referim:

:- op(500,xfx,are).

ana are mere are frunze. */

:- op(500,yfx,face).

ana face inginerie.
dan face agricultura.
ion face florarie.
ana face munca face utilaje :- write('*').
(ana face munca) face utilaje :- write('#').
ana face (munca face utilaje) :- write('!').

/* Interogati:
?- Cine face Ce face CeProduce.
si cereti toate solutiile, cu ";"/"Next". "ana face munca face utilaje" are parantezarea implicita "(ana face munca) face utilaje",
pentru ca un operator binar infixat de tip "yfx" este asociativ la dreapta, asa ca operatorul "face" nu accepta ca operand stang decat
termeni cu operatori dominanti de precedenta strict mai mica decat 500, iar "ana face munca" are operatorul dominant "face", de
precedenta 500; in schimb, odata incadrat intre paranteze, termenul "(ana face munca)" este tratat ca un atom, deci capata precedenta 0. */

/* Putem da si interogari de forma:
?- setof(Cine este Ce, Cine este Ce, L).
?- setof(Cine face Ce, Cine face Ce, L).
dar la interogarile:
?- setof(Cine este Ce este Cum, Cine este Ce este Cum, L).
?- setof(Cine face Ce face CeProduce,Cine face Ce face CeProduce, L).
listele produse au cate un singur element, in timp ce, la interogarile:
?- findall(Cine este Ce este Cum, Cine este Ce este Cum, L).
?- findall(Cine face Ce face CeProduce,Cine face Ce face CeProduce, L).
cele doua elemente ale fiecarei liste sunt afisate neparantezate. Putem observa, insa, ca penultima dintre interogarile de mai sus
produce afisarea setului de simboluri "*!", iar ultima produce afisarea setului de simboluri "*#". */ 
