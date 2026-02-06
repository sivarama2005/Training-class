import java.util.*;
import java.util.function.Consumer;

public class Ex6 {
    public static void main(String[] args) {
        List<Integer> numbers=Arrays.asList(1,2,3,4,5,6,7,8);

        Consumer<Integer> consumer=(value)->System.out.println(value);
        Consumer consumer1=System.out::println;

        System.out.println("Printing using consumer functional interface as lambda expression ");
        numbers.forEach(consumer);

        System.out.println("Printing using consumer function interface as method reference");
        numbers.forEach(consumer1);
    }
}