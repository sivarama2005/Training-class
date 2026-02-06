
interface add{
    int addition(int a,int b);
}

public class Lam{
    public static void main(String[] args) {
        add a1=(a,b)->a+b;
        int result=a1.addition(10,20);
        System.out.println("output: "+result);
    }
}