// Unitatea de compilare Test.java
import java.io.*; import java.awt.*; import java.awt.event.*;

class Test extends Frame {
  // implements Serializable este implicit
  boolean open=true;
  Choice ch; List lista; Label et; TextField tf; Button b;
  Test() { 
    setLayout(new FlowLayout());
    ch=new Choice();
    ch.addItem("Unu"); ch.addItem("Doi"); ch.addItem("Trei");
    lista=new List(0,true);
    lista.add("1"); lista.add("2"); lista.add("3");
    et = new Label("Nume"); tf =new TextField("      "); 
    b = new Button("O.K.");
    add(et); add(tf); add(ch); add(lista); add(b);
    Handler H = new Handler(this); b.addActionListener(H);
  }
}

class Handler implements ActionListener,Serializable {
  // Handlerele trebuie sa implementeze explicit Serializable;
  // altfel actiunea asupra butonului este fara efect
  Test t;
  Handler(Test t) { this.t = t; }
  public void actionPerformed(ActionEvent e) { t.open=false; }
}
