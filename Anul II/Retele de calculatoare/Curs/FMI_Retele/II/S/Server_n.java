// Unitatea de compilare Server_n.java
import java.io.*; import java.net.*; import java.util.*;

class Server_n {
  static int i=0;
  public static void main(String[] arg) throws IOException {
    ServerSocket ss = null; Socket cs = null;
    Scanner sc = new Scanner(System.in);
    System.out.print("Portul : ");
    ss = new ServerSocket( sc.nextInt() ); 
    System.out.println("Serverul a pornit");

    while (true) {
      cs = ss.accept(); 
      System.out.println("\nClient nou. ");
      new Conexiune(cs,++i);
    }
  }
}

class Conexiune extends Thread {
  int identitate; Socket cs = null; InputStream is = null;

  public Conexiune(Socket client, int i) 
      throws IOException {
    cs = client; identitate = i; is = cs.getInputStream();
    start();
  }

  public void run() {
    try {
      int cifra = is.read(); int n = is.read();
      System.out.println("Clientul " + identitate + 
                         " a transmis:");
      for (int k=0; k<n; k++) {
        sleep((int) (20*Math.random()) );
        System.out.print(" " + cifra);
      }
    }
    catch(Exception e) { }
  }
}
