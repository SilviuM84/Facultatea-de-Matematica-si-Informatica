using System;
using System.Data;
using System.Configuration;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using System.Web.UI.HtmlControls;

public partial class _Default : System.Web.UI.Page 
{
    protected static double alpha = 0.0;
    protected static double beta = 1.0;
    protected static double theta = 0.5;
    protected static double gama = 1.75;
    protected static int vitz = 2;
    protected static HtmlGenericControl control = new HtmlGenericControl();
    protected static int x1, x2, x3, y1, y2, y3, x4, y4;
    protected static HtmlButton b1 = new HtmlButton();
    protected static HtmlButton b2 = new HtmlButton();
    protected string sir = " \n var t; \n var alpha = 0.0 ; \n var beta = 1.0 ; \n var theta = 0.5 ;" +
                        "\n	function f1() 							   " +
                        "\n	{								   " +
                        "\n		alpha += " + vitz + "*0.03/2; // mareste unghi				   " +
                        "\n		alpha %= 2*Math.PI; // unghi ramane in intervalul [0,2pi)  " +
                        "\n		x = 150*Math.cos(alpha) + 250; 				   " +
                        "\n		y = 250*Math.sin(alpha) + 450;				   " +
                        "\n		top.document.getElementById(\"p1\").style.top = x + \"px\";" +
                        "\n		top.document.getElementById(\"p1\").style.left = y + \"px\";" +
                        "\n									   " +
                        "\n		theta +=" + vitz + "* 0.1/2; // mareste unghi				   " +
                        "\n		theta %= 2*Math.PI; // unghi ramane in intervalul [0,2pi)  " +
                        "\n		x += 65* Math.cos(theta)+40; 				   " +
                        "\n		y += 65* Math.sin(theta)+40;				   " +
                        "\n		top.document.getElementById(\"s1\").style.top = x + \"px\";" +
                        "\n		top.document.getElementById(\"s1\").style.left = y + \"px\";" +
                        "\n									   " +
                        "\n		beta +=" + vitz + "* 0.01/2; // mareste unghi				   " +
                        "\n		beta %= 2*Math.PI; // unghi ramane in intervalul [0,2pi)   " +
                        "\n		x = 250*Math.cos(beta) + 250;				   " +
                        "\n		y = 450*Math.sin(beta) + 450;				   " +
                        "\n		top.document.getElementById(\"p2\").style.top = x + \"px\";" +
                        "\n		top.document.getElementById(\"p2\").style.left = y + \"px\";" +
                        "\n		t = setTimeout(\"f1()\",10);				   " +
                        "\n	}								   " +
                        "\n									   " +
                        "\n	function f() // functie apelata onclick la butonul start	   " +
                        "\n	{								   " +
                        "\n     top.document.getElementById(\"viteza\").disabled = false ;   " +
                        "\n		top.document.getElementById(\"buton1\").disabled = true;   " +
                        "\n		top.document.getElementById(\"buton2\").disabled = false;  " +
                        "\n		f1(); // apeleaza functia f care realizeaza animatia	   " +
                        "\n	}								   " +
                        "\n									   " +
                        "\n	function f2() // functie apelata onclick la butonul stop	   " +
                        "\n	{								   " +
                        "\n     top.document.getElementById(\"viteza\").disabled = true ;   " +
                        "\n		top.document.getElementById(\"buton1\").disabled = false;  " +
                        "\n		top.document.getElementById(\"buton2\").disabled = true;   " +
                        "\n		clearTimeout(t); // scoate timeoutul			   " +
                        "\n	}								   ";
    protected string sir1 = " \n var t; \n var alpha = 0.0 ; \n var beta = 1.0 ; \n var theta = 0.5 ; \n var gama = 1.75;" +
                        "\n	function f1() 							   " +
                        "\n	{								   " +
                        "\n		alpha += " + vitz + "*0.03/2; // mareste unghi				   " +
                        "\n		alpha %= 2*Math.PI; // unghi ramane in intervalul [0,2pi)  " +
                        "\n		x = 150*Math.cos(alpha) + 250; 				   " +
                        "\n		y = 250*Math.sin(alpha) + 450;				   " +
                        "\n		top.document.getElementById(\"p1\").style.top = x + \"px\";" +
                        "\n		top.document.getElementById(\"p1\").style.left = y + \"px\";" +
                        "\n									   " +
                        "\n		theta +=" + vitz + "* 0.1/2; // mareste unghi				   " +
                        "\n		theta %= 2*Math.PI; // unghi ramane in intervalul [0,2pi)  " +
                        "\n		x += 65* Math.cos(theta)+40; 				   " +
                        "\n		y += 65* Math.sin(theta)+40;				   " +
                        "\n		top.document.getElementById(\"s1\").style.top = x + \"px\";" +
                        "\n		top.document.getElementById(\"s1\").style.left = y + \"px\";" +
                        "\n									   " +
                        "\n		beta +=" + vitz + "* 0.02/2; // mareste unghi				   " +
                        "\n		beta %= 2*Math.PI; // unghi ramane in intervalul [0,2pi)   " +
                        "\n		x = 250*Math.cos(beta) + 250;				   " +
                        "\n		y = 450*Math.sin(beta) + 450;				   " +
                        "\n		top.document.getElementById(\"p2\").style.top = x + \"px\";" +
                        "\n		top.document.getElementById(\"p2\").style.left = y + \"px\";" +
                        "\n									   " +
                        "\n		gama +=" + vitz + "* 0.01/2; // mareste unghi				   " +
                        "\n		gama %= 2*Math.PI; // unghi ramane in intervalul [0,2pi)   " +
                        "\n		x = 250*Math.cos(gama) + 250;				   " +
                        "\n		y = 550*Math.sin(gama) + 550;				   " +
                        "\n		top.document.getElementById(\"p3\").style.top = x + \"px\";" +
                        "\n		top.document.getElementById(\"p3\").style.left = y + \"px\";" +
                        "\n		t = setTimeout(\"f1()\",10);				   " +
                        "\n	}								   " +
                        "\n									   " +
                        "\n	function f() // functie apelata onclick la butonul start	   " +
                        "\n	{								   " +
                        "\n     top.document.getElementById(\"viteza\").disabled = false ;   " +
                        "\n		top.document.getElementById(\"buton1\").disabled = true;   " +
                        "\n		top.document.getElementById(\"buton2\").disabled = false;  " +
                        "\n		f1(); // apeleaza functia f care realizeaza animatia	   " +
                        "\n	}								   " +
                        "\n									   " +
                        "\n	function f2() // functie apelata onclick la butonul stop	   " +
                        "\n	{								   " +
                        "\n     top.document.getElementById(\"viteza\").disabled = true ;   " +
                        "\n		top.document.getElementById(\"buton1\").disabled = false;  " +
                        "\n		top.document.getElementById(\"buton2\").disabled = true;   " +
                        "\n		clearTimeout(t); // scoate timeoutul			   " +
                        "\n	}								   ";
    protected string sir2 = " \n var t; \n var alpha = 0.0 ; \n var beta = 1.0 ; \n var theta = 0.5 ; \n " +
                        "\n	function f1() 							   " +
                        "\n	{								   " +
                        "\n		alpha += 0.03/2; // mareste unghi				   " +
                        "\n		alpha %= 2*Math.PI; // unghi ramane in intervalul [0,2pi)  " +
                        "\n		x = 150*Math.cos(alpha) + 250; 				   " +
                        "\n		y = 250*Math.sin(alpha) + 450;				   " +
                        "\n		top.document.getElementById(\"p1\").style.top = x + \"px\";" +
                        "\n		top.document.getElementById(\"p1\").style.left = y + \"px\";" +
                        "\n									   " +
                        "\n		theta +=0.1/2; // mareste unghi				   " +
                        "\n		theta %= 2*Math.PI; // unghi ramane in intervalul [0,2pi)  " +
                        "\n		x += 65* Math.cos(theta)+40; 				   " +
                        "\n		y += 65* Math.sin(theta)+40;				   " +
                        "\n		top.document.getElementById(\"s1\").style.top = x + \"px\";" +
                        "\n		top.document.getElementById(\"s1\").style.left = y + \"px\";" +
                        "\n									   " +
                        "\n		beta += 0.02/2; // mareste unghi				   " +
                        "\n		beta %= 2*Math.PI; // unghi ramane in intervalul [0,2pi)   " +
                        "\n		x = 250*Math.cos(beta) + 250;				   " +
                        "\n		y = 450*Math.sin(beta) + 450;				   " +
                        "\n		top.document.getElementById(\"p2\").style.top = x + \"px\";" +
                        "\n		top.document.getElementById(\"p2\").style.left = y + \"px\";" +
                        "\n									   " +
                        "\n		t = setTimeout(\"f1()\",10);				   " +
                        "\n	}								   " +
                        "\n									   " +
                        "\n	function f() // functie apelata onclick la butonul start	   " +
                        "\n	{								   " +
                        "\n     top.document.getElementById(\"viteza\").disabled = false ;   " +
                        "\n		top.document.getElementById(\"buton1\").disabled = true;   " +
                        "\n		top.document.getElementById(\"buton2\").disabled = false;  " +
                        "\n		f1(); // apeleaza functia f care realizeaza animatia	   " +
                        "\n	}								   " +
                        "\n									   " +
                        "\n	function f2() // functie apelata onclick la butonul stop	   " +
                        "\n	{								   " +
                        "\n     top.document.getElementById(\"viteza\").disabled = true ;   " +
                        "\n		top.document.getElementById(\"buton1\").disabled = false;  " +
                        "\n		top.document.getElementById(\"buton2\").disabled = true;   " +
                        "\n		clearTimeout(t); // scoate timeoutul			   " +
                        "\n	}								   ";


