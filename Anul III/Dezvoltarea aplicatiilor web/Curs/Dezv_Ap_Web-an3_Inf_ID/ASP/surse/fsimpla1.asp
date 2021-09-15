<html>

<body>
Bun venit
<%
response.write(request.querystring("pnume"))
response.write(" " & request.querystring("nume"))
%>
</body>

</html>
