using System;
using System.Data;
using System.Configuration;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using System.Web.UI.HtmlControls;
using System.Data.OleDb;

public partial class _Default : System.Web.UI.Page 
{
    protected static string[] intrebari;
    //vector cu intrebari
    protected static string[] rasp_a;
    //vector cu varianta a
    protected static string[] rasp_b;
    //vector cu varianta b
    protected static string[] rasp_c;
    //vector cu varianta c
    protected static string[] rasp;
    //vector cu raspunsurile corecte
    protected static int nr_i = 20;
    //nr de intrebari
    protected static int[] gresit;
    //vector cu intrebarile la care s-a raspuns gresit
    protected static int n_g = 0;
    //nr de greseli facute
    protected static int n = 0;
    //nr intrebarii actuale

    protected void Page_Load(object sender, EventArgs e)
    {
        if (!Page.IsPostBack)
        {
            init();
            afis();
        }
    }

    protected void init()
    {
        //intializez variabilele
        intrebari = new string[nr_i];
        rasp_a = new string[nr_i];
        rasp_b = new string[nr_i];
        rasp_c = new string[nr_i];
        rasp = new string[nr_i];
        n = 0;
        n_g = 0;
        gresit = new int[nr_i];
        a.Visible = true;
        b.Visible = true;
        c.Visible = true;
        OK.Visible = true;
        OK.Enabled = true;
        vad.Visible = false;
        raspc.Text = "";
        //generez aleator nr_i numere
        int[] vrand = new int[nr_i];
        Random rand = new Random();
        string sir = "(";
        int i = 0;
        while (i < nr_i)
        {
            vrand[i] = Convert.ToInt32(rand.Next(60)) + 1;
            int ok = 1;
            for (int j = 0; j < i; j++)
                if (vrand[j] == vrand[i])
                    ok = 0;
            if (ok == 1) i++;
        }
        for (i = 0; i < nr_i - 1; i++)
            sir += vrand[i].ToString() + ", ";
        sir += vrand[nr_i - 1].ToString() + ")";
        conectare(sir);
    }

    protected void afis()
    {
        //afisez pe pagina intrebarea curenta
        Intr.Text = Convert.ToString(n+1) + ". " + intrebari[n];
        Ra.Text = "a. " + rasp_a[n];
        Rb.Text = "b. " + rasp_b[n];
        Rc.Text = "c. " + rasp_c[n];
    }

    protected void termin()
    {
        //am ajuns la sfarsit, resetez continutul labelurilor si ascund butoanele
        Ra.Text = "";
        a.Visible = false;
        Rb.Text = "";
        b.Visible = false;
        Rc.Text = "";
        c.Visible = false;
        OK.Visible = false;
        OK.Enabled = false;
        //verific cate intrebari a gresit
        if (n_g == 0)
        {
            Intr.Text = "Felicitari! Ati raspuns corect la toate intrebarile!";
            vad.Visible = true;
            vad.Text = "Reset";
            vad.Width = 70;
        }
        else
        {
            Intr.Text = "Ati gresit " + Convert.ToString(n_g) + " intrebari din " + Convert.ToString(nr_i);
            vad.Visible = true;
            vad.Text = "Vad raspunsuri gresite";
            vad.Width = 200;
            n_g--;
        }
    }

    protected void OK_Click(object sender, EventArgs e)
    {
        string r = "";
        //in r obtin raspunsul
        if (a.Checked) r += "a";
        if (b.Checked) r += "b";
        if (c.Checked) r += "c";
        //resetez butoanele radio
        a.Checked = false;
        b.Checked = false;
        c.Checked = false;
        if (r.CompareTo(rasp[n].Trim()) != 0)
        //daca raspunsul nu este corect
        {
            gresit[n_g] = n;
            n_g++;
        }
        if (n < nr_i - 1)
        //mai am de pus intrebari
        {
            n++;
            afis();
            //actualizez labeluri-le cu noua intrebare
        }
        else
            termin();
    }
    protected void vad_Click(object sender, EventArgs e)
    {
        if (vad.Text.CompareTo("Reset") == 0)
        {
            init();
            afis();
        }
        else
        {
            if (n_g == -1)
            {
                Intr.Text = "S-au terminat intrebarile gresite";
                Ra.Text = "";
                Rb.Text = "";
                Rc.Text = "";
                raspc.Text = "";
                vad.Text = "Reset";
                vad.Width = 70;
            }
            else
            {
                vad.Text = "Precedenta";
                vad.Width = 120;
                Intr.Text = Convert.ToString(gresit[n_g] + 1) + ". " + intrebari[gresit[n_g]];
                Ra.Text = "a. " + rasp_a[gresit[n_g]];
                Rb.Text = "b. " + rasp_b[gresit[n_g]];
                Rc.Text = "c. " + rasp_c[gresit[n_g]];
                raspc.Text = "Raspuns corect: " + rasp[gresit[n_g]];
                n_g--;
            }
        }
    }

    protected void conectare(string x)
    {
        //ma conectez la baza de date ca sa extrag intrebarile
        OleDbConnection conn = null;
        OleDbDataReader reader = null;
        try
        {
            conn = new OleDbConnection(
                "Provider=Microsoft.Jet.OLEDB.4.0; " +
                "Data Source=" + Server.MapPath("Baza/Chestionare.mdb"));
            conn.Open();

            string sir = "Select * FROM Intrebare WHERE cod IN " + Convert.ToString(x);
            OleDbCommand cmd = new OleDbCommand(sir, conn);
            reader = cmd.ExecuteReader();
            //intializez vectorii intrebari, rasp_a, rasp_b, rasp_c
            for(int i = 0; i<nr_i; i++)
                if (reader.Read())
                {
                    intrebari[i] = reader.GetString(reader.GetOrdinal("intrebare"));
                    rasp_a[i] = reader.GetString(reader.GetOrdinal("a"));
                    rasp_b[i] = reader.GetString(reader.GetOrdinal("b"));
                    rasp_c[i] = reader.GetString(reader.GetOrdinal("c"));
                    rasp[i] = reader.GetString(reader.GetOrdinal("r"));
                }
        }
        finally
        {
            if (reader != null) reader.Close();
            if (conn != null) conn.Close();
        }
    }
    protected void b_CheckedChanged(object sender, EventArgs e)
    {

    }
}
