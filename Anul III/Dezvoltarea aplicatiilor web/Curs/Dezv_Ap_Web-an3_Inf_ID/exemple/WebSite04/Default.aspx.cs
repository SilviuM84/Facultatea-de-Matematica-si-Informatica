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
    protected void Page_Load(object sender, EventArgs e)
    {

    }
    protected void Button1_Click(object sender, EventArgs e)
    {
        string t = ((Button)sender).Text; // varianta mai simpla
        // proprietatea .Text nu se poate indexa 
        // ((Button)sender).Text[0] este incorect
        if (t[0] != '*')
            { ((Button)sender).Text = "*"; return; }
        ((Button)sender).Text = t + "*";
    }
}
