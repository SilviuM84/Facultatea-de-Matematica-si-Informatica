// Unitatea de compilare Chat_S.java
import java.net.*; import java.io.*; import java.util.*;

class Chat_S {
  public static void main(String[] sir) throws IOException {
    ServerSocket ss = null; Socket cs = null;
    Scanner sc = new Scanner(System.in);
    System.out.print("Portul : ");
    ss = new ServerSocket(sc.nextInt());
    sc.nextLine();
    System.out.println("Serverul a pornit !");

    cs = ss.accept();
    DataInputStream dis; DataOutputStream dos;
    dis = new DataInputStream(cs.getInputStream());
    dos = new DataOutputStream(cs.getOutputStream());

    String linie;
    for( ; ; ) {
      linie = dis.readUTF();
      System.out.println("Mesaj receptionat :\t" + linie);
      if( linie.equals("STOP") ) break;
      System.out.print("Mesaj de trimis :\t");
      linie = sc.nextLine(); 
      dos.writeUTF(linie);
    }
    cs.close(); dis.close(); dos.close();
  }
}
