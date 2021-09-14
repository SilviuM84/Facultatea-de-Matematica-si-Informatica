// Unitatea de compilare Down_S.java
import java.io.*; import java.net.*; import java.util.*;

class Down_S {
  public static void main(String[] arg) throws IOException {
    Scanner sc = new Scanner(System.in); Socket cs = null;
    System.out.print("Port : ");
    ServerSocket ss = new ServerSocket( sc.nextInt() ); 
    System.out.println("Serverul a pornit");
    while (true) {
      cs = ss.accept(); 
      System.out.print("Client nou. Fisier cerut: ");
      new Conexiune(cs);
    }
  }
}

class Conexiune extends Thread {
  Socket cs = null;
  OutputStream os = null; DataInputStream dis = null;

  public Conexiune(Socket client) throws IOException {
    cs = client;
    dis = new DataInputStream(cs.getInputStream());
    os = cs.getOutputStream();
    start();
  }

  public void run() {
    String mesaj = null, fisier = null;
    try { 
      fisier = dis.readUTF(); System.out.println(fisier);
    }
    catch(IOException e) { }
    
    int c=1; FileInputStream f = null;
    try { f = new FileInputStream(fisier); }
    catch(FileNotFoundException e) { c = 0; }

    try {
      os.write(c);
      if( c==1 ) {
        while( (c = f.read()) != -1) os.write(c);
        f.close(); System.out.println("Fisier transmis!");
      }
      else { System.out.println("Fisier inexistent!"); }
      cs.close(); dis.close(); os.close();
    }
    catch(IOException e){ }
  }
}
