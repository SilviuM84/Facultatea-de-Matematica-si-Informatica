<%@ Page language="c#" %>
<html>
<head>
<title>Static/Dinamic</title>
</head>
<script runat="server">

public void button1_Click (object sender, System.EventArgs e) 
{
}

</script>
<body>
<form method="post" runat="server">
RequiredFieldValidator
<asp:textbox id="text1" value="" runat="server" />
<asp:RequiredFieldValidator id="text1r" ControlToValidate="text1" Text="You must specify a value" runat="server" Display="Static" ErrorMessage="RequiredField" />
<asp:CompareValidator id="text1val" ControlToValidate="text1" Operator="DataTypeCheck" Type="Integer" Text="Must be integer" Display="Static" ErrorMessage="Integer" runat="server" />
<br />
<asp:Button id="button1" onClick="button1_Click" text="De apãsat" runat="server" />
<asp:ValidationSummary ID="valSum" runat="server" HeaderText="Error in the following field(s):" DisplayMode="SingleParagraph" />
</form>
</body>
</html>
