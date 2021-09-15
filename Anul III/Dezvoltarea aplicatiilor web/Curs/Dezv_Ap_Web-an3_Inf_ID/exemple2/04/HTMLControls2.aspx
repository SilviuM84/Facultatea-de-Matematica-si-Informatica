<%@ Page language="c#" %>
<html>
	<head>
		<title>HTMLControls2.aspx</title>
	</head>
	<script runat="server">

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

// Se apeleaza dupa click pe buton daca schimbarea controlului s-a efectuat
public void text1_Change (object sender, System.EventArgs e) 
{
  Response.Write("In text1_Change, text1.Value = " + text1.Value + "<br>");
}

public void checkbox1_Change (object sender, System.EventArgs e) 
{
  Response.Write("In checkbox1_Change, checkbox1.Checked = " + checkbox1.Checked + "<br>");
}

public void radio_Change (object sender, System.EventArgs e) 
{
  HtmlInputRadioButton radio = (HtmlInputRadioButton)sender;
  Response.Write("In radio_Change, " + radio.ID + ".Checked = " + radio.Checked + "<br>");
}

public void select1_Change (object sender, System.EventArgs e) 
{
  Response.Write("In select1_Change, select1.Value = " + select1.Value + "<br>");
}

// Se apeleaza dupa click pe buton
public void button1_Click (object sender, System.EventArgs e) 
{
  Response.Write("In button1_Click, checkbox1.Checked = " + checkbox1.Checked + "<br>");
  div1.InnerText = "Salut, acum este ora " + DateTime.Now.ToLongTimeString();
}

	</script>
	<body>
		<form method="post" runat="server">
			<input type="text" id="text1" onserverchange="text1_Change" value="initial value" runat="server">
			<p>
				<input type="checkbox" id="checkbox1" onserverchange="checkbox1_Change" runat="server">
			<p>
				<input type="radio" id="radio1" name="radioGroup" onserverchange="radio_Change" runat="server">
				<input type="radio" id="radio2" name="radioGroup" onserverchange="radio_Change" runat="server">
			<p>
				<select id="select1" onserverchange="select1_Change" runat="server">
					<option value="A">
						Value 1</option>
					<option value="B">
						Value 2</option>
					<option value="C">
						Value 3</option>
				</select>
			<p>
				<input type="submit" id="button1" onserverclick="button1_Click" value="De apãsat" runat="server">
			<p>
				<div id="div1" runat="server" />
		</form>
	</body>
</html>
