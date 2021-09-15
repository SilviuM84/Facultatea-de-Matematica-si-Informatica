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
    static Random r = new Random();
    static int cx, cy;
    static int iurl, iec;
    int[] tcx ={ 200, 320, 335, 360, 360, 360 };
    int[] tcy ={ 180, 220, 250, 220, 280, 320 };
    string[] tec = { "y=1.5*cy+70-x;"+
	                 "d.style.top=y+'px';"+
                     "x=x+pas; if(x>1.5*cx) x=0;",
                     "y=Math.floor(0.65*cy*(Math.sin(Math.PI*x/cx)+1)+70);"+
	                 " d.style.top=y+'px';"+
                     "x=x+pas; if(x>2*cx) x=0;",
                     "y=cy+70-Math.floor((pas/Math.abs(pas))*Math.sqrt(0.49*cx*cx-Math.pow(x-0.7*cx,2)));"+
	                 "d.style.top=y+'px';"+
                     "x=x+pas; if(x>1.4*cx || x<1) pas=-pas;"};
    string[] tim = { "w3c.GIF", "imag.jpg", "http://us.i1.yimg.com/us.yimg.com/i/ww/beta/y3.gif",
                    "http://www.google.com/intl/ro_ALL/images/logo.gif", "http://fmi.unibuc.ro/ro/img/gif/eng.gif" };

    protected void Page_Load(object sender, EventArgs e)
    {
        HtmlGenericControl s = new HtmlGenericControl();
        string ec;
        if (But.Value == "DA")
        {
            iurl = r.Next(tim.Length);
            iec = r.Next(tec.Length);
            But.Value = "NU";
        }
        else
        {
            int i = Int32.Parse(Opt.Value);
            cx = tcx[i];
            cy = tcy[i];
            Opt.Value = "0";
        }

        Im.ImageUrl = tim[iurl];
        ec = tec[iec];
        Mobil.Style["position"] = "absolute"; Mobil.Style["left"] = "1px";
        Mobil.Style["top"] = "70px";
        s.TagName = "script"; // se include un script in header
        s.Attributes.Add("type", "text/javascript");
        s.InnerHtml = "var x=1; var y; var pas=10;" +
                      "var cx=" + cx.ToString() + ";" +
                      "var cy=" + cy.ToString() + ";\n" +
                      "function init() {\n"+
                      "var o=document.getElementsByTagName('option');\n" +
                      "var i;\n for(i=0; i<o.length; i++) "+
                      "for(i=0; i<o.length; i++) o[i].onclick=modcoef;\n }\n" +
                      "function modcoef()"+
                      "{\n var h2=document.getElementById('Opt');\n"+
                      "var s=document.getElementById('Rezol');\n"+
                      "h2.value=s.selectedIndex;\n}\n"+
                      "function schimba()"+
                      "{\n var h1=document.getElementById('But');\n"+
                      "h1.value='DA';\n}\n"+
                      "function executa() {\n" +
                      "document.getElementById('b').disabled='disabled'; setInterval('anim();',100);\n}\n" +
                      "function anim () {var d=document.getElementById('Mobil');\n" +
                      "d.style.left=x+'px';\n" +
                       ec + "}"; // al carui continut este modificat dinamic de server

        Header.Controls.Add(s);
    }
        
    protected void Button1_Click(object sender, EventArgs e)
    {

    }
    protected void DropDownList1_SelectedIndexChanged(object sender, EventArgs e)
    {
       
    }
}
