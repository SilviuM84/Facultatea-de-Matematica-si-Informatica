import java.io.*; 
import java.util.*;

class Unu {
  public static void main(String[] sir) throws Exception {
    int n; 
    Scanner sc = new Scanner(System.in);
    DataOutputStream dos = new DataOutputStream(
                           new FileOutputStream("out.dat"));
    System.out.println("n= "); n = sc.nextInt(); 

    dos.writeInt(n);
    System.out.println("Introduceti " +n+ " numere reale:");
    for(int i=0; i<n; i++) dos.writeDouble(sc.nextDouble());
    dos.close();
  }
}
