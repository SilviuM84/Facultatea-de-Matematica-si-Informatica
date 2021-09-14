// Unitatea de compilare Down_C.java
import java.io.*;  import java.net.*; import java.util.*;

class Down_C {
  public static void main(String[] sir) throws IOException {
    Scanner sc = new Scanner(System.in);
    System.out.print("Adresa server si port : "); 

    Socket cs = null;
    try {
      cs = new Socket( sc.next(), sc.nextInt() );
    }
    catch(Exception e) {
      System.out.println("Conectare esuata"); 
      System.exit(0);
    }

    InputStream is = cs.getInputStream();
    DataOutputStream dos = 
      new DataOutputStream(cs.getOutputStream());

    System.out.print("Fisier cerut: "); 
    String fisier = sc.next();  dos.writeUTF(fisier); 

    int c = is.read();
    if( c==0 ) { 
      System.out.println("Fisier inexistent");
      System.exit(0); 
    };

    OutputStream fis = new FileOutputStream("Down.doc");
    while( (c=is.read()) != -1) {
      System.out.print("" + (char) c); fis.write(c); 
      System.out.print(c);
    }
    System.out.println();
    System.out.println("\nFisier primit!");
    fis.close(); is.close(); dos.close(); cs.close();
  }
}
