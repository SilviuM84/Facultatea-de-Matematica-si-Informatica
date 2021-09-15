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
        HtmlInputButton b = new HtmlInputButton();
        HtmlGenericControl s = new HtmlGenericControl();
        b.Value = "Incepe";
        Form.Controls.Add(b);
        b.Attributes.Add("onclick", "test()"); // lucru pe client
        s.TagName = "script"; // se include un script in header
        s.InnerHtml=" function test() { alert('test' ) } ";
        s.Attributes.Add("type", "text/javascript");
        Header.Controls.Add(s);
    }
}
