// unitatea de compilare I.java
import java.rmi.*;

public interface I extends Remote {
  void pune(int i) throws RemoteException;
  int curent() throws RemoteException;
}
