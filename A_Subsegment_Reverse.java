import java.util.*;
public class A_Subsegment_Reverse {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int l = sc.nextInt();
        int r = sc.nextInt();
        int[] arr = new int[n+1];
        for(int i=1; i<=n; i++) {
            arr[i] = i ;
        }
        int ptr1 = l;
        int ptr2 = r;
        while(ptr1 < ptr2) {
            int temp = arr[ptr1];
            arr[ptr1] = arr[ptr2];
            arr[ptr2] = temp;
            ptr1++;
            ptr2--;
        }
        for(int i=1; i<=n; i++) {
            System.out.print(arr[i] + " ");
        }

    }
}