    protected void Page_Load(object sender, EventArgs e)
    {
        if (!IsPostBack)
        {
            soare.Attributes.Add("style", "position: absolute; top: 250px; left: 450px");
            x1 = Convert.ToInt32(150 * Math.Cos(alpha) + 250);
            y1 = Convert.ToInt32(250 * Math.Sin(alpha) + 450);
            x3 = Convert.ToInt32(x1 + 65 * Math.Cos(theta) + 40);
            y3 = Convert.ToInt32(y1 + 65 * Math.Sin(theta) + 40);
            x2 = Convert.ToInt32(250 * Math.Cos(beta) + 250);
            y2 = Convert.ToInt32(450 * Math.Sin(beta) + 450);
            //intializare pamant
            p1.Attributes.Add("style", "position: absolute; top: " + x1.ToString() + "px; left: " + y1.ToString() + "px");
            //intializare saturn
            p2.Attributes.Add("style", "position: absolute; top: " + x2.ToString() + "px; left: " + y2.ToString() + "px");
            //intializare luna
            s1.Attributes.Add("style", "position: absolute; top: " + x3.ToString() + "px; left: " + y3.ToString() + "px");
        }

        control.TagName = "script";
        control.Attributes.Add("type", "text/javascript");
        control.InnerHtml = sir2 ;

        Header.Controls.Add(control);

    }


