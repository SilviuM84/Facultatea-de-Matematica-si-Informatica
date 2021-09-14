import java.io.*;

class Doi {
  public static void main(String[] ss) throws Exception {
    double d; int n;
    DataInputStream dis = new DataInputStream(
                          new FileInputStream("out.dat") );
    n = dis.readInt();
    for (int i=0; i<n; i++) 
      System.out.print(dis.readDouble() + "\t" );
    System.out.println(); dis.close();
  }
}
