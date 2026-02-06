
interface fun{
    int operation(int a,int b,int c);
}

public class Ex4 {
    public static void main(String[] args) {
        fun f1=(a,b,c)->a+b+c;
        fun f2=(a,b,c)->a-b-c;
        fun f3=(a,b,c)->a*b*c;
        fun f4=(a,b,c)->a/b/c;
        System.out.println("Addition: "+f1.operation(10,5,5));
        System.out.println("subtraction: "+f2.operation(10,5,2));
        System.out.println("Multiplication: "+f3.operation(10,5,2));
        System.out.println("Division : "+f4.operation(10,5,2));
    }
}
