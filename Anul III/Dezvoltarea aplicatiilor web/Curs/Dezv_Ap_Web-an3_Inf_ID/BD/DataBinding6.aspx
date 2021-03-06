<%@ Import namespace="System.Data.SqlClient" %>
<%@ Import namespace="System.Data.OleDb" %>
<%@ Import namespace="System.Data" %>
<HTML>
	<HEAD>
		<title>DataBinding6.aspx</title>
	</HEAD>
	<body>
		<a href="DataBinding6.aspx">
			<h3>
				<font face="Verdana">DataGrid</font>
			</h3>
		</a>
		<form runat="server">
			<asp:Label id="msg" runat="server" />
			<h3>
				DataGrid1:
			</h3>
			<asp:datagrid id="DataGrid1" DataSource="<%# GetSampleData() %>" autogeneratecolumns="false" 
			runat="server" Width="700" ItemStyle-BackColor="lightgreen" AlternatingItemStyle-BackColor="pink" 
			BorderColor="black" ShowFooter="false" CellPadding="3" CellSpacing="0" Font-Name="Verdana" 
			OnItemCommand="HandleCommands" DataKeyField="CategoryId"
			Font-Size="8pt" HeaderStyle-BackColor="#aaaadd">
			<COLUMNS>
					<asp:TemplateColumn HeaderText="Category Name">
						<ITEMTEMPLATE>
						  <asp:Button 
						  CommandName="MyCategoryButton" 
						  CommandArgument='<%#((DataRowView)Container.DataItem)["CategoryName"] + "_arg" %>' 
						  text='<%#((DataRowView)Container.DataItem)["CategoryName"]%>' runat="server" />
						  <br>
						  <asp:CheckBox OnCheckedChanged="MyCheckedChanged" runat='server' />
						 </ITEMTEMPLATE>
					</asp:TemplateColumn>
					<asp:TemplateColumn HeaderText="Category Description">
						<ITEMTEMPLATE>
							The description is:
							<%# ((DataRowView)Container.DataItem)["Description"] %>
						</ITEMTEMPLATE>
					</asp:TemplateColumn>
				</COLUMNS>
</asp:datagrid>
			<hr>
			<hr>
			<asp:Button id="button3" text="Do Nothing" onClick="DoNothing" runat="server" />
			<script language="c#" runat="server">

public void Page_Load(object s, EventArgs e) {
  msg.Text = "Page.IsPostBack = " + Page.IsPostBack;

  if (! Page.IsPostBack) {
    Page.DataBind();
  }
}

public void HandleCommands(object s, DataGridCommandEventArgs e) {
  Response.Write("HandleCommands: e.CommandName = " + e.CommandName + "<br>");
  Response.Write("HandleCommands: e.CommandSource = " + e.CommandSource + "<br>");
  Button b = (Button)e.CommandSource;
  Response.Write("HandleCommands: b.CommandArgument = " + b.CommandArgument + "<br>");
  DataGrid grid = (DataGrid)s;
  Response.Write("HandleCommands: ItemIndex = " + e.Item.ItemIndex + "<br>");
  Response.Write("HandleCommands: DataKey = " + grid.DataKeys[e.Item.ItemIndex] + "<br>");
}

public void MyCheckedChanged(object s, EventArgs e) {
  CheckBox cb = (CheckBox)s;
  DataGridItem dgi = (DataGridItem)cb.Parent.Parent;
  Response.Write("MyCheckedChanged: ItemIndex = " + dgi.ItemIndex + "<br>");
  Response.Write("MyCheckedChanged: DataKey = " + DataGrid1.DataKeys[dgi.ItemIndex] + "<br>");
  Response.Write("MyCheckedChanged: Checked = " + cb.Checked + "<br>");
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
		</form>
	</body>
</HTML>
