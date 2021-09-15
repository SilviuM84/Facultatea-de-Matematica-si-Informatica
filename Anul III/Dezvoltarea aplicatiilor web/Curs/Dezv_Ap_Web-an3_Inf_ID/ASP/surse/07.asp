<html>
<body>
<%
dim h
h=hour(now())

response.write("<p>" & now())
response.write(" (Ora Romaniei) </p>")
If h<12 then
   response.write("Buna dimineata!")
else
   response.write("Buna ziua!")
end if
%>
</body>
</html>
