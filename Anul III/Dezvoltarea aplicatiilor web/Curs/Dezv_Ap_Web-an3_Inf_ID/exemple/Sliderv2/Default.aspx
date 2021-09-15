<%@ Page Language="C#" AutoEventWireup="true"  CodeFile="Default.aspx.cs" Inherits="_Default" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" >
<head runat="server">
    <title>Slider</title>
        <script type="text/javascript">
    mouse=false
  
    function form1_onmousedown(e)
    {
        var targ
        if (!e) var e = window.event
        if (e.target) targ = e.target
        else if (e.srcElement) targ = e.srcElement
        if (targ.nodeType == 3) // defeat Safari bug
        targ = targ.parentNode
        var tname
        tname=targ.id
        if (tname == "slider")
            mouse = true;
    }

    function move(e) // functie care misca sliderul in functie de pozita mousului
	{
	    if (mouse&& (e.button == 1) ) 
	    {
	        if ((e.clientX>=(410))&&(e.clientX<=(820))) // daca coordonata pe x a mousului se afla intre marginile sliderului
	        {
	            document.getElementById("slider").style.left= e.clientX+"px"; // actualizeaza imaginea
	            s = document.getElementById("slider").style.left; 
                s = s.slice(0,s.length - 2); 
                i = s - <%=initial %> ; 
                j = i % <%=pas %> ; 
                i = i - j; i = i / <%=pas %> ; 
                document.getElementById("test").innerHTML = i ;
	        }
	        return false ;
	    }
	}

    function mouseup() 
    {
        mouse=false; // actualizare semafor
    }	
    </script>
</head>
<body>
    <form id="form1" runat="server" onmousedown="return form1_onmousedown(event)" onmouseup="mouseup()" onmousemove="move(event)">
    <div>
        &nbsp;
        <asp:ImageButton ID="st" runat="server" OnClick="st_Click" ImageUrl="~/imagini/left.jpg" />
        <asp:Image ID="bara" runat="server" ImageUrl="~/imagini/bara.jpg" />
        &nbsp;&nbsp; &nbsp;
        <asp:ImageButton ID="dr" runat="server" OnClick="dr_Click" ImageUrl="~/imagini/right.jpg" />&nbsp;
        <asp:ImageButton ID="slider" runat="server" ImageUrl="~/imagini/slider.gif" /></div>
    </form>
</body>
</html>
