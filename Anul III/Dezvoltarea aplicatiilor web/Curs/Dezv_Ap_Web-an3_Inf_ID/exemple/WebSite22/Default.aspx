<%@ Page Language="C#" AutoEventWireup="true"  CodeFile="Default.aspx.cs" Inherits="_Default" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" >
<head runat="server">
    <title>Anima&#355;ie 5.1</title>
</head>
<body>
    <form id="form1" runat="server">
    <div>
        <asp:Button ID="Button1" runat="server" Text="Schimb&#259;" OnClientClick="schimba()" />&nbsp;&nbsp;
        <br />
        <input id="b" type="button" value="Execut&#259;" onclick="executa()"/><br />
        <asp:Panel ID="Mobil" runat="server" Height="100px" Width="100px">
            <asp:Image ID="Im" runat="server" ImageUrl="~/w3c.GIF" Width="100px" /></asp:Panel>
        <asp:HiddenField ID="But" runat="server" Value="NU" />
        &nbsp;
    </div>
    </form>
</body>
</html>
