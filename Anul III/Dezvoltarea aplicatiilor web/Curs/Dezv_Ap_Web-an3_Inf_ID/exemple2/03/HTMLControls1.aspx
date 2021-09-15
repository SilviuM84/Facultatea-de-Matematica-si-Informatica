<%@ Page language="c#" %>
<html>
	<head>
		<title>HTMLControls1.aspx</title>
	</head>
	<script runat="server">

public void Page_Init(object s, EventArgs e) {
  Response.Write("In Page_Init<br>");
}

public void Page_Load(object s, EventArgs e) 
{
  // text1 primeste continut la prima apelare a paginii.  
  // apoi este pastrat continutul dat de utilizator.
  if (Page.IsPostBack)
  {
  }
  else
  {
    text1.Value = "abc";
  }
  Response.Write("In Page_Load, Page.IsPostBack = " + Page.IsPostBack + "<br>");
}

public void Page_Unload(object s, EventArgs e) 
{
//  Response.Write("In Page_Unload<br>");  // Produce eroare
}

// Se apeleaza dupa click pe buton daca schimbarea textului s-a efectuat
public void text1_Change (object sender, System.EventArgs e) 
{
  Response.Write("text schimbat<br>");
}

//  Se apeleaza dupa click pe buton
public void button1_Click (object sender, System.EventArgs e) 
{
    Response.Write("click pe buton<br>");
  div1.InnerText = "Salut, acum este ora " + DateTime.Now.ToLongTimeString();
}

	</script>
	<body>
		<form method="post" runat="server">
			<input type="text" id="text1" onserverchange="text1_Change" value="initial value" runat="server">
			<p>
				<input type="submit" id="button1" onserverclick="button1_Click" value="De apãsat" runat="server">
			<p>
				<div id="div1" runat="server" />
		</form>
	</body>
</html>
