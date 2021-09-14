// Unitatea de compilare Proiect_S.java
import java.io.*; import java.util.*; import java.net.*;
import java.awt.*; import java.awt.event.*;

class Proiect_S {
  public static void main(String[] sss) throws Exception {
    int n=0; Scanner sc = new Scanner(System.in);
    System.out.print("n= "); n = sc.nextInt();
    ServerSocket ss = new ServerSocket(5555); 
    Socket cs = null; C Ob = new C();
    for (int i=0; i<n; i++) {
      cs = ss.accept(); new Conexiune(cs,Ob);
    };
    ss.close();
  }
}

class Conexiune extends Thread {
  C Ob; Socket cs;
  Conexiune(Socket cs,C Ob) throws Exception {
    this.Ob = Ob; this.cs = cs;  start();
  }

  public void run() {
    try {
      InputStream is = cs.getInputStream();
      ObjectInputStream ois = new ObjectInputStream(is);
      Test t = (Test) ois.readObject(); t.open=true; 
      t.setSize(400,100); t.setVisible(true);  Ob.scrie(t);
      try { while(t.open) Thread.sleep(10); }
      catch(InterruptedException ie) { }
      t.dispose();
      cs.close(); is.close(); ois.close(); 
    }
    catch(IOException e) { }
    catch(ClassNotFoundException e) { }
  }
}

class C {
  synchronized void scrie(Test t) {
    System.out.println("NUME: "+t.tf.getText());
    String s = t.ch.getSelectedItem();
    System.out.println("Choice:"+s); System.out.print("List: ");
    String[] slista = t.lista.getSelectedItems();
    for (int i=0; i<slista.length; i++) 
      System.out.print("\t"+slista[i]);
    System.out.println("\n*********");
  }
}
