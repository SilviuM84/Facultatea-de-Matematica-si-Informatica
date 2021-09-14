//  unitatea de compilare ClientSocket.java
import java.io.*; import java.util.*; import java.net.*;

public class ClientSocket implements I {
  Socket cs; DataOutputStream dos; DataInputStream dis;

  ClientSocket() throws IOException {
    System.out.print("Adresa server si portul : ");
    Scanner sc = new Scanner(System.in);
    try { 
      cs = new Socket( sc.next(), sc.nextInt() ); 
    }
    catch(Exception e) {
      System.out.println("Conectare esuata");
      System.exit(0); 
    }
    dos = new DataOutputStream(cs.getOutputStream());
    dis = new DataInputStream(cs.getInputStream());
  }

  public void pune(int i) {
    try { dos.writeUTF("pune"); dos.writeInt(i); }
    catch(IOException e) { }
  }

  public int curent() {
    int k = 9999;
    try { dos.writeUTF("curent"); k = dis.readInt(); }
    catch(IOException e) { }
    return k;
  }

  public void terminare() throws IOException {
    dos.close(); dis.close(); cs.close(); 
  }
}
