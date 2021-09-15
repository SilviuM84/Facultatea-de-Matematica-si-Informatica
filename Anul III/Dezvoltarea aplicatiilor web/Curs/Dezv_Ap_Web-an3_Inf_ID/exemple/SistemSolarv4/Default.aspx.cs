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
    protected static int x1, x2, x3, y1, y2, y3, x4, y4;
    protected static HtmlButton b1 = new HtmlButton();
    protected static HtmlButton b2 = new HtmlButton();
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

    }


    protected void viteza_Click(object sender, EventArgs e)
    {
        vitz *= 2;
    }
    protected void planeta_Click(object sender, EventArgs e)
    {
        p3.Visible = true;
        x4 = Convert.ToInt32(250 * Math.Cos(gama) + 250);
        y4 = Convert.ToInt32(550 * Math.Sin(gama) + 550);
        p3.Attributes.Add("style", "position: absolute; top: " + x4.ToString() + "px; left: " + y4.ToString() + "px");
        planeta.Enabled = false;
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
        vitz = 2; 
        p3.Visible = false;
        planeta.Enabled = true;

    }
}
