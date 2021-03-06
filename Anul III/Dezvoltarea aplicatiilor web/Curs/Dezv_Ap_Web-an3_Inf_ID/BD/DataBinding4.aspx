<%@ Page Language="c#" %>
<%@ import Namespace="System.Data.SqlClient" %>
<%@ Import namespace="System.Data.OleDb" %>
<%@ import Namespace="System.Data" %>
<script runat="server">

    public void Page_Load(object s, EventArgs e) {
       msg.Text = "Page.IsPostBack = " + Page.IsPostBack;
    
       if (! Page.IsPostBack) {
         Page.DataBind();
       }
    }
    
    DataView m_cachedDV;
    
    DataView GetSampleData() { 
       if (m_cachedDV == null) {
         DataSet ds;
         OleDbConnection cxn = new OleDbConnection("Provider=Microsoft.JET.OLEDB.4.0; Data Source=c:\\Northwind.mdb");
         OleDbDataAdapter adp = new OleDbDataAdapter("select CategoryID, CategoryName, Description from Categories", cxn);
         ds = new DataSet();
         adp.Fill(ds, "Categories");
         m_cachedDV = ds.Tables["Categories"].DefaultView;
       }
       return m_cachedDV;
       //return null;
    }
    
    // Don't do anything: demonstrates that state is maintained
    public void DoNothing(object sender, System.EventArgs e) {
    }

</script>
<html>
<head>
    <title>DataBinding4.aspx</title>
</head>
<body>
    <a href="DataBinding4.aspx"> 
    <h3><font face="Verdana">DataGrid</font> 
    </h3>
    </a> 
    <form runat="server">
        <asp:Label id="msg" runat="server"></asp:Label>
        <hr />
        <h3>DataGrid1: 
        </h3>
        <asp:DataGrid id="DataGrid1" runat="server" DataSource="<%# GetSampleData() %>"></asp:DataGrid>
        <hr />
        <h3>DataGrid2: 
        </h3>
        <asp:DataGrid id="DataGrid2" runat="server" DataSource="<%# GetSampleData() %>" EnableViewState="False" Width="700" BackColor="#ccccff" BorderColor="black" ShowFooter="false" CellPadding="3" CellSpacing="0" Font-Name="Verdana" Font-Size="8pt" HeaderStyle-BackColor="#aaaadd"></asp:DataGrid>
        <hr />
        <h3>DataGrid3: 
        </h3>
        <asp:datagrid id="DataGrid3" runat="server" DataSource="<%# GetSampleData() %>" Width="700" BackColor="#ccccff" BorderColor="black" ShowFooter="false" CellPadding="3" CellSpacing="0" Font-Name="Verdana" Font-Size="8pt" HeaderStyle-BackColor="#aaaadd" autogeneratecolumns="false" AlternatingItemStyle-BackColor="Moccasin">
            <COLUMNS>
                <asp:BoundColumn DataField="CategoryName" HeaderText="Category Name"></asp:BoundColumn>
                <asp:BoundColumn DataField="description" HeaderText="Category Description"></asp:BoundColumn>
            </COLUMNS>
        </asp:datagrid>
        <hr />
        <asp:Button id="button3" onclick="DoNothing" runat="server" text="Do Nothing"></asp:Button>
    </form>
</body>
</html>
