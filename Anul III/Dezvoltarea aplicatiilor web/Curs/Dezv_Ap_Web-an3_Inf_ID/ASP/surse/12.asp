<html>
<body>
<form action="12.asp" method="get">
Numele dv: <input type="text" name="nume" size="20" />
<input type="submit" value="Trimite" />
</form>
<%
dim nume
nume=Request.QueryString("nume")
If nume<>"" Then
      Response.Write("Salut, " & nume & "!<br />")
      Response.Write("Ce mai faci?")
End If
%>
</body>
</html>
</html>