    protected void viteza_Click(object sender, EventArgs e)
    {
        vitz *= 2;

        Header.Controls.Remove(control);

        control.TagName = "script"; // se include un script in header
        control.Attributes.Add("type", "text/javascript");
        if (planeta.Enabled == false)
            control.InnerHtml = sir1;
        else control.InnerHtml = sir; 

        Header.Controls.Add(control);

    }
    protected void planeta_Click(object sender, EventArgs e)
    {
        p3.Visible = true;
        x4 = Convert.ToInt32(250 * Math.Cos(gama) + 250);
        y4 = Convert.ToInt32(550 * Math.Sin(gama) + 550);
        p3.Attributes.Add("style", "position: absolute; top: " + x4.ToString() + "px; left: " + y4.ToString() + "px");
        planeta.Enabled = false;

        Header.Controls.Remove(control);

        control.TagName = "script"; // se include un script in header
        control.Attributes.Add("type", "text/javascript");
        control.InnerHtml = sir1 ;

        Header.Controls.Add(control);

    }
    protected void reset_Click(object sender, EventArgs e)
    {
        soare.Attributes.Add("style", "position: absolute; top: 250px; left: 450px");
        x1 = Convert.ToInt32(150 * Math.Cos(alpha) + 250);
        y1 = Convert.ToInt32(250 * Math.Sin(alpha) + 450);
        x3 = Convert.ToInt32(x1 + 65 * Math.Cos(theta) + 40);
        y3 = Convert.ToInt32(y1 + 65 * Math.Sin(theta) + 40);
        x2 = Convert.ToInt32(250 * Math.Cos(beta) + 250);
        y2 = Convert.ToInt32(450 * Math.Sin(beta) + 450);
        //intializare pamant
        p1.Attributes.Add("style", "position: absolute; top: " + x1.ToString() + "px; left: " + y1.ToString() + "px");
        //intializare saturn
        p2.Attributes.Add("style", "position: absolute; top: " + x2.ToString() + "px; left: " + y2.ToString() + "px");
        //intializare luna
        s1.Attributes.Add("style", "position: absolute; top: " + x3.ToString() + "px; left: " + y3.ToString() + "px");

        Header.Controls.Remove(control);

        vitz = 2; 

        control.TagName = "script";
        control.Attributes.Add("type", "text/javascript");
        control.InnerHtml = sir2 ;

        Header.Controls.Add(control);

        p3.Visible = false;
        planeta.Enabled = true;

    }
}
