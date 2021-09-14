// Unitatea de compilare Chat_C.java
import java.net.*; import java.io.*; import java.util.*;

class Chat_C {
  public static void main(String[] sir) throws IOException {
    Scanner sc = new Scanner(System.in);
    System.out.print("Adresa serverului si portul :");
    String adresa = sc.next(); int port = sc.nextInt();
    sc.nextLine();

    Socket cs = null;
    try { cs = new Socket(adresa,port); }
    catch(Exception e) { 
      System.out.println("Conexiune esuata"); 
      System.exit(1); 
    }

    DataInputStream dis; DataOutputStream dos;
    dis = new DataInputStream(cs.getInputStream());
    dos = new DataOutputStream(cs.getOutputStream());

    String linie;
    for( ; ; ) { 
      System.out.print("Mesaj de trimis : \t");
      linie = sc.nextLine(); dos.writeUTF(linie);
      if( linie.equals("STOP") ) break;
      linie = dis.readUTF();
      System.out.println("Mesaj receptionat :\t" + linie);
    }
    System.out.println("GATA"); 
    cs.close(); dis.close(); dos.close();
  }
}
