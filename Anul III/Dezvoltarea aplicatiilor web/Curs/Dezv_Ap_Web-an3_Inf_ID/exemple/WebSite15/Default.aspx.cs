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
    Random r = new Random();
    string[] tec = { "y=470-x;"+
	                 " d.style.top=y+'px';"+
                     "x=x+pas; if(x>400) x=0;",
                     "y=Math.floor(100*Math.sin(x/90.)+270);"+
	                 " d.style.top=y+'px';"+
                     "x=x+pas; if(x>600) x=0;",
                     " y=270-Math.floor((pas/Math.abs(pas))*Math.sqrt(40000-Math.pow(x-200,2)));"+
	                 " d.style.top=y+'px';"+
                     "x=x+pas; if(x>400 || x<1) pas=-pas;"};
    string[] tim = { "w3c.GIF", "imag.jpg", "http://us.i1.yimg.com/us.yimg.com/i/ww/beta/y3.gif",
                    "http://www.google.com/intl/ro_ALL/images/logo.gif", "http://fmi.unibuc.ro/ro/img/gif/eng.gif" }; 
    protected void Page_Load(object sender, EventArgs e)
    {
        HtmlInputButton b = new HtmlInputButton();
        HtmlGenericControl s = new HtmlGenericControl();
        Panel p = new Panel();
        Image im = new Image();
        string ec;
        ec = tec[r.Next(tec.Length)];
        im.ImageUrl = tim[r.Next(tim.Length)];
        b.ID = "exec"; b.Value = "Execut\u0103";
        b.Attributes.Add("onclick", "executa()"); // lucru pe client
        p.ID = "mobil";
        p.Style["position"] = "absolute"; p.Style["left"] = "1px";
        p.Style["top"] = "70px";
        p.Height = 100; p.Width = 100;
        im.Width = p.Width;
        p.Controls.Add(im);
        s.TagName = "script"; // se include un script in header
        s.Attributes.Add("type", "text/javascript");
        s.InnerHtml = "var x=0; var y; var pas=10; " +
                      "function executa() { var b=document.getElementById('exec');" + 
                      "b.disabled='disabled'; setInterval('anim();',100);}" +
                      "function anim () {  var d=document.getElementById('mobil');" +
                       "d.style.left=x+'px';" +
                       ec + "}"; // al carui continut este modificat dinamic de server
        Form.Controls.Add(b);
        Header.Controls.Add(s);
        Controls.Add(p);

    }
}
