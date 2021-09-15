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
    static int i;
    string[] ts = { "alert('Bun\u0103 ziua1')", 
                    "var b=document.getElementById('doc');" +
                    "b.innerHTML=b.innerHTML+'<h1> Bun\u0103 ziua! </h1>'" }; 
    protected void Page_Load(object sender, EventArgs e)
    {
        HtmlInputButton b = new HtmlInputButton();
        HtmlGenericControl s = new HtmlGenericControl();
        b.Attributes.Add("value", "executa");
        b.Attributes.Add("onclick", "executa()"); // lucru pe client
        s.TagName = "script"; // se include un script in header
        s.Attributes.Add("type", "text/javascript");
        s.InnerHtml="function executa() {" + ts[i] + " }"; // al carui continut este modificat dinamic de server
        Form.Controls.Add(b);
        Header.Controls.Add(s);
        i = (++i) % ts.Length;
    }
    protected void Button1_Click(object sender, EventArgs e)
    {

    }
}
