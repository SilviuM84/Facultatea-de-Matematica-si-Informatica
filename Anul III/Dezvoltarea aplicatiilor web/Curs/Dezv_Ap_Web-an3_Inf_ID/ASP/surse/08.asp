<%@ language="javascript" %>
<html>
<body>
<%
var d=new Date()
var h=d.getHours()

Response.Write("<p>")
Response.Write(d + " (Ora Romaniei)")
Response.Write("</p>")
if (h<12)
   {
   Response.Write("Buna dimineata!")
   }
else
   {
   Response.Write("Buna ziua!")
   }
%>
</body>
</html>
