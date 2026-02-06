import java.util.*;
import java.util.function.Predicate;

public class Ex5{
    public static void main(String[] args) {
        List<Integer> numbers=Arrays.asList(1,2,3,4,5,6,7,8);

        Predicate<Integer> isEvenNumber=n->n%2==0;
        numbers=numbers.stream().filter(isEvenNumber).toList();
        System.out.println(numbers);
    }
}