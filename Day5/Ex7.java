import java.util.*;
import java.util.function.Supplier;

public class Ex7{
    public static void main(String[] args){
        Supplier<Integer> supplier=()->(int)(Math.random()*10);

        List<Integer> randomNumbers=new ArrayList<>();

        for(int i=0;i<100;i++){
            randomNumbers.add(supplier.get());
        }
        System.out.println(randomNumbers);
    }
}