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

public void Page_Unload(object s, EventArgs e) 
{
  //Response.Write("In Page_Unload<br>"); // Produce eroare
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
    text1.Text = "abc";
  }
  Response.Write("In Page_Load, Page.IsPostBack = " + Page.IsPostBack + "<br>");
}

/// Se apeleaza dupa click pe buton daca schimbarea textului s-a efectuat
public void text1_TextChanged (object sender, System.EventArgs e) 
{
  Response.Write("In text1_TextChanged, text1.Text = " + text1.Text + "<br>");
}

public void checkbox1_CheckedChanged (object sender, System.EventArgs e) 
{
  Response.Write("In checkbox1_CheckedChanged, checkbox1.Checked = " + checkbox1.Checked + "<br>");
}

public void radio_CheckedChanged (object sender, System.EventArgs e) 
{
  RadioButton radio = (RadioButton)sender;
  Response.Write("In radio_CheckedChanged, " + radio.ID + ".Checked = " + radio.Checked + "<br>");
}

public void dropdown1_SelectedIndexChanged (object sender, System.EventArgs e) 
{
  Response.Write("In dropdown1_SelectedIndexChanged, dropdown1.SelectedItem.Text = " + dropdown1.SelectedItem.Text + "<br>");
}

public void listbox1_SelectedIndexChanged (object sender, System.EventArgs e) 
{
  Response.Write("In listbox1_SelectedIndexChanged, listbox1.SelectedItem.Text = " + listbox1.SelectedItem.Text + "<br>");
}

public void listbox2_SelectedIndexChanged (object sender, System.EventArgs e) 
{
  string s = "In listbox2_SelectedIndexChanged, listbox2.SelectedItems: ";
  foreach (ListItem li in listbox2.Items) 
  {
    if (li.Selected)
      s += li.Text + "(" + li.Value + ") ";
  }
  s += "<br>";
  Response.Write(s);
}

public void checkboxlist1_SelectedIndexChanged (object sender, System.EventArgs e) 
{
  string s = "In checkboxlist1_SelectedIndexChanged, checkboxlist1.SelectedItems: ";
  foreach (ListItem li in checkboxlist1.Items) 
  {
    if (li.Selected)
      s += li.Text + "(" + li.Value + ") ";
  }
  s += "<br>";
  Response.Write(s);
}

public void radiobuttonlist1_SelectedIndexChanged (object sender, System.EventArgs e) 
{
  Response.Write("In radiobuttonlist1_SelectedIndexChanged, radiobuttonlist1.SelectedItem.Text = " + radiobuttonlist1.SelectedItem.Text + "<br>");
}

// This button control event will be called when the button is clicked
public void button1_Click (object sender, System.EventArgs e) 
{
  Response.Write("In button1_Click, checkbox1.Checked = " + checkbox1.Checked + "<br>");
  label1.Text = "Salut, acum este ora " + DateTime.Now.ToLongTimeString();
}

	</script>
	<body>
		<form method="post" runat="server">
			<table>
				<tr>
					<td>
						<asp:textbox id="text1" onTextChanged="text1_TextChanged" value="iniþial" runat="server" />
						<p>
							<asp:checkbox id="checkbox1" onCheckedChanged="checkbox1_CheckedChanged" runat="server" />
						<p>
							<asp:radiobutton id="radio1" Groupname="radioGroup" onCheckedChanged="radio_CheckedChanged" runat="server" />
							<asp:radiobutton id="radio2" GroupName="radioGroup" onCheckedChanged="radio_CheckedChanged" runat="server" />
						<p>
							<asp:DropDownList id="dropdown1" onselectedIndexchanged="dropdown1_SelectedIndexChanged" runat="server">
								<asp:ListItem value="A">Valoare 1</asp:ListItem>
								<asp:ListItem value="B">Valoare 2</asp:ListItem>
								<asp:ListItem value="C">Valoare 3</asp:ListItem>
							</asp:DropDownList>
						<p>
							<asp:ListBox id="listbox1" Rows="4" onselectedIndexchanged="listbox1_SelectedIndexChanged" runat="server">
								<asp:ListItem value="A">Valoare 1</asp:ListItem>
								<asp:ListItem value="B">Valoare 2</asp:ListItem>
								<asp:ListItem value="C">Valoare 3</asp:ListItem>
								<asp:ListItem value="D">Valoare 4</asp:ListItem>
								<asp:ListItem value="E">Valoare 5</asp:ListItem>
								<asp:ListItem value="F">Valoare 6</asp:ListItem>
							</asp:ListBox>
						<p>
							<asp:ListBox id="listbox2" Rows="4" SelectionMode="Multiple" onselectedIndexchanged="listbox2_SelectedIndexChanged" runat="server">
								<asp:ListItem value="A">Valoare 1</asp:ListItem>
								<asp:ListItem value="B">Valoare 2</asp:ListItem>
								<asp:ListItem value="C">Valoare 3</asp:ListItem>
								<asp:ListItem value="D">Valoare 4</asp:ListItem>
								<asp:ListItem value="E">Valoare 5</asp:ListItem>
								<asp:ListItem value="F">Valoare 6</asp:ListItem>
							</asp:ListBox>
						<p>
					</td>
					<td>
						<asp:CheckBoxList id="checkboxlist1" onselectedIndexchanged="checkboxlist1_SelectedIndexChanged" runat="server">
							<asp:ListItem value="A">Element 1</asp:ListItem>
							<asp:ListItem value="B">Element 2</asp:ListItem>
							<asp:ListItem value="C">Element 3</asp:ListItem>
							<asp:ListItem value="D">Element 4</asp:ListItem>
							<asp:ListItem value="E">Element 5</asp:ListItem>
						</asp:CheckBoxList>
						<p>
							<asp:RadioButtonList id="radiobuttonlist1" onselectedIndexchanged="radiobuttonlist1_SelectedIndexChanged" runat="server">
								<asp:ListItem value="A">Element 1</asp:ListItem>
								<asp:ListItem value="B">Element 2</asp:ListItem>
								<asp:ListItem value="C">Element 3</asp:ListItem>
								<asp:ListItem value="D">Element 4</asp:ListItem>
								<asp:ListItem value="E">Element 5</asp:ListItem>
							</asp:RadioButtonList>
					</td>
				</tr>
			</table>
			<p>
				<asp:Button id="button1" onClick="button1_Click" text="De apãsat" runat="server" />
			<p>
				<asp:Label id="label1" runat="server" />
		</form>
	</body>
</html>
