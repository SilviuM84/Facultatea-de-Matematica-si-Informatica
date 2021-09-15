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
    public static int poz = 0;
    public static int initial = 110;
    protected static int dim = 405;
    public static int pas = 20;
    protected static HtmlGenericControl control = new HtmlGenericControl();
    protected static HtmlTextArea t = new HtmlTextArea();

    protected void Page_Load(object sender, EventArgs e)
    {
        init();
        t.InnerHtml = "0";
        t.ID = "test"; 
        Controls.Add(t);
    }

    protected void init()
    {
        bara.Attributes.Add("style","position: absolute; top: 250px; left: 100px; z-index: 1;");
        slider.Attributes.Remove("style");
        slider.Attributes.Add("style", "left: " + Convert.ToString(poz + initial) + "px; position: absolute; top: 253px; z-index: 2;");
        st.Attributes.Add("style", "position: absolute; top: 251px; left: 56px;");
        dr.Attributes.Add("style", "position: absolute; top: 251px; left: 570px;");
    }
    protected void st_Click(object sender, ImageClickEventArgs e)
    {
        //testez pozitia pe care sunt
        if (poz > pas)
        //sunt departe de partea stanga, scad poz cu pas
            poz -= pas;
        else
        //sunt foarte aproape de partea stanga, setez poz la 0
            if (poz != 0)
                poz = 0;
        t.InnerHtml = Convert.ToString(poz / pas);
    }

    protected void dr_Click(object sender, ImageClickEventArgs e)
    {
        if (poz < dim - pas)
        //sunt departe de partea dreapta, cresc poz cu pas
            poz += pas;
        else
        //sunt foarte aproape de partea dreapta, setez poz la dim
            if (poz != dim)
                poz = dim;
        t.InnerHtml = Convert.ToString(poz / pas);
    }
}
