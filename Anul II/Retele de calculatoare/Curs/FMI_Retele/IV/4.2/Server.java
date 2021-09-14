// unitatea de compilare Server.java
import java.rmi.*; import java.rmi.registry.*;

public class Server {
  public static void main(String[] args) throws Exception {
    Generator Ob = new Generator();  
    Naming.rebind("rmi:///Ob",Ob);
    System.out.println("Serverul s-a legat la" +
                       " registrul RMI");
  }
}
