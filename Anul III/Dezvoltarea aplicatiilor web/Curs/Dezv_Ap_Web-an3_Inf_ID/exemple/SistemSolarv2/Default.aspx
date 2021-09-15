<%@ Page Language="C#" AutoEventWireup="true"  CodeFile="Default.aspx.cs" Inherits="_Default" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" >
<head runat="server">
    <title>Sistem Solar - varianta 2</title>

</head>
<body>
    <form id="form1" runat="server">
    <div>
          <input id = "buton1" type = "button" value = "Start" onclick = "f()"/>
		  <input id = "buton2" type = "button" value = "Stop" onclick = "f2()"/>
        <asp:Button ID="viteza" runat="server" Text="Mareste viteza" Enabled="false" OnClick="viteza_Click" />
        <asp:Button ID="planeta" runat="server" Height="24px" OnClick="planeta_Click" Text="Adauga planeta"
            Width="112px" /><br />
        <br />
        <asp:Button ID="reset" runat="server" OnClick="reset_Click" Text="Reset" /><br />
        <br />
            &nbsp; &nbsp; &nbsp; &nbsp;
            <asp:Image ID="p1" runat="server" ImageUrl="~/imagini/p1.gif" />
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
            <asp:Image ID="s1" runat="server" ImageUrl="~/imagini/s1.gif" />&nbsp;
            <asp:Image ID="p2" runat="server" ImageUrl="~/imagini/p2.gif" />
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
            <asp:Image ID="soare" runat="server" ImageUrl="~/imagini/soare.gif" />
        &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;
            <asp:Image ID="p3" runat="server" ImageUrl="~/imagini/p3.gif" Visible="false" /><br />
    </div>
    </form>
</body>
</html>
