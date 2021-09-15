<html>

<body>
<form method="get" action="formasimpla1.asp">
Prenume: <input type="text" name="pnume" />
<br />
Nume: <input type="text" name="nume" />
<br /><br />
<input type="submit" value="Trimite" />
</form>
Bun venit

<%
response.write(request.querystring("pnume"))
response.write(" " & request.querystring("nume"))
%>
</body>

</html>
