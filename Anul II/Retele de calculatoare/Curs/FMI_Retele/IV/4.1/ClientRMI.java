import java.rmi.*; import java.util.*;

public class ClientRMI {
  public static void main(String[] sir) 
                     throws RemoteException {
    int val; Scanner sc = new Scanner(System.in);
    System.out.print("Adresa server : ");
    String adresa = sc.next();
    I ref_Ob = null;
    try { 
      ref_Ob = (I) Naming.lookup("rmi://" + adresa + "/Ob");
    }
    catch(Exception e) {
      System.out.println("Conectare esuata");
      System.exit(0);
    }
    for ( ; ; ) {
      System.out.print("Valoare : ");
      val = sc.nextInt(); ref_Ob.pune(val);
      if (val==0) break;
    }
    System.out.println("Val. curenta este : " +
                       ref_Ob.curent() );
  }
}
