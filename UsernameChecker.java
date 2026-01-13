import java.util.Scanner;

public class UsernameChecker {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String str1 = sc.next();
        String str2 = sc.next();
        System.out.println("Length 1 : "+str1.length());
        System.out.println("Length 2 : "+str2.length());
        if(str1.length() == str2.length()){
            System.out.println("Lengths match: true");
        }else{
            System.out.println("Lengths match: false");
        }
        if(str1.equals(str2)){
            System.out.println("Strings match: true");
        }else{
            System.out.println("Strings match: false");
        }
    }
}