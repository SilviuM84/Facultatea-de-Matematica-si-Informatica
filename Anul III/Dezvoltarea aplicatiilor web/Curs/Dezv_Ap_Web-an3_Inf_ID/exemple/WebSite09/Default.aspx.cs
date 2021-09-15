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
        Button1.OnClientClick = "alert('" + TextBox1.Text + "')"; // cu un pas in urma
        // deoarece se executa mai intai script pe client, apoi este preluat de server
        // textul editat de utilizator in pagina afisata de browser
    }
}
