<html>
<body>
<form action="13.asp" method="post">
Numele dv: <input type="text" name="nume" size="20" />
<input type="submit" value="Trimite" />
</form>
<%
dim nume
nume=Request. Form("nume")
If nume<>"" Then
      Response.Write("Salut, " & nume & "!<br />")
      Response.Write("Ce mai faci?")
End If
%>
</body>
</html>
</html>
