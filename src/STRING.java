import java.util.Scanner;

//import java.util.Scanner;
//public class STRING {
//    public static void main(String args[]) {
//        Scanner sc = new Scanner(System.in);
//
//        System.out.print("Please enter the number of strings you want to enter: ");
//        //takes an integer input
//        String[] string = new String[sc.nextInt()];
////consuming the <enter> from input above
//
//        sc.nextLine();
//
//
//        for (int i = 0; i < string.length; i++) {
//            string[i] = sc.nextLine();
//        }
//
//        System.out.println("\nYou have entered: ");
////for-each loop to print the string
//        for (String str : string) {
//            System.out.println(str);
//        }
//    }
//}
//
//
public class STRING {
    public static void main(String args[]) {
        String str;
        Scanner scan = new Scanner(System.in);

        System.out.println("Enter the string ");
        str = scan.nextLine();

       // System.out.println(" " + str);
        System.out.println("Enter the number " );
        str = scan.nextLine();

        for (int i=0; i<4; i++)
        {
            //String repeated = new String(new char[4]).replace("\0", str);
            //System.out.println(repeated);

        }

    }
}