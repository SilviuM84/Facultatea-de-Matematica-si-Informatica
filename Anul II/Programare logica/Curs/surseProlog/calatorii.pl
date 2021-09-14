transportation([byCar,byTrain,byPlane,byCharter]).

% Urmatoarele fapte definesc arce etichetate intr-un graf orientat:

byCar(auckland,hamilton).
byCar(hamilton,raglan).
byCar(valmont,saarbruecken).
byCar(valmont,metz).
 
byTrain(metz,frankfurt).
byTrain(saarbruecken,frankfurt).
byTrain(metz,paris).
byTrain(saarbruecken,paris).
 
byPlane(frankfurt,bangkok).
byPlane(frankfurt,singapore).
byPlane(paris,losAngeles).
byPlane(bangkok,auckland).
byPlane(losAngeles,auckland).

:- op(700,xfx,in).

X in [X|_].
X in [_|T] :- X in T.

direct(Plec,Dest,MijlTransp) :- transportation(L), MijlTransp in L, Term =.. [MijlTransp,Plec,Dest], Term.

% Calatoriile sunt drumuri in graful orientat dat mai sus:

travel(Plec,Dest,[(Plec,Dest,MijlTransp)]) :- direct(Plec,Dest,MijlTransp).
travel(Plec,Dest,[(Plec,Statie,MijlTransp)|Traseu]) :- direct(Plec,Statie,MijlTransp), travel(Statie,Dest,Traseu).

% Eliminarea duplicatelor dintr-o lista, transformand astfel lista in multime:

elimdup([],[]).
elimdup([H|T],[H|L]) :- not(H in T), elimdup(T,L).
elimdup([H|T],L) :- H in T, elimdup(T,L).

% A se vedea, in testsetof.pl, de ce nu folosim "setof" sau "bagof" in locul lui "findall": 

alltravels :- findall(X, direct(X,_,_), Plecari), findall(Y, direct(_,Y,_), Destinatii),
              elimdup(Plecari,MultimePlecari), elimdup(Destinatii,MultimeDestinatii),
              listtravels(MultimePlecari,MultimeDestinatii).

listtravels([],_).
listtravels([P|Plecari],Destinatii) :- listdepartures(P,Destinatii), listtravels(Plecari,Destinatii).

listdepartures(_,[]).
listdepartures(P,[D|Destinatii]) :- findall(Traseu, travel(P,D,Traseu), ListaTrasee), 
                                    (ListaTrasee\=[], listroutes(ListaTrasee), sleep(2) ; ListaTrasee=[]),
                                    listdepartures(P,Destinatii).

listroutes([]) :- nl.
listroutes([Traseu|ListaTrasee]) :- write(Traseu), nl, listroutes(ListaTrasee).

friday :- asserta(byCharter(X,Y) :- byPlane(X,Y)).

notfriday :- retractall(byCharter(_,_)).

/* Interogati:
?- alltravels.
?- friday.
?- alltravels.
?- notfriday.
?- alltravels.
*/
