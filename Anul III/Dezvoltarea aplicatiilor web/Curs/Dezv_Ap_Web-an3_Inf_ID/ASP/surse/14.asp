<html>
<%
dim auto
auto=Request.Form("auto")
%>
<body>
<form action="14.asp" method="post">
<p>Selectati autoturismul favorit:</p>

<input type="radio" name="auto"
<%if auto="Volvo" then Response.Write("checked")%>
value="Volvo">Volvo</input>
<br />
<input type="radio" name="auto"
<%if auto="Logan" then Response.Write("checked")%>
value="Logan">Logan</input>
<br />
<input type="radio" name="auto"
<%if auto="BMW" then Response.Write("checked")%>
value="BMW">BMW</input>
<br /><br />
<input type="submit" value="Trimite" />
</form>
<%
if auto<>"" then
   Response.Write("<p>Autoturismul dv favorit este: " & auto & "</p>")
end if
%>
</body>
</html>
