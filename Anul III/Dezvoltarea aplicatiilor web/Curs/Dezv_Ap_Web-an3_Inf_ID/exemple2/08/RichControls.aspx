<%@ Page language="c#" %>
<html>

<head>
  <title>WebControls1.aspx</title>
</head>

<script runat="server">

public void Page_Init(object s, EventArgs e) 
{
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
  }
  Response.Write("In Page_Load, Page.IsPostBack = " + Page.IsPostBack + "<br>");
}

public void Page_Unload(object s, EventArgs e) 
{
    //  Response.Write("In Page_Unload<br>");  // Produce eroare
}

public void calendar1_OnSelectionChanged (object sender, System.EventArgs e) 
{
  Response.Write("In calendar1_OnSelectionChanged, calendar1.SelectedDate = " + calendar1.SelectedDate + "<br>");
}

// Se apeleaza dupa click pe buton daca schimbarea textului s-a efectuat
public void button1_Click (object sender, System.EventArgs e) 
{
  Response.Write("In button1_Click<br>");
  label1.Text = "Salut, acum este ora " + DateTime.Now.ToLongTimeString();
}

</script>

<body>

<form method="post" runat="server">

<asp:calendar id=calendar1 onselectionchanged="calendar1_OnSelectionChanged" runat="server" />
<p>
<asp:Button id=button1 onClick="button1_Click" text="De apãsat" runat="server" />
<p>
<asp:Label id="label1" runat="server" />

</form>

</body>
</html>


