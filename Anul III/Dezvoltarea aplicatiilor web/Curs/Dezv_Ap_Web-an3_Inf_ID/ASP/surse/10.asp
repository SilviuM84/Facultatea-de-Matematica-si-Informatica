<%@ language="javascript" %>
<html>
<head>
<%
function jsproc(num1,num2)
{
Response.Write(num1*num2)
}
%>
</head>

<body>
<p>
Rezultat: <%jsproc(3,4)%>
</p>
</body>

</html>
