// Unitatea de compilare Proiect_C.java
import java.io.*; import java.net.*; 
import java.awt.*; import java.awt.event.*;

class Proiect_C {
  public static void main(String[] sss) throws Exception {
    Test t = new Test(); 
    t.setSize(400,100); t.setVisible(true);
    while(t.open) Thread.sleep(10);
    Socket cs = new Socket("localhost",5555);
    OutputStream os = cs.getOutputStream();
    ObjectOutputStream oos = new ObjectOutputStream(os);
    oos.writeObject(t); System.out.println("Gata");
    t.dispose(); os.close(); oos.close(); cs.close();
  }
}
