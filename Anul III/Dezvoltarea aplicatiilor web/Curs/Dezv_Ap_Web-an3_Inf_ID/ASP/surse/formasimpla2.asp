<html>

<body>
<form method="post" action="formasimpla2.asp">
Prenume: <input type="text" name="pnume" />
<br />
Nume: <input type="text" name="nume" />
<br /><br />
<input type="submit" value="Trimite" />
</form>
Bun venit

<%
response.write(request.form("pnume"))
response.write(" " & request.form("nume"))
%>
</body>

</html>
