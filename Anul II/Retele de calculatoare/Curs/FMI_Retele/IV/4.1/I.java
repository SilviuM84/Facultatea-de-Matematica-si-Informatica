import java.rmi.*;
public interface I extends Remote {
  public void pune(int i) throws RemoteException;
  public int curent() throws RemoteException;
}
