<html>
<body>

<%
Dim numefam(5),i
numefam(0) = "Popescu"
numefam(1) = "Ionescu"
numefam(2) = "Stanescu"
numefam(3) = "Gheorghiu"
numefam(4) = "Radulescu"
numefam(5) = "Podeanu"

For i = 0 to 5
      response.write(numefam(i) & "<br />")
Next
%>

</body>
</html>
