import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

public class Popular_Merchandise {
    public static void main(String[] args) {
        Map<String,Integer> map = new HashMap<>();
        try(BufferedReader br = new BufferedReader(new FileReader("/Users/sanidhyagupta/Downloads/Java Concert Ticket System/items.csv"))){
            String line;
            while ((line = br.readLine()) != null){
                String[] str = line.split(",");
                for(String s : str){
                    s = s.trim();
                    map.put(s,map.getOrDefault(s,0)+1);
                }
            }
            map.entrySet().stream().
                    sorted((a,b)->b.getValue().compareTo(a.getValue()))
                    .limit(3)
                    .forEach(c-> System.out.println(c.getKey() + " :: " + c.getValue()));
        }catch (IOException e){
            System.out.println(e.getMessage());
        }
    }
}
