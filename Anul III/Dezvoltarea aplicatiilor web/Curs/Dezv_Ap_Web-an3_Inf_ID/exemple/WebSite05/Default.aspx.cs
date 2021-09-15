using System;
using System.Collections; // contine clasa Stack
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
    
    static Stack  bts=new Stack(); // stocheaza controalele create dinamic
    protected void Page_Load(object sender, EventArgs e)
    {

    }
    protected void Button1_Click(object sender, EventArgs e)
    {
      Button b=new Button();
      int i=bts.Count;
      if (i == 0)  b.Text = "*"; 
      else  b.Text = ((Button)(bts.Peek())).Text + "*"; 
      bts.Push(b);
      foreach (Control c in Controls) // cautarea formularului
                                      // e bine, dar complicat 
                                      // varianta mai simpla in  WebSite06
          if (c is HtmlForm) // identificarea formularului
             {foreach(Button d in bts) c.Controls.Add(d); break;}
      
    }
}
