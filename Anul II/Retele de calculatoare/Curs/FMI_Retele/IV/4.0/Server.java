// unitatea de compilare Server.java
import java.io.*; import java.net.*; import java.util.*;

public class Server {
  public static void main(String[] sir) throws Exception {
    Scanner sc = new Scanner(System.in);
    System.out.print("Portul : ");
    ServerSocket ss = new ServerSocket( sc.nextInt() );
    Socket cs = ss.accept();
    C Ob = new C(0);
    DataOutputStream dos = 
      new DataOutputStream(cs.getOutputStream());
    DataInputStream dis = 
      new DataInputStream(cs.getInputStream());
    String metoda; int incr = 0;

    do {
      metoda = dis.readUTF();
      if ( metoda.equals("pune") ) {
        incr = dis.readInt(); 
        Ob.pune(incr); 
        System.out.println("Clientul a pus " + incr + 
           ". Suma din cont este "+ Ob.curent());
      }
      else if ( metoda.equals("curent") ) {
        dos.writeInt( Ob.curent() ); break;
      }
      else System.out.println("Metoda inexistenta!");
    }
    while(true);
    dos.close(); dis.close(); cs.close(); ss.close();
  }
}
