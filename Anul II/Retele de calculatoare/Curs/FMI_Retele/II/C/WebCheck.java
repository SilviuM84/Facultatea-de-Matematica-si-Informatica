import java.util.*; import java.io.*; import java.net.*; 

public class WebCheck {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    System.out.print("Adresa: "); String adresa = sc.next(); 
    System.out.print("Portul: "); int port = sc.nextInt();
    String out = "Serverul "  + adresa;  
    try { 
      Socket web = new Socket(adresa,port); 
      out += " ofera servicii pe portul " + port; 
      web.close();
    }
    catch(IOException e) { 
      out += " nu ofera servicii pe portul " + port; 
    }
    System.out.println(out);
  }
}
