// unitatea de compilare Generator.java
import java.rmi.*; 
import java.rmi.server.*;

public class Generator extends UnicastRemoteObject 
                       implements I_Generator {
  static int contor;
  Generator() throws RemoteException {}
	
  public I server_propriu() throws  Exception {
    return new C(0,contor++);
  }
}
