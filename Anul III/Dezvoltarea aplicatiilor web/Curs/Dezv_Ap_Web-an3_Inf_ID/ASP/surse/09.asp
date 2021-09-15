<html>

<head>
<%
sub vbproc(num1,num2)
response.write(num1*num2)
end sub
%>
</head>

<body>
<p>
O procedura se poate apela asa:
</p>
<p>
Rezultat: <%call vbproc(3,4)%>
</p>
<p>
Sau asa:
</p>
<p>
Rezultat: <%vbproc 3,4%>
</p>
</body>

</html>
