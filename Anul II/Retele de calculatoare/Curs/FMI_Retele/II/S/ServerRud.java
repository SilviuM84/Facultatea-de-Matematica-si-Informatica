import java.net.*; import java.util.*;
import java.io.*;

class ServerRud {
  public static void main(String[] abc) throws IOException {
    Scanner sc = new Scanner(System.in);
    System.out.println("Portul : ");
    ServerSocket ss = new ServerSocket( sc.nextInt() );
    while (true) {
      ss.accept(); 
      System.out.println("S-a conectat un nou client");
    }
  }
}
