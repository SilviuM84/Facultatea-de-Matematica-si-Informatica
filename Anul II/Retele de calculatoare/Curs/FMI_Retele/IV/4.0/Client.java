// unitatea de compilare Client.java
import java.util.*;

public class Client {
  public static void main(String[] sir) throws Exception {
    int val; ClientSocket CS = new ClientSocket();
    Scanner sc = new Scanner(System.in);
    for ( ; ; ) {
      System.out.print("Valoare : "); val = sc.nextInt();
      CS.pune(val); if (val==0) break;
    }
    System.out.println("Valoarea curenta = " + CS.curent());
    CS.terminare();
  }
}
