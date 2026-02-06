import java.util.*;
import java.util.stream.*;

public class Ex9 {

    public static void main(String[] args) {
        List<String> list=Arrays.asList("Java","Python","c++");
        Stream<String> stream1=list.stream();

        String[] arr={"ksr sarma","99220040904","CSE"};
        Stream<String> stream2=Arrays.stream(arr);

        Stream<Integer> stream3=Stream.of(1,2,3,4,5);

        Stream<Integer> stream4=Stream.iterate(1, n->n+1).limit(5);
        stream1.forEach(System.out::println);
        stream2.forEach(System.out::println);
        stream3.forEach(System.out::println);
        stream4.forEach(System.out::println);
    }
}