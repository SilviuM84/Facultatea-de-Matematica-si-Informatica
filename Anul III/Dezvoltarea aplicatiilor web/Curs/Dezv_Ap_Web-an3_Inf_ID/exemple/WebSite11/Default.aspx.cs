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
        // se creaza dinamic un nou control si script la client
        HtmlInputButton b = new HtmlInputButton();
        b.Value = "Incepe";
        Form.Controls.Add(b);
        b.Attributes.Add("onclick", "alert('test')"); // lucru pe client
    }
}
