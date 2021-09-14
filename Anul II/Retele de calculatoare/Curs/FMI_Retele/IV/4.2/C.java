// unitatea de compilare C.java
import java.rmi.*; import java.rmi.server.*;

public class C extends UnicastRemoteObject 
               implements I {
  private int val, nr_ordine;

  public C(int i,int nr) throws RemoteException { 
    val = i; nr_ordine = nr;
  }

  public void pune(int i) {
    val += i; System.out.println(nr_ordine + "\t: " + val);
  }

  public int curent() { return val; }
}
