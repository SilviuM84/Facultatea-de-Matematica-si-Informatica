import java.io.*;

class Print {
  public static void main(String[] args) throws IOException {
    FileOutputStream fos = new FileOutputStream("out");
    PrintWriter out = new PrintWriter(fos);
    PrintWriter stdout = new PrintWriter(System.out);
    out.println("Cifrele zecimale sunt:");
    for(int i=0; i<10; i++) out.print(i + "\t");
    out.println();
    stdout.println("Cifrele zecimale sunt:");
    for(int i=0; i<10; i++) stdout.print(i + "\t");
    stdout.println();
    out.close(); // stdout.close();
  }
}
