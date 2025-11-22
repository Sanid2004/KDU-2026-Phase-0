import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Scanner;


public class Ticket_Categories {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        ArrayList<String> list = new ArrayList<>();
        HashSet<String> set = new HashSet<>();
        HashMap<String,Integer> map = new HashMap<>();

        for(int i=0;i<10;i++){
            String str = sc.next();
            list.add(str);
            set.add(str);
            map.put(str,map.getOrDefault(str,0)+1);
        }

        System.out.println("ArrayList:" + list);
        System.out.println("HashSet:" + set);
        System.out.println("HashMap:"+map);
    }
}
