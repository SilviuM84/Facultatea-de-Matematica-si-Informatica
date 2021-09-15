<%@ Page Language="C#" AutoEventWireup="true"  CodeFile="Default.aspx.cs" Inherits="_Default" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" >
<head runat="server">
    <title>Teste Grila</title>
</head>
<body bgcolor = "black"">
    <form id="form1" runat="server" style ="background-image:  'back.jpg'; background-repeat: repeat">
    <div>
        &nbsp; &nbsp; &nbsp;&nbsp;
        <asp:Button ID="vad" runat="server" OnClick="vad_Click" Width="70px" /><br />
        <br />
        &nbsp; &nbsp; &nbsp;&nbsp;
        <asp:Label ID="Intr" runat="server" Font-Bold="True" ForeColor="SteelBlue" font-size="Large"></asp:Label><br />
        &nbsp;
        <br />
        <asp:CheckBox ID="a" runat="server" Height="1px" Width="9px" />
        <asp:Label ID="Ra" runat="server" ForeColor="LightSkyBlue"></asp:Label><br />
        <asp:CheckBox ID="b" runat="server" Height="1px" Width="15px" />&nbsp;<asp:Label ID="Rb" runat="server" ForeColor="LightSkyBlue"></asp:Label>
        &nbsp;<br />
        <asp:CheckBox ID="c" runat="server" Width="19px" />
        <asp:Label ID="Rc" runat="server" ForeColor="LightSkyBlue"></asp:Label>
        <br />
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;<br />
        <br />
        &nbsp; &nbsp; &nbsp;<asp:Label ID="raspc" runat="server" EnableTheming="True" ForeColor="SteelBlue"></asp:Label>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<br />
        <br />
        &nbsp; &nbsp; &nbsp;<asp:Button ID="OK" runat="server" OnClick="OK_Click" Text="OK" />&nbsp;
        <br />
        <br />
    </div>
    </form>
</body>
</html>
