<%@ Page Language="C#" AutoEventWireup="true"  CodeFile="Default.aspx.cs" Inherits="_Default" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" >
<head runat="server">
    <title>Sistem Solar - varianta 4</title>
    <script type="text/javascript">
var cvit=<%=vitz%>;
var t;
var alpha = 0.0 ;  var beta = 1.0 ; 
var theta = 0.5 ; 
var gama = 1.75;
function f1() 							   
{								   
	alpha +=cvit*0.03/2; // mareste unghi				   
	alpha %= 2*Math.PI; // unghi ramane in intervalul [0,2pi)  
	x = 150*Math.cos(alpha) + 250; 				   
	y = 250*Math.sin(alpha) + 450;				   
	top.document.getElementById("p1").style.top = x + "px";
	top.document.getElementById("p1").style.left = y + "px";
								   
	theta +=cvit* 0.1/2; // mareste unghi				   
	theta %= 2*Math.PI; // unghi ramane in intervalul [0,2pi)  
	x += 65* Math.cos(theta)+40; 				   
	y += 65* Math.sin(theta)+40;				   
	top.document.getElementById("s1").style.top = x + "px";
	top.document.getElementById("s1").style.left = y + "px";
								   
	beta +=cvit* 0.02/2; // mareste unghi				   
	beta %= 2*Math.PI; // unghi ramane in intervalul [0,2pi)   
	x = 250*Math.cos(beta) + 250;				   
	y = 450*Math.sin(beta) + 450;				   
	top.document.getElementById("p2").style.top = x + "px";
	top.document.getElementById("p2").style.left = y + "px";
	
	if (top.document.getElementById("planeta").disabled)				   
	{
	 gama +=cvit* 0.01/2; // mareste unghi				   
	 gama %= 2*Math.PI; // unghi ramane in intervalul [0,2pi)   
	 x = 250*Math.cos(gama) + 250;				   
	 y = 550*Math.sin(gama) + 550;				   
	 top.document.getElementById("p3").style.top = x + "px";
	 top.document.getElementById("p3").style.left = y + "px";
	}
	t = setTimeout("f1()",10);				   
}								   
								   
function f() // functie apelata onclick la butonul start	   
{	
//	alert(cvit);						   
	top.document.getElementById("viteza").disabled = false ;   
	top.document.getElementById("buton1").disabled = true;   
	top.document.getElementById("buton2").disabled = false;  
	f1(); // apeleaza functia f care realizeaza animatia	   
}								   
								   
function f2() // functie apelata onclick la butonul stop	   
{								   
	top.document.getElementById("viteza").disabled = true ;   
	top.document.getElementById("buton1").disabled = false;  
	top.document.getElementById("buton2").disabled = true;   
	clearTimeout(t); // scoate timeoutul			   
}								
    </script>

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
