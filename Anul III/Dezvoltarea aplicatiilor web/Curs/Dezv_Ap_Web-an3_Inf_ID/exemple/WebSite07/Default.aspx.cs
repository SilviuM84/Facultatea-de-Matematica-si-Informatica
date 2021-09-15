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
        DropDownList1.Items.Add(TextBox1.Text);
        TextBox1.Text="";
    }
    protected void DropDownList1_SelectedIndexChanged(object sender, EventArgs e)
    {
        // functioneaza deoarece in faza de editare s-a setat DropDownList1.AutoPostBack=True
        HyperLink h=new HyperLink();
        h.Text = ((DropDownList)sender).SelectedItem.Text;
        h.NavigateUrl = h.Text;
        Form.Controls.Add(h);
    }
}
