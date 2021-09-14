import java.net.*;
class Adrese {
  public static void main(String[] args) {
    try {
      System.out.println(InetAddress.getLocalHost());
    }
    catch(UnknownHostException e) {
      System.out.println("Gazda nu are adresa IP");
    }
  }
}
