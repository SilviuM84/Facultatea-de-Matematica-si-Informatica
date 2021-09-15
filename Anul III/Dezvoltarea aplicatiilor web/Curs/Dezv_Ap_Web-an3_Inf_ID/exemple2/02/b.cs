using System;
using System.Web.UI;
using System.Web.UI.HtmlControls;

public class MyCodeBehind : Page {

    public HtmlGenericControl   MySpan;

    public MyCodeBehind() {
           MySpan = new HtmlGenericControl("span");
           MySpan.InnerHtml = "Salut, lume !"; 
           Controls.Add(MySpan);
    }
}
